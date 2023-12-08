import { type Metadata } from 'next'
import Image from 'next/image'


import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from '@/components/SocialIcons'
import waveGif from '@/images/wave.gif'
import SocialLink from '@/components/SocialLink'
import { Photos } from '@/components/Photos'

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-12 sm:mt-24">
      <Photos />
      <div className="mt-24 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        {/* <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div> */}
        <div className="lg:order-first lg:row-span-2">
          <h1 className="flex text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl"><Image src={waveGif} height={30} alt="wave gif" />&nbsp;&nbsp;Hello world, I'm Josh Allan.
          </h1>
          {/* <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            Full stack developer at <span className='italic text-md'>[insert your company here]</span>. Amatuer foodie at <a className="underline" href="https://www.instagram.com/rvagrubs/" target='_blank' rel='noreferrer'>@rvagrubs</a>. Girl dad at home.
          </h1> */}
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I'm a passionate full stack web developer with 3 years of coding experience, specializing in JavaScript, API development, React, Remix.js, TypeScript, SQL, Hasura, GraphQL, and RESTful APIs.
            </p>
            <p>Adept at navigating complex web development challenges, I bring a unique blend of technical expertise and creative problem-solving. My journey into coding follows a successful 10-year career in marketing, where I focused on branding and digital marketing strategies.</p>
            <p>
              This dual background equips me with a holistic understanding of user-driven development, enabling me to seamlessly translate user needs into efficient and innovative code. Actively seeking new opportunities post a recent career transition, I am excited to contribute my diverse skill set to a forward-thinking team.
            </p>
            <p>Let's connect to explore how my decade-long marketing experience and three years in development can bring value to your projects.</p>
          </div>
        </div>
        <div className="lg:pl-20 mt-8">
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
        </div>
      </div>
    </Container >
  )
}
