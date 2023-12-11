'use client'
import { type Recommendation as RecommendationType } from '@/app/types/Recommendation'
import { formatDate } from '@/lib/formatDate'
import { Timeline } from 'flowbite-react'
import { Button } from './Button'
import { NewSiteIcon } from './SocialIcons'

type Props = {
    recommendationItems: RecommendationType[] | []
    showLink?: boolean
    showDate?: boolean
}

export default function RecommendationsTimeline({ recommendationItems, showDate = true, showLink = true }: Props) {
    return (
        <Timeline>
            {recommendationItems.map((item, i) => (
                <Timeline.Item key={item?.name}>
                    <Timeline.Point />
                    <Timeline.Content >
                        {showDate && item?.date && (<Timeline.Time className='text-zinc-600 dark:text-zinc-500'>{formatDate(item.date)}</Timeline.Time>)}
                        <Timeline.Title>{item?.name}</Timeline.Title>
                        <p className="text-sm italic font-normal text-zinc-600 dark:text-zinc-500">{item?.position}</p>
                        <Timeline.Body className='text-zinc-600 dark:text-zinc-400'>
                            {item?.description}
                        </Timeline.Body>
                        {showLink && (<a href={item?.href} target='_blank' rel="noreferrer">
                            <Button>See {item?.name.split(' ')[0]}'s full profile on LinkedIn<NewSiteIcon className="h-3 w-3" /></Button>
                        </a>)}
                    </Timeline.Content>
                </Timeline.Item>
            ))}
        </Timeline >
    )
}