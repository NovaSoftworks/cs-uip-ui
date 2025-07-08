import { redirect, type RequestHandler } from '@sveltejs/kit';
import { supportedLocales } from '$lib/server/config';
import { locale } from '$lib/translations';
import { createLogger } from '$lib/logging';

export const GET: RequestHandler = ({ url, cookies }) => {
  const logger = createLogger(url.pathname);
  const currentLocale = cookies.get('locale');
  const newLocale = url.searchParams.get('lang');

  const isValidLocale = supportedLocales.some(locale => locale.locale === newLocale);
  const locale = isValidLocale ? newLocale : currentLocale;

  if (!isValidLocale) {
    logger.warn({ parameters: newLocale }, 'Invalid locale requested');
  }

  if (locale) {
    logger.debug('Setting locale cookie to %s', locale);
    cookies.set('locale', locale, { path: '/' });
  }
  const redirectLocation = url.searchParams.get('redirect') || '/';
  redirect(303, redirectLocation);
};
