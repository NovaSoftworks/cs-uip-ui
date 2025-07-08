import { supportedLocales, fallbackLocale } from '$lib/config/locales.js';
import { createLogger } from '$lib/server/logging';

const logger = createLogger();

export const load = ({ request, cookies }) => {
  let locale = cookies.get('locale');
  if (!locale) {
    logger.debug('Locale cookie not found, extracting from request headers');
    locale = extractPreferredLocale(request);
    if (!locale) {
      logger.debug('No preferred locale found in request headers, using %s as fallback', fallbackLocale);
      locale = fallbackLocale; // Fallback locale
    } else {
      if (!supportedLocales.find(l => l.locale === locale)) {
        logger.warn('Locale %s is not supported, using fallback locale: %s', locale, fallbackLocale);
        locale = fallbackLocale; // Fallback if the locale is not supported
      }
    }
    logger.debug('Setting locale cookie to %s', locale);
    cookies.set('locale', locale, { path: '/' });
  }

  return { locale };
};

/**
 * Extracts the preferred locale from the Accept-Language header of the request.
 * @param request The incoming request object.
 * @returns A string representing the preferred locale, or undefined if not found.
 */
function extractPreferredLocale(request: Request): string | undefined {
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const languages = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0])
      .map(lang => lang.split('-')[0]); // Remove region codes (en-US -> en)
    return languages[0];
  }
}
