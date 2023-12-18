import { Container } from '@/components/Container'
import { BriefcaseIcon, BuildingIcon } from '@/components/SocialIcons'

import WorkTimeline from '@/components/WorkTimeline'
import { Button } from '@/components/Button'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { resumeJson } from './experience/resume'
import RecommendationsTimeline from '@/components/RecommendationsTimeline'
import recommendationJson from '@/app/data/recommendations.json'

export default async function Home() {
  const randomIndex = Math.floor(Math.random() * recommendationJson.length)
  const featuredRec = recommendationJson[randomIndex]

  return (
    <>
      <Container className="">
        <div className="max-w-3xl">
          <div className="mt-28">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              👋 Hello world. <br />
              <br />
              I'm Josh Allan — a marketer turned entrepreneur turned full-stack
              dev.
            </h1>
            <div className="mt-12 max-w-3xl">
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                Software engineer at{' '}
                <span className="font-bold">[insert your company here]</span>,
                2x entrepreneur at Moniker Branding and Roxberry Juice Co.,
                amatuer foodie at @rvagrubs, and girl dad at home.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container className="mt-8 md:mt-16">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="mb-4 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <BuildingIcon className="h-6 w-6 flex-none" />
              <span className="ml-3">My experience at a glance</span>
            </h2>
            <WorkTimeline
              homeButtons={true}
              resumeItems={[resumeJson[0], resumeJson[1]]}
            />
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h2 className="mb-4 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <BriefcaseIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">My recommendations at a glance</span>
              </h2>
              <div className="text-sm font-light text-zinc-800 dark:text-zinc-100">
                {featuredRec && (
                  <RecommendationsTimeline
                    recommendationItems={[featuredRec]}
                    showLink={false}
                    showDate={false}
                  />
                )}
                <Button href="/recommendations" color="gray">
                  View All Recommendations
                  <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
