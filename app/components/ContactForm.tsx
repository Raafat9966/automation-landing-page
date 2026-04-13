'use client'

import { useState, FormEvent, ChangeEvent, ReactElement, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'

type TabId = 'form' | 'info' | 'social'

interface FormData {
  name: string
  email: string
  message: string
}

interface Tab {
  id: TabId
  label: string
}

interface SocialLink {
  name: string
  url: string
  icon: ReactElement
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const { translations } = useLanguage()
  const [activeTab, setActiveTab] = useState<TabId>('form')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')
  const submitButtonRef = useRef<HTMLButtonElement>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
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

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })

      setTimeout(() => {
        setSubmitStatus('idle')
      }, 4000)
    } catch {
      setSubmitStatus('error')
      setTimeout(() => {
        setSubmitStatus('idle')
        submitButtonRef.current?.focus()
      }, 4000)
    }
  }

  const tabs: Tab[] = [
    { id: 'form', label: translations.contact.tabs.form },
    { id: 'info', label: translations.contact.tabs.info },
    { id: 'social', label: translations.contact.tabs.social },
  ]

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-br from-gray-50 to-white"
      aria-labelledby="contact-title"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 id="contact-title" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            {translations.contact.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-600">
            {translations.contact.subtitle}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-gray-100 rounded-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-100 max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'form' && (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div aria-live="polite" aria-atomic="true">
                  {submitStatus === 'success' && (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                        <svg
                          className="w-8 h-8 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {translations.contact.form.successTitle}
                      </h3>
                      <p className="text-gray-600">{translations.contact.form.successMessage}</p>
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="text-center py-4">
                      <p className="text-red-600 font-medium">
                        Something went wrong. Please try again.
                      </p>
                    </div>
                  )}
                </div>
                {(submitStatus === 'idle' || submitStatus === 'loading') && (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          {translations.contact.form.name}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 outline-none bg-gray-50"
                          placeholder={translations.contact.form.namePlaceholder}
                          aria-label={translations.contact.form.name}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          {translations.contact.form.email}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 outline-none bg-gray-50"
                          placeholder={translations.contact.form.emailPlaceholder}
                          aria-label={translations.contact.form.email}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        {translations.contact.form.message}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 outline-none bg-gray-50 resize-none"
                        placeholder={translations.contact.form.messagePlaceholder}
                        aria-label={translations.contact.form.message}
                      />
                    </div>

                    <button
                      ref={submitButtonRef}
                      type="submit"
                      disabled={submitStatus === 'loading'}
                      className="w-full bg-highlight hover:bg-highlight/90 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center focus:outline-none"
                      aria-label={translations.contact.form.send}
                    >
                      {submitStatus === 'loading' ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        translations.contact.form.send
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            )}

            {activeTab === 'info' && (
              <motion.div
                key="info"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-10"
              >
                <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6 text-center shadow-sm">
                  <div className="inline-flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-3xl bg-primary/10 text-primary">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Email</h4>
                  <a
                    href="mailto:raafat.basheer@yahoo.com"
                    className="text-sm text-gray-700 hover:text-primary transition-colors"
                  >
                    raafat.basheer@yahoo.com
                  </a>
                </div>

                <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6 text-center shadow-sm">
                  <div className="inline-flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-3xl bg-primary/10 text-primary">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Phone</h4>
                  <a
                    href="tel:+4938312155"
                    className="text-sm text-gray-700 hover:text-primary transition-colors"
                  >
                    +49 383 12155
                  </a>
                </div>
              </motion.div>
            )}

            {activeTab === 'social' && (
              <motion.div
                key="social"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-5 py-10"
              >
                {(
                  [
                    {
                      name: 'Instagram',
                      url: 'https://instagram.com/raafat_b',
                      label: '@raafat_b',
                      icon: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
                        </svg>
                      ),
                    },
                    {
                      name: 'GitHub',
                      url: 'https://github.com/Raafat9966',
                      label: 'Raafat9966',
                      icon: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ),
                    },
                    {
                      name: 'LinkedIn',
                      url: 'https://linkedin.com/in/raafat-basheer',
                      label: 'Raafat Basheer',
                      icon: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      ),
                    },
                  ] as Array<SocialLink & { label: string }>
                ).map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-3xl border border-gray-100 bg-gray-50 p-5 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    aria-label={social.name}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white text-primary shadow-sm">
                      {social.icon}
                    </div>
                    <span className="text-sm font-semibold text-gray-900">{social.label}</span>
                    <span className="text-xs text-gray-500">{social.name}</span>
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
