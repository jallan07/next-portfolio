import { Card } from "./Card";
import { formatDate } from "@/lib/formatDate";
import { Recommendation } from "@/app/types/Recommendation";



export function Recommendation({ recommendation }: { recommendation: Recommendation }) {
    return (
        <Card as="article">
            <Card.Title>
                {recommendation.title}
            </Card.Title>
            <Card.Eyebrow as="time" dateTime={recommendation.date} decorate>
                {formatDate(recommendation.date)}
            </Card.Eyebrow>
            <Card.Description>{recommendation.description}</Card.Description>
            <Card.Cta>Read article</Card.Cta>
        </Card>
    )
}