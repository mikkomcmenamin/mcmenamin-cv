"use client";

import { motion } from "framer-motion";
import {
  User,
  Briefcase,
  Code,
  Palette,
  GraduationCap,
  Mail,
  Music,
} from "lucide-react";
import { useState, useEffect } from "react";

interface INavItem {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  label: string;
  sectionId: string;
}

const navItems: INavItem[] = [
  { icon: User, label: "About", sectionId: "about" },
  { icon: Briefcase, label: "Experience", sectionId: "experience" },
  { icon: Code, label: "Skills", sectionId: "skills" },
  { icon: Palette, label: "Portfolio", sectionId: "portfolio" },
  { icon: GraduationCap, label: "Education", sectionId: "education" },
  { icon: Music, label: "Music", sectionId: "music" },
  { icon: Mail, label: "Contact", sectionId: "contact" },
];

export default function GlassmorphicNav() {
  const [activeSection, setActiveSection] = useState("");

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map(({ sectionId }) => {
          const element = document.getElementById(sectionId);
          if (!element) return null;

          const rect = element.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          return { id: sectionId, top };
        })
        .filter(Boolean);

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const bottomOfPage = document.documentElement.scrollHeight;
      const nearBottom =
        window.scrollY + window.innerHeight > bottomOfPage - 100;

      if (nearBottom) {
        // If we're near the bottom, activate the last section
        setActiveSection(navItems[navItems.length - 1].sectionId);
      } else {
        // Normal scroll behavior
        for (const section of sections) {
          if (section && scrollPosition >= section.top) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial active section

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:right-4 md:top-1/2 md:left-auto md:bottom-auto md:transform md:-translate-y-1/2">
      <ul className="flex justify-around md:block md:space-y-4 p-2 md:p-0 backdrop-blur-md bg-gray-900 bg-opacity-50 border-t border-cyan-400 border-opacity-20 md:border-none">
        {navItems.map(({ icon: Icon, label, sectionId }) => (
          <li key={sectionId} className="md:mb-4">
            <motion.a
              href={`#${sectionId}`}
              onClick={(e) => handleClick(e, sectionId)}
              className={`block p-3 rounded-full backdrop-blur-md border border-cyan-400 shadow-lg transition-all duration-300 
                ${
                  activeSection === sectionId
                    ? "bg-cyan-400 bg-opacity-25 border-opacity-50 shadow-cyan-400/20"
                    : "bg-cyan-400 bg-opacity-10 border-opacity-20 hover:bg-opacity-20"
                }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon
                className={`w-6 h-6 ${
                  activeSection === sectionId
                    ? "text-cyan-100"
                    : "text-cyan-300"
                }`}
              />
              <span className="sr-only">{label}</span>
            </motion.a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
