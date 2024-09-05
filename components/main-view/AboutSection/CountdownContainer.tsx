"use client"

import { useEffect, useState } from "react"
import Countdown from "react-countdown"
import { DATA } from "@/data"
import { MotionDiv } from "@/components/shared/MotionElement"
import { Variants } from "framer-motion"
import { Button } from "@/components/ui/button"

interface rendererProps {
  days: number
  hours: number
  minutes: number
  seconds: number
  completed: boolean
}

const parentVariant: Variants = {
  initial: { y: 100, opacity: 0 },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      type: "spring",
      ease: "easeInOut",
      staggerChildren: 0.3,
    },
  },
}

const itemVariant: Variants = {
  initial: { y: 100, opacity: 0 },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.5, type: "spring", ease: "easeInOut" },
  },
}

const Renderer = ({ days, hours, minutes, seconds }: rendererProps) => {
  return (
    <MotionDiv
      variants={parentVariant}
      initial="initial"
      whileInView={"whileInView"}
      className="relative z-10 mx-auto inline-flex space-x-2 font-serif text-white *:flex *:size-16 *:flex-col *:items-center *:justify-center *:-space-y-2 *:rounded-xl *:bg-main-120 *:text-sm md:space-x-4 md:*:size-20 md:*:text-lg [&>div]:space-y-px"
      viewport={{ once: true }}
    >
      <MotionDiv variants={itemVariant}>
        <span>{days}</span>
        <span className="block">Hari</span>
      </MotionDiv>
      <MotionDiv variants={itemVariant}>
        <span>{hours}</span>
        <span className="block">Jam</span>
      </MotionDiv>
      <MotionDiv variants={itemVariant}>
        <span>{minutes}</span>
        <span className="block">Menit</span>
      </MotionDiv>
      <MotionDiv variants={itemVariant}>
        <span>{seconds}</span>
        <span className="block">Detik</span>
      </MotionDiv>
    </MotionDiv>
  )
}

const CountdownContainer = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="mx-auto my-4 grid place-items-center">
      {isClient && (
        <Countdown
          date={Date.parse(DATA.resepsi.tanggal)}
          renderer={Renderer}
        />
      )}
      <Button
        type="button"
        className="relative z-10 mt-10 bg-main-120 font-sans"
      >
        <a href={DATA.calendarUrl}>Simpan Tanggal</a>
      </Button>
    </div>
  )
}
export default CountdownContainer

/*
 * TODO:
 * - add google calendar
 */
