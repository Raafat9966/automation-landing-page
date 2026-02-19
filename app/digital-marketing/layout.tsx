import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Marketing Services | FlowToWork',
  description: 'FlowToWork digital marketing services: automated ad monitoring, performance analytics, and AI-driven campaign optimization to grow your business.',
  alternates: {
    canonical: '/digital-marketing',
  },
  openGraph: {
    title: 'Digital Marketing Services | FlowToWork',
    description: 'Automated ad monitoring, performance analytics, and AI-driven campaign optimization.',
    url: 'https://flowtowork.com/digital-marketing',
    siteName: 'FlowToWork',
    type: 'website',
  },
}

export default function DigitalMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
