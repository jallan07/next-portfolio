import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import ContactForm from '@/components/ContactForm'
import { SocialLinks } from '@/components/SocialLinks'

export const metadata: Metadata = {
  title: 'Contact Me Today',
  description:
    "With 3 years of professional development experience following a 10-year career in marketing, I'm equipped with a holistic understanding of user-driven development. Send me a message today!",
}

export default function Contact() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Slide into my DMs and let's build something great together.
          </h1>
        </header>
      </Container>
      <Container className="mt-12">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="space-y-7 text-base text-zinc-600 dark:text-zinc-400 lg:order-first lg:row-span-2">
            <ContactForm />
          </div>
          <div>
            <SocialLinks />
          </div>
        </div>
      </Container>
    </>
  )
}
