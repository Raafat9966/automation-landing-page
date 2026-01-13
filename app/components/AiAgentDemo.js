'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'

export default function AiAgentDemo() {
  const { translations } = useLanguage()
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [displayedText, setDisplayedText] = useState('')

  const handleRunAgent = async (e) => {
    e.preventDefault()
    if (!prompt.trim()) return

    setIsLoading(true)
    setResponse('')
    setDisplayedText('')

    // Simulate AI API call
    setTimeout(() => {
      setResponse(translations.aiDemo.mockResponse)
      setIsLoading(false)
    }, 1500)
  }

  // Animated response text effect
  useEffect(() => {
    if (response && !isLoading) {
      let charIndex = 0
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + response[charIndex])
        charIndex++
        if (charIndex >= response.length) {
          clearInterval(interval)
        }
      }, 20)
      return () => clearInterval(interval)
    }
  }, [response, isLoading])

  return (
    <section id="ai-demo" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            {translations.aiDemo.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            {translations.aiDemo.subtitle}
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl p-6 sm:p-10 shadow-inner border border-gray-200"
          >
            <form onSubmit={handleRunAgent} className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder={translations.aiDemo.inputPlaceholder}
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-800 bg-white"
                  disabled={isLoading}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading || !prompt.trim()}
                className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Processing...</span>
                  </>
                ) : (
                  <span>{translations.aiDemo.buttonLabel}</span>
                )}
              </button>
            </form>

            <AnimatePresence>
              {(isLoading || displayedText) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-8 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm"
                >
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    {translations.aiDemo.responseTitle}
                  </h4>
                  <div className="text-gray-800 leading-relaxed min-h-[4rem]">
                    {isLoading ? (
                      <div className="flex space-x-2 items-center">
                        <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-75"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-150"></div>
                      </div>
                    ) : (
                      <p>{displayedText}</p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
