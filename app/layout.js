import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FlowToWork - Automate Smarter. Work Faster.',
  description: 'FlowToWork provides cutting-edge automation workflows and AI agent services to help businesses optimize operations, increase efficiency, and scale faster.',
  keywords: 'automation, AI agents, workflow automation, business automation, AI services',
  authors: [{ name: 'FlowToWork' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

