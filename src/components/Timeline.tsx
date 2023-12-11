
'use client';

import { Timeline, TimelinePoint } from 'flowbite-react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Button } from './Button'
import { ArrowDownIcon, NewSiteIcon } from './SocialIcons';
import { type Resume } from '@/app/experience/resume';
import { formatDate } from '@/lib/formatDate';

type Props = {
    resumeItems: Resume[]
    homeButtons: boolean
}

export default function WorkTimeline({ resumeItems, homeButtons = false }: Props) {
    return (
        <Timeline>
            {resumeItems.map((item, i) => (<Timeline.Item>
                <Timeline.Point />
                <Timeline.Content key={item.title + i}>
                    <Timeline.Time>{`${item.dates.start} - ${item.dates.end}`}</Timeline.Time>
                    <Timeline.Title>{item.title}</Timeline.Title>
                    <Timeline.Time>{item.company}</Timeline.Time>
                    <Timeline.Body>
                        {item.description}
                        {item.keyAchievements && (
                            <div className="ml-2 my-3 text-md">
                                <Timeline.Title className="text-md">Key Achievements:</Timeline.Title>
                                {item.keyAchievements.map((keyAchievement, i) => (
                                    <ul className='ml-8 list-disc list-outside'>
                                        <li key={i}>
                                            {keyAchievement}
                                        </li>
                                    </ul>
                                ))}
                            </div>
                        )}
                    </Timeline.Body>
                    {item.href && !homeButtons && (<div className='flex gap-3'>
                        <Button href={item.href} rel='noreferrer' target='_blank' color="gray">
                            Learn more about {item.company}
                            <NewSiteIcon className="ml-2 h-3 w-3" />
                        </Button>
                    </div>)}
                </Timeline.Content>
            </Timeline.Item>))}
            {homeButtons && (<Timeline.Item>
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
            </Timeline.Item>)}
        </Timeline>
    );
}
