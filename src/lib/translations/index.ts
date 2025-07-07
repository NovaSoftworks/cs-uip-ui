import i18n from 'sveltekit-i18n';

// here i want to define en=English, fr=Français, es=Español, etc. And I want this information to be shared in all languages.
const config = {
  loaders: [
    {
      locale: 'en',
      key: 'footer',
      loader: async () => (await import('./en/footer.json')).default
    },
    {
      locale: 'en',
      key: 'header',
      loader: async () => (await import('./en/header.json')).default
    },
    {
      locale: 'en',
      key: 'login',
      loader: async () => (await import('./en/login.json')).default
    },
    {
      locale: 'fr',
      key: 'footer',
      loader: async () => (await import('./fr/footer.json')).default
    },
    {
      locale: 'fr',
      key: 'header',
      loader: async () => (await import('./fr/header.json')).default
    },
    {
      locale: 'fr',
      key: 'login',
      loader: async () => (await import('./fr/login.json')).default
    }
  ]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
