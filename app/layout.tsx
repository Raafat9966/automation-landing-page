import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '../context/LanguageContext'
import WaitingListClient from './components/WaitingListClient'
import ErrorBoundary from './components/ErrorBoundary'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://flowtowork.com'),
  title: 'FlowToWork | Automation & AI Agent Solutions',
  description: 'FlowToWork provides cutting-edge automation workflows and AI agent services to help businesses optimize operations, increase efficiency, and scale faster.',
  keywords: 'automation workflows, AI agents, business process automation, workflow automation services, automation, AI services',
  authors: [{ name: 'FlowToWork' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'FlowToWork | Automation & AI Agent Solutions',
    description: 'Harness the power of AI agents and intelligent automation workflows to transform your business operations.',
    url: 'https://flowtowork.com',
    siteName: 'FlowToWork',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FlowToWork - Automation & AI Agent Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlowToWork | Automation & AI Agent Solutions',
    description: 'Harness the power of AI agents and intelligent automation workflows to transform your business operations.',
    images: ['/og-image.png'],
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FlowToWork',
    url: 'https://flowtowork.com',
    logo: 'https://flowtowork.com/logo.png', // Placeholder
    description: 'FlowToWork provides cutting-edge automation workflows and AI agent services to help businesses optimize operations.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'DE'
    }
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:text-primary focus:font-semibold"
        >
          Skip to main content
        </a>
        <LanguageProvider>
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
          <ErrorBoundary>
            <WaitingListClient />
          </ErrorBoundary>
        </LanguageProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}

