import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { NewSiteIcon } from '@/components/SocialIcons'
import { resumeJson } from './resume'
import WorkTimeline from '@/components/WorkTimeline'


export const metadata: Metadata = {
    title: 'Experience',
    description:
        "With 3 years of professional development experience following a 10-year career in marketing, I'm equipped with a holistic understanding of user-driven development. Learn more today!",
}

export default function Experience() {
    return (
        <Container className='mt-16 sm:mt-32'>
            <header className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    User-driven development has finally been realized.
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    With 3 years of professional development experience following a 10-year career in marketing, I'm equipped with a holistic understanding of user-driven development, enabling me to seamlessly translate user needs into efficient and innovative code. Learn more about my background and experience below.
                </p>
                <div className='flex gap-3'>
                    <Button href="#dev" color="gray" className='mt-8 text-sm'>
                        View Full Experience on LinkedIn
                        <NewSiteIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
                    </Button>
                </div>
            </header>
            <div className="mt-16 sm:mt-20">
                <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                    <div className="flex max-w-4xl flex-col space-y-16" id="dev">
                        <WorkTimeline homeButtons={false} resumeItems={resumeJson} />
                    </div>
                </div>
            </div>
        </Container>
    )
}
