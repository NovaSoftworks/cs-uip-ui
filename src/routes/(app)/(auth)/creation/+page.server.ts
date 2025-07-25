// src/routes/creation/+page.server.ts
import { redirect } from '@sveltejs/kit';
import { createLogger } from '$lib/server/logging';
import { BASE_URL, IS_OFFLINE } from '$lib/server/config';
import { httpResponseToString } from '$lib/formatting.js';

import { flow as offlineFlow } from '$lib/server/offline-data/registration';

const logger = createLogger('/creation');

export const load = async ({ url, fetch }) => {
  if (IS_OFFLINE) {
    logger.debug('Returning sample creation flow');
    return { flow: offlineFlow }; // Sample offline flow
  }

  logger.debug('Search parameters: %s', url.searchParams.toString());
  const flowId = url.searchParams.get('flow');

  if (!flowId) {
    const redirectTo = `${BASE_URL}/self-service/registration/browser`;
    logger.debug('Starting registration flow - redirecting to %s', redirectTo);
    redirect(303, redirectTo);
  }

  logger.debug({ parameters: flowId }, 'Fetching registration flow metadata');
  const flowDataResponse = await fetch(`${BASE_URL}/self-service/registration/flows?id=${flowId}`, {
    credentials: 'include'
  });

  if (!flowDataResponse.ok) {
    logger.error(
      {
        parameters: flowId,
        details: await httpResponseToString(flowDataResponse)
      },
      'Failed to retrieve registration flow metadata - redirecting to /creation'
    );
    redirect(303, '/creation');
  }

  const flow = await flowDataResponse.json();

  const uiMessages: {}[] = flow.ui.messages;
  const errorMessages = uiMessages?.filter((m: any) => m.type === 'error');
  errorMessages?.forEach((message: any) => {
    logger.warn({ details: message.text }, 'Registration flow response error');
  });

  return { flow };
};
