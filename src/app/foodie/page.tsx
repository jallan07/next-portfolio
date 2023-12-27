import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'
import Carousel from '@/components/Carousel'

import kobop from '@/images/photos/rvagrubs/kobop-1.jpeg'
import basicallyhalal from '@/images/photos/rvagrubs/basically-halal-1.jpeg'
import globalFusion from '@/images/photos/rvagrubs/global-fusion-1.jpeg'
import lolitas1 from '@/images/photos/rvagrubs/lolitas-1.jpeg'
import lolitas2 from '@/images/photos/rvagrubs/lolitas-2.jpeg'
import ohMochi from '@/images/photos/rvagrubs/oh-mochi-1.jpeg'
import wongsTacos from '@/images/photos/rvagrubs/wongs-tacos-1.jpeg'
import zorchPizza from '@/images/photos/rvagrubs/zorch-1.jpeg'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  const images = [
    { src: kobop.src, alt: 'Kobop' },
    { src: basicallyhalal.src, alt: 'Basically Halal' },
    { src: globalFusion.src, alt: 'Global Fusion' },
    { src: lolitas1.src, alt: "Lolita's" },
    { src: lolitas2.src, alt: "Lolita's" },
    { src: ohMochi.src, alt: 'Oh Mochi!' },
    { src: wongsTacos.src, alt: "Wong's Tacos!" },
    { src: zorchPizza.src, alt: 'Zorch Pizza' },
  ]

  return (
    <SimpleLayout
      title="Things I’ve made trying to put my dent in the universe."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-1 lg:grid-cols-2"
      >
        <Carousel images={images} />
      </ul>
    </SimpleLayout>
  )
}
