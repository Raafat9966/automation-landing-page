'use client'

import { useLanguage } from '../../context/LanguageContext'

export default function Hero() {
  const { translations } = useLanguage()
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary pt-20"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent opacity-20 rounded-full blur-3xl animate-pulse" aria-hidden="true"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-highlight opacity-20 rounded-full blur-3xl animate-pulse delay-1000" aria-hidden="true"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 id="hero-title" className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {translations.hero.title1}
          <br />
          <span className="text-accent">{translations.hero.title2}</span>
        </h1>

        <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          {translations.hero.subtitle}
        </p>

        <button
          onClick={scrollToContact}
          className="inline-block bg-highlight hover:bg-highlight/90 text-white font-bold text-lg px-12 py-4 rounded-full shadow-2xl hover:shadow-highlight/50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-highlight/50"
          aria-label={translations.hero.cta}
        >
          {translations.hero.cta}
        </button>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/80">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-medium">{translations.hero.features.ai}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">{translations.hero.features.fast}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">{translations.hero.features.secure}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

