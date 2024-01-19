import { Badge } from 'flowbite-react'
import Image from 'next/image'
import moniker from '@/images/photos/moniker.png'
import wearetheallans from '@/images/photos/wearetheallans.png'
import { HiCheck } from 'react-icons/hi'

export const EntrepreneurOverview = () => {
  return (
    <div className="mt-24">
      <h2 className="flex text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
        💡 Entrepreneur 💡
      </h2>

      <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
        <p>
          I have an inherent drive for creativity and entrepreneurial endeavors.
          Over the years, I've created, built, faced setbacks, and acheived
          success in various entrepreneurial projects. Through these
          experiences, I've come to realize that the ultimate significance lies
          not in the failure or success, but in the lessons learned along the
          way.
        </p>

        {/* Roxberry Juice Co */}
        <div className="my-3">
          <div className="py-3">
            <h3 className="text-lg font-medium text-white">
              Roxberry Juice Co
            </h3>
            <p>
              In 2019, my wife and I stumbled upon a struggling local smoothie
              shop that the owners were eager to sell. Recognizing its untapped
              potential, we engaged in negotiations, eventually acquiring the
              business. Taking the reins of all marketing and community outreach
              initiatives, I spearheaded efforts to revitalize the
              establishment. Within a year of ownership, our dedicated efforts
              breathed new life into the shop, transforming it into a thriving
              venture. However, in 2020, as I pursued enrollment in the
              University of Richmond's Coding Bootcamp and a relocation to
              Virginia, we made the decision to sell the business. Remarkably,
              the sale yielded a profit twice the amount of our initial
              investment. Though our ownership was relatively brief, our
              commitment to customer satisfaction and community engagement
              proved instrumental in achieving a substantial profit. The
              proceeds not only covered the expenses of my coding bootcamp but
              also underscored the success of our revitalization efforts.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-light text-white">
              Primary Skills Gained
            </h4>
            <div className="my-3 flex flex-wrap gap-2">
              <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                Business Management
              </Badge>
              <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                Community Engagement
              </Badge>
              <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                Customer Service
              </Badge>
              <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                Marketing and Promotion
              </Badge>
              <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                Team Management
              </Badge>
            </div>
          </div>
        </div>

        {/* Moniker Branding */}
        <div className="my-3">
          <div className="py-3">
            <h3 className="text-lg font-medium text-white">Moniker Branding</h3>
            <p>
              In September of 2017, I collaborated with a former manager and
              mentor to establish a branding agency from scratch. Seizing this
              opportunity early in my career, I believed it was the perfect
              moment to embrace the challenges of startup life. Moniker, our
              venture, aimed to lead companies through a series of branding
              workshops, empowering key stakeholders to actively shape the
              company's brand and identity. Despite investing considerable time
              and effort in building the company, I eventually had to step away
              due to the financial responsibilities associated with my growing
              family. Although Moniker didn't fully take off during my
              involvement, the journey taught me invaluable lessons. The most
              significant revelation was realizing my capacity to achieve beyond
              what I had initially believed possible.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-light text-white">
              Primary Skills Gained
            </h4>
            <div className="my-3 flex flex-wrap gap-2">
              <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                Communication
              </Badge>
              <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                Client Relations
              </Badge>
              <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                Networking
              </Badge>
              <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                Project Management
              </Badge>
              <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                Public Speaking
              </Badge>
              <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                Shopify
              </Badge>
              <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                Strategic Planning
              </Badge>
              <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                Squarespace
              </Badge>
              <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                Why-based Branding
              </Badge>
              <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                Wordpress
              </Badge>
            </div>
          </div>
          <Image
            src={moniker}
            className="mb-12 mt-6 w-full rounded-2xl"
            alt="Moniker Branding Agency certificate"
          />
        </div>

        {/* We Are The Allans */}
        <div className="my-3">
          <div className="py-3">
            <h3 className="text-lg font-medium text-white">
              We Are The Allans
            </h3>
            <p>
              Marking the beginning of my entrepreneurial journey, my wife and I
              launched a wedding videography business shortly after our marriage
              in 2015. Operating in Utah under the fitting name 'WE ARE THE
              ALLANS,' we dedicated ourselves to this venture for a couple of
              years. Eventually, we decided to step away when my wife became
              pregnant with our first child. Nevertheless, the idea of
              resurrecting the business has lingered, and we continue to toy
              around with the possibility. At the moment, we simply have it on
              'pause'.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-light text-white">
              Primary Skills Gained
            </h4>
            <div className="my-3 flex flex-wrap gap-2">
              <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                Client Relations
              </Badge>
              <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                Entrepreneurship
              </Badge>
              <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                Freelance Workflow
              </Badge>
              <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
                Videography
              </Badge>
            </div>
          </div>
          <Image
            src={wearetheallans}
            className="mb-12 mt-6 w-full rounded-2xl"
            alt="Moniker Branding Agency certificate"
          />
        </div>
      </div>
    </div>
  )
}
