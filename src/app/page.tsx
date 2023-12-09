import { Container } from '@/components/Container'
import {
  BriefcaseIcon, BuildingIcon,
} from '@/components/SocialIcons'


// import { getAllArticles } from '@/lib/articles'
import Resume from '@/components/Resume'
import WorkTimeline from '@/components/Timeline'
import Skills from '@/components/Skills'

export default async function Home() {
  // let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="">
        <div className="max-w-4xl mx-auto text-center">
          <div className='my-28'>
            <h1 className="sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              👋 Hello world. I'm Josh Allan — a marketer turned entrepreneur turned full-stack dev.
            </h1>
            <div className='max-w-3xl text-center mx-auto mt-12'>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                Software engineer at <span className="font-bold">[insert your company here]</span>, 2x entrepreneur at Moniker Branding and Roxberry Juice Co., amatuer foodie at @rvagrubs, and girl dad at home.
              </p>
            </div>
          </div>
        </div>

        <hr className="w-full" />
      </Container >
      <Container className="mt-8 md:mt-16" >
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">

          {/* ARTICLES */}
          {/* <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div> */}
          <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              <BuildingIcon className="h-6 w-6 flex-none" />
              <span className="ml-3">My experience at a glance</span>
            </h2>
            <WorkTimeline />
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                <BriefcaseIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">My skills at a glance</span>
              </h2>
              <Skills />
            </div >
          </div>
          {/* <div className="space-y-10 lg:pl-16 xl:pl-24">

            <Newsletter />
            <Resume />
          </div> */}
        </div>
      </Container>
    </>
  )
}
