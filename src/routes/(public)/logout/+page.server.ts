import { redirect } from '@sveltejs/kit';
import { BASE_URL, IS_OFFLINE } from '$lib/config';
import { createLogger } from '$lib/server/logging';
import { formatHttpResponse } from '$lib/formatting';

const logger = createLogger('/logout');

export const load = async ({ locals, cookies, fetch }) => {
  if (IS_OFFLINE) {
    logger.debug('Redirecting to /login');
    redirect(303, '/login');
  }

  logger.debug({ session: locals.session.id }, 'Fetching logout URL');
  const res = await fetch(`${BASE_URL}/self-service/logout/browser`, {
    headers: {
      Cookie: cookies
        .getAll()
        .map(cookie => `${cookie.name}=${cookie.value}`)
        .join('; ')
    },
    credentials: 'include'
  });

  if (!res.ok) {
    logger.error(
      {
        session: locals.session?.id,
        details: await formatHttpResponse(res)
      },
      'Failed to log user out - redirecting to /'
    );
    redirect(303, '/');
  }

  const data = await res.json();
  logger.info({ session: locals.session.id }, 'Logging user out');
  redirect(303, data.logout_url);
};
