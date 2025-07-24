import { redirect } from '@sveltejs/kit';
import { BASE_URL, IS_OFFLINE } from '$lib/server/config';
import { createLogger } from '$lib/server/logging';

import { flow as offlineData } from '$lib/server/offline-data/details';
import { httpResponseToString } from '$lib/formatting';

const logger = createLogger('/details');

export const load = async ({ url, fetch }) => {
  if (IS_OFFLINE) {
    logger.debug('Returning sample user data');
    return {
      flow: offlineData
    };
  }

  const flowId = url.searchParams.get('flow');

  if (!flowId) {
    logger.debug({ details: url.toString }, 'Starting settings flow');
    const res = await fetch(`${BASE_URL}/self-service/settings/browser`, {
      redirect: 'manual',
      credentials: 'include'
    });

    const redirectTo = res.headers.get('location') || '/details';
    logger.debug('Redirecting to %s', redirectTo);
    redirect(303, redirectTo);
  }

  logger.debug({ parameters: flowId }, 'Fetching settings flow metadata');
  const res = await fetch(`${BASE_URL}/self-service/settings/flows?id=${flowId}`, {
    credentials: 'include'
  });

  if (!res.ok) {
    logger.error(
      {
        parameters: flowId,
        details: await httpResponseToString(res)
      },
      'Failed to retrieve settings flow metadata - redirecting to /details'
    );
    redirect(303, '/details');
  }

  logger.debug({ parameters: flowId }, 'Returning settings flow metadata');
  const flow = await res.json();
  return { flow };
};
