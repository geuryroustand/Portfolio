"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import ScrollReveal from "./scroll-reveal";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function AboutMe() {
  const coreSkills = [
    "JavaScript",
    "React.js",
    "Next.js",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Node.js",
    "Redux",
  ];
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/geuryroustand?tab=repositories",
      color: "hover:bg-[#333333]",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/geury-roustand-86a40471/",
      color: "hover:bg-[#0077B5]",
    },

    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:roustandgeury@gmail.com",
      color: "hover:bg-[#D44638]",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 text-white">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <Badge className="bg-sky-400/10 text-sky-400 hover:bg-sky-400/20 mb-4">
              About Me
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              The Story So Far
            </h2>
            <div className="w-20 h-1 bg-sky-400 mt-6 rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <ScrollReveal className="lg:col-span-2" delay={200} direction="left">
            <div className="relative mx-auto lg:mx-0 max-w-sm">
              <div className="relative z-10 overflow-hidden rounded-lg border-2 border-sky-400 shadow-xl">
                <Image
                  src="/geuryRoustand.jpg?height=600&width=480"
                  alt="Professional portrait of Geury Roustand"
                  width={480}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-sky-400/20 rounded-lg -z-10"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-3" delay={400} direction="right">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-sky-400">
                Hello, I'm Geury Roustand
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm an experienced frontend software engineer with in-depth
                knowledge of modern JavaScript technologies. My expertise lies
                in developing responsive and accessible web applications, with a
                strong focus on React, HTML5, and CSS3.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Throughout my career, I've applied clean code principles and
                maintained efficient version control management with Git. I
                thrive in agile environments and have extensive experience with
                SCRUM methodologies, helping teams deliver high-quality products
                on schedule.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm seeking a position as a front-end or full-stack JavaScript
                developer in a dynamic organization where I can further develop
                my skills and grow professionally.
              </p>

              <div className="pt-4">
                <h4 className="text-xl font-semibold mb-4">
                  Core Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {coreSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-slate-800 text-sky-400 border border-slate-700 py-1 px-3"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                <Button
                  asChild
                  className="bg-sky-400 hover:bg-sky-500 text-white"
                >
                  <a
                    href="https://drive.google.com/file/d/1_cWIs54PsvxfP6ecPai3LS_6dl4onree/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
                <div className="flex gap-3">
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="rounded-full border-slate-700 text-slate-300 hover:text-sky-400 hover:border-sky-400"
                  >
                    <a
                      href="https://github.com/geuryroustand"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="rounded-full border-slate-700 text-slate-300 hover:text-sky-400 hover:border-sky-400"
                  >
                    <a
                      href="https://linkedin.com/in/geuryroustand"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="rounded-full border-slate-700 text-slate-300 hover:text-sky-400 hover:border-sky-400"
                  >
                    <a
                      href="mailto:roustandgeury@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={600}>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-sky-400/50 transition-colors">
              <div className="w-12 h-12 bg-sky-400/20 rounded-lg flex items-center justify-center mb-4">
                <ExternalLink className="h-6 w-6 text-sky-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Frontend Expertise</h3>
              <p className="text-slate-300">
                Specialized in modern JavaScript frameworks with a focus on
                React.js and Next.js. Experienced in building responsive,
                accessible, and performant web applications.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-sky-400/50 transition-colors">
              <div className="w-12 h-12 bg-sky-400/20 rounded-lg flex items-center justify-center mb-4">
                <ExternalLink className="h-6 w-6 text-sky-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Agile Methodology</h3>
              <p className="text-slate-300">
                Proven experience working in agile environments using SCRUM
                methodologies. Proficient with project management tools like
                Jira and Confluence.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-sky-400/50 transition-colors">
              <div className="w-12 h-12 bg-sky-400/20 rounded-lg flex items-center justify-center mb-4">
                <ExternalLink className="h-6 w-6 text-sky-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Clean Code Advocate</h3>
              <p className="text-slate-300">
                Committed to writing maintainable, well-documented code
                following best practices. Experienced with ESLint, StyleLint,
                and other code quality tools.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
