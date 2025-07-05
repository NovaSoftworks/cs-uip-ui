import { redirect } from '@sveltejs/kit';

const DEBUG_MODE = false;

export function load({ cookies, url }) {
  if (!DEBUG_MODE) {
    if (cookies.get('session')) {
      console.log('Session cookie found:', cookies.get('session'));
    } else {
      console.log('No session cookie found, redirecting to /login');
      redirect(303, `/login?redirectTo=${url.pathname}`);
    }
  } else {
    console.log('DEBUG_MODE is enabled, skipping session check');
  }
}
