export const website: WebsiteConfigTypes = {
  brandName: 'FluxTools',
  logo: {
    show: true,
    name: 'FluxTools',
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
  sponsors: {
    items: [
      {
        icon: "Crown",
        name: "Acmebrand",
      },
      {
        icon: "Vegan",
        name: "Acmelogo",
      },
      {
        icon: "Ghost",
        name: "Acmesponsor",
      },
      {
        icon: "Puzzle",
        name: "Acmeipsum",
      },
      {
        icon: "Squirrel",
        name: "Acme",
      },
      {
        icon: "Cookie",
        name: "Accmee",
      },
      {
        icon: "Drama",
        name: "Acmetech",
      },
    ],
  },
  socialMedia: {
    twitter: "https://twitter.com",
    github: "https://github.com",
    discord: "https://discord.com",
    email: "hello@example.com",
  },
} 