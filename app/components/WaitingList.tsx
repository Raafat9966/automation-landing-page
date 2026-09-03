'use client'

import { useState, FormEvent, ChangeEvent, useEffect, useRef } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import Button from './ui/Button'

type Status = 'idle' | 'loading' | 'success' | 'error'

interface WaitlistFormData {
  name: string
  email: string
  company: string
  interest: string
}

const EMAIL_RE =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const inputClass =
  'w-full rounded-xl border border-border bg-surface px-4 py-3 text-fg outline-none transition-all duration-200 placeholder:text-fg-muted/70 focus:border-primary focus:ring-2 focus:ring-ring/40'

export default function WaitingList() {
  const { translations, isWaitlistModalOpen, setIsWaitlistModalOpen } = useLanguage()
  const modalRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  const [formData, setFormData] = useState<WaitlistFormData>({ name: '', email: '', company: '', interest: '' })
  const [status, setStatus] = useState<Status>('idle')

  useEffect(() => {
    if (isWaitlistModalOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement
      modalRef.current
        ?.querySelector<HTMLElement>('button, input, select, textarea, [href], [tabindex]:not([tabindex="-1"])')
        ?.focus()
    } else {
      previousFocusRef.current?.focus()
    }
  }, [isWaitlistModalOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isWaitlistModalOpen || !modalRef.current) return
      if (e.key === 'Escape') {
        setIsWaitlistModalOpen(false)
        return
      }
      if (e.key === 'Tab') {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        )
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isWaitlistModalOpen, setIsWaitlistModalOpen])

  useEffect(() => {
    document.body.style.overflow = isWaitlistModalOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isWaitlistModalOpen])

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!EMAIL_RE.test(formData.email.toLowerCase())) {
      setStatus('error')
      return
    }
    setStatus('loading')
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!response.ok) throw new Error('Submission failed')
      setStatus('success')
      setFormData({ name: '', email: '', company: '', interest: '' })
    } catch (error) {
      console.error('Submission error:', error)
      setStatus('error')
    }
  }

  const { form } = translations.waitlist

  return (
    <AnimatePresence>
      {isWaitlistModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsWaitlistModalOpen(false)}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          <m.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="waitlist-modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-5xl border border-border bg-card shadow-lift"
          >
            <button
              onClick={() => setIsWaitlistModalOpen(false)}
              className="absolute right-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-surface hover:text-fg"
              aria-label="Close modal"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="max-h-[90vh] overflow-y-auto p-8 sm:p-12">
              <div className="mb-8 text-center">
                <h3 id="waitlist-modal-title" className="text-2xl font-bold text-fg sm:text-3xl">
                  {translations.waitlist.title}
                </h3>
                <p className="mt-2 text-fg-muted">{translations.waitlist.subtitle}</p>
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <m.div
                    key="success"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    className="py-8 text-center"
                  >
                    <div className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-500/15">
                      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-fg">{form.successTitle}</h3>
                    <p className="text-lg text-fg-muted">{form.successMessage}</p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-8 font-semibold text-primary hover:underline"
                    >
                      {form.joinAnother}
                    </button>
                  </m.div>
                ) : (
                  <m.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 gap-5 text-left sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="modal-name" className="block text-sm font-semibold text-fg">
                          {form.name}
                        </label>
                        <input
                          type="text"
                          id="modal-name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={inputClass}
                          placeholder={form.namePlaceholder}
                          aria-label={form.name}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="modal-email" className="block text-sm font-semibold text-fg">
                          {form.email}
                        </label>
                        <input
                          type="email"
                          id="modal-email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={inputClass}
                          placeholder={form.emailPlaceholder}
                          aria-label={form.email}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 text-left sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="modal-company" className="block text-sm font-semibold text-fg">
                          {form.company}
                        </label>
                        <input
                          type="text"
                          id="modal-company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder={form.companyPlaceholder}
                          aria-label={form.company}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="modal-interest" className="block text-sm font-semibold text-fg">
                          {form.interest}
                        </label>
                        <select
                          id="modal-interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          required
                          className={`${inputClass} bg-surface`}
                          aria-label={form.interest}
                        >
                          <option value="" disabled>
                            {form.interestOptions.placeholder}
                          </option>
                          <option value="automation">{form.interestOptions.automation}</option>
                          <option value="agents">{form.interestOptions.agents}</option>
                          <option value="both">{form.interestOptions.both}</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Button type="submit" size="lg" disabled={status === 'loading'} className="w-full">
                        {status === 'loading' ? (
                          <>
                            <svg className="-ml-1 mr-2 h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            {form.loading}
                          </>
                        ) : (
                          form.submit
                        )}
                      </Button>
                      <p className="mt-4 text-center text-sm text-fg-muted">{form.spamNote}</p>
                    </div>

                    <div aria-live="polite" aria-atomic="true">
                      {status === 'error' && (
                        <p className="mt-2 text-center font-medium text-red-500">{form.error}</p>
                      )}
                    </div>
                  </m.form>
                )}
              </AnimatePresence>
            </div>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  )
}
