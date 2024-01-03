import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
  MusicIcon,
  PhoneIcon,
} from '@/components/SocialIcons'
import SocialLink from '@/components/SocialLink'

export const SocialLinks = () => {
  return (
    <div className="mt-2 lg:pl-20">
      <ul role="list">
        <SocialLink
          href="https://github.com/jallan07"
          icon={GitHubIcon}
          className="mt-4"
        >
          jallan07
        </SocialLink>
        <SocialLink
          href="https://linkedin.com/in/joshuamallan"
          icon={LinkedInIcon}
          className="mt-4"
        >
          joshuamallan
        </SocialLink>
        <SocialLink
          href="https://www.instagram.com/rvagrubs/"
          icon={InstagramIcon}
          className="mt-4"
        >
          rvagrubs
        </SocialLink>
        <SocialLink
          href="https://open.spotify.com/user/12484067?si=f34a4e73c46a4f5e"
          icon={MusicIcon}
          className="mt-4"
        >
          josh allan
        </SocialLink>
        <SocialLink
          href="https://www.instagram.com/joshua.m.allan/"
          icon={InstagramIcon}
          className="mt-4 "
        >
          joshua.m.allan
        </SocialLink>
        <SocialLink
          href="mailto:allan.josh07@gmail.com"
          icon={MailIcon}
          className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
        >
          allan.josh07@gmail.com
        </SocialLink>
        <SocialLink href="tel:+16153065800" icon={PhoneIcon} className="mt-8 ">
          615-306-5800
        </SocialLink>
        <SocialLink
          href=""
          icon={LocationIcon}
          className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
        >
          Richmond, VA
        </SocialLink>
      </ul>
    </div>
  )
}
