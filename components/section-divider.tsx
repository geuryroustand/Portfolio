"use client"

import { useContext } from "react"
import { motion } from "framer-motion"
import { ReducedMotionContext } from "@/components/reduced-motion-provider"
import { cn } from "@/lib/utils"

interface SectionDividerProps {
  className?: string
  invert?: boolean
  variant?: "wave" | "angle" | "curve" | "none"
  color?: "primary" | "secondary" | "dark" | "light"
}

export default function SectionDivider({
  className,
  invert = false,
  variant = "angle",
  color = "dark",
}: SectionDividerProps) {
  const { prefersReducedMotion } = useContext(ReducedMotionContext)

  // Color mapping
  const colorMap = {
    primary: "from-sky-400 to-transparent",
    secondary: "from-orange-400 to-transparent",
    dark: invert ? "from-slate-800/50 to-transparent" : "from-slate-900 to-transparent",
    light: invert ? "from-slate-900 to-transparent" : "from-slate-800/50 to-transparent",
  }

  // Don't render if variant is none
  if (variant === "none") return null

  // Determine the clip path based on variant and invert
  const getClipPath = () => {
    switch (variant) {
      case "wave":
        return invert
          ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 60%, 33.33% 80%, 66.66% 60%, 100% 80%, 100% 100%, 0% 100%)"
          : "polygon(0% 0%, 100% 0%, 100% 60%, 66.66% 80%, 33.33% 60%, 0% 80%, 0% 100%, 100% 100%, 100% 0%, 0% 0%)"
      case "curve":
        return invert ? "ellipse(50% 50% at 50% 100%)" : "ellipse(50% 50% at 50% 0%)"
      case "angle":
      default:
        return invert
          ? "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 4rem))"
          : "polygon(0 0, 100% 4rem, 100% 100%, 0 100%)"
    }
  }

  return (
    <div className={cn("relative h-24 w-full overflow-hidden", className)}>
      <motion.div
        className={cn("absolute w-full h-[200%]", colorMap[color])}
        style={{
          backgroundImage: "linear-gradient(to bottom, var(--tw-gradient-stops))",
          clipPath: getClipPath(),
        }}
        initial={prefersReducedMotion ? {} : { y: invert ? 20 : -20, opacity: 0 }}
        animate={prefersReducedMotion ? {} : { y: 0, opacity: 1 }}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
      />
    </div>
  )
}
