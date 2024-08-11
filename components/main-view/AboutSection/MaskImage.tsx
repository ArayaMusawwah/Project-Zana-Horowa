"use client"

import { MotionDiv } from "@/components/shared/MotionElement"
import { Separator } from "@/components/ui/separator"
import { useMediaQuery } from "@react-hook/media-query"
import Image from "next/image"

const MaskImage = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    <div className="relative">
      <MotionDiv
        className="mx-auto grid h-[300px] w-full place-items-center"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
        viewport={{ once: true }}
      >
        <Image
          src={"/images/photo-1.jpg"}
          alt="photo-1"
          width={isDesktop ? 375 : 300}
          height={isDesktop ? 375 : 300}
          className="object-cover object-top"
          style={{
            maskImage: "url('/images/heart.svg')",
            maskPosition: "top",
            maskSize: "contain",
            maskRepeat: "no-repeat",
          }}
        />
      </MotionDiv>
      {/* <div className="absolute left-1/2 top-16 z-20 flex -translate-x-1/2 items-center justify-center">
        <span
          className="flex-1 text-right font-serif text-9xl text-transparent"
          style={{
            WebkitTextFillColor: "transparent",
            WebkitTextStroke: "2px #f3f4f6",
          }}
        >
          I
        </span>
        <Separator
          className="mx-4 h-24 w-[2px] bg-white"
          orientation="vertical"
        />
        <span
          className="flex-1 font-serif text-9xl text-transparent"
          style={{
            WebkitTextFillColor: "transparent",
            WebkitTextStroke: "2px #f3f4f6",
          }}
        >
          L
        </span>
      </div> */}
    </div>
  )
}
export default MaskImage
