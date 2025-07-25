import { redirect } from '@sveltejs/kit';
import { BASE_URL, IS_OFFLINE } from '$lib/server/config';
import { createLogger } from '$lib/server/logging';

import { response_200 as offlineData } from '$lib/server/offline-data/kratos/settings';
import { httpResponseToString } from '$lib/formatting';

const logger = createLogger('/details/edit');

export const load = async ({ locals, url, fetch }) => {
  if (IS_OFFLINE) {
    logger.debug('Returning sample settings flow metadata');
    return {
      flow: offlineData
    };
  }

  const session = locals.session;
  logger.debug({ session: session.id }, 'Search parameters: %s', url.searchParams.toString());
  const flowId = url.searchParams.get('flow');

  if (!flowId) {
    const redirectTo = `${BASE_URL}/self-service/settings/browser`;
    logger.debug({ session: session.id }, 'Starting settings flow - redirecting to %s', redirectTo);
    redirect(303, redirectTo);
  }

  logger.debug({ session: session.id, parameters: flowId }, 'Fetching settings flow metadata');
  const res = await fetch(`${BASE_URL}/self-service/settings/flows?id=${flowId}`, {
    credentials: 'include'
  });

  if (!res.ok) {
    logger.error(
      {
        session: session.id,
        parameters: flowId,
        details: await httpResponseToString(res)
      },
      'Failed to retrieve settings flow metadata - redirecting to /details'
    );
    redirect(303, '/details');
  }

  logger.debug({ session: session.id, parameters: flowId }, 'Returning settings flow metadata');
  const flow = await res.json();
  return { flow };
};
