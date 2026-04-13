'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function DigitalMarketingPage() {
  const { translations } = useLanguage()
  const { digitalMarketing } = translations

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  }

  const sectionIcons = [
    // SEO & Content Strategy — magnifying glass over a document
    <svg key={0} className="w-24 h-24" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>,
    // Social Media Management — share / network nodes
    <svg key={1} className="w-24 h-24" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
    </svg>,
    // Paid Advertising Optimization — bar chart trending up
    <svg key={2} className="w-24 h-24" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941M3 21h18M3 10.5h.008v.008H3V10.5zm0 4.5h.008v.008H3V15zm3-4.5h.008v.008H6V10.5zm0 4.5h.008v.008H6V15zm3-9h.008v.008H9V6zm0 9h.008v.008H9V15zm3-6h.008v.008H12V9zm0 6h.008v.008H12V15zm3-9h.008v.008H15V6zm0 9h.008v.008H15V15zm3-6h.008v.008H18V9zm0 6h.008v.008H18V15z" />
    </svg>,
    // Email Marketing Campaigns — envelope with sparkle
    <svg key={3} className="w-24 h-24" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>,
    // Conversion Rate Optimization — funnel
    <svg key={4} className="w-24 h-24" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
    </svg>,
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6"
            >
              {digitalMarketing.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              {digitalMarketing.hero.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* 5 Marketing Sections */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-24"
          >
            {digitalMarketing.sections.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}
              >
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary font-bold text-xl mb-2">
                    {index + 1}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{section.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">{section.description}</p>
                  <ul className="space-y-3">
                    {section.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-700">
                        <svg
                          className="w-5 h-5 text-primary mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-video bg-gray-100 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center border border-gray-100 group">
                    <div className="text-primary/30 group-hover:scale-110 transition-transform duration-500">
                      {sectionIcons[index]}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
