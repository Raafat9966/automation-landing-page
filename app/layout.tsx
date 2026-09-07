import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Providers from './components/Providers'
import ThemeScript from './components/ThemeScript'
import ScrollToTop from './components/ScrollToTop'
import WaitingListClient from './components/WaitingListClient'
import ErrorBoundary from './components/ErrorBoundary'
import { getLanguage } from './lib/i18n'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://flowtowork.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'FlowToWork | Automation & AI Agent Solutions',
    template: '%s | FlowToWork',
  },
  description:
    'FlowToWork provides cutting-edge automation workflows and AI agent services to help businesses optimize operations, increase efficiency, and scale faster.',
  keywords: [
    'automation workflows',
    'AI agents',
    'business process automation',
    'workflow automation services',
    'automation',
    'AI services',
  ],
  authors: [{ name: 'FlowToWork' }],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'FlowToWork | Automation & AI Agent Solutions',
    description:
      'Harness the power of AI agents and intelligent automation workflows to transform your business operations.',
    url: siteUrl,
    siteName: 'FlowToWork',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlowToWork | Automation & AI Agent Solutions',
    description:
      'Harness the power of AI agents and intelligent automation workflows to transform your business operations.',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1220' },
  ],
  colorScheme: 'light dark',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FlowToWork',
  url: siteUrl,
  description:
    'FlowToWork provides cutting-edge automation workflows and AI agent services to help businesses optimize operations.',
  address: { '@type': 'PostalAddress', addressCountry: 'DE' },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const language = await getLanguage()

  return (
    <html lang={language} className={inter.variable} suppressHydrationWarning>
      <head>
        <ThemeScript />
        <noscript>
          {/* Ensure progressively-enhanced content is visible without JS */}
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-screen bg-bg font-sans text-fg antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-card focus:px-4 focus:py-2 focus:font-semibold focus:text-primary focus:shadow-lift"
        >
          Skip to main content
        </a>
        <ScrollToTop />
        <Providers initialLanguage={language}>
          <ErrorBoundary>{children}</ErrorBoundary>
          <ErrorBoundary>
            <WaitingListClient />
          </ErrorBoundary>
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  )
}
