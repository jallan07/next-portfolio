import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import SocialLink from '@/components/SocialLink'
import { SimpleResume } from '@/components/SimpleResume'
import ContactForm from '@/components/ContactForm'
import { Photos } from '@/components/Photos'

export default async function Home() {
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
                Freelance software engineer, 2x entrepreneur at Moniker Branding
                and Roxberry Juice Co., amatuer foodie at @rvagrubs, and girl
                dad at home.
              </p>
            </div>
            <div className="mt-6 flex gap-1">
              <SocialLink
                href="https://instagram.com/rvagrubs"
                aria-label="Follow on Instagram"
                icon={InstagramIcon}
              >
                {null}
              </SocialLink>
              <SocialLink
                href="https://github.com/jallan07"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
              >
                {null}
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/joshuamallan/"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
              >
                {null}
              </SocialLink>
            </div>
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-8 md:mt-16">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 lg:space-x-14">
          <div className="space-y-10">
            <SimpleResume />
          </div>
          <div className="space-y-10">
            <ContactForm />
          </div>
        </div>
      </Container>
    </>
  )
}
