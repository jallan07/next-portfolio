import { Badge } from 'flowbite-react'
import Image from 'next/image'
import { HiCheck } from 'react-icons/hi'
import { Button } from '@/components/Button'
import rvagrubs from '@/images/photos/rvagrubs-screenshot.png'
import rvagrubsInsta from '@/images/photos/rvagrubs-insta.png'
import { NewSiteIcon } from '@/components/SocialIcons'

export const FoodieOverview = () => {
  return (
    <div className="mt-24">
      <h2 className="flex text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
        🍔 Foodie 🍔
      </h2>
      <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
        <p>
          For me, food wields a transformative power that goes beyond mere
          sustenance. It's an immersive experience that engages my senses in a
          symphony of flavors, textures, and aromas. Each dish is a journey, a
          narrative crafted with culinary skill. A single bite can transport me
          to distant lands, evoke nostalgia, or spark creativity. Food is the
          foundation of my social connections, fostering bonds over shared
          meals. This culinary journey is my ongoing exploration, an art form
          that cultivates my palate and deepens my appreciation for the diverse
          cultures and traditions embodied in every dish.
        </p>

        <div className="pt-8">
          <h3 className="text-lg font-medium text-white">RVA Grubs</h3>
          <div className="mt-3 space-x-4">
            <Button
              href="https://rvagrubs.vercel.app"
              className="text-sm"
              variant="secondary"
              target="_blank"
            >
              Visit Website
              <NewSiteIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
            <Button
              href="https://instagram.com/rvagrubs"
              className="text-sm"
              variant="secondary"
              target="_blank"
            >
              View on Instagram
              <NewSiteIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
          </div>
          <p className="my-3">
            In 2020, when my family relocated to Richmond, VA, I aimed to
            explore numerous restaurants and chronicle my experiences. To
            achieve this, I created an Instagram account dedicated to the
            endeavor. Lately, I've seamlessly integrated my love for both plates
            and programming, giving rise to a personally crafted blog.
          </p>
          <p className="mt-3">
            This ongoing dedication to trying new restaurants in the area is
            more than just a gastronomic adventure; it's a continual immersion
            into the rich tapestry of flavors, cultures, and traditions. Each
            dining experience is a chapter in this evolving narrative,
            connecting me with the vibrant food scene in Richmond and
            transforming my appreciation for the artistry behind each plate.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-light text-white">
            Primary Skills Gained
          </h4>
          <div className="my-3 flex flex-wrap gap-2">
            <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
              NextJS
            </Badge>
            <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
              Prismic
            </Badge>
            <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
              React
            </Badge>
            <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
              Slice Machine UI
            </Badge>
            <Badge size="sm" color="gray" icon={HiCheck} className="px-4">
              TailwindCSS
            </Badge>
          </div>
        </div>
        <Image
          src={rvagrubs}
          className="mb-12 mt-6 w-full rounded-2xl"
          alt="rvagrubs website screenshot"
        />
        <Image
          src={rvagrubsInsta}
          className="mb-12 mt-6 w-full rounded-2xl"
          alt="rvagrubs insta website screenshot"
        />
      </div>
    </div>
  )
}
