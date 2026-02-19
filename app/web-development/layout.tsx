import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Development Services | FlowToWork',
  description: 'FlowToWork web development services: modern, fast, and accessible websites built with Next.js, React, and Tailwind CSS to power your online presence.',
  alternates: {
    canonical: '/web-development',
  },
  openGraph: {
    title: 'Web Development Services | FlowToWork',
    description: 'Modern, fast, and accessible websites built with Next.js, React, and Tailwind CSS.',
    url: 'https://flowtowork.com/web-development',
    siteName: 'FlowToWork',
    type: 'website',
  },
}

export default function WebDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
