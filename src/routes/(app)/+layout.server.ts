import { redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/public';

const DEBUG_MODE = env.PUBLIC_DEBUG_MODE === 'true';

const COOKIE_NAME = 'ory_kratos_session';

export function load({ cookies, url }) {
  if (DEBUG_MODE) {
    return {};
  }

  const sessionCookie = cookies.get(COOKIE_NAME);
  if (!sessionCookie) {
    redirect(303, `/login?redirectTo=${url.pathname}`);
  }
}
