import { Role as RoleType } from '@/app/types/Role'
import { ArrowDownIcon, BriefcaseIcon } from './SocialIcons'
import { Role } from './Role'
import { Button } from './Button'

export const SimpleResume = () => {
  let resume: Array<RoleType> = [
    {
      company: 'Freelance',
      title: 'Software Engineer',
      start: '2024',
      logo: 'SDE',
      background: 'bg-[#18181A]',
      end: 'Current',
    },
    {
      company: 'Paymerang',
      title: 'Full Stack Software Engineer',
      start: '2021',
      logo: 'PMG',
      background: 'bg-[#702082]',
      end: '2023',
    },
    {
      company: 'FreshLime',
      title: 'Director of Customer Marketing',
      start: '2018',
      logo: 'FL',
      background: 'bg-[#72be45]',
      end: '2020',
    },
    {
      company: 'Moniker Branding',
      title: 'Chief Brandsmith & Managing Partner',
      start: '2017',
      logo: 'MB',
      background: 'bg-[#9b572b]',
      end: '2019',
    },
    {
      company: 'BetterBody Foods',
      title: 'Director of E-Commerce',
      start: '2016',
      background: 'bg-[#fe7501]',
      logo: 'BBF',
      end: '2017',
    },
    {
      company: 'Revere Health',
      title: 'Digital Marketing Specialist',
      start: '2015',
      logo: 'RH',
      background: 'bg-[#822880]',
      end: '2016',
    },
    {
      company: 'OrangeSoda',
      title: 'Enterprise SEO Analyst',
      start: '2010',
      logo: 'OS',
      background: 'bg-orange-500',
      end: '2015',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Professional Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button
        href="/experience"
        variant="primary"
        className="group mt-6 w-full"
      >
        View All Experience
      </Button>
      <Button
        href="/files/Josh Allan - 2024 Resume - Software Engineer - 2 pages.pdf"
        target="_blank"
        variant="secondary"
        download
        className="group mt-2 w-full"
      >
        Download Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}
