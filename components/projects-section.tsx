"use client";

import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./scroll-reveal";
import ProjectCard, { type ProjectProps } from "./project-card";
import { Github } from "lucide-react";

// Updated project data with only real projects
const projectsData: ProjectProps[] = [
  {
    id: "vacations-taxi",
    title: "VacationsTaxis",
    description:
      "A full-stack application for booking taxi services. Features user registration, login, and booking management with a responsive UI and secure backend API. Built with Next.js, Redux, and Bootstrap for the frontend, and Node.js, Express.js, MongoDB, and Strapi CMS for the backend. Implemented JSON Web Token authentication and middleware to secure endpoints from unauthorized access.",
    image: "/vacationsTaxis.png?height=400&width=600&text=VacationsTaxis",
    technologies: [
      "Next.js",
      "Redux",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Strapi CMS",
      "JWT",
    ],
    demoUrl: "https://vacations-taxi-git-main-geuryroustand.vercel.app/",
    githubUrl: "https://github.com/geuryroustand/vacations-taxi",
    featured: true,
    category: "Full Stack",
    backendUrl: "https://github.com/geuryroustand/capstone-project-backend",
  },

  {
    id: "nailfeed",
    title: "Nailfeed",
    description:
      "NailFeed is a comprehensive social platform designed specifically for the nail art community. Users can share their creative nail designs, discover trending styles, connect with fellow nail artists, and build collections of their favorite looks. The platform combines modern web technologies with an intuitive user experience to create the ultimate destination for nail art inspiration.",
    image: "/nailfeed.png?height=400&width=600&text=Nailfeed",
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind",
      "TypeScript.js",
      "Shadcn/ui f",
      "PostgreSQL",
      "Strapi CMS",
      "Cloudinary",
    ],
    demoUrl: "https://nailfeed-git-main-geuryroustands-projects.vercel.app/",
    githubUrl: "https://github.com/geuryroustand/nailfeed-frontend",
    category: "Frontend",
  },
  {
    id: "bankist",
    title: "Bankist",
    description:
      "A modern business website for a fictional bank with smooth scrolling, tabbed components, and responsive design. Developed using HTML5, CSS3, and JavaScript to create a modern and responsive user interface with interactive elements and animations.",
    image: "/bankist.png?height=400&width=600&text=Bankist",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    demoUrl: "https://elegant-shaw-0aefbb.netlify.app/",
    githubUrl: "https://github.com/geuryroustand/bankist",
    category: "Frontend",
  },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Extract unique categories and technologies for filters
  const categories = useMemo(() => {
    const cats = [
      "All",
      ...new Set(projectsData.map((project) => project.category)),
    ];
    return cats;
  }, []);

  const technologies = useMemo(() => {
    const techs = new Set<string>();
    projectsData.forEach((project) => {
      project.technologies.forEach((tech) => techs.add(tech));
    });
    return ["All Technologies", ...Array.from(techs)];
  }, []);

  const [activeTechFilter, setActiveTechFilter] = useState("All Technologies");

  // Filter projects based on selected category and technology
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const categoryMatch =
        activeFilter === "All" || project.category === activeFilter;
      const techMatch =
        activeTechFilter === "All Technologies" ||
        project.technologies.includes(activeTechFilter);
      return categoryMatch && techMatch;
    });
  }, [activeFilter, activeTechFilter]);

  return (
    <section id="projects" className="py-20 bg-slate-900 text-white">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <Badge className="bg-sky-400/10 text-sky-400 hover:bg-sky-400/20 mb-4">
              My Projects
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Featured Work
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl">
              Here's a selection of my recent projects. Each one presented
              unique challenges and opportunities for growth.
            </p>
            <div className="w-20 h-1 bg-sky-400 mt-6 rounded-full"></div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  size="sm"
                  className={
                    activeFilter === category
                      ? "bg-sky-400 hover:bg-sky-500 text-white"
                      : "border-slate-700 text-slate-300 hover:text-sky-400 hover:border-sky-400"
                  }
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="relative">
              <select
                className="appearance-none bg-slate-800 border border-slate-700 text-slate-300 rounded-md py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
                value={activeTechFilter}
                onChange={(e) => setActiveTechFilter(e.target.value)}
              >
                {technologies.map((tech) => (
                  <option key={tech} value={tech}>
                    {tech}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ScrollReveal
                key={project.id}
                delay={300 + index * 100}
                className={project.featured ? "md:col-span-2" : ""}
              >
                <ProjectCard {...project} />
              </ScrollReveal>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-slate-400 text-lg">
                No projects match the selected filters.
              </p>
              <Button
                className="mt-4 bg-sky-400 hover:bg-sky-500 text-white"
                onClick={() => {
                  setActiveFilter("All");
                  setActiveTechFilter("All Technologies");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>

        <ScrollReveal delay={600}>
          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-6">
              These are just a few examples of my work. Visit my GitHub profile
              to see more projects.
            </p>
            <Button asChild className="bg-sky-400 hover:bg-sky-500 text-white">
              <a
                href="https://github.com/geuryroustand"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
