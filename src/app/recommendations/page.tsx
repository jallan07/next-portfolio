import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { ArrowDownIcon, NewSiteIcon } from '@/components/SocialIcons'
import RecommendationsTimeline from '@/components/RecommendationsTimeline'
import type { Recommendation as RecommendationType } from '../types/Recommendation'
import { getRecommendations } from '@/server/getRecommendations'
import { useRouter } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Recommendations',
  description:
    'Check out the kudos and recommendations shaping my software developer journey. Each collaboration adds a unique touch to my evolving portfolio story',
}

export default async function Recommendations() {
  const res: { data: RecommendationType[] } = await getRecommendations()
  const recommendations = res.data.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
  console.log(
    '🚀 ~ file: page.tsx:21 ~ Recommendations ~ recommendations:',
    recommendations,
  )

  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          I write beautiful code.
          <br />
          But you don't have to take my word for it.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Throughout my career, I've had the pleasure of working alongside some
          incredible individuals. Many of which seem to have enjoyed the
          experience 😉. Read the recommendations I've received in my career
          below!
        </p>
        <div className="flex gap-3">
          <Button href="#dev" color="gray" className="mt-8 text-sm">
            View Developer Recs
            <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
          </Button>
          <Button
            href="https://www.linkedin.com/in/joshuamallan/#recommendations"
            color="gray"
            className="mt-8 text-sm"
            variant="secondary"
          >
            View All Recs
            <NewSiteIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
          </Button>
        </div>
      </header>
      <div className="mt-16 sm:mt-20">
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-4xl flex-col space-y-16" id="dev">
            <RecommendationsTimeline recommendationItems={recommendations} />
          </div>
        </div>
      </div>
    </Container>
  )
}
