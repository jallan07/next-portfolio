import { EmailTemplate } from '@/components/EmailTemplate'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const toAddress = process.env.EMAIL_ADDRESS!
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const url = new URL(req.url)
  let params = new URLSearchParams(url.search)

  const from = params.get('from')!
  const phone = params.get('phone')!
  const firstName = params.get('firstName')!
  const lastName = params.get('lastName')!
  const subject = params.get('subject')!
  const message = params.get('message')!

  try {
    const data = await resend.emails.send({
      from: 'contact@joshallan.dev',
      to: [toAddress],
      subject: `New message from ${firstName} <${from}> via the contact form on joshallan.dev`,
      react: EmailTemplate({
        from,
        firstName,
        lastName,
        subject,
        message,
        phone,
      }),
      text: message,
    })

    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error })
  }
}
