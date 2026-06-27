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
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={twMerge(clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        scrolled ? "py-3 bg-background/50 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" : "py-6 bg-transparent"
      ))}
    >
      <div className="container mx-auto px-6 flex justify-between items-center max-w-6xl">
        <a href="#" className="text-2xl font-bold tracking-tighter text-white z-10 relative group">
          {siteConfig.firstName}<span className="text-primary transition-colors group-hover:text-accent2">.</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 p-1.5 rounded-full backdrop-blur-md relative">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={twMerge(clsx(
                  "relative px-5 py-2 text-sm font-medium rounded-full transition-colors duration-300",
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
          download
          className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300"
        >
          Resume
        </a>
      </div>
    </motion.header>
  );
}
