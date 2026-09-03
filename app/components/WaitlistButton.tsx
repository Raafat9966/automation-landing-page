'use client'

import { useLanguage } from '../../context/LanguageContext'
import { buttonClass } from './ui/Button'

interface WaitlistButtonProps {
  label: string
  variant?: 'primary' | 'glass' | 'outline' | 'ghost'
  size?: 'md' | 'lg'
  className?: string
}

export default function WaitlistButton({ label, variant = 'primary', size = 'md', className = '' }: WaitlistButtonProps) {
  const { setIsWaitlistModalOpen } = useLanguage()
  return (
    <button type="button" onClick={() => setIsWaitlistModalOpen(true)} className={buttonClass(variant, size, className)}>
      {label}
    </button>
  )
}
