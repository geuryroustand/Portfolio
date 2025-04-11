"use client"

import type React from "react"

import { useRef, useContext } from "react"
import { motion, useInView } from "framer-motion"
import { ReducedMotionContext } from "@/components/reduced-motion-provider"
import { animationConfig, getTransition } from "@/lib/animation-config"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  variant?: keyof typeof animationConfig.variants
  delay?: number
  threshold?: number
  once?: boolean
  as?: React.ElementType
}

export default function AnimatedSection({
  children,
  className,
  id,
  variant = "fadeInUp",
  delay = 0,
  threshold = 0.1,
  once = true,
  as = "section",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    threshold,
    once,
    // Add a small amount of margin to trigger slightly before the element is in view
    margin: "0px 0px -100px 0px",
  })
  const { prefersReducedMotion } = useContext(ReducedMotionContext)

  // Get the animation variant
  const animation = animationConfig.variants[variant]

  // Get transition with reduced motion support
  const transition = getTransition(prefersReducedMotion, {
    delay: prefersReducedMotion ? 0 : delay / 1000,
  })

  const MotionComponent = motion[as as keyof typeof motion] || motion.section

  return (
    <MotionComponent
      ref={ref}
      id={id}
      className={cn("will-change-transform", className)}
      initial={prefersReducedMotion ? "visible" : "hidden"}
      animate={isInView || prefersReducedMotion ? "visible" : "hidden"}
      variants={animation}
      transition={transition}
    >
      {children}
    </MotionComponent>
  )
}
