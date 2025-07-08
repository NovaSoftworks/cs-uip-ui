import { redirect } from '@sveltejs/kit';
import { createLogger } from '$lib/server/logging';
import { IS_OFFLINE } from '$lib/config/env.js';

const COOKIE_NAME = 'ory_kratos_session';

export const load = ({ cookies, url }) => {
  const logger = createLogger(url.pathname);

  if (IS_OFFLINE) {
    return {};
  }

  const sessionCookie = cookies.get(COOKIE_NAME);
  if (!sessionCookie) {
    logger.debug('Session cookie not found - redirecting to /login');
    redirect(303, `/login?redirectTo=${url.pathname}`);
  }
};
