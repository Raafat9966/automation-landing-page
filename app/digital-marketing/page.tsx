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
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  }

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
            viewport={{ once: true, margin: "-100px" }}
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
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    {section.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {section.description}
                  </p>
                  <ul className="space-y-3">
                    {section.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-video bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-lg flex items-center justify-center border border-gray-100 group p-6">
                    <div className="w-full h-full group-hover:scale-[1.03] transition-transform duration-500">
                      {index === 0 && (
                        /* SEO & Content Strategy */
                        <svg viewBox="0 0 480 270" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Search bar */}
                          <rect x="80" y="30" width="320" height="45" rx="22" fill="white" stroke="#e5e7eb" strokeWidth="2" />
                          <circle cx="112" cy="52" r="12" stroke="#3F9AAE" strokeWidth="2" fill="none" />
                          <line x1="121" y1="61" x2="128" y2="68" stroke="#3F9AAE" strokeWidth="2.5" strokeLinecap="round" />
                          <rect x="140" y="45" width="120" height="8" rx="4" fill="#e5e7eb" />
                          <rect x="140" y="57" width="80" height="6" rx="3" fill="#f3f4f6" />
                          {/* Content blocks */}
                          <rect x="40" y="95" width="180" height="130" rx="12" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                          <rect x="55" y="110" width="100" height="8" rx="4" fill="#3F9AAE" opacity="0.6" />
                          <rect x="55" y="125" width="150" height="6" rx="3" fill="#e5e7eb" />
                          <rect x="55" y="137" width="140" height="6" rx="3" fill="#e5e7eb" />
                          <rect x="55" y="149" width="120" height="6" rx="3" fill="#e5e7eb" />
                          <rect x="55" y="165" width="80" height="20" rx="10" fill="#3F9AAE" opacity="0.1" stroke="#3F9AAE" strokeWidth="1" />
                          <text x="95" y="179" textAnchor="middle" fill="#3F9AAE" fontSize="8" fontWeight="600">#1 Rank</text>
                          {/* Keywords floating */}
                          <rect x="55" y="195" width="60" height="18" rx="9" fill="#79C9C5" opacity="0.15" />
                          <text x="85" y="208" textAnchor="middle" fill="#79C9C5" fontSize="7" fontWeight="600">keyword</text>
                          <rect x="120" y="195" width="50" height="18" rx="9" fill="#FFE2AF" opacity="0.4" />
                          <text x="145" y="208" textAnchor="middle" fill="#F96E5B" fontSize="7" fontWeight="600">SEO</text>
                          {/* Analytics panel */}
                          <rect x="240" y="95" width="200" height="130" rx="12" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                          <text x="260" y="115" fill="#374151" fontSize="10" fontWeight="700">Traffic Growth</text>
                          <polyline points="260,180 290,165 320,170 350,145 380,140 410,120" stroke="#79C9C5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                          <circle cx="410" cy="120" r="4" fill="#79C9C5" />
                          <line x1="260" y1="185" x2="420" y2="185" stroke="#f3f4f6" strokeWidth="1" />
                          <line x1="260" y1="165" x2="420" y2="165" stroke="#f3f4f6" strokeWidth="1" />
                          <line x1="260" y1="145" x2="420" y2="145" stroke="#f3f4f6" strokeWidth="1" />
                          {/* Growth arrow */}
                          <rect x="260" y="195" width="80" height="20" rx="10" fill="#79C9C5" opacity="0.1" />
                          <text x="300" y="209" textAnchor="middle" fill="#79C9C5" fontSize="9" fontWeight="700">+127%</text>
                        </svg>
                      )}
                      {index === 1 && (
                        /* Social Media Management */
                        <svg viewBox="0 0 480 270" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Social cards grid */}
                          <rect x="30" y="20" width="130" height="110" rx="12" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                          <rect x="42" y="32" width="106" height="50" rx="8" fill="#3F9AAE" opacity="0.08" />
                          <rect x="55" y="45" width="30" height="20" rx="4" fill="#3F9AAE" opacity="0.2" />
                          <rect x="90" y="50" width="45" height="5" rx="2.5" fill="#d1d5db" />
                          <rect x="90" y="59" width="30" height="4" rx="2" fill="#e5e7eb" />
                          <rect x="42" y="92" width="60" height="6" rx="3" fill="#e5e7eb" />
                          <rect x="42" y="103" width="90" height="5" rx="2.5" fill="#f3f4f6" />
                          <circle cx="130" cy="118" r="8" fill="#F96E5B" opacity="0.1" />
                          <text x="130" y="121" textAnchor="middle" fill="#F96E5B" fontSize="7">♥</text>

                          <rect x="175" y="20" width="130" height="110" rx="12" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                          <rect x="187" y="32" width="106" height="50" rx="8" fill="#79C9C5" opacity="0.08" />
                          <circle cx="240" cy="57" r="15" fill="#79C9C5" opacity="0.15" stroke="#79C9C5" strokeWidth="1" />
                          <path d="M235 57l4 4 8-8" stroke="#79C9C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <rect x="187" y="92" width="70" height="6" rx="3" fill="#e5e7eb" />
                          <rect x="187" y="103" width="100" height="5" rx="2.5" fill="#f3f4f6" />

                          <rect x="320" y="20" width="130" height="110" rx="12" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                          <rect x="332" y="32" width="106" height="50" rx="8" fill="#F96E5B" opacity="0.06" />
                          <rect x="345" y="45" width="80" height="8" rx="4" fill="#F96E5B" opacity="0.15" />
                          <rect x="345" y="58" width="60" height="6" rx="3" fill="#F96E5B" opacity="0.1" />
                          <rect x="332" y="92" width="80" height="6" rx="3" fill="#e5e7eb" />
                          <rect x="332" y="103" width="60" height="5" rx="2.5" fill="#f3f4f6" />

                          {/* Schedule timeline */}
                          <rect x="30" y="150" width="420" height="100" rx="12" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                          <text x="50" y="172" fill="#374151" fontSize="10" fontWeight="700">Post Schedule</text>
                          <line x1="50" y1="185" x2="430" y2="185" stroke="#f3f4f6" strokeWidth="1.5" />
                          {/* Timeline dots */}
                          <circle cx="80" cy="210" r="8" fill="#3F9AAE" opacity="0.2" stroke="#3F9AAE" strokeWidth="1.5" />
                          <line x1="88" y1="210" x2="140" y2="210" stroke="#e5e7eb" strokeWidth="1.5" />
                          <circle cx="150" cy="210" r="8" fill="#79C9C5" opacity="0.2" stroke="#79C9C5" strokeWidth="1.5" />
                          <line x1="158" y1="210" x2="210" y2="210" stroke="#e5e7eb" strokeWidth="1.5" />
                          <circle cx="220" cy="210" r="8" fill="#F96E5B" opacity="0.2" stroke="#F96E5B" strokeWidth="1.5" />
                          <line x1="228" y1="210" x2="280" y2="210" stroke="#e5e7eb" strokeWidth="1.5" />
                          <circle cx="290" cy="210" r="8" fill="#FFE2AF" opacity="0.5" stroke="#F96E5B" strokeWidth="1" />
                          <line x1="298" y1="210" x2="350" y2="210" stroke="#e5e7eb" strokeWidth="1.5" />
                          <circle cx="360" cy="210" r="8" fill="#3F9AAE" opacity="0.2" stroke="#3F9AAE" strokeWidth="1.5" />
                          <text x="80" y="232" textAnchor="middle" fill="#6b7280" fontSize="7">Mon</text>
                          <text x="150" y="232" textAnchor="middle" fill="#6b7280" fontSize="7">Tue</text>
                          <text x="220" y="232" textAnchor="middle" fill="#6b7280" fontSize="7">Wed</text>
                          <text x="290" y="232" textAnchor="middle" fill="#6b7280" fontSize="7">Thu</text>
                          <text x="360" y="232" textAnchor="middle" fill="#6b7280" fontSize="7">Fri</text>
                          {/* Auto badge */}
                          <rect x="370" y="160" width="55" height="22" rx="11" fill="#79C9C5" opacity="0.15" stroke="#79C9C5" strokeWidth="1" />
                          <text x="397" y="175" textAnchor="middle" fill="#79C9C5" fontSize="8" fontWeight="700">AUTO</text>
                        </svg>
                      )}
                      {index === 2 && (
                        /* Paid Advertising Optimization */
                        <svg viewBox="0 0 480 270" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Ad performance dashboard */}
                          <rect x="30" y="20" width="200" height="230" rx="14" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                          <text x="50" y="45" fill="#374151" fontSize="11" fontWeight="700">Ad Performance</text>
                          {/* Bar chart */}
                          <rect x="55" y="135" width="25" height="55" rx="4" fill="#3F9AAE" opacity="0.3" />
                          <rect x="90" y="115" width="25" height="75" rx="4" fill="#3F9AAE" opacity="0.5" />
                          <rect x="125" y="95" width="25" height="95" rx="4" fill="#79C9C5" opacity="0.6" />
                          <rect x="160" y="75" width="25" height="115" rx="4" fill="#79C9C5" />
                          <line x1="50" y1="195" x2="195" y2="195" stroke="#e5e7eb" strokeWidth="1" />
                          <text x="67" y="210" textAnchor="middle" fill="#9ca3af" fontSize="7">Q1</text>
                          <text x="102" y="210" textAnchor="middle" fill="#9ca3af" fontSize="7">Q2</text>
                          <text x="137" y="210" textAnchor="middle" fill="#9ca3af" fontSize="7">Q3</text>
                          <text x="172" y="210" textAnchor="middle" fill="#9ca3af" fontSize="7">Q4</text>
                          {/* ROI badge */}
                          <rect x="55" y="60" width="70" height="24" rx="12" fill="#79C9C5" opacity="0.1" stroke="#79C9C5" strokeWidth="1" />
                          <text x="90" y="76" textAnchor="middle" fill="#79C9C5" fontSize="10" fontWeight="700">ROI +340%</text>
                          {/* A/B Test panel */}
                          <rect x="250" y="20" width="200" height="105" rx="14" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                          <text x="270" y="45" fill="#374151" fontSize="10" fontWeight="700">A/B Testing</text>
                          <rect x="265" y="55" width="80" height="50" rx="8" fill="#3F9AAE" opacity="0.06" stroke="#3F9AAE" strokeWidth="1" />
                          <text x="305" y="73" textAnchor="middle" fill="#3F9AAE" fontSize="9" fontWeight="600">Version A</text>
                          <rect x="275" y="82" width="60" height="6" rx="3" fill="#3F9AAE" opacity="0.2" />
                          <text x="305" y="100" textAnchor="middle" fill="#3F9AAE" fontSize="8">3.2% CTR</text>
                          <rect x="355" y="55" width="80" height="50" rx="8" fill="#79C9C5" opacity="0.08" stroke="#79C9C5" strokeWidth="1.5" />
                          <text x="395" y="73" textAnchor="middle" fill="#79C9C5" fontSize="9" fontWeight="600">Version B</text>
                          <rect x="365" y="82" width="60" height="6" rx="3" fill="#79C9C5" opacity="0.3" />
                          <text x="395" y="100" textAnchor="middle" fill="#79C9C5" fontSize="8" fontWeight="700">5.8% CTR</text>
                          {/* Winner badge */}
                          <circle cx="430" cy="60" r="10" fill="#79C9C5" opacity="0.15" stroke="#79C9C5" strokeWidth="1" />
                          <path d="M426 60l3 3 5-6" stroke="#79C9C5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          {/* Targeting panel */}
                          <rect x="250" y="140" width="200" height="110" rx="14" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                          <text x="270" y="165" fill="#374151" fontSize="10" fontWeight="700">Smart Targeting</text>
                          <circle cx="290" cy="200" r="25" fill="#FFE2AF" opacity="0.3" stroke="#F96E5B" strokeWidth="1" />
                          <circle cx="310" cy="195" r="20" fill="#3F9AAE" opacity="0.1" stroke="#3F9AAE" strokeWidth="1" />
                          <circle cx="300" cy="210" r="18" fill="#79C9C5" opacity="0.1" stroke="#79C9C5" strokeWidth="1" />
                          <rect x="350" y="185" width="85" height="14" rx="7" fill="#3F9AAE" opacity="0.08" />
                          <text x="392" y="195" textAnchor="middle" fill="#3F9AAE" fontSize="7" fontWeight="600">Age 25-45</text>
                          <rect x="350" y="205" width="85" height="14" rx="7" fill="#79C9C5" opacity="0.08" />
                          <text x="392" y="215" textAnchor="middle" fill="#79C9C5" fontSize="7" fontWeight="600">Tech Interest</text>
                          <rect x="350" y="225" width="85" height="14" rx="7" fill="#F96E5B" opacity="0.06" />
                          <text x="392" y="235" textAnchor="middle" fill="#F96E5B" fontSize="7" fontWeight="600">High Intent</text>
                        </svg>
                      )}
                      {index === 3 && (
                        /* Email Marketing Campaigns */
                        <svg viewBox="0 0 480 270" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Email template */}
                          <rect x="30" y="20" width="190" height="230" rx="14" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                          <rect x="30" y="20" width="190" height="45" rx="14" fill="#3F9AAE" opacity="0.08" />
                          {/* Email icon */}
                          <rect x="55" y="35" width="24" height="18" rx="4" stroke="#3F9AAE" strokeWidth="1.5" fill="none" />
                          <path d="M55 37l12 9 12-9" stroke="#3F9AAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <rect x="90" y="37" width="80" height="7" rx="3.5" fill="#3F9AAE" opacity="0.3" />
                          <rect x="90" y="48" width="60" height="5" rx="2.5" fill="#3F9AAE" opacity="0.15" />
                          {/* Email body */}
                          <rect x="50" y="80" width="150" height="8" rx="4" fill="#e5e7eb" />
                          <rect x="50" y="95" width="130" height="6" rx="3" fill="#f3f4f6" />
                          <rect x="50" y="108" width="140" height="6" rx="3" fill="#f3f4f6" />
                          {/* CTA button in email */}
                          <rect x="70" y="125" width="90" height="28" rx="14" fill="#F96E5B" opacity="0.15" stroke="#F96E5B" strokeWidth="1" />
                          <text x="115" y="143" textAnchor="middle" fill="#F96E5B" fontSize="9" fontWeight="600">Shop Now</text>
                          {/* Personalization tag */}
                          <rect x="50" y="165" width="70" height="16" rx="8" fill="#79C9C5" opacity="0.1" stroke="#79C9C5" strokeWidth="1" />
                          <text x="85" y="177" textAnchor="middle" fill="#79C9C5" fontSize="7" fontWeight="600">{"{{name}}"}</text>
                          <rect x="130" y="165" width="60" height="16" rx="8" fill="#FFE2AF" opacity="0.3" />
                          <text x="160" y="177" textAnchor="middle" fill="#F96E5B" fontSize="7" fontWeight="600">Dynamic</text>
                          {/* Drip flow */}
                          <rect x="260" y="20" width="190" height="230" rx="14" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                          <text x="280" y="45" fill="#374151" fontSize="10" fontWeight="700">Drip Campaign</text>
                          {/* Flow nodes */}
                          <rect x="305" y="60" width="100" height="28" rx="14" fill="#3F9AAE" opacity="0.1" stroke="#3F9AAE" strokeWidth="1.5" />
                          <text x="355" y="78" textAnchor="middle" fill="#3F9AAE" fontSize="8" fontWeight="600">Welcome</text>
                          <line x1="355" y1="88" x2="355" y2="105" stroke="#79C9C5" strokeWidth="1.5" strokeDasharray="4 4" />
                          <rect x="305" y="105" width="100" height="28" rx="14" fill="#79C9C5" opacity="0.1" stroke="#79C9C5" strokeWidth="1.5" />
                          <text x="355" y="123" textAnchor="middle" fill="#79C9C5" fontSize="8" fontWeight="600">Day 3: Value</text>
                          <line x1="355" y1="133" x2="355" y2="150" stroke="#79C9C5" strokeWidth="1.5" strokeDasharray="4 4" />
                          <rect x="305" y="150" width="100" height="28" rx="14" fill="#FFE2AF" opacity="0.3" stroke="#F96E5B" strokeWidth="1" />
                          <text x="355" y="168" textAnchor="middle" fill="#F96E5B" fontSize="8" fontWeight="600">Day 7: Offer</text>
                          <line x1="355" y1="178" x2="355" y2="195" stroke="#F96E5B" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
                          <rect x="305" y="195" width="100" height="28" rx="14" fill="#F96E5B" opacity="0.08" stroke="#F96E5B" strokeWidth="1.5" />
                          <text x="355" y="213" textAnchor="middle" fill="#F96E5B" fontSize="8" fontWeight="600">Convert</text>
                          {/* Open rate */}
                          <rect x="275" y="232" width="70" height="16" rx="8" fill="#79C9C5" opacity="0.1" />
                          <text x="310" y="243" textAnchor="middle" fill="#79C9C5" fontSize="7" fontWeight="700">68% Open</text>
                          <rect x="355" y="232" width="70" height="16" rx="8" fill="#F96E5B" opacity="0.08" />
                          <text x="390" y="243" textAnchor="middle" fill="#F96E5B" fontSize="7" fontWeight="700">12% Click</text>
                        </svg>
                      )}
                      {index === 4 && (
                        /* Conversion Rate Optimization */
                        <svg viewBox="0 0 480 270" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Funnel visualization */}
                          <rect x="30" y="20" width="200" height="230" rx="14" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                          <text x="50" y="45" fill="#374151" fontSize="10" fontWeight="700">Conversion Funnel</text>
                          {/* Funnel layers */}
                          <path d="M55 65h150l-15 40h-120l-15-40z" fill="#3F9AAE" opacity="0.15" stroke="#3F9AAE" strokeWidth="1" />
                          <text x="130" y="90" textAnchor="middle" fill="#3F9AAE" fontSize="8" fontWeight="600">Visitors: 10,000</text>
                          <path d="M70 110h120l-12 40h-96l-12-40z" fill="#79C9C5" opacity="0.2" stroke="#79C9C5" strokeWidth="1" />
                          <text x="130" y="135" textAnchor="middle" fill="#79C9C5" fontSize="8" fontWeight="600">Leads: 2,400</text>
                          <path d="M82 155h96l-10 40h-76l-10-40z" fill="#FFE2AF" opacity="0.4" stroke="#F96E5B" strokeWidth="1" />
                          <text x="130" y="180" textAnchor="middle" fill="#F96E5B" fontSize="8" fontWeight="600">Trial: 600</text>
                          <path d="M92 200h76l-8 35h-60l-8-35z" fill="#F96E5B" opacity="0.2" stroke="#F96E5B" strokeWidth="1.5" />
                          <text x="130" y="222" textAnchor="middle" fill="#F96E5B" fontSize="8" fontWeight="700">Customers: 180</text>
                          {/* Heatmap / insights panel */}
                          <rect x="250" y="20" width="200" height="110" rx="14" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                          <text x="270" y="45" fill="#374151" fontSize="10" fontWeight="700">Heatmap Insights</text>
                          {/* Page mockup with heatmap */}
                          <rect x="270" y="55" width="70" height="60" rx="6" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
                          <rect x="278" y="63" width="54" height="6" rx="3" fill="#e5e7eb" />
                          <rect x="278" y="73" width="40" height="4" rx="2" fill="#f3f4f6" />
                          <rect x="278" y="82" width="54" height="12" rx="6" fill="#F96E5B" opacity="0.15" />
                          <circle cx="305" cy="88" r="8" fill="#F96E5B" opacity="0.3" />
                          <circle cx="305" cy="88" r="4" fill="#F96E5B" opacity="0.5" />
                          <rect x="278" y="98" width="40" height="4" rx="2" fill="#f3f4f6" />
                          {/* Metrics */}
                          <rect x="355" y="55" width="80" height="25" rx="8" fill="#79C9C5" opacity="0.1" />
                          <text x="395" y="72" textAnchor="middle" fill="#79C9C5" fontSize="9" fontWeight="700">+42% CTR</text>
                          <rect x="355" y="85" width="80" height="25" rx="8" fill="#F96E5B" opacity="0.08" />
                          <text x="395" y="102" textAnchor="middle" fill="#F96E5B" fontSize="9" fontWeight="700">-23% Bounce</text>
                          {/* Personalization */}
                          <rect x="250" y="145" width="200" height="105" rx="14" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                          <text x="270" y="170" fill="#374151" fontSize="10" fontWeight="700">Personalization</text>
                          <rect x="270" y="182" width="80" height="50" rx="8" fill="#3F9AAE" opacity="0.05" stroke="#3F9AAE" strokeWidth="1" />
                          <text x="310" y="200" textAnchor="middle" fill="#3F9AAE" fontSize="7" fontWeight="600">Segment A</text>
                          <rect x="280" y="210" width="60" height="6" rx="3" fill="#3F9AAE" opacity="0.3" />
                          <text x="310" y="228" textAnchor="middle" fill="#3F9AAE" fontSize="7">4.2% conv</text>
                          <rect x="360" y="182" width="80" height="50" rx="8" fill="#79C9C5" opacity="0.08" stroke="#79C9C5" strokeWidth="1.5" />
                          <text x="400" y="200" textAnchor="middle" fill="#79C9C5" fontSize="7" fontWeight="600">Segment B</text>
                          <rect x="370" y="210" width="60" height="6" rx="3" fill="#79C9C5" opacity="0.4" />
                          <text x="400" y="228" textAnchor="middle" fill="#79C9C5" fontSize="7" fontWeight="700">7.8% conv</text>
                        </svg>
                      )}
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
