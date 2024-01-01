import * as React from 'react'

interface EmailTemplateProps {
  firstName: string
  from: string
  phone: string
  message: string
  subject?: string
  lastName?: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  from,
  phone,
  firstName,
  message,
  subject,
  lastName,
}) => (
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
