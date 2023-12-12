import { ArticleWithSlug } from "@/lib/articles";
import { Card } from "./Card";

export function Article({ article }: { article: ArticleWithSlug }) {
    return (
        <Card as="article">
            <Card.Title href={`/articles/${article.slug}`}>
                {article.title}
            </Card.Title>
            <Card.Description>{article.description}</Card.Description>
            <Card.Cta>Learn more</Card.Cta>
        </Card>
    )
}