import { redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/public';

const DEBUG_MODE = env.PUBLIC_DEBUG_MODE === 'true';

export async function load({ url, fetch }) {
  if (DEBUG_MODE) {
    return {
      flow: {
        ui: {
          nodes: [
            {
              attributes: {
                name: 'identifier',
                type: 'text',
                required: true,
                value: '',
                label: 'Email or Username',
                placeholder: 'Enter your email or username'
              },
              messages: [],
              group: 'default',
              type: 'input'
            },
            {
              attributes: {
                name: 'password',
                type: 'password',
                required: true,
                value: '',
                label: 'Password',
                placeholder: 'Enter your password'
              },
              messages: [],
              group: 'default',
              type: 'input'
            }
          ],
          messages: [],
          action: `${env.PUBLIC_BASE_URL}/self-service/login?flow=debug`
        }
      }
    };
  }

  const flowId = url.searchParams.get('flow');

  // If no login flow currently exists, we start a new one
  if (!flowId) {
    const res = await fetch(`${env.PUBLIC_BASE_URL}/self-service/login/browser`, {
      redirect: 'manual',
      credentials: 'include'
    });

    const redirectionTarget = res.headers.get('location');
    redirect(303, redirectionTarget || '/login');
  }

  // If there is a login flow, we retrieve metadata to build the form on the UI
  const flowDataResponse = await fetch(`${env.PUBLIC_BASE_URL}/self-service/login/flows?id=${flowId}`, {
    credentials: 'include'
  });

  // If an error occured, start over
  if (!flowDataResponse.ok) {
    redirect(303, '/login');
  }

  const flow = await flowDataResponse.json();
  return { flow };
}
