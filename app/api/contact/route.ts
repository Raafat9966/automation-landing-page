import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const recipientEmail = 'raafat.basheer@yahoo.com'

    // Try webhook first if configured
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL
    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: recipientEmail,
          name,
          email,
          message,
          source: 'contact-form',
        }),
      })

      if (!response.ok) {
        throw new Error(`Webhook responded with ${response.status}`)
      }
    } else {
      // Fall back to nodemailer if webhook not configured
      const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com'
      const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10)
      const smtpUser = process.env.SMTP_USER
      const smtpPass = process.env.SMTP_PASS

      if (smtpUser && smtpPass) {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        })

        await transporter.sendMail({
          from: smtpUser,
          to: recipientEmail,
          replyTo: email,
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          `,
        })
      } else {
        console.warn('No webhook URL or SMTP credentials configured. Email not sent.')
      }
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
