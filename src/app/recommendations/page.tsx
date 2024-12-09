import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function TestimonialBlock({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Testimonial({
  title,
  name,
  href,
  children,
}: {
  title: string
  name: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {name}
      </Card.Title>
      <Card.Title as="h6" href={href} className="text-sm italic">
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Recommendations',
  description:
    'I write beautiful code. But don&apos;t take my word for it. Take theirs.',
}

export default function Recommendations() {
  return (
    <SimpleLayout
      title="I write beautiful code. But don't take my word for it. Take theirs."
      intro="Throughout my career, I've had the pleasure of working alongside some incredible individuals. Many of which seem to have enjoyed the experience 😉. Read the recommendations I've received in my career below!"
    >
      <div className="space-y-20">
        <TestimonialBlock title="Management">
          <Testimonial
            title="Director of Software Engineering"
            name="Mark Emlmendorf"
          >
            I highly recommend Josh as a full stack developer with exceptional
            skills and a fantastic attitude. I had the pleasure of working
            closely with him on multiple projects, and he consistently delivered
            high-quality solutions with attention to detail.
            <br />
            <br />
            Josh is not only technically proficient across the entire stack
            (React, JavaScript, Node.js, SQL, HTML, CSS) but also fosters a
            positive and collaborative team environment.
            <br />
            <br />
            Oh, did I mention he has some legit AWS cloud chops as well? If
            you&apos;re looking for an engineer who excels both technically and
            in attitude, Josh is an excellent choice.
          </Testimonial>
          <Testimonial
            title="Director of Application Development"
            name="Shawn Michael-Fakler"
          >
            Josh Allan is an absolute pleasure to work with. Over the years, I
            have enjoyed watching him grow both technically, and as a leader on
            the team.
            <br />
            <br />
            He has been dedicated to meeting every challenge handed to him with
            a smile, and a work ethic that is hard to match. He continually
            impressed with his positivity and proficiency, as he tackled each
            product and technology put in front of him.
            <br />
            <br />
            In addition to being a key individual contributor, Josh has been a
            positive and reliable role model on our team, as he mentored new
            team members. With thoughtful yet critical thinking paired with some
            impressive technical chops, Josh will elevate any team that he
            joins.
          </Testimonial>
          <Testimonial title="Technical Team Lead" name="Anya Kilpatrick">
            I had the privilege of working alongside Josh Allan for more than
            two years. Leading a team of developers with Josh as a key member
            was truly an honor. Demonstrating exceptional development skills and
            a remarkable team spirit, Josh swiftly became my invaluable
            right-hand.
            <br />
            <br />
            As a Tech Lead handling numerous tasks, having reliable team members
            to delegate responsibilities to is crucial, and Josh proved to be
            precisely that. His commitment to excellence and eagerness for
            continuous learning, improvements, and innovations were evident
            throughout our collaboration.
            <br />
            <br />
            Josh is not only a highly skilled developer but also a consummate
            professional and team player. I want to highlight his sense of
            humor, which played a significant role in uplifting the team during
            stressful situations.
            <br />
            <br />
            Even in challenging times, he managed to bring positivity and keep
            everyone on the path to success. Having Josh on the team was a true
            asset. It has been a pleasure working with Josh, and I
            wholeheartedly recommend him to potential employers without any
            reservations.
          </Testimonial>
        </TestimonialBlock>

        <TestimonialBlock title="Team Members">
          <Testimonial title="Senior Software Engineer" name="Tyler McFarland">
            Josh is someone who throws himself into whatever he is working on,
            always with the intention of doing it well, and ensuring that others
            after him will understand his work and benefit from it. I
            didn&apos;t know of anyone else that documented more meticulously
            than he did. It was enjoyable to watch his technical skills rapidly
            expand.
            <br />
            <br />
            He already came in with an abundance of soft skills, such as
            personability, adaptability, persistence, a willingness to ask
            questions (huge in engineering), and a natural bent towards
            collaboration. I see him being a valuable asset to whatever team he
            is a part of.
          </Testimonial>
          <Testimonial title="Software Engineer" name="Joe Freeman">
            I had the pleasure of working closely with Josh at Paymerang, and I
            am consistently impressed by his dedication and expertise in the
            field of software development, a detail-oriented professional who
            consistently delivers high-quality work if I&apos;ve ever seen one.
            <br />
            <br />
            Josh is not just a developer but a continuous learner who thrives on
            staying at the forefront of emerging technologies. His commitment to
            expanding his skill set and knowledge base is outstanding and
            greatly contributed to the success we had in projects together. He
            often went above and beyond to ensure the success of our team. A
            hard worker whose work ethic is unparalleled, he consistently
            demonstrated a willingness to tackle challenges head-on. What truly
            sets him apart is his exceptional front-end JavaScript development
            skills. He has a keen understanding of the intricacies of front-end
            development, specifically when it comes to Remix and React
            frameworks.
            <br />
            <br />
            Josh played a pivotal role in creating seamless and user-friendly
            interfaces that significantly enhanced the overall user experience.
            Beyond technical proficiency, Josh possesses a wealth of soft skills
            that make him not only an exceptional developer but also an absolute
            pleasure to work with. His personable nature and effective
            communication skills create a positive and collaborative atmosphere
            within the team.
            <br />
            <br />I wholeheartedly recommend Josh for any role that demands a
            skilled, dedicated, and innovative software developer. He is a
            valuable asset to any team, and I am confident that his expertise
            and positive attitude will contribute to the success of any project
            he takes on.
          </Testimonial>

          <Testimonial title="Software Engineer" name="Patrick Rush">
            I was lucky enough to work with Josh during his time as a Software
            Developer at Paymerang. Josh&apos;s expertise in his team&apos;s
            work and his involvement in various projects showcased his deep
            understanding of our products.
            <br />
            <br />
            His key strengths lie in his excellent communication skills,
            personable and friendly demeanor, and meticulous approach to coding.
            Josh&apos;s impact on the team was not only technical but also
            relational; he excelled in collaboration by consistently reaching
            out to gain insights and coordinate efforts with others. His rapid
            progression within the company is a testament to his consistent
            growth and impactful contributions. Beyond his technical prowess,
            company is a testament to his consistent growth and impactful
            contributions.
            <br />
            <br />
            Beyond his technical prowess, Josh&apos;s soft skills shine through
            – from being the first to extend a helping hand to new team members
            to creating an inclusive and comfortable work environment. His
            ability to navigate challenges with resilience and adaptability,
            coupled with a unique combination of quick learning and strong
            teamwork, truly set him apart.
            <br />
            <br />I have no doubt that Josh&apos;s skills and positive attitude
            will make him an invaluable asset to any team he joins.
          </Testimonial>
        </TestimonialBlock>
        <TestimonialBlock title="Product">
          <Testimonial title="Product Manager" name="Jessica Davis">
            As a product manager, I had the pleasure of working alongside Josh
            as a full stack developer at Paymerang, and I can confidently say
            that he is an invaluable asset to any team. His passion for CSS is
            truly inspiring, and it reflects in the impeccable design and user
            experience he brings to every project.
            <br />
            <br />
            Josh is not only a highly skilled developer but also an excellent
            team player. He has a remarkable ability to collaborate seamlessly
            with team members, fostering a positive and productive work
            environment. His enthusiasm for learning and improving is
            contagious, and he consistently goes above and beyond to stay
            updated on the latest industry trends and technologies. What sets
            Josh apart is his technologies.
            <br />
            <br />
            What sets Josh apart is his unwavering commitment to excellence. He
            is always on the lookout for ways to enhance his skills and
            contribute to the success of the team. Josh is not just a colleague;
            he is a reliable and dedicated professional who can be counted on to
            deliver high-quality results.
            <br />
            <br />
            If you&apos;re looking for a full stack developer who is not only
            technically proficient but also a pleasure to work with, I highly
            recommend Josh. He is the kind of team member who elevates the
            entire development process and brings out the best in those around
            him!
          </Testimonial>
          <Testimonial title="Product Manager" name="Eryn Eddy">
            I had the pleasure of working along side Josh as a Product Manager
            and wholeheartedly recommend him as a software developer. He
            delivered exceptional solutions during our collaborations and had a
            pivotal role in the success of our projects.
            <br />
            <br />
            His deep understanding of our systems and products made him an asset
            to the team. Beyond his technical chops, Josh is a lovely coworker
            and friend and was a genuine pleasure to work alongside.
          </Testimonial>
        </TestimonialBlock>
      </div>
    </SimpleLayout>
  )
}
