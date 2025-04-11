"use client"

import { createContext, useState, useEffect, type ReactNode } from "react"

interface ReducedMotionContextType {
  prefersReducedMotion: boolean
  toggleReducedMotion: () => void
}

export const ReducedMotionContext = createContext<ReducedMotionContextType>({
  prefersReducedMotion: false,
  toggleReducedMotion: () => {},
})

interface ReducedMotionProviderProps {
  children: ReactNode
}

export function ReducedMotionProvider({ children }: ReducedMotionProviderProps) {
  // Initialize with system preference, but default to false if SSR
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check system preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    // Check localStorage for user preference that overrides system
    const storedPreference = localStorage.getItem("reduced-motion")
    if (storedPreference !== null) {
      setPrefersReducedMotion(storedPreference === "true")
    }

    // Listen for changes to system preference
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't set a manual preference
      if (localStorage.getItem("reduced-motion") === null) {
        setPrefersReducedMotion(e.matches)
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const toggleReducedMotion = () => {
    const newValue = !prefersReducedMotion
    setPrefersReducedMotion(newValue)
    localStorage.setItem("reduced-motion", String(newValue))
  }

  return (
    <ReducedMotionContext.Provider value={{ prefersReducedMotion, toggleReducedMotion }}>
      {children}
    </ReducedMotionContext.Provider>
  )
}
