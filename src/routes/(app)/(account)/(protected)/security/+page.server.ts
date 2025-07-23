import { redirect } from '@sveltejs/kit';
import { BASE_URL, IS_OFFLINE } from '$lib/server/config';
import { createLogger } from '$lib/server/logging';

import { flow as offlineData } from '$lib/server/offline-data/details';

const logger = createLogger('/security');

export const load = async ({ url, fetch }) => {
  if (IS_OFFLINE) {
    return {
      flow: offlineData
    };
  }
  const flowId = url.searchParams.get('flow');

  if (!flowId) {
    const res = await fetch(`${BASE_URL}/self-service/settings/browser`, {
      redirect: 'manual',
      credentials: 'include'
    });

    const redirectTo = res.headers.get('location') || '/security';
    redirect(303, redirectTo);
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
