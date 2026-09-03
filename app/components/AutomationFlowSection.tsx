import type { Translations } from '../../translations/types'
import Section, { SectionHeader } from './ui/Section'
import Reveal from './ui/Reveal'

const icons = [
  <path key="trigger" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />,
  <path
    key="logic"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
  />,
  <path
    key="action"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  />,
  <path
    key="result"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  />,
]

export default function AutomationFlowSection({ t }: { t: Translations['automationFlow'] }) {
  return (
    <Section id="how-it-works" aria-labelledby="automation-flow-title">
      <SectionHeader eyebrow="How it works" title={t.title} subtitle={t.subtitle} titleId="automation-flow-title" />

      <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Connector */}
        <div
          className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
          aria-hidden="true"
        />

        {t.steps.map((step, index) => (
          <Reveal
            key={index}
            delay={index * 90}
            className="group relative rounded-4xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
          >
            <div className="relative mb-5 inline-flex">
              <span className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-fg">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {icons[index]}
                </svg>
              </span>
              <span className="absolute -right-2 -top-2 inline-flex h-7 w-7 items-center justify-center rounded-full border-4 border-card bg-highlight text-xs font-bold text-highlight-fg">
                {index + 1}
              </span>
            </div>
            <h3 className="mb-2 text-h3 font-bold text-fg transition-colors group-hover:text-primary">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-fg-muted">{step.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
