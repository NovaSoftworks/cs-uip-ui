import { formatHttpResponse } from '$lib/formatting';
import { BASE_URL, IS_OFFLINE } from '$lib/server/config';
import { createLogger } from '$lib/server/logging';
import { type Handle, redirect, type RequestEvent } from '@sveltejs/kit';

const SESSION_COOKE_NAME = 'ory_kratos_session';

export const handle: Handle = async ({ event, resolve }) => {
  const pathname = event.url.pathname;
  const isPublic = !event.route.id || event.route.id?.startsWith('/(public)');
  const logger = createLogger(pathname);
  if (IS_OFFLINE) {
    return await resolve(event);
  }

  if (isPublic) {
    return await resolve(event);
  }

  await authenticateSession(event, logger);

  return await resolve(event);
};

/**
 * Authenticates the current user session based on the session cookie.
 *
 * This function checks for the presence of a session cookie in the incoming request.
 * If the cookie is missing or the session is invalid/inactive, it redirects the user to the login page,
 * preserving the original pathname for post-login redirection.
 * If the session is valid, it attaches the session information to `event.locals.session`.
 *
 * @param event - The request event object containing URL, cookies, and locals.
 * @param logger - A logger instance used for debug and warning messages.
 * @throws Redirects to the login page if the session is missing, invalid, or inactive.
 */
const authenticateSession = async (event: RequestEvent, logger: any) => {
  const pathname = event.url.pathname;
  const sessionCookie = event.cookies.get(SESSION_COOKE_NAME);

  if (!sessionCookie) {
    logger.debug('Session cookie not found - redirecting to /login');
    redirect(303, '/login');
  }

  logger.debug('Fetching session info');
  const response = await fetch(`${BASE_URL}/sessions/whoami`, {
    headers: {
      Cookie: `${SESSION_COOKE_NAME}=${sessionCookie}`
    },
    credentials: 'include'
  });

  if (!response.ok) {
    logger.warn(
      {
        details: await formatHttpResponse(response)
      },
      `Failed to retrieve session info - redirecting to /login`
    );
    redirect(303, '/login');
  }

  const session = await response.json();
  const isNewLogin = !event.locals.session;
  event.locals.session = session;

  if (isNewLogin) {
    logger.info({ session: event.locals.session.id }, 'Login successful');
  }
  logger.debug({ session: event.locals.session.id }, 'Session retrieved successfully');

  if (!event.locals.session.active) {
    logger.debug('Session is inactive - redirecting to /login');
    redirect(303, '/login');
  }
};
