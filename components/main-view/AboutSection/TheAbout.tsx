"use client"

import { formatDate } from "@/lib/utils"
import MaskImage from "./MaskImage"
import { DATA } from "@/data"
import CountdownContainer from "./CountdownContainer"
import Waves from "./Waves"
import {
  MotionDiv,
  MotionSection,
  MotionSpan,
} from "@/components/shared/MotionElement"
import { useActiveContext } from "@/context"

const AboutSection = () => {
  const { isActive } = useActiveContext()

  return (
    <MotionSection
      className="wrapper-center relative bg-main-100 py-10 pb-52"
      initial={{ y: -1000 }}
      animate={
        !isActive
          ? {
              y: 0,
              transition: { duration: 1.5, type: "spring", ease: "easeInOut" },
            }
          : { y: -1000 }
      }
      viewport={{ once: true }}
    >
      <div className="sub-container">
        <MaskImage />

        <div className="relative mx-auto font-serif text-gray-950">
          <h1 className="space-y-4 text-center">
            <MotionSpan
              initial={{ opacity: 0, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 2,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 100,
                  delay: 0.5,
                },
              }}
              viewport={{ once: true }}
              className="inline-block text-lg italic"
            >
              The Wedding Of
            </MotionSpan>
            <MotionSpan
              initial={{ opacity: 0, scale: 2 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 2,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 50,
                  delay: 0.5,
                },
              }}
              viewport={{ once: true }}
              className="font-greatVibes block text-6xl capitalize tracking-wide text-slate-950"
            >
              {DATA.mempelai.keduaMempelai}
            </MotionSpan>
          </h1>
        </div>

        <MotionDiv
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 2,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
              delay: 0.5,
            },
          }}
          viewport={{ once: true }}
          className="relative z-10 mx-auto mt-6"
        >
          <p className="text-center font-serif text-xl text-black">
            {formatDate(DATA.resepsi.tanggal).tanggalFormat}
          </p>
        </MotionDiv>

        <CountdownContainer />
      </div>
      <Waves />
    </MotionSection>
  )
}
export default AboutSection
