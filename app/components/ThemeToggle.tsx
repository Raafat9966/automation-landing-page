'use client'

import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function apply(theme: Theme) {
  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
  root.style.colorScheme = theme
  try {
    localStorage.setItem('theme', theme)
  } catch {
    /* storage unavailable — the choice just won't persist */
  }
}

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light')
  }, [])

  const isDark = theme === 'dark'

  const toggle = () => {
    const next: Theme = isDark ? 'light' : 'dark'
    apply(next)
    setTheme(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={`relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-border text-fg-muted transition-colors hover:border-primary hover:text-primary ${className}`}
      aria-label={theme ? `Switch to ${isDark ? 'light' : 'dark'} theme` : 'Toggle theme'}
      aria-pressed={isDark}
    >
      <svg
        className={`absolute h-5 w-5 transition-all duration-300 ${
          isDark ? 'scale-0 -rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" strokeWidth={1.8} />
        <path
          strokeLinecap="round"
          strokeWidth={1.8}
          d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
        />
      </svg>
      <svg
        className={`absolute h-5 w-5 transition-all duration-300 ${
          isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-90 opacity-0'
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
        />
      </svg>
    </button>
  )
}
