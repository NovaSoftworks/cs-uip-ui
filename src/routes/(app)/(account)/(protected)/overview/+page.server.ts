import { getIdentityById } from '$lib/server/kratos/admin.js';
import { createLogger } from '$lib/server/logging';

export const load = async ({ locals, url }) => {
  const logger = createLogger(url.pathname);

  const session = locals.session;

  const fullIdentity = await getIdentityById(session.identity.id);
  const passwordDetails: any = fullIdentity?.credentials?.password ?? {};

  logger.debug({ session: session.id }, 'Returning user info');
  return {
    firstName: session.identity.traits.name.first,
    isVerified: session.identity.verifiable_addresses?.[0]?.verified ?? false,
    passwordLastUpdateTime: passwordDetails?.updated_at,
    lastLoginTime: session.authenticated_at,
    accountCreationTime: session.identity.created_at,
    session
  };
};
