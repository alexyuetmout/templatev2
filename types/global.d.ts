import type { Config } from 'next-i18n-router/dist/types'

declare global {
  /**
   * Supported Language Codes
   */
  type LocaleLang = 'en' | 'zh' | 'tw'

  /**
   * Route Parameters
   */
  interface RouteParams {
    locale: LocaleLang
  }

  /**
   * Global Website Configuration
   */
  interface WebsiteConfigTypes {
    brandName: string
    logo: {
      show: boolean
      name: string
    }
    themeSwitcher: {
      open: boolean
      defaultTheme: 'system' | 'light' | 'dark'
    }
    i18n: Config & {
      defaultLocale: LocaleLang
      locales: LocaleLang[]
    }
    cache: {
      languageCacheTime: number | null
    }
  }
}

export {}