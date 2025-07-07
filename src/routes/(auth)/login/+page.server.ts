import { redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/public';

export async function load({ url, fetch }) {
  console.log(`Base url: ${env.PUBLIC_BASE_URL}`);
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
  console.log(flow);
  return { flow };
}
