'use client'

import { m, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, ReactElement, useState } from 'react'

interface WorkflowStep {
  title: string
  description: string
}

interface WorkflowData {
  title: string
  subtitle: string
  intro: string
  steps: WorkflowStep[]
}

interface WorkflowDemoSectionProps {
  isOpen: boolean
  onClose: () => void
  workflowData: WorkflowData | null | undefined
  imageSrc: string | null | undefined
  fallbackSvg: ReactElement | undefined
}

const stepIcons = [
  <path key="check" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
  <path key="spot" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />,
  <path key="alert" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />,
  <path key="record" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />,
]

export default function WorkflowDemoSection({
  isOpen,
  onClose,
  workflowData,
  imageSrc,
  fallbackSvg,
}: WorkflowDemoSectionProps) {
  const [imageError, setImageError] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    setImageError(false)
  }, [imageSrc])

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement
      modalRef.current
        ?.querySelector<HTMLElement>('button:not([disabled]), input, [href], [tabindex]:not([tabindex="-1"])')
        ?.focus()
    } else {
      previousFocusRef.current?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !modalRef.current) return
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key === 'Tab') {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input, [href], [tabindex]:not([tabindex="-1"])',
        )
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!workflowData) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          <m.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="workflow-demo-title"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-4xl border border-border bg-card shadow-lift"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface text-fg-muted transition-colors hover:bg-border hover:text-fg"
              aria-label="Close modal"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="px-5 py-8 sm:px-10">
              <div className="mb-6 text-center">
                <h2 id="workflow-demo-title" className="pr-8 text-2xl font-bold text-fg sm:text-3xl">
                  {workflowData.title}
                </h2>
                <p className="mt-1.5 font-medium text-primary">{workflowData.subtitle}</p>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-fg-muted">{workflowData.intro}</p>
              </div>

              <div className="mx-auto mb-8 max-w-xl">
                <div className="rounded-2xl border border-accent/40 bg-accent/20 p-3">
                  <div className="flex aspect-[21/9] w-full items-center justify-center overflow-hidden rounded-xl bg-white p-3 text-slate-900 shadow-inner">
                    {!imageError && imageSrc ? (
                      <Image
                        src={imageSrc}
                        alt={`${workflowData.title} workflow diagram`}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">{fallbackSvg}</div>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {workflowData.steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start rounded-2xl border border-border bg-surface p-4"
                  >
                    <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/15 text-secondary">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        {stepIcons[index]}
                      </svg>
                    </span>
                    <h3 className="mb-1 text-sm font-bold text-fg">{step.title}</h3>
                    <p className="text-xs leading-snug text-fg-muted">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  )
}
