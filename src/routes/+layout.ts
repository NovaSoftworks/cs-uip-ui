import { loadTranslations } from '$lib/translations';

export const load = async ({ data }) => {
  const locale = data.locale;

  await loadTranslations(locale);
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
