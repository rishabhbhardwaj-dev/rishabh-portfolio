import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { siteConfig } from '../data/siteConfig';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll active item into view inside the nav strip
  useEffect(() => {
    if (navRef.current) {
      const activeEl = navRef.current.querySelector('[data-active="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeSection]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={twMerge(clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        scrolled ? "py-2 md:py-3 bg-background/50 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" : "py-3 md:py-6 bg-transparent"
      ))}
    >
      <div className="container mx-auto px-3 md:px-6 flex justify-between items-center max-w-6xl gap-1.5 md:gap-2">
        <a href="#" className="text-lg md:text-2xl font-bold tracking-tighter text-white z-10 relative group shrink-0">
          {siteConfig.firstName}<span className="text-primary transition-colors group-hover:text-accent2">.</span>
        </a>

        <nav
          ref={navRef}
          className="flex items-center gap-0.5 md:gap-1 bg-white/5 border border-white/10 p-1 md:p-1.5 rounded-full backdrop-blur-md overflow-x-auto scrollbar-hide max-w-[60%] md:max-w-none"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                data-active={isActive}
                className={twMerge(clsx(
                  "relative px-2.5 md:px-5 py-1.5 md:py-2 text-[11px] md:text-sm font-medium rounded-full transition-colors duration-300 whitespace-nowrap shrink-0",
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                ))}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        <a
          href={siteConfig.resumePath}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-2.5 py-1.5 md:px-6 md:py-2.5 text-[11px] md:text-sm font-semibold text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300 shrink-0"
        >
          Resume
        </a>
      </div>
    </motion.header>
  );
}