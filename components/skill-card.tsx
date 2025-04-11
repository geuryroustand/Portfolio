"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface SkillCardProps {
  name: string
  icon: React.ReactNode
  category: string
}

export default function SkillCard({ name, icon, category }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        "group relative flex flex-col items-center p-6 rounded-lg transition-all duration-300",
        "bg-slate-800/50 border border-slate-700 hover:border-sky-400/50",
        isHovered ? "transform scale-105 shadow-lg" : "",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
        <div
          className={cn(
            "absolute inset-0 rounded-full bg-slate-900/30 transition-all duration-300",
            isHovered ? "bg-sky-400/10" : "",
          )}
        ></div>
        <div
          className={cn("relative z-10 text-white transition-all duration-300 transform", isHovered ? "scale-110" : "")}
        >
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-white group-hover:text-sky-400 transition-colors duration-300">
        {name}
      </h3>
      <span className="text-sm text-slate-400 mt-1">{category}</span>
    </div>
  )
}
