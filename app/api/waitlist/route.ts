import { NextRequest, NextResponse } from 'next/server'

interface WaitlistFormData {
  name: string
  email: string
  company: string
  interest: string
}

export async function POST(request: NextRequest) {
  try {
    const body: WaitlistFormData = await request.json()
    const { name, email, company, interest } = body

    if (!name || !email || !interest) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!emailRegex.test(email.toLowerCase())) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const webhookUrl = process.env.WAITLIST_WEBHOOK_URL

    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, interest, source: 'waitlist' }),
      })

      if (!response.ok) {
        throw new Error(`Webhook responded with ${response.status}`)
      }
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Waitlist submission error:', error)
    return NextResponse.json({ error: 'Failed to join waitlist' }, { status: 500 })
  }
}
