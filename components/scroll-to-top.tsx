"use client"

import { useState, useEffect, useContext } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ReducedMotionContext } from "@/components/reduced-motion-provider"
import { cn } from "@/lib/utils"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const { prefersReducedMotion } = useContext(ReducedMotionContext)

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      // If user scrolled down more than 500px, show the button
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    if (prefersReducedMotion) {
      // Instant scroll for reduced motion
      window.scrollTo({
        top: 0,
        behavior: "auto",
      })
    } else {
      // Smooth scroll
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className={cn(
              "rounded-full w-12 h-12 bg-sky-400 hover:bg-sky-500 text-white shadow-lg",
              "transition-all duration-300 hover:scale-110",
            )}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
