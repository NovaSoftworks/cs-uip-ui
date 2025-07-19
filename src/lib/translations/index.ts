import i18n from 'sveltekit-i18n';

const languages = ['en', 'fr'];
const namespaces = ['footer', 'header', 'sidebar', 'login', 'overview', 'kratos'];
const loaders = languages.flatMap(locale =>
  namespaces.map(key => ({
    locale,
    key,
    loader: async () => (await import(`./${locale}/${key}.json`)).default
  }))
);

const config = { loaders };

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
