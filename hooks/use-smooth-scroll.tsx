"use client"

import { useCallback, useContext } from "react"
import { ReducedMotionContext } from "@/components/reduced-motion-provider"

export function useSmoothScroll() {
  const { prefersReducedMotion } = useContext(ReducedMotionContext)

  const scrollToSection = useCallback(
    (sectionId: string) => {
      const element = document.getElementById(sectionId)
      if (element) {
        const navbarHeight = 64 // Adjust based on your navbar height
        const top = element.getBoundingClientRect().top + window.scrollY - navbarHeight

        if (prefersReducedMotion) {
          // Instant scroll for reduced motion
          window.scrollTo({
            top,
            behavior: "auto",
          })
        } else {
          // Smooth scroll
          window.scrollTo({
            top,
            behavior: "smooth",
          })
        }
      }
    },
    [prefersReducedMotion],
  )

  return scrollToSection
}
