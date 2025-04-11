"use client";

import dynamic from "next/dynamic";
import AnimatedSection from "@/components/animated-section";
import SectionDivider from "@/components/section-divider";

// Dynamically import heavy components
const HeroSection = dynamic(() => import("@/components/hero-section"), {
  ssr: true, // We want this to be server-rendered for SEO
});

// Lazy load less critical sections
const AboutMe = dynamic(() => import("@/components/about-me"), {
  ssr: false,
});

const SkillsSection = dynamic(() => import("@/components/skills-section"), {
  ssr: false,
});

const ProjectsSection = dynamic(() => import("@/components/projects-section"), {
  ssr: false,
});

const ContactSection = dynamic(() => import("@/components/contact-section"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Highest priority */}
      <AnimatedSection id="home" variant="fadeIn" as="div">
        <HeroSection />
      </AnimatedSection>

      {/* Section divider */}
      <SectionDivider variant="angle" color="dark" />

      {/* About Section */}
      <AnimatedSection id="about" variant="fadeInUp" as="div">
        <AboutMe />
      </AnimatedSection>

      {/* Section divider */}
      <SectionDivider variant="wave" color="dark" invert />

      {/* Skills Section */}
      <AnimatedSection id="skills" variant="fadeInUp" delay={100} as="div">
        <SkillsSection />
      </AnimatedSection>

      {/* Section divider */}
      <SectionDivider variant="curve" color="dark" />

      {/* Projects Section */}
      <AnimatedSection id="projects" variant="fadeInUp" delay={100} as="div">
        <ProjectsSection />
      </AnimatedSection>

      {/* Section divider */}
      <SectionDivider variant="angle" color="dark" invert />

      {/* Contact Section */}
      <AnimatedSection id="contact" variant="fadeInUp" delay={100} as="div">
        <ContactSection />
      </AnimatedSection>
    </div>
  );
}
