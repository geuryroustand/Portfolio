"use client"

import type React from "react"

import { useState, useEffect, useContext } from "react"
import Link from "next/link"
import { useActiveSection } from "@/hooks/use-active-section"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { ReducedMotionContext } from "@/components/reduced-motion-provider"
import { cn } from "@/lib/utils"
import { Menu, X, ZapOff } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function ModernNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const activeSection = useActiveSection(navItems.map((item) => item.href.replace("#", "")))
  const scrollToSection = useSmoothScroll()
  const { prefersReducedMotion, toggleReducedMotion } = useContext(ReducedMotionContext)
  const { theme, setTheme } = useTheme()

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isMobileMenuOpen && !target.closest("#mobile-menu") && !target.closest("#menu-button")) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isMobileMenuOpen])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const sectionId = href.replace("#", "")
    scrollToSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-slate-900/90 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center space-x-2 text-white"
          >
            <span className="text-xl md:text-2xl font-bold">
              Geury<span className="text-sky-400">Roustand</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors",
                  "hover:text-sky-400 group rounded-md",
                  activeSection === item.href.replace("#", "") ? "text-sky-400" : "text-white/80",
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-sky-400 transition-all duration-300",
                    activeSection === item.href.replace("#", "") ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </Link>
            ))}

            {/* Reduced Motion Toggle */}
            <button
              onClick={toggleReducedMotion}
              className={cn(
                "p-2 rounded-full transition-colors",
                prefersReducedMotion ? "text-sky-400 hover:text-sky-300" : "text-white/80 hover:text-sky-400",
              )}
              aria-label={prefersReducedMotion ? "Enable animations" : "Reduce animations"}
            >
              <ZapOff size={18} />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            {/* Reduced Motion Toggle - Mobile */}
            <button
              onClick={toggleReducedMotion}
              className={cn(
                "p-2 rounded-full transition-colors",
                prefersReducedMotion ? "text-sky-400 hover:text-sky-300" : "text-white/80 hover:text-sky-400",
              )}
              aria-label={prefersReducedMotion ? "Enable animations" : "Reduce animations"}
            >
              <ZapOff size={18} />
            </button>

            <button
              id="menu-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-white/80 hover:text-sky-400 transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            className="md:hidden bg-slate-800 border-b border-slate-700"
          >
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={cn(
                        "block px-4 py-3 rounded-md transition-colors",
                        activeSection === item.href.replace("#", "")
                          ? "bg-sky-400/10 text-sky-400"
                          : "text-white/80 hover:bg-slate-700/50 hover:text-sky-400",
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
