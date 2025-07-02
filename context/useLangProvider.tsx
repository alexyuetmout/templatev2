'use client'

import type { ReactNode } from 'react'
import type { Dictionary } from '@/i18n'
import { createContext, use, useEffect, useState } from 'react'
import { getDictionary, getDictionarySync, languageConvert } from '@/i18n'
import { preloadLanguage } from '@/i18n/languageLoader'

interface LangProviderContextProps {
  locale: LocaleLang
  $t: Dictionary
  i18nLink: (url: string) => string
  standardLanguage: string
  isLoading: boolean
  changeLocale: (newLocale: LocaleLang) => Promise<void>
}

export const ProviderContext = createContext<LangProviderContextProps>({
  locale: 'en',
  $t: getDictionarySync('en'),
  i18nLink: (url: string) => `/en${url}`,
  standardLanguage: languageConvert('en'),
  isLoading: false,
  changeLocale: async () => {
  },
})

export function useLangProviderContext() {
  return use(ProviderContext)
}

interface LangProviderProps {
  children: ReactNode
  initialLocale: LocaleLang
  initialDictionary: Dictionary
}

export function LangProvider({ children, initialLocale, initialDictionary }: LangProviderProps) {
  const [locale, setLocale] = useState<LocaleLang>(initialLocale)
  const [$t, setDictionary] = useState<Dictionary>(initialDictionary)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // Preload the current language
  useEffect(() => {
    // Preload the current language Ensure the client has a cache
    preloadLanguage(locale)
  }, [locale])

  const changeLocale = async (newLocale: LocaleLang) => {
    if (newLocale === locale)
      return

    try {
      setIsLoading(true)
      const newDictionary = await getDictionary(newLocale)

      setLocale(newLocale)
      setDictionary(newDictionary)
    }
    catch (error) {
      console.error(`Failed to change locale to ${newLocale}:`, error)
    }
    finally {
      setIsLoading(false)
    }
  }

  const i18nLink = (url: string): string => {
    // Make sure the URL starts/
    const formattedUrl = url.startsWith('/') ? url : `/${url}`
    return locale === 'en' ? formattedUrl : `/${locale}${formattedUrl}`
  }

  const standardLanguage = languageConvert(locale)

  return (
    <ProviderContext.Provider value={{
      locale,
      $t,
      i18nLink,
      standardLanguage,
      isLoading,
      changeLocale,
    }}
    >
      {children}
    </ProviderContext.Provider>
  )
}