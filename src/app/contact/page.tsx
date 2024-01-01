import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Me Today',
  description:
    "With 3 years of professional development experience following a 10-year career in marketing, I'm equipped with a holistic understanding of user-driven development. Send me a message today!",
}

export default function Contact() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Slide into my DMs and we'll build something great together.
        </h1>
      </header>
      <div className="flex max-w-4xl flex-col">
        <ContactForm />
      </div>
    </Container>
  )
}
