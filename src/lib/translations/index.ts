import i18n from 'sveltekit-i18n';

const languages = ['en', 'fr'];

const defaultNamespaces = ['actions', 'components', 'identity', 'kratos'];
const layoutNamespaces = ['footer', 'header', 'sidebar'];
const pageNamespaces = ['creation', 'details', 'login', 'overview', 'verification'];

const defaultLoaders = languages.flatMap(locale =>
  defaultNamespaces.map(key => ({
    locale,
    key,
    loader: async () => (await import(`./${locale}/${key}.json`)).default
  }))
);

const layoutLoaders = languages.flatMap(locale =>
  layoutNamespaces.map(key => ({
    locale,
    key: `layout.${key}`,
    loader: async () => (await import(`./${locale}/layout/${key}.json`)).default
  }))
);

const pageLoaders = languages.flatMap(locale =>
  pageNamespaces.map(key => ({
    locale,
    key: `pages.${key}`,
    loader: async () => (await import(`./${locale}/pages/${key}.json`)).default
  }))
);

const config = { loaders: [...defaultLoaders, ...layoutLoaders, ...pageLoaders] };

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
