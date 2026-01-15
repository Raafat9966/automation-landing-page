'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'

export default function WorkflowDemoSection() {
  const { translations } = useLanguage()
  const { workflowDemo } = translations

  const [imageError, setImageError] = useState(false)

  const stepIcons = [
    // Step 1: Daily Check (Calendar/Clock)
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="check">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>,
    // Step 2: Spotting Problems (Alert/Search)
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="spot">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>,
    // Step 3: Instant Alerts (Notification/Bell)
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="alert">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>,
    // Step 4: Keeping a Record (Database/Save)
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="record">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
    </svg>
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const glowVariants = {
    animate: {
      opacity: [0.3, 0.6, 0.3],
      scale: [1, 1.02, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const stepHighlightVariants = {
    animate: (i) => ({
      backgroundColor: ["rgba(121, 201, 197, 0.1)", "rgba(121, 201, 197, 0.3)", "rgba(121, 201, 197, 0.1)"],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: i * 1,
        ease: "easeInOut"
      }
    })
  }

  return (
    <section className="py-24 bg-white overflow-hidden" aria-labelledby="workflow-demo-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: Text Explanation */}
        <div className="text-center mb-16">
          <motion.h2
            id="workflow-demo-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            {workflowDemo.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-primary font-medium mb-6"
          >
            {workflowDemo.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            {workflowDemo.intro}
          </motion.p>
        </div>

        {/* Middle: Animated Workflow Visual */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-5xl mx-auto mb-20"
        >
          <div className="bg-[#FFE2AF]/30 p-4 sm:p-8 rounded-[2rem] shadow-xl border border-[#FFE2AF]/50 relative overflow-hidden">
            {/* Subtle animated highlights/glow */}


            <div className="relative aspect-[16/9] w-full bg-white rounded-xl shadow-inner flex items-center justify-center overflow-hidden p-6 sm:p-12">
              {!imageError ? (
                <Image
                  src="/images/ad-automation-workflow.png"
                  alt="Automated Ad Performance Monitoring Workflow Diagram"
                  fill
                  className="object-contain p-4"
                  sizes="(max-w-1024px) 100vw, 1024px"
                  priority={false}
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Visual Representation of the Workflow using SVG since the PNG is missing */}
                  <svg viewBox="0 0 800 400" className="w-full h-full text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Platforms */}
                    <rect x="50" y="150" width="120" height="100" rx="12" className="fill-gray-50 stroke-gray-200" strokeWidth="2" />
                    <path d="M85 185h50M85 200h30M85 215h40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                    <text x="110" y="275" textAnchor="middle" className="fill-gray-500 text-[12px] font-medium uppercase tracking-wider">Platforms</text>

                    {/* Arrow 1 */}
                    <path d="M190 200h60" stroke="#79C9C5" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8" />
                    <path d="M250 200l-10-5m10 5l-10 5" stroke="#79C9C5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

                    {/* Monitor/System */}
                    <rect x="270" y="125" width="260" height="150" rx="20" className="fill-primary/5 stroke-primary/20" strokeWidth="2" />
                    <circle cx="400" y="200" r="40" className="fill-white stroke-primary shadow-sm" strokeWidth="2" />
                    <path d="M385 200l10 10 20-20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="400" y="300" textAnchor="middle" className="fill-primary font-bold text-[14px]">FlowToWork Automation</text>

                    {/* Arrow 2 */}
                    <path d="M550 200h60" stroke="#79C9C5" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8" />
                    <path d="M610 200l-10-5m10 5l-10 5" stroke="#79C9C5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

                    {/* Outcome/Alert */}
                    <rect x="630" y="150" width="120" height="100" rx="12" className="fill-highlight/5 stroke-highlight/20" strokeWidth="2" />
                    <path d="M690 180v30M690 220h.01" stroke="#F96E5B" strokeWidth="3" strokeLinecap="round" />
                    <text x="690" y="275" textAnchor="middle" className="fill-highlight text-[12px] font-medium uppercase tracking-wider">Alerts & History</text>

                    {/* Decorative dots */}
                    <circle cx="110" cy="120" r="4" className="fill-secondary/40" />
                    <circle cx="400" cy="80" r="6" className="fill-primary/20" />
                    <circle cx="690" cy="120" r="4" className="fill-highlight/40" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Bottom: Step-by-step Explanation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {workflowDemo.steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={index}
              animate="animate"
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-start relative overflow-hidden"
            >
              <motion.div 
                custom={index}
                variants={stepHighlightVariants}
                animate="animate"
                className="absolute inset-0 pointer-events-none"
              />
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-4 relative z-10">
                {stepIcons[index]}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 relative z-10">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
