"use client"

import { motion } from "framer-motion"

export const MotionDiv = motion.div
export const MotionP = motion.p
export const MotionH1 = motion.h1
export const MotionH2 = motion.h2
export const MotionSection = motion.section

export const baseVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      type: "spring",
      delay: 2.5,
    },
  },
}
