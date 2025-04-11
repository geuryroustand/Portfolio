"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ScrollReveal from "./scroll-reveal"
import SkillCard from "./skill-card"
import {
  Code,
  Database,
  Globe,
  Layout,
  Server,
  Layers,
  GitBranch,
  FileCode,
  Workflow,
  Palette,
  Cpu,
} from "lucide-react"

// Define skill categories
const categories = ["All", "Frontend", "JavaScript", "CSS", "Backend", "Database", "Tools", "Workflow"]

// Define skills with their properties
const skills = [
  // JavaScript Ecosystem
  {
    name: "JavaScript",
    icon: <Code className="w-8 h-8" />,
    category: "JavaScript",
  },
  {
    name: "TypeScript",
    icon: <FileCode className="w-8 h-8" />,
    category: "JavaScript",
  },
  {
    name: "React.js",
    icon: <Layout className="w-8 h-8" />,
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: <Layout className="w-8 h-8" />,
    category: "Frontend",
  },
  {
    name: "Redux",
    icon: <Layers className="w-8 h-8" />,
    category: "JavaScript",
  },
  {
    name: "Redux Toolkit",
    icon: <Layers className="w-8 h-8" />,
    category: "JavaScript",
  },
  {
    name: "RTK Query",
    icon: <Layers className="w-8 h-8" />,
    category: "JavaScript",
  },
  {
    name: "React Router",
    icon: <Workflow className="w-8 h-8" />,
    category: "Frontend",
  },
  {
    name: "Native Web Components",
    icon: <Cpu className="w-8 h-8" />,
    category: "Frontend",
  },

  // CSS & Styling
  {
    name: "HTML5",
    icon: <Globe className="w-8 h-8" />,
    category: "Frontend",
  },
  {
    name: "CSS3",
    icon: <Palette className="w-8 h-8" />,
    category: "CSS",
  },
  {
    name: "Sass",
    icon: <Palette className="w-8 h-8" />,
    category: "CSS",
  },
  {
    name: "Less",
    icon: <Palette className="w-8 h-8" />,
    category: "CSS",
  },
  {
    name: "CSS Modules",
    icon: <Palette className="w-8 h-8" />,
    category: "CSS",
  },
  {
    name: "Bootstrap",
    icon: <Palette className="w-8 h-8" />,
    category: "CSS",
  },

  // Backend
  {
    name: "Node.js",
    icon: <Server className="w-8 h-8" />,
    category: "Backend",
  },
  {
    name: "Express.js",
    icon: <Server className="w-8 h-8" />,
    category: "Backend",
  },

  // Database
  {
    name: "MongoDB",
    icon: <Database className="w-8 h-8" />,
    category: "Database",
  },
  {
    name: "PostgreSQL",
    icon: <Database className="w-8 h-8" />,
    category: "Database",
  },
  {
    name: "Sequelize",
    icon: <Database className="w-8 h-8" />,
    category: "Database",
  },

  // Tools & Workflow
  {
    name: "Git",
    icon: <GitBranch className="w-8 h-8" />,
    category: "Tools",
  },
  {
    name: "GitHub",
    icon: <GitBranch className="w-8 h-8" />,
    category: "Tools",
  },
  {
    name: "GitLab",
    icon: <GitBranch className="w-8 h-8" />,
    category: "Tools",
  },
  {
    name: "Bitbucket",
    icon: <GitBranch className="w-8 h-8" />,
    category: "Tools",
  },
  {
    name: "ESLint",
    icon: <Code className="w-8 h-8" />,
    category: "Tools",
  },
  {
    name: "StyleLint",
    icon: <Palette className="w-8 h-8" />,
    category: "Tools",
  },
  {
    name: "Jira",
    icon: <Workflow className="w-8 h-8" />,
    category: "Workflow",
  },
  {
    name: "Confluence",
    icon: <Workflow className="w-8 h-8" />,
    category: "Workflow",
  },
]

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredSkills = skills.filter((skill) => activeCategory === "All" || skill.category === activeCategory)

  return (
    <section id="skills" className="py-20 bg-slate-900 text-white">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <Badge className="bg-sky-400/10 text-sky-400 hover:bg-sky-400/20 mb-4">My Skills</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Expertise</h2>
            <p className="text-slate-400 mt-4 max-w-2xl">
              I've worked with a variety of technologies and tools throughout my career, with a focus on modern
              JavaScript frameworks and responsive web design. Here's a showcase of my technical skills.
            </p>
            <div className="w-20 h-1 bg-sky-400 mt-6 rounded-full"></div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={
                  activeCategory === category
                    ? "bg-sky-400 hover:bg-sky-500 text-white"
                    : "border-slate-700 text-slate-300 hover:text-sky-400 hover:border-sky-400"
                }
                onClick={() => setActiveCategory(category)}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <ScrollReveal key={skill.name} delay={300 + index * 50} threshold={0.1}>
              <SkillCard name={skill.name} icon={skill.icon} category={skill.category} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <div className="mt-16 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
            <h3 className="text-xl font-bold mb-4 text-sky-400">Continuous Learning</h3>
            <p className="text-slate-300">
              I'm constantly expanding my skill set and staying up-to-date with the latest frontend technologies. I'm
              passionate about clean code, accessibility, and creating exceptional user experiences.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
