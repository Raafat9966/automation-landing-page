import type { Translations } from '../../translations/types'
import Section, { SectionHeader } from './ui/Section'
import Reveal from './ui/Reveal'

function CheckItem({ children, tone }: { children: React.ReactNode; tone: 'primary' | 'secondary' }) {
  return (
    <li className="flex items-start gap-3 text-fg-muted">
      <svg
        className={`mt-0.5 h-5 w-5 flex-shrink-0 ${tone === 'primary' ? 'text-primary' : 'text-secondary'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
      <span>{children}</span>
    </li>
  )
}

export default function EducationalSection({ t }: { t: Translations['education'] }) {
  const columns = [
    {
      data: t.automation,
      tone: 'primary' as const,
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />,
    },
    {
      data: t.aiAgents,
      tone: 'secondary' as const,
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
    },
  ]

  return (
    <Section id="education" tone="surface" aria-labelledby="education-title">
      <SectionHeader eyebrow="Concepts" title={t.title} subtitle={t.introduction} titleId="education-title" />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {columns.map(({ data, tone, icon }, i) => (
          <Reveal
            key={data.title}
            delay={i * 110}
            className="relative flex flex-col overflow-hidden rounded-5xl border border-border bg-card p-8 shadow-soft sm:p-10"
          >
            <div
              className={`absolute -right-16 -top-16 h-40 w-40 rounded-full blur-2xl ${
                tone === 'primary' ? 'bg-primary/15' : 'bg-secondary/15'
              }`}
              aria-hidden="true"
            />
            <div className="relative mb-6 flex items-center gap-4">
              <span
                className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${
                  tone === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
                }`}
              >
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {icon}
                </svg>
              </span>
              <div>
                <h3 className="text-h3 font-bold text-fg">{data.title}</h3>
                <p className={`font-medium ${tone === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                  {data.subtitle}
                </p>
              </div>
            </div>

            <ul className="relative mb-8 flex-grow space-y-3.5">
              {data.features.map((feature) => (
                <CheckItem key={feature} tone={tone}>
                  {feature}
                </CheckItem>
              ))}
            </ul>

            <div className="relative rounded-2xl bg-surface p-6">
              <h4 className="mb-3 font-bold text-fg">{data.examples.title}</h4>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {data.examples.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-fg-muted">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${tone === 'primary' ? 'bg-primary' : 'bg-secondary'}`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal
        delay={120}
        className="mt-10 rounded-4xl border border-primary/15 bg-gradient-to-r from-primary/10 via-secondary/10 to-highlight/10 p-8 text-center"
      >
        <p className="text-lg font-medium text-fg">{t.summary}</p>
      </Reveal>
    </Section>
  )
}
