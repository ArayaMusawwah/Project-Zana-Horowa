"use client"

import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Receiver from "./Receiver"
import {
  MotionDiv,
  MotionH1,
  MotionH2,
  MotionSection,
} from "@/components/shared/MotionElement"
import { Suspense } from "react"
import { DATA } from "@/data"
import { useActiveContext } from "@/context"
import { cn } from "@/lib/utils"

const HeroSection = () => {
  const { isActive } = useActiveContext()

  return (
    <MotionSection
      className={cn(
        "wrapper-center absolute inset-0 z-10 overflow-hidden bg-main-100",
        "max-h-svh",
      )}
      initial={{ y: 0, opacity: 1 }}
      animate={
        !isActive && {
          opacity: 0,
          display: "none",
          y: 1000,
          transition: { duration: 1.5, type: "spring", ease: "easeInOut" },
        }
      }
    >
      <MotionDiv
        className="overflow-hidden rounded-t-full max-lg:max-w-[60vw]"
        style={{
          boxShadow: "0 0 7px 5px rgba(0, 0, 0, 0.5)",
        }}
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: {
            duration: 2.5,
            type: "spring",
            ease: "easeInOut",
          },
        }}
      >
        <Image
          src={"/images/hero.jpeg"}
          alt="hero"
          width={1000}
          height={1000}
          className="size-full"
        />
      </MotionDiv>

      <div className="my-10 text-center">
        <MotionH1
          className="text-semibold text-lg"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { type: "just", duration: 1.5 },
          }}
        >
          The Wedding of
        </MotionH1>

        <MotionDiv
          initial={{ width: "100vw" }}
          animate={{
            width: "100%",
            transition: { type: "just", duration: 1.5 },
          }}
        >
          <Separator className="my-2 h-[2px] bg-white" />
        </MotionDiv>

        <MotionH2
          className="text-thorsa mt-3 text-4xl font-bold capitalize"
          initial={{ x: "100%", opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { type: "just", duration: 1.5 },
          }}
        >
          {DATA.mempelai.keduaMempelai}
        </MotionH2>
      </div>

      <Suspense>
        <Receiver />
      </Suspense>
    </MotionSection>
  )
}
export default HeroSection
