import { sendEmail } from '@/lib/sendEmail'
import { NextResponse } from 'next/server'

const internalAddress = process.env.EMAIL_ADDRESS!

export async function POST(req: Request) {
  const url = new URL(req.url)
  let params = new URLSearchParams(url.search)

  const from = params.get('from')!
  const phone = params.get('phone')!
  const firstName = params.get('firstName')!
  const lastName = params.get('lastName')!
  const subject = params.get('subject')!
  const message = params.get('message')!

  // internal notification service (sending emails directly to my personal account)
  const internalNotification = await sendEmail({
    from,
    phone,
    firstName,
    lastName,
    subject,
    message,
    toAddress: internalAddress,
    internalNotification: true,
  })

  if (
    internalNotification.error ||
    !internalNotification.data ||
    !internalNotification.success
  ) {
    return NextResponse.json({ error: internalNotification.error })
  }

  // external notification service (sending emails confirmations to those who submitted the message via the contact form)
  const externalNotification = await sendEmail({
    from,
    firstName,
    phone,
    lastName,
    subject,
    message,
    toAddress: from,
    internalNotification: false,
  })

  if (
    externalNotification.error ||
    !externalNotification.data ||
    !externalNotification.success
  ) {
    return NextResponse.json({ error: externalNotification.error })
  }

  // if nothing fails, send a successful response to the UI
  return NextResponse.json({ error: internalNotification.data })
}
