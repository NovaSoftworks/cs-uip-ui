import { loadTranslations } from '$lib/translations';

export const load = async ({ data }) => {
  const locale = data.locale;

  await loadTranslations(locale);
};
