'use client'

import React, { createContext, useContext, useState, useMemo, useCallback, ReactNode } from 'react'
import { en } from '../translations/en'
import { de } from '../translations/de'
import type { Translations } from '../translations/types'

type Language = 'en' | 'de'

const LANGUAGE_COOKIE = 'lang'
const dictionaries: Record<Language, Translations> = { en, de }

interface LanguageContextType {
  language: Language
  translations: Translations
  toggleLanguage: () => void
  isWaitlistModalOpen: boolean
  setIsWaitlistModalOpen: (isOpen: boolean) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
  /** Comes from the server (cookie) so the client starts in sync — no hydration mismatch. */
  initialLanguage?: Language
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children, initialLanguage = 'en' }) => {
  const [language, setLanguage] = useState<Language>(initialLanguage)
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false)

  // Derived, never duplicated in state.
  const translations = useMemo(() => dictionaries[language] ?? en, [language])

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => {
      const next: Language = prev === 'en' ? 'de' : 'en'
      if (typeof document !== 'undefined') {
        document.cookie = `${LANGUAGE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`
      }
      return next
    })
  }, [])

  const value = useMemo<LanguageContextType>(
    () => ({ language, translations, toggleLanguage, isWaitlistModalOpen, setIsWaitlistModalOpen }),
    [language, translations, toggleLanguage, isWaitlistModalOpen],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
