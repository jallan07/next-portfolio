import { Role as RoleType } from '@/app/types/Role'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import { Role } from './Role'
import { Button } from './Button'
import { ArrowDownIcon, BriefcaseIcon } from './SocialIcons'

export default function Resume() {
    let resume: Array<RoleType> = [
        {
            company: 'Planetaria',
            title: 'CEO',
            logo: logoPlanetaria,
            start: '2019',
            end: {
                label: 'Present',
                dateTime: new Date().getFullYear().toString(),
            },
        },
        {
            company: 'Airbnb',
            title: 'Product Designer',
            logo: logoAirbnb,
            start: '2014',
            end: '2019',
        },
        {
            company: 'Facebook',
            title: 'iOS Software Engineer',
            logo: logoFacebook,
            start: '2011',
            end: '2014',
        },
        {
            company: 'Starbucks',
            title: 'Shift Supervisor',
            logo: logoStarbucks,
            start: '2008',
            end: '2011',
        },
    ]

    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <BriefcaseIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">Work</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {resume.map((role, roleIndex) => (
                    <Role key={roleIndex} role={role} />
                ))}
            </ol>
            <Button href="#" variant="secondary" className="group mt-6 w-full">
                Download CV
                <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
        </div>
    )
}