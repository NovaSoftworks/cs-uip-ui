export interface Locale {
  locale: string;
  displayName: string;
}

export const supportedLocales: Locale[] = [
  { locale: 'en', displayName: 'English' },
  { locale: 'fr', displayName: 'Français' }
];

export const fallbackLocale = supportedLocales[0].locale;
