import { redirect } from '@sveltejs/kit';
import { BASE_URL, IS_OFFLINE } from '$lib/server/config';
import { createLogger } from '$lib/server/logging';

import { flow as offlineData } from '$lib/server/offline-data/details';
import { httpResponseToString } from '$lib/formatting.js';

const logger = createLogger('/security');

export const load = async ({ url, fetch }) => {
  if (IS_OFFLINE) {
    return {
      flow: offlineData
    };
  }
  const flowId = url.searchParams.get('flow');
  const returnTo = url.searchParams.get('return_to') || '/security'; // Capture original return_to

  if (!flowId) {
    const res = await fetch(`${BASE_URL}/self-service/settings/browser?return_to=${encodeURIComponent(returnTo)}`, {
      redirect: 'manual',
      credentials: 'include'
    });

    const redirectTo = res.headers.get('location');

    if (redirectTo) {
      const parsedRedirectTo = new URL(redirectTo);
      if (parsedRedirectTo.pathname.includes('/security')) {
        logger.debug(`Redirect target matches /security - redirecting to ${redirectTo}`);
        redirect(303, redirectTo);
      } else {
        logger.debug(`Redirect target does not match /security - checking for flow ID in query params`);
        const flowIdFromRedirect = parsedRedirectTo.searchParams.get('flow');
        if (flowIdFromRedirect) {
          logger.debug(`Found flow ID ${flowIdFromRedirect} - redirecting to /security?flow=${flowIdFromRedirect}`);
          redirect(303, `/security?flow=${flowIdFromRedirect}`);
        } else {
          logger.error(
            {
              details: redirectTo
            },
            'No flow ID found in redirect URL'
          );
        }
      }
    } else {
      logger.error(
        {
          details: await httpResponseToString(res)
        },
        'No redirect location found in response headers'
      );
    }
  }

  const res = await fetch(`${BASE_URL}/self-service/settings/flows?id=${flowId}`, {
    credentials: 'include'
  });

  if (!res.ok) {
    redirect(303, '/security');
  }

  const flow = await res.json();
  return { flow };
};
