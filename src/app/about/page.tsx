import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { DeveloperOverview } from '@/app/about/DeveloperOverview'
import { FoodieOverview } from './FoodieOverview'
import { EntrepreneurOverview } from './EntrepreneurOverview'

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Josh Allan. I live in Richmond VA where I dream, envision, and create the future.',
}

export default function About() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Developer. Foodie. Storyteller. Entreprenuer. Photographer. Apex
            Legends Tryhard. Girl Dad.
          </h1>
          <p className="text-md mt-3 italic tracking-tight text-zinc-800 dark:text-zinc-100">
            List not necessarily in order of priority...
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            With a solid foundation in digital storytelling boasting a decade of
            hands-on experience coupled with a robust technical acumen honed
            through ~3 years in software engineering, I embody the intersection
            of two dynamic worlds.{' '}
            <span className="font-medium">
              Learn about my professional journey below.
            </span>
          </p>

          <div className="flex gap-3">
            <Button href="/contact" className="mt-8 text-sm">
              Contact Me Today
              <HiArrowNarrowRight className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
          </div>
        </header>
      </Container>

      <Container className="mt-12 sm:mt-24">
        <hr className="border-zinc-700/40" id="developer" />
        <DeveloperOverview />
      </Container>

      <Container className="mt-12 sm:mt-24">
        <hr className="border-zinc-700/40" id="foodie" />
        <FoodieOverview />
      </Container>

      <Container className="mt-12 sm:mt-24">
        <hr className="border-zinc-700/40" id="entrepreneur" />
        <EntrepreneurOverview />
      </Container>
    </>
  )
}
