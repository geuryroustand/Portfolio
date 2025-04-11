import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "Home", href: "#" },
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "Resume",
        href: "https://drive.google.com/file/d/1_cWIs54PsvxfP6ecPai3LS_6dl4onree/view?usp=drive_link",
      },
      { name: "Blog", href: "https://medium.com/@roustandgeury" },
      {
        name: "GitHub",
        href: "https://github.com/geuryroustand?tab=repositories",
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/geury-roustand-86a40471/",
      },
    ],
  },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="h-5 w-5" />,
    href: "https://github.com/geuryroustand?tab=repositories",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-5 w-5" />,
    href: "https://www.linkedin.com/in/geury-roustand-86a40471/",
  },
  {
    name: "Email",
    icon: <Mail className="h-5 w-5" />,
    href: "mailto:roustandgeury@gmail.com",
  },
];

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-white">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-white">
                Geury<span className="text-sky-400">Roustand</span>
              </span>
            </Link>
            <p className="mt-4 text-slate-400 max-w-xs">
              Frontend engineer specializing in creating exceptional digital
              experiences with modern JavaScript technologies.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-sky-400 transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-lg font-semibold text-white mb-4">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-sky-400 transition-colors duration-300 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} Geury Roustand. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm mt-4 md:mt-0 flex items-center">
            Made with{" "}
            <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" /> using
            Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
