'use client'

import { useState, ReactElement } from 'react'
import dynamic from 'next/dynamic'
import { useLanguage } from '../../context/LanguageContext'
import Section, { SectionHeader } from './ui/Section'
import Reveal from './ui/Reveal'

const WorkflowDemoSection = dynamic(() => import('./WorkflowDemoSection'), {
  ssr: false,
  loading: () => null,
})

interface WorkflowDemo {
  data: {
    title: string
    subtitle: string
    intro: string
    steps: Array<{ title: string; description: string }>
  }
  image: string | null
  fallback: ReactElement
}

const diagram = (children: ReactElement) => (
  <svg viewBox="0 0 800 400" className="h-full w-full text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
    {children}
  </svg>
)

export default function WorkflowCards() {
  const { translations } = useLanguage()
  const [activeWorkflow, setActiveWorkflow] = useState<WorkflowDemo | null>(null)

  const fallbackSvgs: ReactElement[] = [
    diagram(
      <>
        <rect x="50" y="150" width="120" height="100" rx="12" className="fill-gray-50 stroke-gray-200" strokeWidth="2" />
        <path d="M75 190h70M75 210h40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
        <text x="110" y="275" textAnchor="middle" className="fill-gray-500 text-[12px] font-medium uppercase tracking-wider">Inbox</text>
        <path d="M190 200h60" stroke="#79C9C5" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8" />
        <rect x="270" y="125" width="260" height="150" rx="20" className="fill-primary/5 stroke-primary/20" strokeWidth="2" />
        <path d="M370 180l30 30 60-60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <text x="400" y="300" textAnchor="middle" className="fill-primary text-[14px] font-bold">AI Sorting &amp; Response</text>
        <path d="M550 200h60" stroke="#79C9C5" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8" />
        <rect x="630" y="150" width="120" height="100" rx="12" className="fill-highlight/5 stroke-highlight/20" strokeWidth="2" />
        <path d="M660 190h60M660 210h60" stroke="#F96E5B" strokeWidth="2" strokeLinecap="round" />
        <text x="690" y="275" textAnchor="middle" className="fill-highlight text-[12px] font-medium uppercase tracking-wider">Managed Inbox</text>
      </>,
    ),
    diagram(
      <>
        <rect x="50" y="150" width="120" height="100" rx="12" className="fill-gray-50 stroke-gray-200" strokeWidth="2" />
        <circle cx="110" cy="200" r="25" className="stroke-gray-300" strokeWidth="2" />
        <path d="M110 185v15M100 200h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <text x="110" y="275" textAnchor="middle" className="fill-gray-500 text-[12px] font-medium uppercase tracking-wider">New Lead</text>
        <path d="M190 200h60" stroke="#79C9C5" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8" />
        <rect x="270" y="125" width="260" height="150" rx="20" className="fill-primary/5 stroke-primary/20" strokeWidth="2" />
        <path d="M360 200h80M400 160v80" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <text x="400" y="300" textAnchor="middle" className="fill-primary text-[14px] font-bold">CRM Sync &amp; Enrichment</text>
        <path d="M550 200h60" stroke="#79C9C5" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8" />
        <rect x="630" y="150" width="120" height="100" rx="12" className="fill-highlight/5 stroke-highlight/20" strokeWidth="2" />
        <path d="M670 180l20 20 20-20M670 220l40-40" stroke="#F96E5B" strokeWidth="3" strokeLinecap="round" />
        <text x="690" y="275" textAnchor="middle" className="fill-highlight text-[12px] font-medium uppercase tracking-wider">Updated CRM</text>
      </>,
    ),
    diagram(
      <>
        <rect x="50" y="150" width="120" height="100" rx="12" className="fill-gray-50 stroke-gray-200" strokeWidth="2" />
        <path d="M80 190h60M80 210h30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <text x="110" y="275" textAnchor="middle" className="fill-gray-500 text-[12px] font-medium uppercase tracking-wider">Visitor</text>
        <path d="M190 200h60" stroke="#79C9C5" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8" />
        <rect x="270" y="125" width="260" height="150" rx="20" className="fill-primary/5 stroke-primary/20" strokeWidth="2" />
        <circle cx="400" cy="185" r="30" className="stroke-primary" strokeWidth="2" />
        <path d="M385 185h30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <text x="400" y="300" textAnchor="middle" className="fill-primary text-[14px] font-bold">AI Chat Handling</text>
        <path d="M550 200h60" stroke="#79C9C5" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8" />
        <rect x="630" y="150" width="120" height="100" rx="12" className="fill-highlight/5 stroke-highlight/20" strokeWidth="2" />
        <path d="M670 200h40" stroke="#F96E5B" strokeWidth="3" strokeLinecap="round" />
        <text x="690" y="275" textAnchor="middle" className="fill-highlight text-[12px] font-medium uppercase tracking-wider">Meeting Booked</text>
      </>,
    ),
    diagram(
      <>
        <rect x="50" y="150" width="120" height="100" rx="12" className="fill-gray-50 stroke-gray-200" strokeWidth="2" />
        <path d="M85 185h50M85 200h30M85 215h40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <text x="110" y="275" textAnchor="middle" className="fill-gray-500 text-[12px] font-medium uppercase tracking-wider">Platforms</text>
        <path d="M190 200h60" stroke="#79C9C5" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8" />
        <rect x="270" y="125" width="260" height="150" rx="20" className="fill-primary/5 stroke-primary/20" strokeWidth="2" />
        <circle cx="400" cy="200" r="40" className="fill-white stroke-primary" strokeWidth="2" />
        <path d="M385 200l10 10 20-20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <text x="400" y="300" textAnchor="middle" className="fill-primary text-[14px] font-bold">FlowToWork Automation</text>
        <path d="M550 200h60" stroke="#79C9C5" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8" />
        <rect x="630" y="150" width="120" height="100" rx="12" className="fill-highlight/5 stroke-highlight/20" strokeWidth="2" />
        <path d="M690 180v30M690 220h.01" stroke="#F96E5B" strokeWidth="3" strokeLinecap="round" />
        <text x="690" y="275" textAnchor="middle" className="fill-highlight text-[12px] font-medium uppercase tracking-wider">Alerts &amp; History</text>
      </>,
    ),
  ]

  const demoData = [
    translations.emailAutomationDemo,
    translations.crmAutomationDemo,
    translations.chatAgentDemo,
    translations.workflowDemo,
  ]

  const icons = [
    <path key="0" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
    <path key="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
    <path key="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
    <path key="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />,
  ]

  return (
    <Section id="workflows" aria-labelledby="workflows-title">
      <SectionHeader
        eyebrow="Solutions"
        title={translations.workflows.title}
        subtitle={translations.workflows.subtitle}
        titleId="workflows-title"
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {translations.workflows.items.map((workflow, index) => (
          <Reveal key={index} delay={index * 80} className="h-full">
            <button
              type="button"
              onClick={() =>
                setActiveWorkflow({ data: demoData[index], image: null, fallback: fallbackSvgs[index] })
              }
              className="group relative flex h-full w-full flex-col rounded-4xl border border-border bg-card p-7 text-left shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-card"
            >
              <span
                className="pointer-events-none absolute inset-0 rounded-4xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(60% 60% at 50% 0%, hsl(var(--primary) / 0.10), transparent 70%)',
                }}
                aria-hidden="true"
              />
              <span className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-fg">
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {icons[index]}
                </svg>
              </span>
              <h3 className="relative mb-3 text-h3 font-bold text-fg">{workflow.title}</h3>
              <p className="relative flex-grow text-sm leading-relaxed text-fg-muted">{workflow.description}</p>
              <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-highlight">
                {translations.workflows.learnMore}
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <WorkflowDemoSection
        isOpen={!!activeWorkflow}
        onClose={() => setActiveWorkflow(null)}
        workflowData={activeWorkflow?.data}
        imageSrc={activeWorkflow?.image}
        fallbackSvg={activeWorkflow?.fallback}
      />
    </Section>
  )
}
