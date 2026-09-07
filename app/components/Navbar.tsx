'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useLanguage } from '../../context/LanguageContext'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isAutomationOpen, setIsAutomationOpen] = useState(false)
  const { translations, setIsWaitlistModalOpen } = useLanguage()
  const pathname = usePathname()
  const router = useRouter()
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    setIsAutomationOpen(false)
    if (pathname !== '/') {
      router.push(`/#${sectionId}`)
      return
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setIsAutomationOpen(true)
  }
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setIsAutomationOpen(false), 120)
  }

  const solid = isScrolled || isOpen

  const linkClass =
    'relative font-medium text-fg-muted transition-colors hover:text-fg after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100'

  const automationLinks = [
    { id: 'how-it-works', label: translations.nav.howItWorks },
    { id: 'education', label: translations.nav.education },
    { id: 'workflows', label: translations.nav.workflows },
  ]

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'border-b border-border bg-bg/80 py-3 shadow-soft backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => scrollToSection('home')}
            className="group text-xl font-bold tracking-tight text-fg transition-colors hover:text-primary"
            aria-label="FlowToWork home"
          >
            Flow<span className="text-primary transition-colors group-hover:text-white group-active:text-white">To</span>Work
          </button>

          <div className="hidden items-center gap-7 lg:flex">
            <button onClick={() => scrollToSection('home')} className={linkClass}>
              {translations.nav.home}
            </button>

            <div className="relative" onMouseEnter={openDropdown} onMouseLeave={scheduleClose}>
              <button
                className={`flex items-center gap-1 ${linkClass}`}
                aria-expanded={isAutomationOpen}
                aria-haspopup="true"
                aria-controls="automation-dropdown"
                onClick={() => setIsAutomationOpen((v) => !v)}
              >
                {translations.nav.automation}
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${isAutomationOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                id="automation-dropdown"
                role="menu"
                className={`absolute left-1/2 mt-3 w-56 -translate-x-1/2 rounded-2xl border border-border bg-card p-2 shadow-lift transition-all duration-200 ${
                  isAutomationOpen
                    ? 'visible translate-y-0 opacity-100'
                    : 'invisible -translate-y-2 opacity-0'
                }`}
              >
                {automationLinks.map((item) => (
                  <button
                    key={item.id}
                    role="menuitem"
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full rounded-xl px-4 py-2.5 text-left text-sm text-fg-muted transition-colors hover:bg-surface hover:text-primary"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={() => scrollToSection('about')} className={linkClass}>
              {translations.nav.about}
            </button>
            <button onClick={() => scrollToSection('contact')} className={linkClass}>
              {translations.nav.contact}
            </button>

            <Link
              href="/digital-marketing"
              className={`${linkClass} ${pathname === '/digital-marketing' ? 'text-primary' : ''}`}
              aria-current={pathname === '/digital-marketing' ? 'page' : undefined}
            >
              {translations.nav.digitalMarketing}
            </Link>
            <Link
              href="/web-development"
              className={`${linkClass} ${pathname === '/web-development' ? 'text-primary' : ''}`}
              aria-current={pathname === '/web-development' ? 'page' : undefined}
            >
              {translations.nav.webDevelopment}
            </Link>

            <div className="ml-1 flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
              <button
                onClick={() => setIsWaitlistModalOpen(true)}
                className="rounded-xl bg-highlight px-4 py-2 text-sm font-semibold text-highlight-fg shadow-glow transition-transform hover:-translate-y-0.5"
              >
                {translations.nav.getStarted}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageToggle className="px-2" />
            <ThemeToggle />
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-fg"
              onClick={() => setIsOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden bg-bg/95 backdrop-blur-xl transition-[max-height] duration-300 ease-in-out lg:hidden ${
          isOpen ? 'max-h-[32rem] border-b border-border' : 'max-h-0'
        }`}
      >
        <div className="space-y-1 px-4 pb-6 pt-2">
          <button
            onClick={() => scrollToSection('home')}
            className="block w-full rounded-xl px-4 py-3 text-left font-medium text-fg-muted transition-colors hover:bg-surface hover:text-fg"
          >
            {translations.nav.home}
          </button>

          <button
            onClick={() => setIsAutomationOpen((v) => !v)}
            className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left font-medium text-fg-muted transition-colors hover:bg-surface hover:text-fg"
            aria-expanded={isAutomationOpen}
            aria-controls="mobile-automation-submenu"
          >
            {translations.nav.automation}
            <svg
              className={`h-4 w-4 transition-transform duration-200 ${isAutomationOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            id="mobile-automation-submenu"
            className={`overflow-hidden pl-3 transition-[max-height] duration-300 ${
              isAutomationOpen ? 'max-h-64' : 'max-h-0'
            }`}
          >
            {automationLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full rounded-xl px-4 py-2.5 text-left text-sm text-fg-muted transition-colors hover:bg-surface hover:text-primary"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="block w-full rounded-xl px-4 py-3 text-left font-medium text-fg-muted transition-colors hover:bg-surface hover:text-fg"
          >
            {translations.nav.about}
          </button>
          <Link
            href="/digital-marketing"
            className="block w-full rounded-xl px-4 py-3 text-left font-medium text-fg-muted transition-colors hover:bg-surface hover:text-fg"
            onClick={() => setIsOpen(false)}
          >
            {translations.nav.digitalMarketing}
          </Link>
          <Link
            href="/web-development"
            className="block w-full rounded-xl px-4 py-3 text-left font-medium text-fg-muted transition-colors hover:bg-surface hover:text-fg"
            onClick={() => setIsOpen(false)}
          >
            {translations.nav.webDevelopment}
          </Link>
          <button
            onClick={() => {
              setIsOpen(false)
              scrollToSection('contact')
            }}
            className="mt-2 block w-full rounded-xl bg-highlight px-4 py-3 text-center font-semibold text-highlight-fg"
          >
            {translations.nav.contact}
          </button>
        </div>
      </div>
    </nav>
  )
}
