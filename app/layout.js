import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '../context/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FlowToWork | Automation & AI Agent Solutions',
  description: 'FlowToWork provides cutting-edge automation workflows and AI agent services to help businesses optimize operations, increase efficiency, and scale faster.',
  keywords: 'automation workflows, AI agents, business process automation, workflow automation services, automation, AI services',
  authors: [{ name: 'FlowToWork' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'FlowToWork | Automation & AI Agent Solutions',
    description: 'Harness the power of AI agents and intelligent automation workflows to transform your business operations.',
    url: 'https://flowtowork.com',
    siteName: 'FlowToWork',
    images: [
      {
        url: '/og-image.png', // Placeholder
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlowToWork | Automation & AI Agent Solutions',
    description: 'Harness the power of AI agents and intelligent automation workflows to transform your business operations.',
    images: ['/og-image.png'], // Placeholder
  },
}

export default function RootLayout({ children }) {
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
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

