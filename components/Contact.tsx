'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-semibold text-cyan-300">Contact</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center space-x-6"
      >
        {[
          { icon: Mail, href: 'mailto:mikko.mcmenamin@gmail.com', label: 'Email' },
          { icon: Github, href: 'https://github.com/mikkomcmenamin', label: 'GitHub' },
          {
            icon: Linkedin,
            href: 'https://linkedin.com/in/mikkomcmenamin',
            label: 'LinkedIn',
          },
          {
            icon: Twitter,
            href: 'https://x.com/mikkocodes',
            label: 'X (Twitter)',
          },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-3"
          >
            <item.icon className="h-6 w-6 text-gray-900" />
            <span className="sr-only">{item.label}</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
