'use client'

import { useRouter } from 'next/navigation'
import { useLanguage } from '../../context/LanguageContext'

export default function LanguageToggle({ className = '' }: { className?: string }) {
  const { language, toggleLanguage } = useLanguage()
  const router = useRouter()

  const handleClick = () => {
    toggleLanguage()
    // Re-render server components that were localized from the cookie.
    router.refresh()
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm font-medium text-fg-muted transition-colors hover:border-primary hover:text-primary ${className}`}
      aria-label={`Switch language to ${language === 'en' ? 'German' : 'English'}`}
    >
      <span aria-hidden="true" className="text-base leading-none">
        {language === 'en' ? '🇬🇧' : '🇩🇪'}
      </span>
      <span>{language === 'en' ? 'EN' : 'DE'}</span>
    </button>
  )
}
