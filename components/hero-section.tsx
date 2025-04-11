"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import ParticleBackground from "./particle-background"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const scrollToSection = useSmoothScroll()

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true)
  }, [])

  const handleScrollToProjects = () => {
    scrollToSection("projects")
  }

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
      <ParticleBackground />

      <div className="container px-4 md:px-6 z-10">
        <div
          className={`max-w-3xl mx-auto text-center space-y-8 transition-all duration-1000 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-2">
            <h1 className="text-sm md:text-base text-sky-400 font-mono tracking-wider uppercase">Hello, my name is</h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">Geury Roustand</h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-400 mt-2">Frontend Engineer</h3>
          </div>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            I build exceptional digital experiences with modern JavaScript technologies. Focused on creating responsive,
            accessible, and high-performance web applications that solve real problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              onClick={handleScrollToProjects}
              size="lg"
              className="bg-sky-400 hover:bg-sky-500 text-white font-medium px-8 transition-all duration-300 group"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-sky-400" />
      </div>
    </section>
  )
}
