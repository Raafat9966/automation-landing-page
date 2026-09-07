import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'FlowToWork — Automation & AI Agent Solutions'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '96px',
          background: 'linear-gradient(135deg, #3F9AAE 0%, #79C9C5 45%, #F96E5B 120%)',
          color: '#fff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: 2, opacity: 0.9 }}>FLOWTOWORK</div>
        <div style={{ fontSize: 82, fontWeight: 800, lineHeight: 1.05, marginTop: 24, maxWidth: 900 }}>
          Automate smarter. Work faster.
        </div>
        <div style={{ fontSize: 34, marginTop: 28, opacity: 0.92, maxWidth: 820 }}>
          Intelligent automation workflows &amp; AI agents for modern businesses.
        </div>
      </div>
    ),
    size,
  )
}
