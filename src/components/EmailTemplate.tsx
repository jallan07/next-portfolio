import * as React from 'react'

interface EmailTemplateProps {
  firstName: string
  from: string
  phone: string
  message?: string
  subject?: string
  lastName?: string
}

export const InternalEmailNotificationTemplate: React.FC<
  Readonly<EmailTemplateProps>
> = ({ from, phone, firstName, message, subject, lastName }) => (
  <div>
    <p>
      <span className="font-medium">From:</span> {firstName} {`<${from}>`}
    </p>
    {subject && (
      <p>
        <span className="font-medium">Subject:</span> {subject}
      </p>
    )}
    <p>
      <span className="font-medium">Name:</span> {firstName}{' '}
      {lastName && lastName}
    </p>
    <p>
      <span className="font-medium">Phone:</span> {phone}
    </p>
    <p>
      <span className="font-medium">Message:</span> {message}
    </p>
  </div>
)

export const ExternalEmailNotificationTemplate: React.FC<
  Readonly<EmailTemplateProps>
> = ({ from, phone, firstName }) => (
  <div>
    <h2>Thank you for your message, {firstName}!</h2>
    <p>
      This is confirmation that the information you submitted via the contact
      form on{' '}
      <a href="https://www.joshallan.dev/contact" target="_blank">
        joshallan.dev/contact
      </a>{' '}
      has been received. I will look it over in the next few days, and reach out
      directly using your preferred contact methods (shown below).
    </p>
    <p>
      <span className="font-medium">Phone:</span> {phone}
    </p>
    <p>
      <span className="font-medium">Email:</span> {firstName} {`<${from}>`}
    </p>
    <p>Thank you—I look forward to connecting with you, {firstName}!</p>
  </div>
)
