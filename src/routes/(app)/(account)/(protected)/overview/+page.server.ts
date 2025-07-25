import { createLogger } from '$lib/server/logging';

export const load = async ({ locals, url }) => {
  const logger = createLogger(url.pathname);

  const session = locals.session;
  logger.debug({ session: session.id }, 'Returning user info');
  return {
    firstName: session.identity.traits.name.first,
    verified: session.identity.verifiable_addresses?.[0]?.verified ?? false,
    lastLogin: session.authenticated_at
  };
};
