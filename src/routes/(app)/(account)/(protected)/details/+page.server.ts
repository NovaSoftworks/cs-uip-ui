import { createLogger } from '$lib/server/logging';

import { anonymizeEmail, anonymize } from '$lib/server/privacy';

const logger = createLogger('/details');

export const load = async ({ locals, url, fetch }) => {
  const session = locals.session;
  return {
    user: {
      traits: [
        {
          name: 'traits.email',
          value: anonymizeEmail(session.identity.traits.email)
        },
        {
          name: 'computed.name',
          value: `${session.identity.traits.name.first} ${anonymize(session.identity.traits.name.last)}`
        }
      ]
    }
  };
};
