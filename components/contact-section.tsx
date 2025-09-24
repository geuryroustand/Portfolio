"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./scroll-reveal";
import ContactForm from "./contact-form";
import { Download, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

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

export default function ContactSection() {
  const [isResumeHovered, setIsResumeHovered] = useState(false);

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <Badge className="bg-sky-400/10 text-sky-400 hover:bg-sky-400/20 mb-4">
              Get In Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Contact Me
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl">
              Have a project in mind or want to discuss a potential
              collaboration? Feel free to reach out!
            </p>
            <div className="w-20 h-1 bg-sky-400 mt-6 rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ScrollReveal delay={200} direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-sky-400">
                  Let's Connect
                </h3>
                <p className="text-slate-300">
                  I'm currently available for freelance work, collaborations,
                  and full-time opportunities. If you have a project that needs
                  my expertise, don't hesitate to reach out!
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-sky-400">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-slate-800 p-2 rounded-full">
                      <Mail className="text-sky-400" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <a
                        href="mailto:roustandgeury@gmail.com"
                        className="text-slate-400 hover:text-sky-400 transition-colors"
                      >
                        roustandgeury@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-slate-800 p-2 rounded-full">
                      <ExternalLink className="text-sky-400" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-white">Location</p>
                      <p className="text-slate-400">
                        Bahnhofstraße 24, 73033 Göppingen, Germany
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-sky-400">
                  Social Profiles
                </h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 text-white",
                        "transition-all duration-300 transform hover:scale-110 hover:shadow-lg",
                        link.color
                      )}
                      aria-label={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href="https://drive.google.com/file/d/18iQBR0fr09UHTIUq4HlMGV-XfxWGhUcH/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block group"
                  onMouseEnter={() => setIsResumeHovered(true)}
                  onMouseLeave={() => setIsResumeHovered(false)}
                >
                  <Button
                    className={cn(
                      "bg-sky-400 hover:bg-sky-500 text-white transition-all duration-300",
                      "transform hover:translate-x-[-4px] hover:translate-y-[-4px]"
                    )}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                  <div
                    className={cn(
                      "absolute inset-0 bg-white/10 rounded-md transition-opacity duration-300",
                      "transform translate-x-2 translate-y-2 -z-10",
                      isResumeHovered ? "opacity-100" : "opacity-0"
                    )}
                  ></div>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400} direction="right">
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 md:p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-white">
                Send Me a Message
              </h3>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
