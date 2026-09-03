'use client'

import { useEffect, useMemo, useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import Button from './ui/Button'

const featureIcons = [
  <path key="ai" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />,
  <path
    key="fast"
    fillRule="evenodd"
    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
    clipRule="evenodd"
  />,
  <path
    key="secure"
    fillRule="evenodd"
    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
    clipRule="evenodd"
  />,
]

export default function Hero() {
  const { translations, setIsWaitlistModalOpen } = useLanguage()
  const [textIndex, setTextIndex] = useState(0)

  const rotatingTexts = useMemo(
    () => [translations.hero.title2, translations.nav.digitalMarketing, translations.nav.webDevelopment],
    [translations],
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [rotatingTexts.length])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const features = [
    translations.hero.features.ai,
    translations.hero.features.fast,
    translations.hero.features.secure,
  ]

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-bg pt-28"
      aria-labelledby="hero-title"
    >
      {/* Aurora mesh — GPU transforms only */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute left-[6%] top-[4%] h-[38rem] w-[38rem] rounded-full bg-primary/30 blur-[100px] animate-aurora-1 dark:bg-primary/40" />
        <div className="absolute right-[2%] top-[0%] h-[32rem] w-[32rem] rounded-full bg-secondary/30 blur-[110px] animate-aurora-2 dark:bg-secondary/30" />
        <div className="absolute bottom-[2%] left-[32%] h-[34rem] w-[34rem] rounded-full bg-highlight/25 blur-[110px] animate-aurora-3 dark:bg-highlight/30" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-[0.35] mask-fade-y dark:opacity-20"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1
          id="hero-title"
          className="mx-auto flex max-w-4xl flex-col items-center text-display font-bold text-fg [text-wrap:balance]"
        >
          <span>{translations.hero.title1}</span>
          <span className="relative flex h-[1.15em] w-full items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <m.span
                key={textIndex}
                initial={{ y: '60%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-60%', opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-gradient absolute whitespace-nowrap"
              >
                {rotatingTexts[textIndex]}
              </m.span>
            </AnimatePresence>
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lead text-fg-muted">{translations.hero.subtitle}</p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" onClick={scrollToContact} className="w-full sm:w-auto">
            {translations.hero.cta}
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsWaitlistModalOpen(true)}
            className="w-full sm:w-auto"
          >
            {translations.waitlist.form.submit}
          </Button>
        </div>

        <ul className="mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-3">
          {features.map((label, i) => (
            <li
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm font-medium text-fg-muted backdrop-blur-sm"
            >
              <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                {featureIcons[i]}
              </svg>
              {label}
            </li>
          ))}
        </ul>
      </div>

      <div
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
        aria-hidden="true"
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-fg-muted/40 p-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-fg-muted/70 animate-scroll-cue" />
        </div>
      </div>
    </section>
  )
}
