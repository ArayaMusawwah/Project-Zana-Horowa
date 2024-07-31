"use client"

import { useSearchParams } from "next/navigation"
import { FaRegEnvelopeOpen } from "react-icons/fa6"
import { motion } from "framer-motion"
import { baseVariants } from "@/components/shared/MotionElement"

const buttonVariants = {
  ...baseVariants,
  animate: {
    ...baseVariants.animate,
    transition: { ...baseVariants.animate.transition, delay: 3 },
  },
}

const Receiver = () => {
  const receiver = useSearchParams().get("to")

  return (
    <div className="text-center">
      <motion.h3
        variants={baseVariants}
        initial={"initial"}
        animate={"animate"}
      >
        <p className="">Kepada Bpk/Ibu/Saudara/i YTH: </p>
        <p className="text-2xl font-semibold capitalize">{receiver}</p>
      </motion.h3>

      <motion.button
        className="bg-main-accent mx-auto mt-6 flex items-center rounded-md px-10 py-1 text-black"
        type="button"
        variants={buttonVariants}
        initial={"initial"}
        animate={"animate"}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
      >
        <FaRegEnvelopeOpen />
        <span className="ml-2">Buka Undangan</span>
      </motion.button>
    </div>
  )
}
export default Receiver
