'use client';

import Link from 'next/link';

const Contact = () => {
  return (
    <section id="contact" className="pb-4">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-2xl font-semibold text-cyan-300">Contact</h2>

        <div className="space-y-4">

          <Link
              href="https://linkedin.com/in/mikkomcmenamin"
              className="group flex items-center transition-transform hover:translate-x-1"
          >
            <span className="mr-3 text-xl text-cyan-300">↗</span>
            <span className="text-xl text-cyan-100">Linkedin</span>
          </Link>
          <Link
            href="https://github.com/mikkomcmenamin"
            className="group flex items-center transition-transform hover:translate-x-1"
          >
            <span className="mr-3 text-xl text-cyan-300">↗</span>
            <span className="text-xl text-cyan-100">Github</span>
          </Link>
          <Link
            href="https://x.com/mikkocodes"
            className="group flex items-center transition-transform hover:translate-x-1"
          >
            <span className="mr-3 text-xl text-cyan-300">↗</span>
            <span className="text-xl text-cyan-100">X</span>
          </Link>
          <Link
              href="mailto:mikko.mcmenamin@gmail.com"
              className="group flex items-center transition-transform hover:translate-x-1"
          >
            <span className="mr-3 text-xl text-cyan-300">↗</span>
            <span className="text-xl text-cyan-100">Email</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
