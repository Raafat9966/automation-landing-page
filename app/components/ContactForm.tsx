'use client'

import { useState, FormEvent, ChangeEvent, ReactElement, useRef } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import Section, { SectionHeader } from './ui/Section'
import Button from './ui/Button'

type TabId = 'form' | 'info' | 'social'
type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  name: string
  email: string
  message: string
}

interface SocialLink {
  name: string
  url: string
  icon: ReactElement
}

const inputClass =
  'w-full rounded-xl border border-border bg-surface px-4 py-3 text-fg outline-none transition-all duration-200 placeholder:text-fg-muted/70 focus:border-primary focus:ring-2 focus:ring-ring/40'

const panelMotion = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.25 },
}

export default function ContactForm() {
  const { translations } = useLanguage()
  const [activeTab, setActiveTab] = useState<TabId>('form')
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' })
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')
  const submitButtonRef = useRef<HTMLButtonElement>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitStatus('loading')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!response.ok) throw new Error('Submission failed')
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitStatus('idle'), 4000)
    } catch {
      setSubmitStatus('error')
      setTimeout(() => {
        setSubmitStatus('idle')
        submitButtonRef.current?.focus()
      }, 4000)
    }
  }

  const tabs: { id: TabId; label: string }[] = [
    { id: 'form', label: translations.contact.tabs.form },
    { id: 'info', label: translations.contact.tabs.info },
    { id: 'social', label: translations.contact.tabs.social },
  ]

  const socials: SocialLink[] = [
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ]

  return (
    <Section id="contact" aria-labelledby="contact-title">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="Contact"
          title={translations.contact.title}
          subtitle={translations.contact.subtitle}
          titleId="contact-title"
        />

        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-2xl border border-border bg-surface p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                aria-pressed={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-xl px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-card text-primary shadow-soft'
                    : 'text-fg-muted hover:text-fg'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-contact-card rounded-5xl border border-border bg-card p-8 shadow-card sm:p-12">
          <AnimatePresence mode="wait">
            {activeTab === 'form' && (
              <m.div key="form" {...panelMotion}>
                <div aria-live="polite" aria-atomic="true">
                  {submitStatus === 'success' && (
                    <div className="py-12 text-center">
                      <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-500/15">
                        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="mb-2 text-2xl font-bold text-fg">{translations.contact.form.successTitle}</h3>
                      <p className="text-fg-muted">{translations.contact.form.successMessage}</p>
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <p className="py-4 text-center font-medium text-red-500">Something went wrong. Please try again.</p>
                  )}
                </div>

                {(submitStatus === 'idle' || submitStatus === 'loading') && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-fg">
                          {translations.contact.form.name}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={inputClass}
                          placeholder={translations.contact.form.namePlaceholder}
                          aria-label={translations.contact.form.name}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-fg">
                          {translations.contact.form.email}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={inputClass}
                          placeholder={translations.contact.form.emailPlaceholder}
                          aria-label={translations.contact.form.email}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-semibold text-fg">
                        {translations.contact.form.message}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className={`${inputClass} resize-none`}
                        placeholder={translations.contact.form.messagePlaceholder}
                        aria-label={translations.contact.form.message}
                      />
                    </div>
                    <Button
                      ref={submitButtonRef}
                      type="submit"
                      size="lg"
                      disabled={submitStatus === 'loading'}
                      className="w-full"
                      aria-label={translations.contact.form.send}
                    >
                      {submitStatus === 'loading' ? (
                        <>
                          <svg className="-ml-1 mr-2 h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        translations.contact.form.send
                      )}
                    </Button>
                  </form>
                )}
              </m.div>
            )}

            {activeTab === 'info' && (
              <m.div key="info" {...panelMotion} className="flex flex-col items-center justify-center gap-10 py-12">
                {[
                  {
                    label: 'Email',
                    value: 'hello@flowtowork.com',
                    href: 'mailto:hello@flowtowork.com',
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    ),
                  },
                  {
                    label: 'Phone',
                    value: '+1 (234) 567-890',
                    href: 'tel:+1234567890',
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    ),
                  },
                ].map((item) => (
                  <div key={item.label} className="group text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-fg">
                      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        {item.icon}
                      </svg>
                    </div>
                    <h4 className="mb-1 text-xl font-bold text-fg">{item.label}</h4>
                    <a href={item.href} className="text-lg font-medium text-primary transition-colors hover:text-secondary">
                      {item.value}
                    </a>
                  </div>
                ))}
              </m.div>
            )}

            {activeTab === 'social' && (
              <m.div key="social" {...panelMotion} className="flex flex-wrap justify-center gap-8 py-12">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center"
                  >
                    <span className="mb-3 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-surface text-fg-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-primary group-hover:text-primary-fg group-hover:shadow-glow-primary">
                      {social.icon}
                    </span>
                    <span className="text-sm font-bold text-fg-muted transition-colors group-hover:text-primary">
                      {social.name}
                    </span>
                  </a>
                ))}
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  )
}
