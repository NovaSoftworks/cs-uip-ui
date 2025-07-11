import { IS_OFFLINE } from '$lib/config';
import { createLogger } from '$lib/server/logging';

import { anonymizeEmail, anonymize } from '$lib/server/privacy';

import { user as offlineUser } from '$lib/server/offline-data/user';

export const load = async ({ locals, url }) => {
  const logger = createLogger(url.pathname);

  if (IS_OFFLINE) {
    logger.debug('Returning sample user data');
    return { user: offlineUser };
  }

  const session = locals.session;
  logger.debug({ session: session.id }, 'Returning user info');
  return {
    user: {
      email: anonymizeEmail(session.identity.traits.email),
      name: {
        first: session.identity.traits.name.first,
        last: anonymize(session.identity.traits.name.last)
      },
      verified: session.identity.verifiable_addresses?.[0]?.verified ?? false,
      lastLogin: session.authenticated_at
    }
  };
};
