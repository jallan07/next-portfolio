import {
  ExternalEmailNotificationTemplate,
  InternalEmailNotificationTemplate,
} from '@/components/EmailTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface SendEmailProps {
  from: string
  firstName: string
  lastName: string
  subject: string
  message: string
  phone: string
  toAddress: string
  internalNotification: boolean
}

export const sendEmail = async ({
  from,
  firstName,
  lastName,
  subject,
  message,
  phone,
  toAddress,
  internalNotification,
}: SendEmailProps) => {
  try {
    const data = await resend.emails.send({
      from: 'Do Not Reply <contact-form@joshallan.dev>',
      to: [toAddress],
      subject: internalNotification
        ? `New message from ${firstName} <${from}> via the contact form on joshallan.dev`
        : `Your message has been received, ${firstName}!`,
      react: internalNotification
        ? InternalEmailNotificationTemplate({
            from,
            firstName,
            lastName,
            subject,
            message,
            phone,
          })
        : ExternalEmailNotificationTemplate({
            from,
            firstName,
            phone,
          }),
      text: message,
    })

    return { data, success: true }
  } catch (error) {
    return { data: [], error, success: false }
  }
}
