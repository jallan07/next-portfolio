import { type Recommendation as RecommendationType } from '@/app/types/Recommendation'
import { Card } from '@/components/Card'
import { formatDate } from '@/lib/formatDate'

type Props = {
    recommendation: RecommendationType | null
    showLink?: boolean
    showDate?: boolean
}


export default function Recommendation({ recommendation, showDate = true, showLink = true }: Props) {
    return (
        <article className="md:grid md:grid-cols-4 md:items-baseline">
            <Card className={showDate ? 'md:col-span-3' : "md:col-span-4 mb-12"}>
                <Card.Title>
                    {recommendation?.title}
                    <p className="text-sm italic font-normal">{recommendation?.author}</p>
                </Card.Title>
                {showDate && recommendation?.date && (<Card.Eyebrow
                    as="time"
                    dateTime={recommendation?.date}
                    className="md:hidden"
                    decorate
                >
                    {formatDate(recommendation?.date)}
                </Card.Eyebrow>)}
                <Card.Description>{recommendation?.description}</Card.Description>
                {showLink && (<a href={recommendation?.href} target='_blank' rel="noreferrer">
                    <Card.Cta>See {recommendation?.title.split(' ')[0]}'s full profile on LinkedIn</Card.Cta>
                </a>)}
            </Card>
            {showDate && recommendation?.date && (<Card.Eyebrow
                as="time"
                dateTime={recommendation?.date}
                className="mt-1 hidden md:block"
            >
                {formatDate(recommendation?.date)}
            </Card.Eyebrow>)}
        </article>
    )
}