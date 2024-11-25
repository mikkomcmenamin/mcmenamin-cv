'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function FuturisticContact() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-cyan-300">Contact</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center space-x-6"
      >
        {[
          { icon: Mail, href: 'mailto:john.doe@future.com', label: 'Email' },
          { icon: Github, href: 'https://github.com/johndoe', label: 'GitHub' },
          { icon: Linkedin, href: 'https://linkedin.com/in/johndoe', label: 'LinkedIn' },
          {
            icon: Twitter,
            href: 'https://twitter.com/mikkomcmenamin',
            label: 'X (Twitter)'
          },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full"
          >
            <item.icon className="w-6 h-6 text-gray-900" />
            <span className="sr-only">{item.label}</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}

