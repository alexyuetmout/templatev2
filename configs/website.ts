export const website: WebsiteConfigTypes = {
  brandName: 'ShadcnLanding',
  logo: {
    show: true,
    name: 'Shadcn',
  },
  themeSwitcher: {
    open: true,
    defaultTheme: 'light',
  },
  i18n: {
    locales: ['en', 'zh', 'tw'],
    defaultLocale: 'en',
    basePath: '/',
    localeDetector: false,
    serverSetCookie: 'never',
  },
  cache: {
    languageCacheTime: 2 * 60 * 60 * 1000,
  },
} 