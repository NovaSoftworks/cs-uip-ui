import { redirect } from '@sveltejs/kit';
import { BASE_URL, IS_OFFLINE } from '$lib/config';
import { createLogger } from '$lib/server/logging';

import { anonymizeEmail, anonymize } from '$lib/server/privacy';
import { formatDate, formatHttpResponse } from '$lib/formatting';

const COOKIE_NAME = 'ory_kratos_session';

export const load = async ({ cookies, fetch, url }) => {
  const logger = createLogger(url.pathname);

  if (IS_OFFLINE) {
    logger.debug('Returning sample user data');
    return {
      email: anonymizeEmail('john.silver@novamail.com'),
      name: {
        first: 'John',
        last: anonymize('Silver')
      },
      verified: true,
      lastLogin: formatDate('2025-07-06T21:03:00Z')
    };
  }

  const sessionCookie = cookies.get(COOKIE_NAME);
  logger.debug({ session: sessionCookie }, 'Fetching session metadata');
  const res = await fetch(`${BASE_URL}/sessions/whoami`, {
    headers: {
      Cookie: `${COOKIE_NAME}=${sessionCookie}`
    },
    credentials: 'include'
  });

  if (!res.ok) {
    logger.warn(
      {
        session: sessionCookie,
        response: await formatHttpResponse(res)
      },
      `Failed to retrieve session info - redirecting to /login`
    );
    redirect(303, '/login');
  }

  const session = await res.json();
  logger.debug({ session: sessionCookie }, 'Returning user session');
  return {
    email: anonymizeEmail(session.identity.traits.email),
    name: {
      first: session.identity.traits.name.first,
      last: anonymize(session.identity.traits.name.last)
    },
    verified: session.identity.verifiable_addresses?.[0]?.verified ?? false,
    lastLogin: formatDate(session.authenticated_at)
  };
};
