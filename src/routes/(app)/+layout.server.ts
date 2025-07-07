import { redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/public';

const DEBUG_MODE = env.PUBLIC_DEBUG_MODE === 'true';

const COOKIE_NAME = 'ory_kratos_session';

export function load({ cookies, url }) {
  if (DEBUG_MODE) {
    console.log('DEBUG_MODE is enabled, skipping session check');
    return {
      message: 'Debug mode is enabled, skipping session check.'
    };
  }

  const sessionCookie = cookies.get(COOKIE_NAME);
  if (sessionCookie) {
    console.log('Session cookie found:', sessionCookie);
  } else {
    console.log('No session cookie found, redirecting to /login');
    redirect(303, `/login?redirectTo=${url.pathname}`);
  }
}
