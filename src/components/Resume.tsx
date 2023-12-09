import { Role as RoleType } from '@/app/types/Role'
import logoPaymerang from '@/images/logos/paymerang.svg'
import logoFreshlime from '@/images/logos/freshlime.png'
import logoReverehealth from '@/images/logos/reverehealth.png'
import logoMoniker from '@/images/logos/moniker.png'
import logoBetterbodyFoods from '@/images/logos/betterbodyfoods.webp'
import logoChart from '@/images/logos/chart.svg'
import { Role } from './Role'
import { Button } from './Button'
import { ArrowDownIcon, BriefcaseIcon } from './SocialIcons'

export default function Resume() {
    let resume: Array<RoleType> = [
        // {
        //     company: 'Paymerang',
        //     title: 'Full Stack Software Developer',
        //     logo: logoPaymerang,
        //     start: '2021',
        //     end: {
        //         label: 'Present',
        //         dateTime: new Date().getFullYear().toString(),
        //     },
        // },
        {
            company: 'Paymerang',
            title: 'Full Stack Software Developer',
            // logo: logoPaymerang,
            start: '2021',
            end: "2023",
        },
        {
            company: 'FreshLime',
            title: 'Director of Customer Marketing',
            // logo: logoFreshlime,
            start: '2018',
            end: '2020',
        },
        {
            company: 'Moniker Branding',
            title: 'Chief Brandsmith',
            // logo: logoMoniker,
            start: '2017',
            end: '2019',
        },
        {
            company: 'BetterBody Foods',
            title: 'Director of E-Commerce',
            // logo: logoBetterbodyFoods,
            start: '2016',
            end: '2017',
        },
        {
            company: 'Revere Health',
            title: 'Digital Marketing Specialist',
            // logo: logoReverehealth,
            start: '2015',
            end: '2016',
        },
        {
            company: 'OrangeSoda',
            title: 'Enterprise SEO Analyst',
            // logo: logoChart,
            start: '2010',
            end: '2015',
        },
    ]

    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <BriefcaseIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">My experience at a glance</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {resume.map((role, roleIndex) => (
                    <Role key={roleIndex} role={role} />
                ))}
            </ol>
            <Button href="/files/Josh Allan - 2023 Resume - Software Engineer - 2 pages.pdf" target="_blank" variant="secondary" className="group mt-6 w-full" download>
                Download CV
                <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
        </div >
    )
}