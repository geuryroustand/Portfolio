"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Server } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ProjectProps {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl: string
  githubUrl: string
  featured?: boolean
  category: string
  backendUrl?: string
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  demoUrl,
  githubUrl,
  featured,
  backendUrl,
}: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        "group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700",
        "transition-all duration-300 ease-out transform perspective-1000",
        isHovered ? "scale-[1.02] shadow-xl rotate-y-5" : "",
        featured ? "md:col-span-2" : "",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-sky-400 text-white">Featured</Badge>
        </div>
      )}

      {/* Project image with overlay */}
      <div className="relative h-56 md:h-64 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={cn(
            "object-cover transition-all duration-500",
            isHovered ? "scale-110 brightness-50" : "brightness-75",
          )}
        />
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70",
            "transition-opacity duration-300",
            isHovered ? "opacity-90" : "",
          )}
        />

        {/* Hover overlay with buttons */}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center gap-4 p-4",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          )}
        >
          <Button asChild size="sm" className="bg-sky-400 hover:bg-sky-500 text-white shadow-lg">
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline" className="border-white text-white hover:bg-white/20 shadow-lg">
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Frontend
            </Link>
          </Button>
        </div>
      </div>

      {/* Project details */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-300 line-clamp-2">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="bg-slate-700/50 text-slate-300 border-slate-600 hover:border-sky-400"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Bottom links - visible on mobile and desktop */}
      <div className="p-4 pt-0 flex justify-between">
        <Link
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 hover:text-sky-300 flex items-center gap-1 text-sm"
        >
          <Github className="h-4 w-4" />
          <span>Frontend</span>
        </Link>

        {backendUrl ? (
          <Link
            href={backendUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:text-sky-300 flex items-center gap-1 text-sm"
          >
            <Server className="h-4 w-4" />
            <span>Backend</span>
          </Link>
        ) : (
          <Link
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:text-sky-300 flex items-center gap-1 text-sm"
          >
            <ExternalLink className="h-4 w-4" />
            <span>Live Demo</span>
          </Link>
        )}
      </div>
    </div>
  )
}
