import { redirect } from '@sveltejs/kit';
import { BASE_URL, IS_OFFLINE } from '$lib/server/config';
import { createLogger } from '$lib/server/logging';
import { httpResponseToString } from '$lib/formatting';

import { data as offlineData } from '$lib/server/offline-data/verification.js';

const logger = createLogger('/verification');

export const load = async ({ url, fetch }) => {
  if (IS_OFFLINE) {
    logger.debug('Returning sample login flow');
    return offlineData;
  }

  const flowId = url.searchParams.get('flow');

  if (!flowId) {
    /*const res = await fetch(`${BASE_URL}/self-service/verification/browser`, {
      redirect: 'manual',
      credentials: 'include'
    });

    const redirectionTarget = res.headers.get('location') || '/verification';
    redirect(303, redirectionTarget);*/
    logger.warn('No verification flow ID found - redirecting to /');
    redirect(303, '/');
  }

  logger.debug({ parameters: flowId }, 'Fetching verification flow metadata');
  const flowResponse = await fetch(`${BASE_URL}/self-service/verification/flows?id=${flowId}`, {
    credentials: 'include'
  });

  if (!flowResponse.ok) {
    logger.error(
      {
        parameters: flowId,
        details: await httpResponseToString(flowResponse)
      },
      'Failed to retrieve verification flow metadata - redirecting to /'
    );
    redirect(303, '/');
  }

  const flow = await flowResponse.json();
  const isVerified = flow.state === 'passed_challenge';
  return { isVerified, flowUi: flow.ui };
};
