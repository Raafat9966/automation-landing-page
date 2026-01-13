'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '../../context/LanguageContext'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { language, translations, toggleLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'bg-white shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-primary hover:text-secondary transition-colors duration-300"
            aria-label="FlowToWork Home"
          >
            FlowToWork
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
              aria-label={translations.nav.home}
            >
              {translations.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('workflows')}
              className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
              aria-label={translations.nav.workflows}
            >
              {translations.nav.workflows}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
              aria-label={translations.nav.about}
            >
              {translations.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('ai-demo')}
              className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
              aria-label={translations.nav.aiAgent}
            >
              {translations.nav.aiAgent}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
              aria-label={translations.nav.contact}
            >
              {translations.nav.contact}
            </button>

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1 rounded-full border border-gray-300 hover:border-primary transition-all duration-300 text-sm font-medium"
              aria-label={`Switch to ${language === 'en' ? 'German' : 'English'}`}
            >
              {language === 'en' ? (
                <>
                  <span className="text-xl">🇬🇧</span>
                  <span className="text-gray-700">EN</span>
                </>
              ) : (
                <>
                  <span className="text-xl">🇩🇪</span>
                  <span className="text-gray-700">DE</span>
                </>
              )}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300"
              aria-label={`Switch to ${language === 'en' ? 'German' : 'English'}`}
            >
              {language === 'en' ? '🇬🇧' : '🇩🇪'}
            </button>
            <button
              className="text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-lg p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white ${
          isOpen ? 'max-h-96 border-b border-gray-100' : 'max-h-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 shadow-inner">
          <button
            onClick={() => scrollToSection('home')}
            className="block w-full text-left px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors font-medium"
          >
            {translations.nav.home}
          </button>
          <button
            onClick={() => scrollToSection('workflows')}
            className="block w-full text-left px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors font-medium"
          >
            {translations.nav.workflows}
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-left px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors font-medium"
          >
            {translations.nav.about}
          </button>
          <button
            onClick={() => scrollToSection('ai-demo')}
            className="block w-full text-left px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors font-medium"
          >
            {translations.nav.aiAgent}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="block w-full text-left px-4 py-3 text-white bg-primary hover:bg-secondary rounded-lg transition-colors font-medium text-center"
          >
            {translations.nav.contact}
          </button>
        </div>
      </div>
    </nav>
  )
}

