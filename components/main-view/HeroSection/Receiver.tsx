"use client"

import { useSearchParams } from "next/navigation"
import { FaRegEnvelopeOpen } from "react-icons/fa6"
import { AnimatePresence, motion } from "framer-motion"
import { baseVariants } from "@/components/shared/MotionElement"
import { useActiveContext } from "@/context"

const buttonVariants = {
  ...baseVariants,
  animate: {
    ...baseVariants.animate,
    transition: { ...baseVariants.animate.transition, delay: 3 },
  },
}

const Receiver = () => {
  const receiver = useSearchParams().get("to")
  const { setIsActive } = useActiveContext()

  return (
    <div className="text-center">
      <motion.h3
        variants={baseVariants}
        initial={"initial"}
        animate={"animate"}
      >
        <p className="">Kepada Bpk/Ibu/Saudara/i Yth: </p>
        <p className="text-2xl font-semibold capitalize">
          {receiver ?? "Tamu undangan"}
        </p>
      </motion.h3>

      <motion.button
        className="mx-auto mt-6 flex items-center rounded-md bg-main-accent px-10 py-1 text-black"
        type="button"
        variants={buttonVariants}
        initial={"initial"}
        animate={"animate"}
        exit={{ opacity: 0 }}
        whileTap={{ scale: 0.96 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <FaRegEnvelopeOpen />
        <span className="ml-2">Buka Undangan</span>
      </motion.button>
    </div>
  )
}
export default Receiver
