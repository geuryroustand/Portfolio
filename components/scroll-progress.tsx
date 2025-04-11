"use client"

import { useState, useEffect, useContext } from "react"
import { motion, useScroll } from "framer-motion"
import { ReducedMotionContext } from "@/components/reduced-motion-provider"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const { prefersReducedMotion } = useContext(ReducedMotionContext)
  const [isVisible, setIsVisible] = useState(false)

  // Only show progress bar after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Don't render if reduced motion is preferred
  if (prefersReducedMotion) {
    return null
  }

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-sky-400 origin-left z-50"
      style={{
        scaleX: scrollYProgress,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ opacity: { duration: 0.3 } }}
    />
  )
}
