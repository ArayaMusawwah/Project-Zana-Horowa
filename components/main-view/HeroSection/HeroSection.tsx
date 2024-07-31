import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Receiver from "./Receiver"
import {
  MotionDiv,
  MotionH1,
  MotionH2,
} from "@/components/shared/MotionElement"

const HeroSection = () => {
  return (
    <section className="wrapper-center">
      <MotionDiv
        className="overflow-hidden rounded-t-full max-lg:max-w-[60vw]"
        style={{
          boxShadow: "0 0 7px 5px rgba(0, 0, 0, 0.5)",
        }}
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: {
            duration: 3,
            type: "spring",
            ease: "easeOut",
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
          initial={{ x: "-100%" }}
          animate={{
            x: 0,
            transition: { type: "just", duration: 1.5 },
          }}
        >
          The Wedding of
        </MotionH1>
        <Separator className="my-2 bg-white" />
        <MotionH2
          className="text-thorsa text-4xl font-bold"
          initial={{ x: "100%" }}
          animate={{
            x: 0,
            transition: { type: "just", duration: 1.5 },
          }}
        >
          Iqbal and Lisa
        </MotionH2>
      </div>

      <Receiver />
    </section>
  )
}
export default HeroSection
