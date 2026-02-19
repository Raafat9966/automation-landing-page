'use client'

import { useState, ReactElement } from 'react'
import dynamic from 'next/dynamic'
import { useLanguage } from '../../context/LanguageContext'

const WorkflowDemoSection = dynamic(() => import('./WorkflowDemoSection'), {
  ssr: false,
  loading: () => null,
})

interface WorkflowDemo {
  data: {
    title: string
    subtitle: string
    intro: string
    steps: Array<{
      title: string
      description: string
    }>
  }
  image: string | null
  fallback: ReactElement
}

export default function WorkflowCards() {
  const { translations } = useLanguage()
  const [activeWorkflow, setActiveWorkflow] = useState<WorkflowDemo | null>(null)

  const fallbackSvgs = [
    // Email Automation Fallback
    <svg viewBox="0 0 800 400" className="w-full h-full text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="150" width="120" height="100" rx="12" className="fill-gray-50 stroke-gray-200" strokeWidth="2" />
      <path d="M75 190h70M75 210h40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      <text x="110" y="275" textAnchor="middle" className="fill-gray-500 text-[12px] font-medium uppercase tracking-wider">Inbox</text>
      <path d="M190 200h60" stroke="#79C9C5" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8" />
      <rect x="270" y="125" width="260" height="150" rx="20" className="fill-primary/5 stroke-primary/20" strokeWidth="2" />
      <path d="M370 180l30 30 60-60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <text x="400" y="300" textAnchor="middle" className="fill-primary font-bold text-[14px]">AI Sorting & Response</text>
      <path d="M550 200h60" stroke="#79C9C5" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8" />
      <rect x="630" y="150" width="120" height="100" rx="12" className="fill-highlight/5 stroke-highlight/20" strokeWidth="2" />
      <path d="M660 190h60M660 210h60" stroke="#F96E5B" strokeWidth="2" strokeLinecap="round" />
      <text x="690" y="275" textAnchor="middle" className="fill-highlight text-[12px] font-medium uppercase tracking-wider">Managed Inbox</text>
    </svg>,

    // CRM Automation Fallback
    <svg viewBox="0 0 800 400" className="w-full h-full text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="150" width="120" height="100" rx="12" className="fill-gray-50 stroke-gray-200" strokeWidth="2" />
      <circle cx="110" cy="200" r="25" className="stroke-gray-300" strokeWidth="2" />
      <path d="M110 185v15M100 200h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <text x="110" y="275" textAnchor="middle" className="fill-gray-500 text-[12px] font-medium uppercase tracking-wider">New Lead</text>
      <path d="M190 200h60" stroke="#79C9C5" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8" />
      <rect x="270" y="125" width="260" height="150" rx="20" className="fill-primary/5 stroke-primary/20" strokeWidth="2" />
      <path d="M360 200h80M400 160v80" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <text x="400" y="300" textAnchor="middle" className="fill-primary font-bold text-[14px]">CRM Sync & Enrichment</text>
      <path d="M550 200h60" stroke="#79C9C5" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8" />
      <rect x="630" y="150" width="120" height="100" rx="12" className="fill-highlight/5 stroke-highlight/20" strokeWidth="2" />
      <path d="M670 180l20 20 20-20M670 220l40-40" stroke="#F96E5B" strokeWidth="3" strokeLinecap="round" />
      <text x="690" y="275" textAnchor="middle" className="fill-highlight text-[12px] font-medium uppercase tracking-wider">Updated CRM</text>
    </svg>,

    // AI Chat Agents Fallback
    <svg viewBox="0 0 800 400" className="w-full h-full text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="150" width="120" height="100" rx="12" className="fill-gray-50 stroke-gray-200" strokeWidth="2" />
      <path d="M80 190h60M80 210h30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <text x="110" y="275" textAnchor="middle" className="fill-gray-500 text-[12px] font-medium uppercase tracking-wider">Visitor</text>
      <path d="M190 200h60" stroke="#79C9C5" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8" />
      <rect x="270" y="125" width="260" height="150" rx="20" className="fill-primary/5 stroke-primary/20" strokeWidth="2" />
      <circle cx="400" cy="185" r="30" className="stroke-primary" strokeWidth="2" />
      <path d="M385 185h30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <text x="400" y="300" textAnchor="middle" className="fill-primary font-bold text-[14px]">AI Chat Handling</text>
      <path d="M550 200h60" stroke="#79C9C5" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8" />
      <rect x="630" y="150" width="120" height="100" rx="12" className="fill-highlight/5 stroke-highlight/20" strokeWidth="2" />
      <path d="M670 200h40" stroke="#F96E5B" strokeWidth="3" strokeLinecap="round" />
      <text x="690" y="275" textAnchor="middle" className="fill-highlight text-[12px] font-medium uppercase tracking-wider">Meeting Booked</text>
    </svg>,

    // Marketing Automation Fallback
    <svg viewBox="0 0 800 400" className="w-full h-full text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="150" width="120" height="100" rx="12" className="fill-gray-50 stroke-gray-200" strokeWidth="2" />
      <path d="M85 185h50M85 200h30M85 215h40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <text x="110" y="275" textAnchor="middle" className="fill-gray-500 text-[12px] font-medium uppercase tracking-wider">Platforms</text>
      <path d="M190 200h60" stroke="#79C9C5" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8" />
      <rect x="270" y="125" width="260" height="150" rx="20" className="fill-primary/5 stroke-primary/20" strokeWidth="2" />
      <circle cx="400" cy="200" r="40" className="fill-white stroke-primary" strokeWidth="2" />
      <path d="M385 200l10 10 20-20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <text x="400" y="300" textAnchor="middle" className="fill-primary font-bold text-[14px]">FlowToWork Automation</text>
      <path d="M550 200h60" stroke="#79C9C5" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8" />
      <rect x="630" y="150" width="120" height="100" rx="12" className="fill-highlight/5 stroke-highlight/20" strokeWidth="2" />
      <path d="M690 180v30M690 220h.01" stroke="#F96E5B" strokeWidth="3" strokeLinecap="round" />
      <text x="690" y="275" textAnchor="middle" className="fill-highlight text-[12px] font-medium uppercase tracking-wider">Alerts & History</text>
    </svg>
  ]

  const workflowDemos = [
    {
      data: translations.emailAutomationDemo,
      image: null,
      fallback: fallbackSvgs[0]
    },
    {
      data: translations.crmAutomationDemo,
      image: null,
      fallback: fallbackSvgs[1]
    },
    {
      data: translations.chatAgentDemo,
      image: null,
      fallback: fallbackSvgs[2]
    },
    {
      data: translations.workflowDemo,
      image: "/images/ad-automation-workflow.png",
      fallback: fallbackSvgs[3]
    }
  ]

  const icons = [
    (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  ]

  return (
    <section id="workflows" className="py-24 bg-gray-50" aria-labelledby="workflows-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="workflows-title" className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {translations.workflows.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {translations.workflows.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {translations.workflows.items.map((workflow, index) => {
            return (
              <div
                key={index}
                onClick={() => setActiveWorkflow(workflowDemos[index])}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group cursor-pointer"
              >
                <div className="mb-6 text-primary group-hover:text-secondary transition-colors duration-300">
                  {icons[index]}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {workflow.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {workflow.description}
                </p>

                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-highlight font-semibold inline-flex items-center">
                    {translations.workflows.learnMore}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <WorkflowDemoSection 
        isOpen={!!activeWorkflow} 
        onClose={() => setActiveWorkflow(null)}
        workflowData={activeWorkflow?.data}
        imageSrc={activeWorkflow?.image}
        fallbackSvg={activeWorkflow?.fallback}
      />
    </section>
  )
}

