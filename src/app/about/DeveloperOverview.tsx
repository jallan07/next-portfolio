import { Badge } from 'flowbite-react'
import Image from 'next/image'
import certificate from '@/images/photos/certificate.jpeg'
import paymerang from '@/images/photos/paymerang.png'
import { HiCheck } from 'react-icons/hi'

export const DeveloperOverview = () => {
  return (
    <div className="mt-24">
      <h2 className="flex text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
        👨‍💻 Developer 👨‍💻
      </h2>
      <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
        <p>
          After dedicating almost a decade to assisting companies in narrating
          their stories through branding and digital marketing campaigns, I
          sensed the need for a change. Having successfully guided numerous
          companies through rebrands and website redesigns, I had acquired
          substantial expertise in HTML and CSS, reaching a level of comfort
          with each—this heightened my curiosity, compelling me to delve deeper
          into these areas, eager to expand my knowledge.
        </p>
        <div>
          <h3 className="text-lg font-medium text-white">Bootcamp</h3>
          <p>
            So in 2020, I decided to do just that. I plunged headfirst into the
            realm of technology, resigning from my job in Utah, relocating my
            family across the country to Richmond, Virginia, and enrolling in a
            rigorous 6-month coding bootcamp at the University of Richmond to
            pave my way toward becoming a full-stack web developer.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-light text-white">
            Primary Skills Gained
          </h4>
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
            Immediately following my completion of and graduation from bootcamp,
            I landed my first full-time role as a developer at Paymerang—a
            fintech company based here in Richmond, VA. As a full stack software
            developer at Paymerang, I worked in a fast-paced environment,
            contributing to the development of complex web applications using a
            diverse set of cutting-edge technologies. My primary focus was on
            building responsive user interfaces using React with the Remix
            framework (JavaScript/Typescript), and designing/implementing
            scalable back-end systems using Hasura (GraphQL & SQL).
          </p>
          <p className="mt-3">
            In this role, I was responsible for the complete software
            development lifecycle, including design, development, creating unit
            tests, and providing deployment instructions. I collaborated closely
            with cross-functional teams, including product managers, designers,
            and other engineers, ensuring alignment with the company's business
            goals and user needs.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-light text-white">
            Primary Skills Gained
          </h4>
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
              Serverless
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
  )
}
