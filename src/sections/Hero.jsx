import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/siteConfig';
import profileImage from '../assets/profile.jpg';

export default function Hero() {
  const ease = [0.16, 1, 0.3, 1];

  return (
    <header className="relative w-full min-h-[660px] md:min-h-[calc(100vh-5rem)] md:max-h-[850px] flex flex-col justify-start md:justify-center pt-32 sm:pt-24 pb-8 sm:pb-12 md:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease }}
        className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-3.5 md:gap-12 lg:gap-16 md:my-auto"
      >
        {/* Mobile: Top, aligned left | Desktop: Right column */}
        <div className="order-1 md:order-2 shrink-0 self-start md:self-center">
          <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border border-borderToken bg-surface dark:border-white/10 dark:bg-white/5 relative shrink-0 shadow-xl">
            <img 
              src={profileImage} 
              alt={siteConfig.name} 
              className="w-full h-full object-cover object-top grayscale filter contrast-105" 
              loading="eager"
            />
          </div>
        </div>

        {/* Mobile: Below portrait | Desktop: Left column */}
        <div className="order-2 md:order-1 flex-1 max-w-2xl">
          {/* Full Name in Warm Ivory (Dark) / Deep Charcoal (Light) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-textPrimary leading-[1.08]">
            {siteConfig.name}
          </h1>

          {/* Primary Role in Muted Steel Blue Accent */}
          <h2 className="text-lg sm:text-lg md:text-xl font-medium text-primary tracking-tight mt-3 sm:mt-1.5 md:mt-2.5">
            {siteConfig.title}
          </h2>

          {/* Factual Concise Introduction Paragraph */}
          <p className="text-sm sm:text-base text-textSecondary leading-normal sm:leading-relaxed font-normal max-w-xl mt-2 sm:mt-2.5 md:mt-3.5">
            Building scalable full-stack web applications, university ERP platforms, and AI-powered voice and text software.
          </p>

          {/* Simple Document Text Links with Icons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 mt-3 sm:mt-3.5 md:mt-5 text-xs sm:text-sm font-mono text-textSecondary">
            <a 
              href={siteConfig.social.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub Profile" 
              className="inline-flex items-center gap-1.5 hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="shrink-0"
                aria-hidden="true"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub ↗</span>
            </a>
            <span className="text-borderToken">·</span>
            <a 
              href={siteConfig.social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn Profile" 
              className="inline-flex items-center gap-1.5 hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="shrink-0"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn ↗</span>
            </a>
            <span className="text-borderToken">·</span>
            <a 
              href={siteConfig.resumePath} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Resume Document" 
              className="hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
            >
              Resume ↗
            </a>
          </div>
        </div>
      </motion.div>
    </header>
  );
}