
'use client';

import { Timeline } from 'flowbite-react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Button } from './Button'
import { ArrowDownIcon } from './SocialIcons';

export default function WorkTimeline() {
    return (
        <Timeline>
            <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                    <Timeline.Time>January 2018 - Present</Timeline.Time>
                    <Timeline.Title>Freelance Web Developer</Timeline.Title>
                    <Timeline.Time>Self-employed</Timeline.Time>
                    <Timeline.Body>
                        In-depth experience building client-facing, marketing-driven websites — mostly built using CMS platforms.
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                    <Timeline.Time>April 2021 - November 2023</Timeline.Time>
                    <Timeline.Title>Full Stack Software Engineer</Timeline.Title>
                    <Timeline.Time>Paymerang</Timeline.Time>
                    <Timeline.Body>
                        Built responsive user interfaces using React (JavaScript/Typescript and Remix
                        framework), while also designing and implementing scalable back-end systems
                        using Hasura (GraphQL & SQL).
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
                <Timeline.Content>
                    <div className='flex gap-3'>
                        <Button href="" color="gray">
                            View All Work Experience
                            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                        </Button>
                        <Button href="/files/Josh Allan - 2023 Resume - Software Engineer - 2 pages.pdf" target="_blank" variant='secondary' download>
                            Download Full CV
                            <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
                        </Button>
                    </div>
                </Timeline.Content>
            </Timeline.Item>
        </Timeline>
    );
}
