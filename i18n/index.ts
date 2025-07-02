import { website } from '@/configs/website'
import { en } from './en'
import { zh } from './zh'
import { tw } from './tw'

export type Dictionary = typeof en

const _checkDictionaries: Record<LocaleLang, Dictionary> = {
  // English
  en,
  // Chinese Simplified
  zh,
  // Chinese Traditional
  tw,
}

export const dictionaries: Record<LocaleLang, Dictionary> = {
  en,
  zh,
  tw,
}

const serverDictionaries: Partial<Record<LocaleLang, Dictionary>> = {
  en,
}

export async function getDictionary(locale: LocaleLang): Promise<Dictionary> {
  if (typeof window === 'undefined') {
    if (serverDictionaries[locale]) {
      return serverDictionaries[locale]!
    }

    try {
      let dictionary: Dictionary
      let langModule: any

      switch (locale) {
        case 'zh':
          langModule = await import('./zh')
          dictionary = langModule.zh
          break
        case 'tw':
          langModule = await import('./tw')
          dictionary = langModule.tw
          break
        default:
          dictionary = en
      }

      serverDictionaries[locale] = dictionary
      return dictionary
    }
    catch (error) {
      console.error(`Error loading dictionary for locale ${locale}:`, error)
      return en
    }
  }

  try {
    const { loadLanguage } = await import('@/i18n/languageLoader')
    return await loadLanguage(locale)
  }
  catch (error) {
    console.error(`Error loading dictionary for locale ${locale}:`, error)
    return en
  }
}

export function getDictionarySync(locale: LocaleLang): Dictionary {
  if (typeof window === 'undefined') {
    return serverDictionaries[locale] || en
  }

  // 客户端环境：尝试从 localStorage 获取已缓存的语言包
  try {
    const cacheKey = `${website.brandName.toLowerCase().replace(/[^a-z0-9]/g, '_')}_${locale}`
    const cachedData = localStorage.getItem(cacheKey)

    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData)
      const CACHE_EXPIRY = website.cache.languageCacheTime ?? 0

      // 检查缓存是否有效
      if (Date.now() - timestamp <= CACHE_EXPIRY) {
        return data as Dictionary
      }
      else {
        // 清理过期缓存
        localStorage.removeItem(cacheKey)
      }
    }
  }
  catch (error) {
    console.error('Error loading cached language:', error)
  }

  return dictionaries[locale] || en
}

export function isValidLanguage(locale: string | undefined): locale is LocaleLang {
  if (!locale)
    return false

  return Object.keys(dictionaries).includes(locale)
}

export function getLanguageFromPath(path: string): LocaleLang {
  const match = path.match(/^\/([a-z]{2})\//)
  const lang = match?.[1]

  return isValidLanguage(lang) ? lang : 'en'
}

export function getCurrentLanguagePack(): Dictionary {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname
    return getDictionarySync(getLanguageFromPath(path))
  }

  return en
}

export function languageConvert(locale: LocaleLang) {
  const languageMap: Record<LocaleLang, string> = {
    en: 'en',
    zh: 'zh-Hans',
    tw: 'zh-Hant',
  }

  return languageMap[locale] || 'en'
}