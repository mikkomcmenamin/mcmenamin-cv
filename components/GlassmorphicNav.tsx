'use client'

import { motion } from 'framer-motion'
import { User, Briefcase, Code, Palette, GraduationCap, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'

interface INavItem {
  icon: any,
  label: string,
  sectionId: string,
}

const navItems:INavItem[] = [
  { icon: User, label: 'About', sectionId: 'about' },
  { icon: Briefcase, label: 'Experience', sectionId: 'experience' },
  { icon: Code, label: 'Skills', sectionId: 'skills' },
  { icon: Palette, label: 'Portfolio', sectionId: 'portfolio' },
  { icon: GraduationCap, label: 'Education', sectionId: 'education' },
  { icon: Mail, label: 'Contact', sectionId: 'contact' },
]

export default function GlassmorphicNav() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    navItems.forEach(({ sectionId }) => {
      const element = document.getElementById(sectionId)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:right-4 md:top-1/2 md:left-auto md:bottom-auto md:transform md:-translate-y-1/2">
      <ul className="flex justify-around md:block md:space-y-4 p-2 md:p-0 backdrop-blur-md bg-gray-900 bg-opacity-50 border-t border-cyan-400 border-opacity-20 md:border-none">
        {navItems.map(({ icon: Icon, label, sectionId }) => (
          <li key={sectionId} className="md:mb-4">
            <motion.a
              href={`#${sectionId}`}
              className={`block p-3 rounded-full backdrop-blur-md bg-cyan-400 bg-opacity-10 border border-cyan-400 border-opacity-20 shadow-lg transition-all duration-300 hover:bg-opacity-20 ${
                activeSection === sectionId ? 'bg-opacity-30' : ''
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-6 h-6 text-cyan-300" />
              <span className="sr-only">{label}</span>
            </motion.a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

