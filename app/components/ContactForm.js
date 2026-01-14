'use client'

import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'

export default function ContactForm() {
  const { translations } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)

    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="contact-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="contact-title" className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {translations.contact.title}
          </h2>
          <p className="text-xl text-gray-600">
            {translations.contact.subtitle}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-gray-100">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{translations.contact.form.successTitle}</h3>
              <p className="text-gray-600">{translations.contact.form.successMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  {translations.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 outline-none"
                  placeholder={translations.contact.form.namePlaceholder}
                  aria-label={translations.contact.form.name}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  {translations.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 outline-none"
                  placeholder={translations.contact.form.emailPlaceholder}
                  aria-label={translations.contact.form.email}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  {translations.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 outline-none resize-none"
                  placeholder={translations.contact.form.messagePlaceholder}
                  aria-label={translations.contact.form.message}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-highlight hover:bg-highlight/90 text-white font-bold text-lg py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-highlight/50"
                aria-label={translations.contact.form.send}
              >
                {translations.contact.form.send}
              </button>
            </form>
          )}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">{translations.contact.direct}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-gray-700">
              <a
                href="mailto:hello@flowtowork.com"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors duration-300"
                aria-label="Email us at hello@flowtowork.com"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@flowtowork.com
              </a>
              <span className="hidden sm:inline text-gray-400" aria-hidden="true">|</span>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors duration-300"
                aria-label="Call us at +1 (234) 567-890"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (234) 567-890
              </a>
          </div>
        </div>
      </div>
    </section>
  )
}

