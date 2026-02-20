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
    <svg viewBox="0 0 800 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background decorations */}
      <circle cx="100" cy="100" r="60" fill="#FFE2AF" opacity="0.15" />
      <circle cx="700" cy="320" r="50" fill="#F96E5B" opacity="0.1" />
      {/* Inbox card */}
      <rect x="40" y="130" width="140" height="140" rx="16" fill="white" stroke="#e5e7eb" strokeWidth="2" />
      <rect x="40" y="130" width="140" height="40" rx="16" fill="#3F9AAE" opacity="0.08" />
      <path d="M70 150l40 25 40-25" stroke="#3F9AAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="90" y="148" width="40" height="5" rx="2.5" fill="#3F9AAE" opacity="0.3" />
      {/* Email rows */}
      <rect x="60" y="185" width="100" height="8" rx="4" fill="#e5e7eb" />
      <rect x="60" y="200" width="70" height="6" rx="3" fill="#f3f4f6" />
      <rect x="60" y="215" width="100" height="8" rx="4" fill="#e5e7eb" />
      <rect x="60" y="230" width="80" height="6" rx="3" fill="#f3f4f6" />
      <circle cx="155" cy="190" r="5" fill="#F96E5B" />
      <circle cx="155" cy="220" r="5" fill="#F96E5B" />
      <text x="110" y="295" textAnchor="middle" fill="#6b7280" fontSize="11" fontWeight="600" letterSpacing="1">INBOX</text>
      {/* Arrow 1 */}
      <line x1="200" y1="200" x2="260" y2="200" stroke="#79C9C5" strokeWidth="3" strokeDasharray="6 6" />
      <polygon points="265,200 255,194 255,206" fill="#79C9C5" />
      {/* AI Processing center */}
      <rect x="280" y="115" width="240" height="170" rx="24" fill="#3F9AAE" opacity="0.06" stroke="#3F9AAE" strokeWidth="2" strokeDasharray="0" />
      {/* Brain/AI icon */}
      <circle cx="400" cy="175" r="35" fill="white" stroke="#3F9AAE" strokeWidth="2" />
      <path d="M385 175c0-8.3 6.7-15 15-15s15 6.7 15 15" stroke="#3F9AAE" strokeWidth="2" strokeLinecap="round" />
      <path d="M388 180h24" stroke="#3F9AAE" strokeWidth="2" strokeLinecap="round" />
      <circle cx="393" cy="172" r="3" fill="#3F9AAE" />
      <circle cx="407" cy="172" r="3" fill="#3F9AAE" />
      <path d="M395 185l5-5 5 5" stroke="#79C9C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Sorting arrows */}
      <path d="M370 220l-15 20" stroke="#79C9C5" strokeWidth="2" strokeLinecap="round" />
      <path d="M400 220v20" stroke="#3F9AAE" strokeWidth="2" strokeLinecap="round" />
      <path d="M430 220l15 20" stroke="#F96E5B" strokeWidth="2" strokeLinecap="round" />
      <circle cx="355" cy="245" r="8" fill="#79C9C5" opacity="0.2" />
      <circle cx="400" cy="245" r="8" fill="#3F9AAE" opacity="0.2" />
      <circle cx="445" cy="245" r="8" fill="#F96E5B" opacity="0.2" />
      <text x="400" y="300" textAnchor="middle" fill="#3F9AAE" fontSize="13" fontWeight="700">AI Sorting & Response</text>
      {/* Arrow 2 */}
      <line x1="540" y1="200" x2="600" y2="200" stroke="#79C9C5" strokeWidth="3" strokeDasharray="6 6" />
      <polygon points="605,200 595,194 595,206" fill="#79C9C5" />
      {/* Managed inbox */}
      <rect x="620" y="130" width="140" height="140" rx="16" fill="white" stroke="#F96E5B" strokeWidth="2" opacity="0.8" />
      <rect x="620" y="130" width="140" height="40" rx="16" fill="#F96E5B" opacity="0.08" />
      {/* Organized rows with checkmarks */}
      <rect x="640" y="185" width="80" height="8" rx="4" fill="#e5e7eb" />
      <path d="M735 187l4 4 8-8" stroke="#79C9C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="640" y="205" width="80" height="8" rx="4" fill="#e5e7eb" />
      <path d="M735 207l4 4 8-8" stroke="#79C9C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="640" y="225" width="80" height="8" rx="4" fill="#e5e7eb" />
      <path d="M735 227l4 4 8-8" stroke="#79C9C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="690" y="295" textAnchor="middle" fill="#F96E5B" fontSize="11" fontWeight="600" letterSpacing="1">MANAGED</text>
    </svg>,

    // CRM Automation Fallback
    <svg viewBox="0 0 800 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background decorations */}
      <circle cx="120" cy="80" r="50" fill="#79C9C5" opacity="0.1" />
      <circle cx="680" cy="340" r="60" fill="#FFE2AF" opacity="0.15" />
      {/* Lead card */}
      <rect x="40" y="120" width="140" height="160" rx="16" fill="white" stroke="#e5e7eb" strokeWidth="2" />
      {/* User avatar */}
      <circle cx="110" cy="165" r="22" fill="#3F9AAE" opacity="0.1" stroke="#3F9AAE" strokeWidth="2" />
      <circle cx="110" cy="158" r="8" fill="#3F9AAE" opacity="0.4" />
      <path d="M93 178c0-9.4 7.6-17 17-17s17 7.6 17 17" stroke="#3F9AAE" strokeWidth="2" strokeLinecap="round" />
      {/* Lead info */}
      <rect x="65" y="200" width="90" height="8" rx="4" fill="#e5e7eb" />
      <rect x="75" y="215" width="70" height="6" rx="3" fill="#f3f4f6" />
      <rect x="65" y="232" width="90" height="8" rx="4" fill="#e5e7eb" />
      <rect x="80" y="248" width="60" height="6" rx="3" fill="#f3f4f6" />
      <text x="110" y="302" textAnchor="middle" fill="#6b7280" fontSize="11" fontWeight="600" letterSpacing="1">NEW LEAD</text>
      {/* Arrow 1 */}
      <line x1="200" y1="200" x2="260" y2="200" stroke="#79C9C5" strokeWidth="3" strokeDasharray="6 6" />
      <polygon points="265,200 255,194 255,206" fill="#79C9C5" />
      {/* CRM Sync center */}
      <rect x="280" y="110" width="240" height="180" rx="24" fill="#3F9AAE" opacity="0.06" stroke="#3F9AAE" strokeWidth="2" />
      {/* Sync icon */}
      <circle cx="400" cy="170" r="30" fill="white" stroke="#3F9AAE" strokeWidth="2" />
      <path d="M415 160a18 18 0 00-30 0" stroke="#3F9AAE" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M385 180a18 18 0 0030 0" stroke="#79C9C5" strokeWidth="2.5" strokeLinecap="round" />
      <polygon points="417,158 413,165 421,163" fill="#3F9AAE" />
      <polygon points="383,182 387,175 379,177" fill="#79C9C5" />
      {/* Data enrichment rows */}
      <rect x="330" y="215" width="55" height="20" rx="10" fill="#3F9AAE" opacity="0.1" stroke="#3F9AAE" strokeWidth="1" />
      <text x="357" y="229" textAnchor="middle" fill="#3F9AAE" fontSize="8" fontWeight="600">Score</text>
      <rect x="395" y="215" width="55" height="20" rx="10" fill="#79C9C5" opacity="0.1" stroke="#79C9C5" strokeWidth="1" />
      <text x="422" y="229" textAnchor="middle" fill="#79C9C5" fontSize="8" fontWeight="600">Enrich</text>
      <rect x="460" y="215" width="50" height="20" rx="10" fill="#FFE2AF" opacity="0.3" stroke="#F96E5B" strokeWidth="1" />
      <text x="485" y="229" textAnchor="middle" fill="#F96E5B" fontSize="8" fontWeight="600">Tag</text>
      <text x="400" y="268" textAnchor="middle" fill="#3F9AAE" fontSize="13" fontWeight="700">CRM Sync & Enrichment</text>
      {/* Arrow 2 */}
      <line x1="540" y1="200" x2="600" y2="200" stroke="#79C9C5" strokeWidth="3" strokeDasharray="6 6" />
      <polygon points="605,200 595,194 595,206" fill="#79C9C5" />
      {/* Updated CRM */}
      <rect x="620" y="120" width="140" height="160" rx="16" fill="white" stroke="#F96E5B" strokeWidth="2" opacity="0.8" />
      {/* Updated user avatar with badge */}
      <circle cx="690" cy="160" r="22" fill="#79C9C5" opacity="0.1" stroke="#79C9C5" strokeWidth="2" />
      <circle cx="690" cy="153" r="8" fill="#79C9C5" opacity="0.5" />
      <path d="M673 173c0-9.4 7.6-17 17-17s17 7.6 17 17" stroke="#79C9C5" strokeWidth="2" strokeLinecap="round" />
      <circle cx="710" cy="145" r="8" fill="#79C9C5" stroke="white" strokeWidth="2" />
      <path d="M707 145l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Enriched data */}
      <rect x="645" y="195" width="90" height="8" rx="4" fill="#79C9C5" opacity="0.3" />
      <rect x="645" y="212" width="90" height="8" rx="4" fill="#3F9AAE" opacity="0.2" />
      <rect x="645" y="229" width="60" height="8" rx="4" fill="#FFE2AF" opacity="0.5" />
      {/* Score badge */}
      <rect x="660" y="248" width="60" height="18" rx="9" fill="#79C9C5" opacity="0.15" />
      <text x="690" y="261" textAnchor="middle" fill="#79C9C5" fontSize="9" fontWeight="700">Score: 92</text>
      <text x="690" y="302" textAnchor="middle" fill="#F96E5B" fontSize="11" fontWeight="600" letterSpacing="1">UPDATED CRM</text>
    </svg>,

    // AI Chat Agents Fallback
    <svg viewBox="0 0 800 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background decorations */}
      <circle cx="80" cy="320" r="50" fill="#3F9AAE" opacity="0.08" />
      <circle cx="720" cy="80" r="60" fill="#79C9C5" opacity="0.1" />
      {/* Visitor card */}
      <rect x="40" y="120" width="140" height="160" rx="16" fill="white" stroke="#e5e7eb" strokeWidth="2" />
      {/* Browser mockup */}
      <rect x="55" y="138" width="110" height="75" rx="8" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1.5" />
      <circle cx="68" cy="148" r="3" fill="#F96E5B" opacity="0.6" />
      <circle cx="78" cy="148" r="3" fill="#FFE2AF" opacity="0.8" />
      <circle cx="88" cy="148" r="3" fill="#79C9C5" opacity="0.6" />
      <rect x="62" y="158" width="96" height="5" rx="2.5" fill="#e5e7eb" />
      <rect x="62" y="168" width="70" height="4" rx="2" fill="#f3f4f6" />
      <rect x="62" y="178" width="85" height="4" rx="2" fill="#f3f4f6" />
      <rect x="62" y="188" width="50" height="4" rx="2" fill="#f3f4f6" />
      {/* Visitor icon */}
      <circle cx="110" cy="240" r="14" fill="#3F9AAE" opacity="0.1" />
      <circle cx="110" cy="236" r="5" fill="#6b7280" opacity="0.4" />
      <path d="M101 248c0-5 4-9 9-9s9 4 9 9" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <text x="110" y="302" textAnchor="middle" fill="#6b7280" fontSize="11" fontWeight="600" letterSpacing="1">VISITOR</text>
      {/* Arrow 1 */}
      <line x1="200" y1="200" x2="260" y2="200" stroke="#79C9C5" strokeWidth="3" strokeDasharray="6 6" />
      <polygon points="265,200 255,194 255,206" fill="#79C9C5" />
      {/* AI Chat center */}
      <rect x="280" y="110" width="240" height="180" rx="24" fill="#3F9AAE" opacity="0.06" stroke="#3F9AAE" strokeWidth="2" />
      {/* Chat bubbles */}
      <rect x="320" y="140" width="100" height="30" rx="15" fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="1" />
      <rect x="330" y="150" width="60" height="5" rx="2.5" fill="#d1d5db" />
      <rect x="330" y="159" width="40" height="4" rx="2" fill="#e5e7eb" />
      <rect x="380" y="180" width="110" height="30" rx="15" fill="#3F9AAE" opacity="0.1" stroke="#3F9AAE" strokeWidth="1" />
      <rect x="390" y="190" width="70" height="5" rx="2.5" fill="#3F9AAE" opacity="0.4" />
      <rect x="390" y="199" width="50" height="4" rx="2" fill="#3F9AAE" opacity="0.2" />
      <rect x="320" y="220" width="90" height="25" rx="12" fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="1" />
      <rect x="330" y="229" width="50" height="5" rx="2.5" fill="#d1d5db" />
      {/* AI bot icon */}
      <circle cx="470" cy="245" r="16" fill="#3F9AAE" opacity="0.15" stroke="#3F9AAE" strokeWidth="1.5" />
      <circle cx="465" cy="242" r="2.5" fill="#3F9AAE" />
      <circle cx="475" cy="242" r="2.5" fill="#3F9AAE" />
      <path d="M463 250c0 0 3 4 7 4s7-4 7-4" stroke="#3F9AAE" strokeWidth="1.5" strokeLinecap="round" />
      <text x="400" y="300" textAnchor="middle" fill="#3F9AAE" fontSize="13" fontWeight="700">AI Chat Handling</text>
      {/* Arrow 2 */}
      <line x1="540" y1="200" x2="600" y2="200" stroke="#79C9C5" strokeWidth="3" strokeDasharray="6 6" />
      <polygon points="605,200 595,194 595,206" fill="#79C9C5" />
      {/* Meeting booked */}
      <rect x="620" y="120" width="140" height="160" rx="16" fill="white" stroke="#F96E5B" strokeWidth="2" opacity="0.8" />
      {/* Calendar icon */}
      <rect x="655" y="140" width="70" height="65" rx="8" fill="#F96E5B" opacity="0.06" stroke="#F96E5B" strokeWidth="1.5" />
      <rect x="655" y="140" width="70" height="20" rx="8" fill="#F96E5B" opacity="0.15" />
      <circle cx="672" cy="150" r="3" fill="#F96E5B" opacity="0.5" />
      <circle cx="690" cy="150" r="3" fill="#F96E5B" opacity="0.5" />
      <circle cx="708" cy="150" r="3" fill="#F96E5B" opacity="0.5" />
      {/* Calendar grid */}
      <rect x="665" y="170" width="10" height="8" rx="2" fill="#e5e7eb" />
      <rect x="680" y="170" width="10" height="8" rx="2" fill="#e5e7eb" />
      <rect x="695" y="170" width="10" height="8" rx="2" fill="#79C9C5" opacity="0.4" />
      <rect x="665" y="183" width="10" height="8" rx="2" fill="#e5e7eb" />
      <rect x="680" y="183" width="10" height="8" rx="2" fill="#e5e7eb" />
      <rect x="695" y="183" width="10" height="8" rx="2" fill="#e5e7eb" />
      {/* Confirmed badge */}
      <rect x="650" y="220" width="80" height="24" rx="12" fill="#79C9C5" opacity="0.15" stroke="#79C9C5" strokeWidth="1" />
      <path d="M672 231l4 4 8-8" stroke="#79C9C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="710" y="235" fill="#79C9C5" fontSize="8" fontWeight="700">Booked</text>
      <text x="690" y="302" textAnchor="middle" fill="#F96E5B" fontSize="11" fontWeight="600" letterSpacing="1">MEETING</text>
    </svg>,

    // Marketing Automation Fallback
    <svg viewBox="0 0 800 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background decorations */}
      <circle cx="150" cy="340" r="60" fill="#FFE2AF" opacity="0.15" />
      <circle cx="650" cy="80" r="50" fill="#3F9AAE" opacity="0.08" />
      {/* Multi-platform card */}
      <rect x="25" y="110" width="155" height="180" rx="16" fill="white" stroke="#e5e7eb" strokeWidth="2" />
      {/* Platform icons */}
      <rect x="45" y="130" width="45" height="35" rx="8" fill="#3F9AAE" opacity="0.08" stroke="#3F9AAE" strokeWidth="1" />
      <text x="67" y="153" textAnchor="middle" fill="#3F9AAE" fontSize="10" fontWeight="700">FB</text>
      <rect x="100" y="130" width="45" height="35" rx="8" fill="#79C9C5" opacity="0.08" stroke="#79C9C5" strokeWidth="1" />
      <text x="122" y="153" textAnchor="middle" fill="#79C9C5" fontSize="10" fontWeight="700">IG</text>
      <rect x="45" y="175" width="45" height="35" rx="8" fill="#F96E5B" opacity="0.08" stroke="#F96E5B" strokeWidth="1" />
      <text x="67" y="198" textAnchor="middle" fill="#F96E5B" fontSize="10" fontWeight="700">GA</text>
      <rect x="100" y="175" width="45" height="35" rx="8" fill="#FFE2AF" opacity="0.3" stroke="#F96E5B" strokeWidth="1" />
      <text x="122" y="198" textAnchor="middle" fill="#F96E5B" fontSize="10" fontWeight="700" opacity="0.7">TW</text>
      {/* Data flowing lines */}
      <rect x="45" y="225" width="110" height="6" rx="3" fill="#e5e7eb" />
      <rect x="45" y="225" width="70" height="6" rx="3" fill="#3F9AAE" opacity="0.3" />
      <rect x="45" y="238" width="110" height="6" rx="3" fill="#e5e7eb" />
      <rect x="45" y="238" width="90" height="6" rx="3" fill="#79C9C5" opacity="0.3" />
      <rect x="45" y="251" width="110" height="6" rx="3" fill="#e5e7eb" />
      <rect x="45" y="251" width="50" height="6" rx="3" fill="#F96E5B" opacity="0.3" />
      <text x="102" y="302" textAnchor="middle" fill="#6b7280" fontSize="11" fontWeight="600" letterSpacing="1">PLATFORMS</text>
      {/* Arrow 1 */}
      <line x1="200" y1="200" x2="260" y2="200" stroke="#79C9C5" strokeWidth="3" strokeDasharray="6 6" />
      <polygon points="265,200 255,194 255,206" fill="#79C9C5" />
      {/* FlowToWork center */}
      <rect x="280" y="110" width="240" height="180" rx="24" fill="#3F9AAE" opacity="0.06" stroke="#3F9AAE" strokeWidth="2" />
      {/* Gear/automation icon */}
      <circle cx="400" cy="170" r="28" fill="white" stroke="#3F9AAE" strokeWidth="2" />
      <path d="M400 148v6M400 186v6M378 170h6M416 170h6" stroke="#3F9AAE" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M384.4 154.4l4.2 4.2M411.4 181.4l4.2 4.2M384.4 185.6l4.2-4.2M411.4 158.6l4.2-4.2" stroke="#3F9AAE" strokeWidth="2" strokeLinecap="round" />
      <circle cx="400" cy="170" r="12" fill="#3F9AAE" opacity="0.1" stroke="#3F9AAE" strokeWidth="1.5" />
      <path d="M395 170l4 4 8-8" stroke="#3F9AAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Optimization indicators */}
      <rect x="325" y="215" width="150" height="8" rx="4" fill="#e5e7eb" />
      <rect x="325" y="215" width="120" height="8" rx="4" fill="#79C9C5" opacity="0.4" />
      <rect x="325" y="230" width="150" height="8" rx="4" fill="#e5e7eb" />
      <rect x="325" y="230" width="100" height="8" rx="4" fill="#3F9AAE" opacity="0.3" />
      <rect x="325" y="245" width="150" height="8" rx="4" fill="#e5e7eb" />
      <rect x="325" y="245" width="135" height="8" rx="4" fill="#FFE2AF" opacity="0.6" />
      <text x="400" y="300" textAnchor="middle" fill="#3F9AAE" fontSize="13" fontWeight="700">FlowToWork Automation</text>
      {/* Arrow 2 */}
      <line x1="540" y1="200" x2="600" y2="200" stroke="#79C9C5" strokeWidth="3" strokeDasharray="6 6" />
      <polygon points="605,200 595,194 595,206" fill="#79C9C5" />
      {/* Analytics & Alerts */}
      <rect x="620" y="110" width="150" height="180" rx="16" fill="white" stroke="#F96E5B" strokeWidth="2" opacity="0.8" />
      {/* Mini chart */}
      <polyline points="640,195 660,180 680,190 700,165 720,170 740,150" stroke="#79C9C5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="740" cy="150" r="4" fill="#79C9C5" />
      {/* Chart grid lines */}
      <line x1="640" y1="200" x2="745" y2="200" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="640" y1="180" x2="745" y2="180" stroke="#f3f4f6" strokeWidth="1" />
      <line x1="640" y1="160" x2="745" y2="160" stroke="#f3f4f6" strokeWidth="1" />
      {/* Alert notifications */}
      <rect x="640" y="215" width="100" height="20" rx="10" fill="#F96E5B" opacity="0.08" stroke="#F96E5B" strokeWidth="1" />
      <circle cx="652" cy="225" r="4" fill="#F96E5B" opacity="0.5" />
      <rect x="660" y="222" width="50" height="5" rx="2.5" fill="#F96E5B" opacity="0.2" />
      <rect x="640" y="242" width="100" height="20" rx="10" fill="#79C9C5" opacity="0.08" stroke="#79C9C5" strokeWidth="1" />
      <circle cx="652" cy="252" r="4" fill="#79C9C5" opacity="0.5" />
      <rect x="660" y="249" width="60" height="5" rx="2.5" fill="#79C9C5" opacity="0.2" />
      <text x="695" y="302" textAnchor="middle" fill="#F96E5B" fontSize="11" fontWeight="600" letterSpacing="1">ANALYTICS</text>
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

