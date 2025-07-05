import { redirect } from '@sveltejs/kit';

const DEBUG_MODE = false;
const COOKIE_NAME = 'ory_kratos_session';

export function load({ cookies, url }) {
  if (!DEBUG_MODE) {
    if (cookies.get(COOKIE_NAME)) {
      console.log('Session cookie found:', cookies.get(COOKIE_NAME));
    } else {
      console.log('No session cookie found, redirecting to /login');
      redirect(303, `/login?redirectTo=${url.pathname}`);
    }
  } else {
    console.log('DEBUG_MODE is enabled, skipping session check');
  }
}
