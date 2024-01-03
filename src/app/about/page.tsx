import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { Photos } from '@/components/Photos'
import { SocialLinks } from '@/components/SocialLinks'

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
            Developer. Foodie. Marketer. Entreprenuer. Photographer. Apex
            Legends Tryhard. Father.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Not necessarily in that order.
          </p>
        </header>
      </Container>
      <Photos />
      <Container className="mt-12 sm:mt-24">
        <div className="mt-24 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:order-first lg:row-span-2">
            <h1 className="flex text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
              Overview
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I'm a passionate full stack web developer with 3 years of coding
                experience, specializing in JavaScript, API development, React,
                Remix.js, TypeScript, SQL, Hasura, GraphQL, and RESTful APIs.
              </p>
              <p>
                Adept at navigating complex web development challenges, I bring
                a unique blend of technical expertise and creative
                problem-solving. My journey into coding follows a successful
                10-year career in marketing, where I focused on branding and
                digital marketing strategies.
              </p>
              <p>
                This dual background equips me with a holistic understanding of
                user-driven development, enabling me to seamlessly translate
                user needs into efficient and innovative code. Actively seeking
                new opportunities post a recent career transition, I am excited
                to contribute my diverse skill set to a forward-thinking team.
              </p>
              <p>
                Let's connect to explore how my decade-long marketing experience
                and three years in development can bring value to your projects.
              </p>
            </div>
          </div>
          <SocialLinks />
        </div>
      </Container>
    </>
  )
}
