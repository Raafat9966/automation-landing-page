'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'

export default function EducationalSection() {
  const { translations } = useLanguage()
  const { education } = translations

  return (
    <section id="education" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            {education.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {education.introduction}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {/* Automation Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-gray-100 flex flex-col h-full"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{education.automation.title}</h3>
                <p className="text-primary font-medium">{education.automation.subtitle}</p>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {education.automation.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">{education.automation.examples.title}</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {education.automation.examples.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* AI Agents Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-gray-100 flex flex-col h-full relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -mr-16 -mt-16"></div>
            
            <div className="mb-6 flex items-center gap-4">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{education.aiAgents.title}</h3>
                <p className="text-secondary font-medium">{education.aiAgents.subtitle}</p>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {education.aiAgents.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-secondary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">{education.aiAgents.examples.title}</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {education.aiAgents.examples.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl border border-primary/10 text-center"
        >
          <p className="text-lg text-gray-800 font-medium">
            {education.summary}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
