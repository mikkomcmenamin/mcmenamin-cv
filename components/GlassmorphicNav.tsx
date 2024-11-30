'use client';

import {
  User,
  Briefcase,
  Code,
  Palette,
  GraduationCap,
  Mail,
  Music,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { HoverScale } from './animations/HoverScale';

interface INavItem {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  label: string;
  sectionId: string;
}

const navItems: INavItem[] = [
  { icon: User, label: 'About', sectionId: 'about' },
  { icon: Briefcase, label: 'Experience', sectionId: 'experience' },
  { icon: Code, label: 'Skills', sectionId: 'skills' },
  { icon: Palette, label: 'Portfolio', sectionId: 'portfolio' },
  { icon: GraduationCap, label: 'Education', sectionId: 'education' },
  { icon: Music, label: 'Music', sectionId: 'music' },
  { icon: Mail, label: 'Contact', sectionId: 'contact' },
];

export default function GlassmorphicNav() {
  const [activeSection, setActiveSection] = useState('');

  const handleClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = window.innerWidth < 768 ? 20 : 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
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
        setActiveSection(navItems[navItems.length - 1].sectionId);
      } else {
        for (const section of sections) {
          if (section && scrollPosition >= section.top) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:bottom-auto md:left-auto md:right-4 md:top-1/2 md:-translate-y-1/2 md:transform">
      <ul className="flex justify-around rounded-t-2xl border-t border-cyan-400 border-opacity-20 bg-gray-900 bg-opacity-50 pb-4 pt-3 backdrop-blur-md md:block md:space-y-4 md:rounded-none md:border-none md:p-0">
        {navItems.map(({ icon: Icon, label, sectionId }) => (
          <li key={sectionId} className="group md:relative md:mb-4">
            <div className="absolute right-full top-[32%] mr-3 hidden origin-right -translate-y-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:block">
              <span className="whitespace-nowrap text-cyan-300">{label}</span>
            </div>
            <a
              href={`#${sectionId}`}
              onClick={handleClick(sectionId)}
              className={`block rounded-full border border-cyan-400 p-3 shadow-lg backdrop-blur-md transition-all duration-300 
                ${
                  activeSection === sectionId
                    ? 'border-opacity-50 bg-cyan-400 bg-opacity-25 shadow-cyan-400/20'
                    : 'border-opacity-20 bg-cyan-400 bg-opacity-10 hover:bg-opacity-20'
                }`}
            >
              <HoverScale>
                <Icon
                  className={`h-6 w-6 ${
                    activeSection === sectionId
                      ? 'text-cyan-100'
                      : 'text-cyan-300'
                  }`}
                />
                <span className="sr-only">{label}</span>
              </HoverScale>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
