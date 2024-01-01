import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'
import { sendEmail } from '@/lib/sendEmail'

export const metadata: Metadata = {
  title: 'You’re subscribed',
  description: 'Thanks for subscribing to my newsletter.',
}

export default async function ThankYou(request: Request) {
  //   console.log(request.url)
  //   console.log({ request })
  //   //   const fromAddress = url.searchParams.get('fromAddress') || null
  //   //   console.log('🚀 ~ file: page.tsx:14 ~ ThankYou ~ fromAddress:', fromAddress)

  //   const sendEmailResponse = await sendEmail(fromAddress)
  //   console.log(
  //     '🚀 ~ file: page.tsx:13 ~ ThankYou ~ sendEmailResponse:',
  //     sendEmailResponse,
  //   )

  return (
    <>
      {/* {sendEmailResponse ? ( */}
      <SimpleLayout
        title="Thanks for the message."
        intro="I’ll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you’d want to hear about. You can unsubscribe at any time, no hard feelings."
      />
      {/* ) : (
        <SimpleLayout
          title="Message failed to send."
          intro="Something went wrong. Please try again."
        />
      )} */}
    </>
  )
}
