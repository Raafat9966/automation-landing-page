import { ReactNode } from 'react'
import Reveal from './Reveal'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  /** Alternate surface tint for visual rhythm between sections. */
  tone?: 'base' | 'surface'
  'aria-labelledby'?: string
}

export default function Section({
  id,
  children,
  className = '',
  tone = 'base',
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-20 sm:py-28 ${
        tone === 'surface' ? 'bg-surface' : 'bg-bg'
      } ${className}`}
      {...rest}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'center' | 'left'
  titleId?: string
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  titleId,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-14 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}
    >
      {eyebrow && (
        <Reveal
          as="p"
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary"
        >
          {eyebrow}
        </Reveal>
      )}
      <Reveal as="h2" id={titleId} delay={60} className="text-h2 font-bold text-fg">
        {title}
      </Reveal>
      {subtitle && (
        <Reveal as="p" delay={120} className="mt-5 text-lead text-fg-muted">
          {subtitle}
        </Reveal>
      )}
    </div>
  )
}
