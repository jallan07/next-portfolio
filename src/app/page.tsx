import Image from 'next/image'
import clsx from 'clsx'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'


import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import waveGif from '@/images/wave.gif'
import SocialLink from '@/components/SocialLink'
import Resume from '@/components/Resume'
import { Article } from '@/components/Article'

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-3xl">
          <div className='my-16'>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              <div className='flex flex-row gap-x-5'>
                <Image src={waveGif} height={30} width={50} alt="wave gif" />
                Hello world, I'm Josh Allan.
              </div>
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              I’m Spencer, a software designer and entrepreneur based in New York
              City. I’m the founder and CEO of Planetaria, where we develop
              technologies that empower regular people to explore space on their
              own terms.
            </p>
            <div className="mt-6 flex gap-6">
              <SocialLink
                href="https://github.com/jallan07"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
                children={null}
              />
              <SocialLink
                href="https://linkedin.com/in/joshuamallan"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
                children={null}
              />
              <SocialLink
                href="https://instagram.com/rvagrubs"
                aria-label="Follow on Instagram"
                icon={InstagramIcon}
                children={null}
              />
              <SocialLink
                href="https://instagram.com/joshua.m.allan"
                aria-label="Follow on Instagram"
                icon={InstagramIcon}
                children={null}
              />
            </div>
          </div>
        </div>
      </Container>
      {/* <Photos /> */}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter /> */}
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
