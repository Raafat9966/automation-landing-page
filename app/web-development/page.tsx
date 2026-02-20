'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function WebDevelopmentPage() {
  const { translations } = useLanguage()
  const { webDevelopment } = translations

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
              {webDevelopment.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              {webDevelopment.hero.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-24"
          >
            {webDevelopment.sections.map((section, index) => (
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
                        /* Custom Web Applications */
                        <svg viewBox="0 0 480 270" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Browser window */}
                          <rect x="30" y="20" width="420" height="230" rx="14" fill="white" stroke="#e5e7eb" strokeWidth="2" />
                          <rect x="30" y="20" width="420" height="35" rx="14" fill="#f9fafb" />
                          <circle cx="52" cy="37" r="5" fill="#F96E5B" opacity="0.6" />
                          <circle cx="68" cy="37" r="5" fill="#FFE2AF" opacity="0.8" />
                          <circle cx="84" cy="37" r="5" fill="#79C9C5" opacity="0.6" />
                          <rect x="120" y="30" width="200" height="16" rx="8" fill="#e5e7eb" />
                          <rect x="130" y="35" width="100" height="6" rx="3" fill="#d1d5db" />
                          {/* App layout - sidebar */}
                          <rect x="40" y="65" width="80" height="175" rx="8" fill="#3F9AAE" opacity="0.06" stroke="#3F9AAE" strokeWidth="1" />
                          <rect x="50" y="80" width="60" height="8" rx="4" fill="#3F9AAE" opacity="0.3" />
                          <rect x="50" y="98" width="55" height="6" rx="3" fill="#e5e7eb" />
                          <rect x="50" y="112" width="45" height="6" rx="3" fill="#e5e7eb" />
                          <rect x="50" y="126" width="55" height="6" rx="3" fill="#3F9AAE" opacity="0.15" />
                          <rect x="50" y="140" width="40" height="6" rx="3" fill="#e5e7eb" />
                          <rect x="50" y="154" width="50" height="6" rx="3" fill="#e5e7eb" />
                          {/* Main content area */}
                          <rect x="130" y="65" width="310" height="50" rx="8" fill="#3F9AAE" opacity="0.04" stroke="#3F9AAE" strokeWidth="1" />
                          <rect x="145" y="78" width="120" height="10" rx="5" fill="#3F9AAE" opacity="0.2" />
                          <rect x="145" y="94" width="80" height="7" rx="3.5" fill="#e5e7eb" />
                          {/* Dashboard cards */}
                          <rect x="130" y="125" width="95" height="60" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                          <rect x="142" y="137" width="50" height="7" rx="3.5" fill="#79C9C5" opacity="0.3" />
                          <text x="170" y="165" textAnchor="middle" fill="#79C9C5" fontSize="14" fontWeight="700">248</text>
                          <rect x="237" y="125" width="95" height="60" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                          <rect x="249" y="137" width="50" height="7" rx="3.5" fill="#3F9AAE" opacity="0.3" />
                          <text x="284" y="165" textAnchor="middle" fill="#3F9AAE" fontSize="14" fontWeight="700">1.2k</text>
                          <rect x="344" y="125" width="95" height="60" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                          <rect x="356" y="137" width="50" height="7" rx="3.5" fill="#F96E5B" opacity="0.3" />
                          <text x="391" y="165" textAnchor="middle" fill="#F96E5B" fontSize="14" fontWeight="700">94%</text>
                          {/* Data table */}
                          <rect x="130" y="195" width="310" height="40" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1" />
                          <rect x="145" y="205" width="80" height="6" rx="3" fill="#e5e7eb" />
                          <rect x="245" y="205" width="60" height="6" rx="3" fill="#e5e7eb" />
                          <rect x="325" y="205" width="40" height="6" rx="3" fill="#79C9C5" opacity="0.3" />
                          <rect x="385" y="202" width="40" height="12" rx="6" fill="#79C9C5" opacity="0.1" />
                          <rect x="145" y="220" width="70" height="6" rx="3" fill="#f3f4f6" />
                          <rect x="245" y="220" width="50" height="6" rx="3" fill="#f3f4f6" />
                          <rect x="325" y="220" width="35" height="6" rx="3" fill="#3F9AAE" opacity="0.2" />
                        </svg>
                      )}
                      {index === 1 && (
                        /* E-commerce Solutions */
                        <svg viewBox="0 0 480 270" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Product grid */}
                          <rect x="30" y="20" width="280" height="230" rx="14" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                          <text x="50" y="45" fill="#374151" fontSize="11" fontWeight="700">Products</text>
                          {/* Product cards */}
                          <rect x="45" y="55" width="120" height="90" rx="8" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
                          <rect x="55" y="63" width="100" height="40" rx="6" fill="#3F9AAE" opacity="0.06" />
                          <rect x="75" y="73" width="60" height="20" rx="4" fill="#3F9AAE" opacity="0.1" />
                          <rect x="55" y="110" width="70" height="6" rx="3" fill="#e5e7eb" />
                          <rect x="55" y="122" width="40" height="8" rx="4" fill="#3F9AAE" opacity="0.3" />
                          <rect x="120" y="120" width="35" height="18" rx="9" fill="#F96E5B" opacity="0.12" stroke="#F96E5B" strokeWidth="1" />
                          <text x="137" y="133" textAnchor="middle" fill="#F96E5B" fontSize="7" fontWeight="600">Add</text>

                          <rect x="175" y="55" width="120" height="90" rx="8" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
                          <rect x="185" y="63" width="100" height="40" rx="6" fill="#79C9C5" opacity="0.06" />
                          <rect x="205" y="73" width="60" height="20" rx="4" fill="#79C9C5" opacity="0.1" />
                          <rect x="185" y="110" width="70" height="6" rx="3" fill="#e5e7eb" />
                          <rect x="185" y="122" width="40" height="8" rx="4" fill="#79C9C5" opacity="0.3" />
                          <rect x="250" y="120" width="35" height="18" rx="9" fill="#F96E5B" opacity="0.12" stroke="#F96E5B" strokeWidth="1" />
                          <text x="267" y="133" textAnchor="middle" fill="#F96E5B" fontSize="7" fontWeight="600">Add</text>
                          {/* Category filters */}
                          <rect x="45" y="155" width="55" height="20" rx="10" fill="#3F9AAE" opacity="0.1" stroke="#3F9AAE" strokeWidth="1" />
                          <text x="72" y="169" textAnchor="middle" fill="#3F9AAE" fontSize="7" fontWeight="600">All</text>
                          <rect x="108" y="155" width="55" height="20" rx="10" fill="#f3f4f6" />
                          <text x="135" y="169" textAnchor="middle" fill="#9ca3af" fontSize="7">New</text>
                          <rect x="171" y="155" width="55" height="20" rx="10" fill="#f3f4f6" />
                          <text x="198" y="169" textAnchor="middle" fill="#9ca3af" fontSize="7">Sale</text>
                          {/* More products */}
                          <rect x="45" y="185" width="120" height="50" rx="8" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
                          <rect x="55" y="193" width="40" height="25" rx="4" fill="#FFE2AF" opacity="0.3" />
                          <rect x="100" y="195" width="50" height="6" rx="3" fill="#e5e7eb" />
                          <rect x="100" y="207" width="35" height="6" rx="3" fill="#e5e7eb" />
                          <rect x="175" y="185" width="120" height="50" rx="8" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
                          <rect x="185" y="193" width="40" height="25" rx="4" fill="#F96E5B" opacity="0.08" />
                          <rect x="230" y="195" width="50" height="6" rx="3" fill="#e5e7eb" />
                          <rect x="230" y="207" width="35" height="6" rx="3" fill="#e5e7eb" />
                          {/* Cart sidebar */}
                          <rect x="330" y="20" width="120" height="230" rx="14" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                          <text x="350" y="45" fill="#374151" fontSize="10" fontWeight="700">Cart (3)</text>
                          <line x1="340" y1="55" x2="440" y2="55" stroke="#f3f4f6" strokeWidth="1" />
                          {/* Cart items */}
                          <rect x="345" y="65" width="30" height="25" rx="4" fill="#3F9AAE" opacity="0.08" />
                          <rect x="380" y="68" width="55" height="5" rx="2.5" fill="#e5e7eb" />
                          <rect x="380" y="78" width="35" height="5" rx="2.5" fill="#3F9AAE" opacity="0.2" />
                          <rect x="345" y="100" width="30" height="25" rx="4" fill="#79C9C5" opacity="0.08" />
                          <rect x="380" y="103" width="55" height="5" rx="2.5" fill="#e5e7eb" />
                          <rect x="380" y="113" width="35" height="5" rx="2.5" fill="#79C9C5" opacity="0.2" />
                          <rect x="345" y="135" width="30" height="25" rx="4" fill="#FFE2AF" opacity="0.3" />
                          <rect x="380" y="138" width="55" height="5" rx="2.5" fill="#e5e7eb" />
                          <rect x="380" y="148" width="35" height="5" rx="2.5" fill="#F96E5B" opacity="0.2" />
                          <line x1="340" y1="175" x2="440" y2="175" stroke="#e5e7eb" strokeWidth="1" />
                          <text x="350" y="195" fill="#374151" fontSize="9" fontWeight="600">Total:</text>
                          <text x="435" y="195" textAnchor="end" fill="#3F9AAE" fontSize="11" fontWeight="700">$249.00</text>
                          {/* Checkout button */}
                          <rect x="345" y="210" width="95" height="28" rx="14" fill="#F96E5B" opacity="0.15" stroke="#F96E5B" strokeWidth="1.5" />
                          <text x="392" y="228" textAnchor="middle" fill="#F96E5B" fontSize="9" fontWeight="700">Checkout</text>
                        </svg>
                      )}
                      {index === 2 && (
                        /* Frontend Development */
                        <svg viewBox="0 0 480 270" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Code editor */}
                          <rect x="30" y="20" width="250" height="230" rx="14" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                          <rect x="30" y="20" width="250" height="30" rx="14" fill="#334155" />
                          <circle cx="50" cy="35" r="4" fill="#F96E5B" opacity="0.7" />
                          <circle cx="63" cy="35" r="4" fill="#FFE2AF" opacity="0.7" />
                          <circle cx="76" cy="35" r="4" fill="#79C9C5" opacity="0.7" />
                          <text x="140" y="39" textAnchor="middle" fill="#94a3b8" fontSize="8">Component.tsx</text>
                          {/* Code lines */}
                          <text x="45" y="72" fill="#64748b" fontSize="8">1</text>
                          <text x="65" y="72" fill="#c084fc" fontSize="8" fontFamily="monospace">import</text>
                          <text x="105" y="72" fill="#94a3b8" fontSize="8" fontFamily="monospace">React</text>
                          <text x="140" y="72" fill="#c084fc" fontSize="8" fontFamily="monospace">from</text>
                          <text x="170" y="72" fill="#79C9C5" fontSize="8" fontFamily="monospace">{`'react'`}</text>
                          <text x="45" y="87" fill="#64748b" fontSize="8">2</text>
                          <text x="45" y="102" fill="#64748b" fontSize="8">3</text>
                          <text x="65" y="102" fill="#c084fc" fontSize="8" fontFamily="monospace">export</text>
                          <text x="107" y="102" fill="#c084fc" fontSize="8" fontFamily="monospace">function</text>
                          <text x="157" y="102" fill="#FFE2AF" fontSize="8" fontFamily="monospace">Card</text>
                          <text x="180" y="102" fill="#94a3b8" fontSize="8" fontFamily="monospace">() {"{"}</text>
                          <text x="45" y="117" fill="#64748b" fontSize="8">4</text>
                          <text x="75" y="117" fill="#c084fc" fontSize="8" fontFamily="monospace">return</text>
                          <text x="110" y="117" fill="#94a3b8" fontSize="8" fontFamily="monospace">(</text>
                          <text x="45" y="132" fill="#64748b" fontSize="8">5</text>
                          <text x="85" y="132" fill="#F96E5B" fontSize="8" fontFamily="monospace">{"<div"}</text>
                          <text x="115" y="132" fill="#79C9C5" fontSize="8" fontFamily="monospace">className=</text>
                          <text x="180" y="132" fill="#FFE2AF" fontSize="8" fontFamily="monospace">{`"card"`}</text>
                          <text x="210" y="132" fill="#F96E5B" fontSize="8" fontFamily="monospace">{">"}</text>
                          <text x="45" y="147" fill="#64748b" fontSize="8">6</text>
                          <text x="95" y="147" fill="#F96E5B" fontSize="8" fontFamily="monospace">{"<h2>"}</text>
                          <text x="120" y="147" fill="#e2e8f0" fontSize="8" fontFamily="monospace">Title</text>
                          <text x="147" y="147" fill="#F96E5B" fontSize="8" fontFamily="monospace">{"</h2>"}</text>
                          <text x="45" y="162" fill="#64748b" fontSize="8">7</text>
                          <text x="95" y="162" fill="#F96E5B" fontSize="8" fontFamily="monospace">{"<p>"}</text>
                          <text x="115" y="162" fill="#e2e8f0" fontSize="8" fontFamily="monospace">Content</text>
                          <text x="160" y="162" fill="#F96E5B" fontSize="8" fontFamily="monospace">{"</p>"}</text>
                          <text x="45" y="177" fill="#64748b" fontSize="8">8</text>
                          <text x="85" y="177" fill="#F96E5B" fontSize="8" fontFamily="monospace">{"</div>"}</text>
                          <text x="45" y="192" fill="#64748b" fontSize="8">9</text>
                          <text x="75" y="192" fill="#94a3b8" fontSize="8" fontFamily="monospace">)</text>
                          <text x="45" y="207" fill="#64748b" fontSize="8">10</text>
                          <text x="65" y="207" fill="#94a3b8" fontSize="8" fontFamily="monospace">{"}"}</text>
                          {/* Preview panel */}
                          <rect x="300" y="20" width="150" height="230" rx="14" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                          <text x="320" y="45" fill="#374151" fontSize="10" fontWeight="700">Preview</text>
                          <line x1="310" y1="55" x2="440" y2="55" stroke="#f3f4f6" strokeWidth="1" />
                          {/* Component preview */}
                          <rect x="315" y="70" width="120" height="80" rx="10" fill="white" stroke="#3F9AAE" strokeWidth="1.5" />
                          <rect x="315" y="70" width="120" height="25" rx="10" fill="#3F9AAE" opacity="0.06" />
                          <rect x="330" y="80" width="60" height="7" rx="3.5" fill="#3F9AAE" opacity="0.4" />
                          <rect x="330" y="105" width="90" height="5" rx="2.5" fill="#e5e7eb" />
                          <rect x="330" y="115" width="70" height="5" rx="2.5" fill="#e5e7eb" />
                          <rect x="330" y="125" width="80" height="5" rx="2.5" fill="#f3f4f6" />
                          {/* Responsive indicators */}
                          <rect x="315" y="170" width="35" height="25" rx="4" fill="#3F9AAE" opacity="0.08" stroke="#3F9AAE" strokeWidth="1" />
                          <text x="332" y="187" textAnchor="middle" fill="#3F9AAE" fontSize="7" fontWeight="600">XL</text>
                          <rect x="358" y="170" width="30" height="25" rx="4" fill="#79C9C5" opacity="0.08" stroke="#79C9C5" strokeWidth="1" />
                          <text x="373" y="187" textAnchor="middle" fill="#79C9C5" fontSize="7" fontWeight="600">MD</text>
                          <rect x="396" y="170" width="25" height="25" rx="4" fill="#FFE2AF" opacity="0.3" stroke="#F96E5B" strokeWidth="1" />
                          <text x="408" y="187" textAnchor="middle" fill="#F96E5B" fontSize="7" fontWeight="600">SM</text>
                          {/* Performance meter */}
                          <rect x="315" y="210" width="120" height="25" rx="12" fill="#79C9C5" opacity="0.1" stroke="#79C9C5" strokeWidth="1" />
                          <rect x="320" y="215" width="80" height="15" rx="7.5" fill="#79C9C5" opacity="0.3" />
                          <text x="395" y="227" fill="#79C9C5" fontSize="8" fontWeight="700">98</text>
                        </svg>
                      )}
                      {index === 3 && (
                        /* Backend & Infrastructure */
                        <svg viewBox="0 0 480 270" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Server rack */}
                          <rect x="30" y="30" width="120" height="210" rx="12" fill="white" stroke="#e5e7eb" strokeWidth="2" />
                          <text x="90" y="52" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="700">Servers</text>
                          {/* Server units */}
                          <rect x="42" y="62" width="96" height="30" rx="6" fill="#3F9AAE" opacity="0.06" stroke="#3F9AAE" strokeWidth="1" />
                          <circle cx="55" cy="77" r="4" fill="#79C9C5" />
                          <rect x="65" y="73" width="40" height="4" rx="2" fill="#e5e7eb" />
                          <rect x="65" y="80" width="25" height="3" rx="1.5" fill="#f3f4f6" />
                          <rect x="120" y="72" width="12" height="10" rx="2" fill="#3F9AAE" opacity="0.2" />
                          <rect x="42" y="98" width="96" height="30" rx="6" fill="#79C9C5" opacity="0.06" stroke="#79C9C5" strokeWidth="1" />
                          <circle cx="55" cy="113" r="4" fill="#79C9C5" />
                          <rect x="65" y="109" width="40" height="4" rx="2" fill="#e5e7eb" />
                          <rect x="65" y="116" width="30" height="3" rx="1.5" fill="#f3f4f6" />
                          <rect x="120" y="108" width="12" height="10" rx="2" fill="#79C9C5" opacity="0.2" />
                          <rect x="42" y="134" width="96" height="30" rx="6" fill="#FFE2AF" opacity="0.15" stroke="#FFE2AF" strokeWidth="1" />
                          <circle cx="55" cy="149" r="4" fill="#FFE2AF" />
                          <rect x="65" y="145" width="40" height="4" rx="2" fill="#e5e7eb" />
                          <rect x="65" y="152" width="35" height="3" rx="1.5" fill="#f3f4f6" />
                          <rect x="120" y="144" width="12" height="10" rx="2" fill="#FFE2AF" opacity="0.5" />
                          {/* CPU/Memory bars */}
                          <text x="50" y="185" fill="#6b7280" fontSize="7">CPU</text>
                          <rect x="70" y="178" width="62" height="8" rx="4" fill="#e5e7eb" />
                          <rect x="70" y="178" width="45" height="8" rx="4" fill="#79C9C5" opacity="0.5" />
                          <text x="50" y="202" fill="#6b7280" fontSize="7">MEM</text>
                          <rect x="70" y="195" width="62" height="8" rx="4" fill="#e5e7eb" />
                          <rect x="70" y="195" width="35" height="8" rx="4" fill="#3F9AAE" opacity="0.4" />
                          <text x="50" y="219" fill="#6b7280" fontSize="7">DISK</text>
                          <rect x="70" y="212" width="62" height="8" rx="4" fill="#e5e7eb" />
                          <rect x="70" y="212" width="20" height="8" rx="4" fill="#FFE2AF" opacity="0.6" />
                          {/* Connection lines */}
                          <line x1="155" y1="80" x2="195" y2="135" stroke="#79C9C5" strokeWidth="2" strokeDasharray="5 5" />
                          <line x1="155" y1="115" x2="195" y2="135" stroke="#79C9C5" strokeWidth="2" strokeDasharray="5 5" />
                          <line x1="155" y1="150" x2="195" y2="135" stroke="#79C9C5" strokeWidth="2" strokeDasharray="5 5" />
                          {/* API Gateway */}
                          <rect x="195" y="105" width="90" height="60" rx="12" fill="white" stroke="#3F9AAE" strokeWidth="2" />
                          <text x="240" y="130" textAnchor="middle" fill="#3F9AAE" fontSize="8" fontWeight="700">API</text>
                          <text x="240" y="142" textAnchor="middle" fill="#3F9AAE" fontSize="8" fontWeight="700">Gateway</text>
                          <text x="240" y="158" textAnchor="middle" fill="#79C9C5" fontSize="7">/v1/api</text>
                          {/* Connection to services */}
                          <line x1="290" y1="125" x2="330" y2="80" stroke="#3F9AAE" strokeWidth="1.5" strokeDasharray="5 5" />
                          <line x1="290" y1="135" x2="330" y2="135" stroke="#3F9AAE" strokeWidth="1.5" strokeDasharray="5 5" />
                          <line x1="290" y1="145" x2="330" y2="195" stroke="#3F9AAE" strokeWidth="1.5" strokeDasharray="5 5" />
                          {/* Microservices */}
                          <rect x="330" y="55" width="120" height="50" rx="10" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                          <rect x="340" y="63" width="8" height="8" rx="2" fill="#3F9AAE" opacity="0.3" />
                          <text x="358" y="71" fill="#374151" fontSize="8" fontWeight="600">Auth Service</text>
                          <rect x="340" y="78" width="100" height="5" rx="2.5" fill="#79C9C5" opacity="0.2" />
                          <rect x="340" y="86" width="60" height="4" rx="2" fill="#f3f4f6" />
                          <rect x="330" y="115" width="120" height="50" rx="10" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                          <rect x="340" y="123" width="8" height="8" rx="2" fill="#79C9C5" opacity="0.3" />
                          <text x="358" y="131" fill="#374151" fontSize="8" fontWeight="600">Data Service</text>
                          <rect x="340" y="138" width="100" height="5" rx="2.5" fill="#3F9AAE" opacity="0.2" />
                          <rect x="340" y="146" width="70" height="4" rx="2" fill="#f3f4f6" />
                          <rect x="330" y="175" width="120" height="50" rx="10" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                          <rect x="340" y="183" width="8" height="8" rx="2" fill="#F96E5B" opacity="0.3" />
                          <text x="358" y="191" fill="#374151" fontSize="8" fontWeight="600">File Service</text>
                          <rect x="340" y="198" width="100" height="5" rx="2.5" fill="#F96E5B" opacity="0.15" />
                          <rect x="340" y="206" width="80" height="4" rx="2" fill="#f3f4f6" />
                        </svg>
                      )}
                      {index === 4 && (
                        /* Maintenance & Support */
                        <svg viewBox="0 0 480 270" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Monitoring dashboard */}
                          <rect x="30" y="20" width="420" height="230" rx="14" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                          <text x="50" y="45" fill="#374151" fontSize="11" fontWeight="700">System Monitor</text>
                          {/* Status badges */}
                          <rect x="300" y="30" width="65" height="22" rx="11" fill="#79C9C5" opacity="0.15" stroke="#79C9C5" strokeWidth="1" />
                          <circle cx="315" cy="41" r="4" fill="#79C9C5" />
                          <text x="345" y="45" textAnchor="middle" fill="#79C9C5" fontSize="8" fontWeight="700">Online</text>
                          <rect x="375" y="30" width="65" height="22" rx="11" fill="#79C9C5" opacity="0.1" />
                          <text x="407" y="45" textAnchor="middle" fill="#79C9C5" fontSize="8" fontWeight="600">99.9%</text>
                          {/* Uptime chart */}
                          <rect x="45" y="60" width="260" height="80" rx="10" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
                          <text x="60" y="78" fill="#374151" fontSize="8" fontWeight="600">Uptime (30 days)</text>
                          <polyline points="60,120 90,118 120,115 150,117 180,110 210,108 240,112 270,105 280,100" stroke="#79C9C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                          <path d="M60,120 90,118 120,115 150,117 180,110 210,108 240,112 270,105 280,100 280,130 60,130z" fill="#79C9C5" opacity="0.08" />
                          <circle cx="280" cy="100" r="4" fill="#79C9C5" />
                          <line x1="60" y1="130" x2="290" y2="130" stroke="#e5e7eb" strokeWidth="1" />
                          {/* Security score */}
                          <rect x="315" y="60" width="125" height="80" rx="10" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
                          <text x="335" y="78" fill="#374151" fontSize="8" fontWeight="600">Security</text>
                          {/* Shield icon */}
                          <path d="M377 90v18c0 8 10 14 10 14s10-6 10-14V90l-10-5-10 5z" fill="#3F9AAE" opacity="0.1" stroke="#3F9AAE" strokeWidth="1.5" />
                          <path d="M381 104l4 4 8-8" stroke="#3F9AAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <text x="377" y="132" textAnchor="middle" fill="#3F9AAE" fontSize="9" fontWeight="700">A+</text>
                          {/* Recent updates */}
                          <rect x="45" y="152" width="200" height="88" rx="10" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
                          <text x="60" y="170" fill="#374151" fontSize="8" fontWeight="600">Recent Updates</text>
                          <circle cx="60" cy="188" r="4" fill="#79C9C5" />
                          <rect x="70" y="185" width="100" height="5" rx="2.5" fill="#e5e7eb" />
                          <text x="180" y="190" fill="#79C9C5" fontSize="7">2h ago</text>
                          <circle cx="60" cy="205" r="4" fill="#3F9AAE" />
                          <rect x="70" y="202" width="90" height="5" rx="2.5" fill="#e5e7eb" />
                          <text x="170" y="207" fill="#3F9AAE" fontSize="7">5h ago</text>
                          <circle cx="60" cy="222" r="4" fill="#FFE2AF" />
                          <rect x="70" y="219" width="80" height="5" rx="2.5" fill="#e5e7eb" />
                          <text x="160" y="224" fill="#F96E5B" fontSize="7">1d ago</text>
                          {/* Alerts panel */}
                          <rect x="255" y="152" width="185" height="88" rx="10" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
                          <text x="275" y="170" fill="#374151" fontSize="8" fontWeight="600">Alerts</text>
                          <rect x="270" y="180" width="155" height="22" rx="6" fill="#79C9C5" opacity="0.08" stroke="#79C9C5" strokeWidth="1" />
                          <circle cx="283" cy="191" r="4" fill="#79C9C5" opacity="0.5" />
                          <text x="300" y="195" fill="#79C9C5" fontSize="7" fontWeight="600">All systems operational</text>
                          <rect x="270" y="208" width="155" height="22" rx="6" fill="#3F9AAE" opacity="0.06" stroke="#3F9AAE" strokeWidth="1" />
                          <circle cx="283" cy="219" r="4" fill="#3F9AAE" opacity="0.4" />
                          <text x="300" y="223" fill="#3F9AAE" fontSize="7">SSL cert renewed</text>
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
