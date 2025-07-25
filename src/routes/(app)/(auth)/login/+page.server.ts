import { redirect } from '@sveltejs/kit';
import { createLogger } from '$lib/server/logging';
import { BASE_URL, IS_OFFLINE } from '$lib/server/config';
import { httpResponseToString } from '$lib/formatting.js';

import { flow as offlineFlow } from '$lib/server/offline-data/login';

const logger = createLogger('/login');

export const load = async ({ url, fetch }) => {
  if (IS_OFFLINE) {
    logger.debug('Returning sample login flow');
    return { flow: offlineFlow, isReAuth: false };
  }

  logger.debug('Search parameters: %s', url.searchParams.toString());
  const flowId = url.searchParams.get('flow');

  // If no login flow currently exists, we start a new one
  if (!flowId) {
    const redirectTo = `${BASE_URL}/self-service/login/browser`;
    logger.debug('Starting login flow - redirecting to %s', redirectTo);
    redirect(303, redirectTo);
  }

  logger.debug({ parameters: flowId }, 'Fetching login flow metadata');
  // If there is a login flow, we retrieve metadata to build the form on the UI
  const flowDataResponse = await fetch(`${BASE_URL}/self-service/login/flows?id=${flowId}`, {
    credentials: 'include'
  });

  // If an error occured, start over
  if (!flowDataResponse.ok) {
    logger.error(
      {
        parameters: flowId,
        details: await httpResponseToString(flowDataResponse)
      },
      'Failed to retrieve login flow metadata - redirecting to /login'
    );
    redirect(303, '/login');
  }

  const flow = await flowDataResponse.json();

  const uiMessages: {}[] = flow.ui.messages;
  const errorMessages = uiMessages?.filter((m: any) => m.type === 'error');

  errorMessages?.forEach((message: any) => {
    logger.warn({ details: message.text }, 'Login flow response error');
  });

  logger.debug({ parameters: flowId }, 'Returning login flow metadata');

  const isReAuth = flow.ui.messages?.some((m: any) => m.id === 1010003) || false;

  return { flow, isReAuth };
};
