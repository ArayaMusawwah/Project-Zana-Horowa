"use client"

import { cn } from "@/lib/utils"
import { IImage } from "@/types"
import { useMediaQuery } from "@react-hook/media-query"
import Image from "next/image"
import { useCallback, useState } from "react"
import { ReactMarques } from "react-marques"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

const Carousel = ({ images }: { images: IImage[] }) => {
  const isMobile = useMediaQuery("(max-width: 768px)")
  /*
   * TODO: Change carousel animation as what desired animation should be.
   */
  return (
    <>
      <ReactMarques
        fade={false}
        pauseOnHover={true}
        className="!gap-[0rem] motion-reduce:overflow-auto"
        innerClassName="!gap-[0rem] motion-reduce:animate-none motion-reduce:first:hidden"
      >
        {images.map(({ url, alt, className }) => (
          <Image
            key={alt}
            src={url}
            alt={alt}
            width={isMobile ? 200 : 300}
            height={isMobile ? 200 : 300}
            className={cn(
              "object-cover",
              isMobile && "max-h-[300px]",
              className,
            )}
          />
        ))}
      </ReactMarques>

      <ReactMarques
        className="mt-10 w-full gap-[3rem] bg-zinc-300 py-4 [--duration:10s] motion-reduce:overflow-auto"
        innerClassName="gap-[3rem] [--gap:3rem] motion-reduce:animate-none motion-reduce:first:hidden"
        fade={true}
        reverse={true}
      >
        {[...images, ...images].map(({ url, alt, className }) => (
          <Image
            key={alt}
            src={url}
            alt={alt}
            width={isMobile ? 50 : 100}
            height={isMobile ? 50 : 100}
            className={cn(
              "aspect-square rounded-xl object-cover",
              isMobile && "max-h-[50px]",
              className,
            )}
          />
        ))}
      </ReactMarques>
    </>
  )
}

export default Carousel
