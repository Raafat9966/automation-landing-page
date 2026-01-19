'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { en } from '../translations/en';
import { de } from '../translations/de';
import type { Translations } from '../translations/types';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  translations: Translations;
  toggleLanguage: () => void;
  isWaitlistModalOpen: boolean;
  setIsWaitlistModalOpen: (isOpen: boolean) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [translations, setTranslations] = useState<Translations>(en);

  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'de')) {
      setLanguage(savedLanguage);
      setTranslations(savedLanguage === 'en' ? en : de);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang: Language = language === 'en' ? 'de' : 'en';
    setLanguage(newLang);
    setTranslations(newLang === 'en' ? en : de);
    localStorage.setItem('language', newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, translations, toggleLanguage, isWaitlistModalOpen, setIsWaitlistModalOpen }}>
      <div className="transition-opacity duration-300" key={language}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
