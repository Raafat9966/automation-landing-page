'use client'

import { ElementType, useEffect, useRef, useState } from 'react'

interface RevealProps {
  children: React.ReactNode
  as?: ElementType
  className?: string
  id?: string
  /** Stagger delay in ms. */
  delay?: number
  /** Re-run the animation every time it enters the viewport. */
  once?: boolean
}

export default function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  id,
  delay = 0,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // No IntersectionObserver (SSR-ish envs, old browsers) → just show it.
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }

    // Already on screen at mount → reveal now, skip the wait.
    const rect = el.getBoundingClientRect()
    const vh = window.innerHeight || document.documentElement.clientHeight
    if (rect.top < vh * 1.1 && rect.bottom > 0) {
      setShown(true)
      if (once) return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setShown(false)
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 },
    )
    observer.observe(el)

    // Safety net: never leave content permanently hidden if the observer
    // never fires (background tabs, no-scroll views, crawlers).
    const fallback = window.setTimeout(() => setShown(true), 2500)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [once])

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${shown ? 'reveal--in' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
