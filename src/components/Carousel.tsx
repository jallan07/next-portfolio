'use client'
import { Carousel } from 'flowbite-react'

type Props = {
  images: Array<{ src: string; alt: string }>
}

export default function Slider({ images }: Props) {
  return (
    <>
      <Carousel slide={false}>
        {images.map((img) => (
          <img
            key={img.src}
            className="relative w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800"
            src={img.src}
            alt={img.alt}
          />
        ))}
      </Carousel>
    </>
  )
}
