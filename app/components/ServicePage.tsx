import { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Reveal from './ui/Reveal'
import type { Translations } from '../../translations/types'

interface ServicePageProps {
  eyebrow: string
  hero: { title: string; subtitle: string }
  sections: Array<{ title: string; description: string; features: string[] }>
  icons: ReactNode[]
  footer: Translations['footer']
  nav: Translations['nav']
  waitlistLabel: string
}

export default function ServicePage({
  eyebrow,
  hero,
  sections,
  icons,
  footer,
  nav,
  waitlistLabel,
}: ServicePageProps) {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="relative isolate overflow-hidden bg-bg pb-16 pt-36">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-30 mask-fade-y dark:opacity-15"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[26rem] w-[46rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <Reveal
              as="p"
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary"
            >
              {eyebrow}
            </Reveal>
            <Reveal as="h1" delay={60} className="text-h1 font-bold text-fg">
              {hero.title}
            </Reveal>
            <Reveal as="p" delay={120} className="mt-5 text-lead text-fg-muted">
              {hero.subtitle}
            </Reveal>
          </div>
        </section>

        <section className="bg-bg py-20 sm:py-24">
          <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8 sm:space-y-28">
            {sections.map((section, index) => (
              <Reveal
                key={section.title}
                className={`flex flex-col items-center gap-10 md:gap-14 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                <div className="flex-1 space-y-5">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-lg font-bold text-primary">
                    {index + 1}
                  </span>
                  <h2 className="text-h2 font-bold text-fg">{section.title}</h2>
                  <p className="text-lg leading-relaxed text-fg-muted">{section.description}</p>
                  <ul className="space-y-2.5">
                    {section.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-fg">
                        <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full flex-1">
                  <div className="group flex aspect-video items-center justify-center overflow-hidden rounded-5xl border border-border bg-gradient-to-br from-surface to-card shadow-soft">
                    <div className="text-primary/25 transition-transform duration-500 group-hover:scale-110">
                      <svg className="h-24 w-24" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        {icons[index]}
                      </svg>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer t={footer} nav={nav} waitlistLabel={waitlistLabel} />
    </>
  )
}
