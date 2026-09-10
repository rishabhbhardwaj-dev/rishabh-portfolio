import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/siteConfig';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-32 px-6 relative z-10 w-full flex flex-col items-center">
      <div className="container mx-auto max-w-6xl">

        <div className="bg-white/5 border border-white/10 p-6 md:p-16 rounded-3xl backdrop-blur-xl relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10">
            {/* Heading + Description */}
            <div className="text-center lg:text-left mb-8 md:mb-12">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Get in Touch</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 md:mb-6">Let's build something amazing together.</h3>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Whether you have a specific project in mind, need a full-stack developer for your team, or just want to chat about AI integration—my inbox is always open.
              </p>
            </div>

            {/* Contact Cards: Email + LinkedIn + GitHub */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-3 md:mb-4">
              {/* Email */}
              <a href={`mailto:${siteConfig.email}`} className="group flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="p-2 md:p-3 rounded-full bg-primary/20 text-primary group-hover:scale-110 transition-transform shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div className="min-w-0">
                  <h4 className="text-white font-medium text-sm md:text-base">Email</h4>
                  <p className="text-xs md:text-sm text-gray-400 break-all">{siteConfig.email}</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="p-2 md:p-3 rounded-full bg-[#0077b5]/20 group-hover:scale-110 transition-transform shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                    <rect width="48" height="48" rx="5" fill="#0A66C2"/>
                    <path fill="#FFFFFF" d="M12.5 18.5H18V36h-5.5V18.5ZM15.25 10A3.25 3.25 0 1 1 15.25 16.5A3.25 3.25 0 0 1 15.25 10ZM21.5 18.5H26.8V21H26.9C27.65 19.55 29.5 17.75 32.55 17.75C38.15 17.75 39.2 21.45 39.2 26.25V36H33.7V27.35C33.7 25.3 33.65 22.65 30.85 22.65C28 22.65 27.55 24.85 27.55 27.15V36H21.5V18.5Z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm md:text-base">LinkedIn</h4>
                  <p className="text-xs md:text-sm text-gray-400">Connect professionally</p>
                </div>
              </a>

              {/* GitHub */}
              <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="p-2 md:p-3 rounded-full bg-gray-600/20 text-gray-300 group-hover:scale-110 transition-transform shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm md:text-base">GitHub</h4>
                  <p className="text-xs md:text-sm text-gray-400">View source code</p>
                </div>
              </a>
            </div>

            
          </div>
        </div>

      </div>
    </section>
  );
}