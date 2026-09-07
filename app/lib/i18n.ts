import { cookies } from 'next/headers'
import { en } from '../../translations/en'
import { de } from '../../translations/de'
import type { Translations } from '../../translations/types'

export type Language = 'en' | 'de'

export const LANGUAGE_COOKIE = 'lang'

const dictionaries: Record<Language, Translations> = { en, de }

export function getDictionary(lang: Language): Translations {
  return dictionaries[lang] ?? en
}

/** Reads the visitor's language from the cookie so server components render localized content on first paint. */
export async function getLanguage(): Promise<Language> {
  const store = await cookies()
  const value = store.get(LANGUAGE_COOKIE)?.value
  return value === 'de' ? 'de' : 'en'
}
