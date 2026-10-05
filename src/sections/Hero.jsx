import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/siteConfig';

export default function Hero() {
  const ease = [0.16, 1, 0.3, 1];

  return (
    <header className="pt-24 sm:pt-32 pb-12 sm:pb-16 w-full">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className="space-y-4"
      >
        {/* Full Name in Warm Ivory */}
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F1EFE8]">
          {siteConfig.name}
        </h1>

        {/* Primary Role in Muted Steel Blue Accent */}
        <h2 className="text-base sm:text-lg font-medium text-[#5B7FA6] tracking-tight">
          {siteConfig.title}
        </h2>

        {/* Factual Concise Introduction Paragraph */}
        <p className="text-sm sm:text-base text-[#A7A59D] leading-relaxed font-normal max-w-2xl pt-1">
          Building scalable full-stack web applications, university ERP platforms, and AI-powered voice and text software.
        </p>

        {/* Simple Document Text Links with Icons */}
        <div className="flex flex-wrap items-center gap-5 sm:gap-6 pt-2 text-xs sm:text-sm font-mono text-[#A7A59D]">
          <a 
            href={siteConfig.social.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub Profile" 
            className="inline-flex items-center gap-1.5 hover:text-[#5B7FA6] transition-colors focus-visible:ring-2 focus-visible:ring-[#5B7FA6] rounded-sm"
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
          <span className="text-[#2A2925]">·</span>
          <a 
            href={siteConfig.social.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn Profile" 
            className="inline-flex items-center gap-1.5 hover:text-[#5B7FA6] transition-colors focus-visible:ring-2 focus-visible:ring-[#5B7FA6] rounded-sm"
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
          <span className="text-[#2A2925]">·</span>
          <a 
            href={siteConfig.resumePath} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Resume Document" 
            className="hover:text-[#5B7FA6] transition-colors focus-visible:ring-2 focus-visible:ring-[#5B7FA6] rounded-sm"
          >
            Resume ↗
          </a>
        </div>
      </motion.div>
    </header>
  );
}