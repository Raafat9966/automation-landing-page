'use client'

import { ReactNode } from 'react'
import { LazyMotion } from 'framer-motion'
import { LanguageProvider } from '../../context/LanguageContext'

const loadFeatures = () => import('./motion/features').then((mod) => mod.default)

interface ProvidersProps {
  children: ReactNode
  initialLanguage?: 'en' | 'de'
}

export default function Providers({ children, initialLanguage }: ProvidersProps) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <LanguageProvider initialLanguage={initialLanguage}>{children}</LanguageProvider>
    </LazyMotion>
  )
}
