import type { Translations } from '../../translations/types'
import Section from './ui/Section'
import Reveal from './ui/Reveal'

export default function About({ t }: { t: Translations['about'] }) {
  const [before, after] = t.description1.split('FlowToWork')

  return (
    <Section id="about" tone="surface" aria-labelledby="about-title">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal as="article">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            About us
          </p>
          <h2 id="about-title" className="text-h2 font-bold text-fg">
            {t.title} <span className="text-gradient">FlowToWork</span>
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-relaxed text-fg-muted">
            <p>
              {before}
              <span className="font-semibold text-primary">FlowToWork</span>
              {after}
            </p>
            <p>{t.description2}</p>
            <p>{t.description3}</p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/10 to-secondary/10 p-6">
              <div className="text-3xl font-bold text-primary">10x</div>
              <div className="mt-1 font-medium text-fg-muted">{t.stats.faster}</div>
            </div>
            <div className="rounded-3xl border border-border bg-gradient-to-br from-secondary/10 to-accent/20 p-6">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="mt-1 font-medium text-fg-muted">{t.stats.ai}</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="absolute -right-6 -top-8 h-32 w-32 rounded-full bg-accent/40 blur-2xl" aria-hidden="true" />
          <div className="absolute -bottom-8 -left-6 h-32 w-32 rounded-full bg-highlight/30 blur-2xl" aria-hidden="true" />
          <div className="relative rounded-5xl bg-gradient-to-br from-primary via-secondary to-primary p-8 shadow-lift sm:p-10">
            <div className="space-y-4">
              {t.cards.map((card) => (
                <div
                  key={card.title}
                  className="flex items-start gap-4 rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-bold text-white">{card.title}</h3>
                    <p className="mt-1 text-sm text-white/85">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
