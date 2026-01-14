'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'

export default function WaitingList() {
  const { translations, isWaitlistModalOpen, setIsWaitlistModalOpen } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: ''
  })
  const [status, setStatus] = useState('idle') // idle, loading, success, error

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateEmail(formData.email)) {
      setStatus('error')
      return
    }

    setStatus('loading')

    try {
      // Simulate API route or Webhook (n8n-ready) submission
      // In a real scenario, you would use:
      // await fetch('/api/waitlist', { method: 'POST', body: JSON.stringify(formData) })
      
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log('Waitlist submission:', formData)
      setStatus('success')
      
      // Reset form after success (optional, but keep success state visible)
      setFormData({
        name: '',
        email: '',
        company: '',
        interest: ''
      })
    } catch (error) {
      console.error('Submission error:', error)
      setStatus('error')
    }
  }

  return (
    <AnimatePresence>
      {isWaitlistModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsWaitlistModalOpen(false)}
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden"
          >
            <button 
              onClick={() => setIsWaitlistModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-10"
              aria-label="Close modal"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8 sm:p-12 max-h-[90vh] overflow-y-auto">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{translations.waitlist.title}</h3>
                <p className="text-gray-600">{translations.waitlist.subtitle}</p>
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-center py-8"
                  >
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                      <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{translations.waitlist.form.successTitle}</h3>
                    <p className="text-xl text-gray-600">{translations.waitlist.form.successMessage}</p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="mt-8 text-primary font-semibold hover:underline"
                    >
                      {translations.waitlist.form.joinAnother}
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                      <div className="space-y-2">
                        <label htmlFor="modal-name" className="block text-sm font-semibold text-gray-700">
                          {translations.waitlist.form.name}
                        </label>
                        <input
                          type="text"
                          id="modal-name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                          placeholder={translations.waitlist.form.namePlaceholder}
                          aria-label={translations.waitlist.form.name}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="modal-email" className="block text-sm font-semibold text-gray-700">
                          {translations.waitlist.form.email}
                        </label>
                        <input
                          type="email"
                          id="modal-email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                          placeholder={translations.waitlist.form.emailPlaceholder}
                          aria-label={translations.waitlist.form.email}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                      <div className="space-y-2">
                        <label htmlFor="modal-company" className="block text-sm font-semibold text-gray-700">
                          {translations.waitlist.form.company}
                        </label>
                        <input
                          type="text"
                          id="modal-company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                          placeholder={translations.waitlist.form.companyPlaceholder}
                          aria-label={translations.waitlist.form.company}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="modal-interest" className="block text-sm font-semibold text-gray-700">
                          {translations.waitlist.form.interest}
                        </label>
                        <select
                          id="modal-interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none bg-white"
                          aria-label={translations.waitlist.form.interest}
                        >
                          <option value="" disabled>{translations.waitlist.form.interestOptions.placeholder}</option>
                          <option value="automation">{translations.waitlist.form.interestOptions.automation}</option>
                          <option value="agents">{translations.waitlist.form.interestOptions.agents}</option>
                          <option value="both">{translations.waitlist.form.interestOptions.both}</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full bg-highlight hover:bg-highlight/90 text-white font-bold text-xl py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center focus:outline-none"
                      >
                        {status === 'loading' ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {translations.waitlist.form.loading}
                          </>
                        ) : translations.waitlist.form.submit}
                      </button>
                      <p className="text-center text-sm text-gray-500 mt-4">
                        {translations.waitlist.form.spamNote}
                      </p>
                    </div>

                    {status === 'error' && (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-center font-medium mt-4"
                      >
                        {translations.waitlist.form.error}
                      </motion.p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
