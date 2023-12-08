import Image from 'next/image'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  IdentificationIcon,
  InstagramIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from '@/components/SocialIcons'


import { getAllArticles } from '@/lib/articles'
import waveGif from '@/images/wave.gif'
import SocialLink from '@/components/SocialLink'
import Resume from '@/components/Resume'

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="">
        <div className="max-w-2xl mx-auto text-center">
          <div className='my-16'>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              <div className='flex flex-row gap-x-5'>
                {/* <Image src={waveGif} height={100} width={100} alt="wave gif" /> */}
                Hello world, I'm Josh Allan and I write beautiful code.
              </div>
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              I’m Josh, a software engineer at [insert your company here], 2x entrepreneur at Moniker Branding and Roxberry Juice Co., amatuer foodie at @rvagrubs, and girl dad at home.
            </p>
            {/* <div className="mt-6 flex gap-6">
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
            </div> */}
          </div>
        </div>
        <hr className="w-full" />
      </Container>
      {/* <Photos /> */}
      <Container className="mt-8 md:mt-16">

        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <IdentificationIcon />
              <span className="ml-3">Contact Information</span>
            </h2>

            <ul role="list">
              <SocialLink href="https://github.com/jallan07" icon={GitHubIcon} className="mt-4">
                jallan07
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/joshuamallan" icon={LinkedInIcon} className="mt-4">
                joshuamallan
              </SocialLink>
              <SocialLink href="https://www.instagram.com/rvagrubs/" icon={InstagramIcon} className="mt-4">
                rvagrubs
              </SocialLink>
              <SocialLink href="https://www.instagram.com/joshua.m.allan/" icon={InstagramIcon} className="mt-4">
                joshua.m.allan
              </SocialLink>
              <SocialLink
                href="mailto:allan.josh07@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                allan.josh07@gmail.com
              </SocialLink>
              <SocialLink
                href=""
                icon={PhoneIcon}
                className="mt-8 "
              >
                615-306-5800
              </SocialLink>
              <SocialLink href="" icon={LocationIcon} className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
                richmond, va
              </SocialLink>
            </ul>


          </div >
          {/* <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div> */}
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter /> */}
            <Resume />
          </div>
        </div>
      </Container >
    </>
  )
}
