import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { pageTransition } from '../utils/animations';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const offset = 84;
    const links = Array.from(document.querySelectorAll('a[href^="#"]'));
    const sections = Array.from(document.querySelectorAll('section[id]'));

    const handleScroll = () => {
      const currentSection = sections.reduce((closest, section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom > offset) {
          return section.id;
        }
        return closest;
      }, 'home');
      setActiveSection(currentSection);
    };

    const handleProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0);
    };

    const handleClick = (event) => {
      const href = event.currentTarget.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      event.preventDefault();
      const target = document.querySelector(href);
      if (!target) return;

      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    };

    links.forEach((link) => link.addEventListener('click', handleClick));
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scroll', handleProgress, { passive: true });
    handleScroll();
    handleProgress();

    return () => {
      links.forEach((link) => link.removeEventListener('click', handleClick));
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleProgress);
    };
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <motion.div
        className="fixed left-0 top-0 h-1 bg-primary z-50 origin-left"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ ease: 'easeOut', duration: 0.2 }}
      />
      <motion.main
        variants={pageTransition}
        initial="initial"
        animate="animate"
        className="pt-24 pb-32 px-margin-mobile md:px-gutter max-w-container-max mx-auto space-y-24 md:space-y-section-gap"
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Experience />
          <Education />
        </div>
        <Contact />
      </motion.main>
      <Footer />
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        className="md:hidden fixed bottom-0 left-0 w-full glass-panel z-50 px-gutter py-4 border-t border-outline-variant/10"
      >
        <div className="flex justify-around items-center">
          {[
            { label: 'Home', href: '#home', icon: 'home' },
            { label: 'Skills', href: '#skills', icon: 'bolt' },
            { label: 'Projects', href: '#projects', icon: 'terminal' },
            { label: 'Contact', href: '#contact', icon: 'alternate_email' },
          ].map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                className={`flex flex-col items-center gap-1 ${isActive ? 'text-primary' : 'text-on-surface-variant'} transition-colors duration-300`}
                href={item.href}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className="font-label-md text-[10px]">{item.label}</span>
              </a>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
