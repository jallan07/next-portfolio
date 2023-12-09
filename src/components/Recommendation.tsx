import { type Recommendation as RecommendationType } from '@/app/types/Recommendation'
import { Card } from '@/components/Card'
import { formatDate } from '@/lib/formatDate'

export default function Recommendation({ recommendation }: { recommendation: RecommendationType }) {
    return (
        <article className="md:grid md:grid-cols-4 md:items-baseline">
            <Card className="md:col-span-3">
                <Card.Title>
                    {recommendation.title}
                    <p className="text-sm italic font-normal">{recommendation.author} at {recommendation.company}</p>
                </Card.Title>
                <Card.Eyebrow
                    as="time"
                    dateTime={recommendation.date}
                    className="md:hidden"
                    decorate
                >
                    {formatDate(recommendation.date)}
                </Card.Eyebrow>
                <Card.Description>{recommendation.description}</Card.Description>
                <a href={recommendation.href} target='_blank' rel="noreferrer">
                    <Card.Cta>See {recommendation.title.split(' ')[0]}'s full profile on LinkedIn</Card.Cta>
                </a>
            </Card>
            <Card.Eyebrow
                as="time"
                dateTime={recommendation.date}
                className="mt-1 hidden md:block"
            >
                {formatDate(recommendation.date)}
            </Card.Eyebrow>
        </article>
    )
}