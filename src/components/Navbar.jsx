import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={twMerge(clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out border-b",
        scrolled 
          ? "py-3 bg-[#11110F]/95 backdrop-blur-md border-[#2A2925]" 
          : "py-4 bg-transparent border-transparent"
      ))}
    >
      <div className="mx-auto px-6 flex justify-between items-center max-w-3xl">
        {/* Clean Flat Horizontal Navigation */}
        <nav
          aria-label="Main Navigation"
          className="flex items-center gap-4 sm:gap-6 overflow-x-auto scrollbar-hide py-1"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={twMerge(clsx(
                  "relative py-1 text-xs sm:text-sm font-medium transition-colors duration-200 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#5B7FA6] rounded-sm",
                  isActive ? "text-[#5B7FA6]" : "text-[#A7A59D] hover:text-[#F1EFE8]"
                ))}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#5B7FA6] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Resume Action Link */}
        <a
          href={siteConfig.resumePath}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center text-xs sm:text-sm font-medium text-[#F1EFE8] hover:text-[#5B7FA6] transition-colors focus-visible:ring-2 focus-visible:ring-[#5B7FA6] rounded-sm shrink-0"
        >
          Resume ↗
        </a>
      </div>
    </motion.header>
  );
}