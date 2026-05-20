import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ activeSection }) {
  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.72, ease: 'easeOut' } }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/10"
    >
      <div className="flex justify-between items-center h-16 px-margin-mobile md:px-gutter max-w-container-max mx-auto">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary" aria-hidden="true">terminal</span>
          <span className="font-display text-headline-md tracking-tighter text-primary uppercase">DEVPRA SATH</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`group relative font-label-md text-label-md transition-colors duration-300 ${isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-primary transition-all duration-300 ${
                    isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                  }`}
                />
              </a>
            );
          })}
          <a
            className="px-4 py-2 bg-primary-container text-on-primary-container font-label-md text-label-md rounded-full hover:brightness-110 transition-all"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            RESUME
          </a>
        </nav>

        <button className="md:hidden material-symbols-outlined text-primary" type="button" aria-label="Open menu">
          menu
        </button>
      </div>
    </motion.header>
  );
}
