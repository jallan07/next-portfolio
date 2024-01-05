import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { Photos } from '@/components/Photos'
import { Button } from '@/components/Button'
import { HiArrowNarrowRight, HiCheck } from 'react-icons/hi'
import Image from 'next/image'
import certificate from '@/images/photos/certificate.jpeg'
import paymerang from '@/images/photos/paymerang.png'
import { Badge } from 'flowbite-react'
import {} from 'react-icons/hi'

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Josh Allan. I live in Richmond VA where I dream, envision, and create the future.',
}

export default function About() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Developer. Foodie. Storyteller. Entreprenuer. Photographer. Apex
            Legends Tryhard. Girl Dad.
          </h1>
          <p className="text-md mt-3 italic tracking-tight text-zinc-800 dark:text-zinc-100">
            List not necessarily in order of priority...
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            With a solid foundation in digital storytelling boasting a decade of
            hands-on experience coupled with a robust technical acumen honed
            through ~3 years in software engineering, I embody the intersection
            of two dynamic worlds.{' '}
            <span className="font-medium">
              Learn about my professional journey below.
            </span>
          </p>

          <div className="flex gap-3">
            <Button href="/contact" className="mt-8 text-sm">
              Contact Me Today
              <HiArrowNarrowRight className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
          </div>
        </header>
      </Container>

      <Photos />

      {/* STORYTELLER SECTION */}
      {/* <Container className="mt-12 sm:mt-24">
        <hr className="border-zinc-700/40" id="storyteller" />
        <div className="mt-24">
          <h2 className="flex text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            📚 Storyteller 📚
          </h2>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
              explicabo saepe distinctio amet dolores officia excepturi
              voluptatum, earum provident, dolore facilis aliquam ab
              perspiciatis, et repudiandae tempora! Voluptas sit temporibus
              autem recusandae voluptatibus natus ratione earum corporis esse
              odit in laborum sequi assumenda expedita vitae quod blanditiis ad
              libero excepturi molestias officiis suscipit, laudantium
              accusantium. Libero atque recusandae, autem perspiciatis voluptas
              itaque quos impedit distinctio ipsam iusto unde optio omnis.
              Voluptatum fugiat suscipit alias reprehenderit corporis
              praesentium voluptatem quaerat blanditiis, harum sed, culpa
              perferendis nobis eaque nihil totam! Cumque vero quisquam velit
              quod nemo, vitae laboriosam quos debitis! Provident unde,
              consectetur alias totam veritatis tempora magnam rerum aspernatur,
              molestiae perferendis libero id voluptate iusto voluptatem ab
              reprehenderit velit a et eos eum blanditiis voluptas. Nihil atque
              quae culpa libero tempore ipsam quo exercitationem magnam
              distinctio est dicta, numquam eaque aliquam debitis autem ex fuga
              ab sunt ad! Ad exercitationem mollitia saepe.
            </p>
            <p>
              Corporis totam vero quod beatae explicabo autem natus impedit,
              unde officiis eaque dicta sit nobis veritatis nam vitae ipsam
              minus consectetur hic laborum voluptatem et doloremque nostrum
              excepturi. Libero voluptatibus aliquid soluta quos porro, commodi
              quia nemo, repellat, nesciunt quas vero illum. Amet optio quaerat
              quidem eum molestias vero cumque iusto dolores placeat itaque a
              dignissimos officia consequatur natus, provident consequuntur
              magnam quam sed! Nesciunt dolorum dolores eius doloribus saepe
              esse sapiente, rerum ipsa ut non, illum mollitia earum natus!
            </p>
            <p>
              Repellendus reiciendis voluptas modi beatae, debitis ducimus
              expedita cumque praesentium quas placeat alias eos unde quos
              delectus id iusto, consectetur ipsa dignissimos repellat? Nesciunt
              laudantium natus totam eius quisquam! Doloribus, dolor inventore
              recusandae obcaecati numquam repudiandae qui dicta cum illum
              ratione rem dolores aliquid nisi, ipsum a officia quam fugit nihil
              ea molestias, praesentium animi iste quas? Animi facere voluptates
              explicabo eos tenetur vero, quo unde veritatis velit nesciunt?
            </p>
          </div>
        </div>
      </Container> */}

      {/* DEVELOPER SECTION */}
      <Container className="mt-12 sm:mt-24">
        <hr className="border-zinc-700/40" id="developer" />
        <div className="mt-24">
          <h2 className="flex text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            👨‍💻 Developer 👨‍💻
          </h2>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              After dedicating almost a decade to assisting companies in
              narrating their stories through branding and digital marketing
              campaigns, I sensed the need for a change. Having successfully
              guided numerous companies through rebrands and website redesigns,
              I had acquired substantial expertise in HTML and CSS, reaching a
              level of comfort with each—this heightened my curiosity,
              compelling me to delve deeper into these areas, eager to expand my
              knowledge.
            </p>
            <div>
              <h3 className="text-lg font-medium text-white">Bootcamp</h3>
              <p>
                So in 2020, I decided to do just that. I plunged headfirst into
                the realm of technology, resigning from my job in Utah,
                relocating my family across the country to Richmond, Virginia,
                and enrolling in a rigorous 6-month coding bootcamp at the
                University of Richmond to pave my way toward becoming a
                full-stack web developer.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-light text-white">Skills Gained</h4>
              <div className="my-3 flex flex-wrap gap-2">
                <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                  Express
                </Badge>
                <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                  MongoDB
                </Badge>
                <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                  Nodejs
                </Badge>
                <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                  React
                </Badge>
              </div>
            </div>

            <Image
              src={certificate}
              className="mb-12 mt-6 w-full rounded-2xl"
              alt="Bootcamp certificate"
            />

            <div className="pt-8">
              <h3 className="text-lg font-medium text-white">Paymerang</h3>
              <p className="my-3">
                Immediately following my completion of and graduation from
                bootcamp, I landed my first full-time role as a developer at
                Paymerang—a fintech company based here in Richmond, VA. As a
                full stack software developer at Paymerang, I worked in a
                fast-paced environment, contributing to the development of
                complex web applications using a diverse set of cutting-edge
                technologies. My primary focus was on building responsive user
                interfaces using React with the Remix framework
                (JavaScript/Typescript), and designing/implementing scalable
                back-end systems using Hasura (GraphQL & SQL).
              </p>
              <p className="mt-3">
                In this role, I was responsible for the complete software
                development lifecycle, including design, development, creating
                unit tests, and providing deployment instructions. I
                collaborated closely with cross-functional teams, including
                product managers, designers, and other engineers, ensuring
                alignment with the company's business goals and user needs.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-light text-white">Skills Gained</h4>
              <div className="my-3 flex flex-wrap gap-2">
                <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                  Agile
                </Badge>
                <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                  Auth0
                </Badge>
                <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                  AWS
                </Badge>
                <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                  Azure DevOps
                </Badge>
                <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                  Cloudwatch
                </Badge>
                <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                  C#
                </Badge>
                <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                  DynamoDB
                </Badge>
                <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                  GraphQL
                </Badge>
                <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                  Hasura
                </Badge>
                <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                  Javascript
                </Badge>
                <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                  PostgreSQL
                </Badge>
                <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                  React
                </Badge>
                <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                  Remix Framework
                </Badge>
                <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                  S3
                </Badge>
                <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                  SQL
                </Badge>
                <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                  Tailwind CSS
                </Badge>
                <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                  Typescript
                </Badge>
              </div>
            </div>
            <Image
              src={paymerang}
              className="mb-12 mt-6 w-full rounded-2xl"
              alt="Paymerang website screenshot"
            />
          </div>
        </div>
      </Container>

      {/* ENTREPRENEUR SECTION */}
      {/* <Container className="mt-12 sm:mt-24">
        <hr className="border-zinc-700/40" id="entrepreneur" />
        <div className="mt-24">
          <h2 className="flex text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            💡 Entrepreneur 💡
          </h2>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <div>
              <h3 className="text-lg font-medium text-white">
                WE ARE THE ALLANS
              </h3>
              <p>
                For the first few years of our marriage, my wife and I ran a
                wedding videography business on top of my regular full-time job.
                Both of us had always had an interest in photography and
                videography, and so we decided to partner and try our hand at
                building a business together. We put it to rest once my wife
                became pregnant with our first daughter, as it was very time
                consuming and required long, draining weekends of work—but many
                of our videos can still be viewed on our{' '}
                <a
                  href="https://www.youtube.com/channel/UC-agQe64OJ8gKzPTj-bWPOA"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  old YouTube channel
                </a>
                .
                <Image
                  src={wearetheallans}
                  className="my-6 w-full rounded-2xl"
                  alt="Youtube Channel Snapshot"
                />
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">
                Moniker Branding
              </h3>
              <p></p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">
                Roxberry Juice Co.
              </h3>
              <p>
                In early 2019, my wife and I came across an opportunity to buy a
                struggling smoothie and juice bar in Spanish Fork, UT — the town
                we were living in at the time. The location was just one
                franchise out of many throughout the state of Utah. Based on the
                performance of other Roxberry's throughout the state, we saw the
                opportunity to transform it into a strong, thriving business.
                So, partnering with a couple other family members, we bought the
                business and took over as owners.
              </p>
            </div>
          </div>
        </div>
      </Container> */}

      {/* FOODIE SECTION */}
      {/* <Container className="mt-12 sm:mt-24">
        <hr className="border-zinc-700/40" id="foodie" />
        <div className="mt-24">
          <h2 className="flex text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            🍱 Foodie 🍱
          </h2>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
              explicabo saepe distinctio amet dolores officia excepturi
              voluptatum, earum provident, dolore facilis aliquam ab
              perspiciatis, et repudiandae tempora! Voluptas sit temporibus
              autem recusandae voluptatibus natus ratione earum corporis esse
              odit in laborum sequi assumenda expedita vitae quod blanditiis ad
              libero excepturi molestias officiis suscipit, laudantium
              accusantium. Libero atque recusandae, autem perspiciatis voluptas
              itaque quos impedit distinctio ipsam iusto unde optio omnis.
              Voluptatum fugiat suscipit alias reprehenderit corporis
              praesentium voluptatem quaerat blanditiis, harum sed, culpa
              perferendis nobis eaque nihil totam! Cumque vero quisquam velit
              quod nemo, vitae laboriosam quos debitis! Provident unde,
              consectetur alias totam veritatis tempora magnam rerum aspernatur,
              molestiae perferendis libero id voluptate iusto voluptatem ab
              reprehenderit velit a et eos eum blanditiis voluptas. Nihil atque
              quae culpa libero tempore ipsam quo exercitationem magnam
              distinctio est dicta, numquam eaque aliquam debitis autem ex fuga
              ab sunt ad! Ad exercitationem mollitia saepe.
            </p>
            <p>
              Corporis totam vero quod beatae explicabo autem natus impedit,
              unde officiis eaque dicta sit nobis veritatis nam vitae ipsam
              minus consectetur hic laborum voluptatem et doloremque nostrum
              excepturi. Libero voluptatibus aliquid soluta quos porro, commodi
              quia nemo, repellat, nesciunt quas vero illum. Amet optio quaerat
              quidem eum molestias vero cumque iusto dolores placeat itaque a
              dignissimos officia consequatur natus, provident consequuntur
              magnam quam sed! Nesciunt dolorum dolores eius doloribus saepe
              esse sapiente, rerum ipsa ut non, illum mollitia earum natus!
            </p>
            <p>
              Repellendus reiciendis voluptas modi beatae, debitis ducimus
              expedita cumque praesentium quas placeat alias eos unde quos
              delectus id iusto, consectetur ipsa dignissimos repellat? Nesciunt
              laudantium natus totam eius quisquam! Doloribus, dolor inventore
              recusandae obcaecati numquam repudiandae qui dicta cum illum
              ratione rem dolores aliquid nisi, ipsum a officia quam fugit nihil
              ea molestias, praesentium animi iste quas? Animi facere voluptates
              explicabo eos tenetur vero, quo unde veritatis velit nesciunt?
            </p>
          </div>
        </div>
      </Container> */}

      {/* <Container className="mt-12 sm:mt-24">
        <div className="mt-24 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:order-first lg:row-span-2">
            <h1 className="flex text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
              Overview
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I'm a passionate full stack web developer with 3 years of coding
                experience, specializing in JavaScript, API development, React,
                Remix.js, TypeScript, SQL, Hasura, GraphQL, and RESTful APIs.
              </p>
              <p>
                Adept at navigating complex web development challenges, I bring
                a unique blend of technical expertise and creative
                problem-solving. My journey into coding follows a successful
                10-year career in marketing, where I focused on branding and
                digital marketing strategies.
              </p>
              <p>
                This dual background equips me with a holistic understanding of
                user-driven development, enabling me to seamlessly translate
                user needs into efficient and innovative code. Actively seeking
                new opportunities post a recent career transition, I am excited
                to contribute my diverse skill set to a forward-thinking team.
              </p>
              <p>
                Let's connect to explore how my decade-long marketing experience
                and three years in development can bring value to your projects.
              </p>
            </div>
          </div>
          <SocialLinks />
        </div>
      </Container> */}
    </>
  )
}
