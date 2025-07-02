/**
 * Language Load Manager - Optimize Multilingual Loading Performance
 */

import type { Dictionary } from '@/i18n'
import { website } from '@/configs/website'

// In-memory cache to track loaded languages
const languageCache: Record<LocaleLang, Dictionary | null> = {
  en: null,
  zh: null,
  tw: null,
}

// Track current loading state to prevent redundant loading operations for the same language
const loadingStatus: Record<LocaleLang, boolean> = {
  en: false,
  zh: false,
  tw: false,
}

/**
 * Dynamically load language packs
 * @param locale Language code to be loaded
 * @returns Language dictionary
 */
export async function loadLanguage(locale: LocaleLang): Promise<Dictionary> {
  // If already cached, return immediately
  if (languageCache[locale]) {
    return languageCache[locale]!
  }

  // Avoid duplicate loading
  if (loadingStatus[locale]) {
    // Wait for ongoing loading to complete
    return new Promise((resolve) => {
      const checkInterval = setInterval(() => {
        if (languageCache[locale]) {
          clearInterval(checkInterval)
          resolve(languageCache[locale]!)
        }
      }, 50)
    })
  }

  loadingStatus[locale] = true

  try {
    // Check localStorage in the client environment
    if (typeof window !== 'undefined') {
      const cachedLang = website.cache.languageCacheTime ? getCachedLanguage(locale) : void 0
      if (cachedLang) {
        languageCache[locale] = cachedLang
        loadingStatus[locale] = false
        return cachedLang
      }
    }

    // Dynamically import language pack
    const dictionary = await dynamicImportLanguage(locale)

    // Update cache
    languageCache[locale] = dictionary

    // Save to localStorage in the client environment
    if (typeof window !== 'undefined') {
      cacheLanguage(locale, dictionary)
    }

    return dictionary
  }
  finally {
    // Reset loading state regardless of success or failure
    loadingStatus[locale] = false
  }
}

/**
 * Implementation of dynamic language pack import
 */
async function dynamicImportLanguage(locale: LocaleLang): Promise<Dictionary> {
  switch (locale) {
    case 'en':
      return (await import('@/i18n/en')).en
    case 'zh':
      return (await import('@/i18n/zh')).zh
    case 'tw':
      return (await import('@/i18n/tw')).tw
    default:
      return (await import('@/i18n/en')).en
  }
}

// Prefix for language pack cache key
const LANG_CACHE_PREFIX = `${website.brandName.toLowerCase().replace(/[^a-z0-9]/g, '_')}_`
// Cache expiration time
const CACHE_EXPIRY = website.cache.languageCacheTime ?? 0

/**
 * Retrieve cached language pack from localStorage
 */
function getCachedLanguage(locale: LocaleLang): Dictionary | null {
  try {
    const cacheKey = `${LANG_CACHE_PREFIX}${locale}`
    const cachedData = localStorage.getItem(cacheKey)

    if (!cachedData)
      return null

    const { data, timestamp } = JSON.parse(cachedData)

    // Check whether the cache is expired
    if (Date.now() - timestamp > CACHE_EXPIRY) {
      localStorage.removeItem(cacheKey)
      return null
    }

    return data as Dictionary
  }
  catch (error) {
    console.error('Error reading language cache:', error)
    return null
  }
}

/**
 * Cache the language pack to localStorage
 */
function cacheLanguage(locale: LocaleLang, dictionary: Dictionary): void {
  try {
    const cacheData = {
      timestamp: Date.now(),
      data: dictionary,
    }

    localStorage.setItem(`${LANG_CACHE_PREFIX}${locale}`, JSON.stringify(cacheData))
  }
  catch (error) {
    console.error('Error caching language:', error)
  }
}

/**
 * Preload specified language pack
 * Can be called during app initialization to preload potentially needed languages
 */
export function preloadLanguage(locale: LocaleLang): void {
  if (!languageCache[locale] && !loadingStatus[locale]) {
    // Start preloading without waiting for the result
    loadLanguage(locale).catch(err => console.error(`Failed to preload language ${locale}:`, err))
  }
}