import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function CarouselPlugin({
  images,
}: {
  images: { url: string; alt: string; className?: string }[]
}) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  )

  return (
    <Carousel className="w-full p-4" opts={{ loop: true }}>
      <CarouselContent>
        {images.map(({ url, alt, className }) => (
          <CarouselItem
            className="animate-slideRight h-[80vh] w-full"
            key={url}
          >
            <Image
              src={url}
              alt={alt}
              width={300}
              height={300}
              className={`aspect-square h-full w-full rounded-lg object-cover object-center ${className ? className : "object-center"}`}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
