import { loadTranslations } from '$lib/translations';
import { env } from '$env/dynamic/public';

const DEBUG_MODE = env.PUBLIC_DEBUG_MODE === 'true';

export const load = async ({ url }) => {
  if (DEBUG_MODE) {
  }

  const { pathname } = url;

  const initLocale = 'fr';

  await loadTranslations(initLocale, pathname);

  return {};
};
