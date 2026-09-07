import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Code, FileText, ArrowRight } from 'lucide-react';
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
              <a href={`mailto:${siteConfig.email}`} className="group flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="p-2 md:p-3 rounded-full bg-primary/20 text-primary group-hover:scale-110 transition-transform shrink-0"><Mail size={18} /></div>
                <div className="min-w-0">
                  <h4 className="text-white font-medium text-sm md:text-base">Email</h4>
                  <p className="text-xs md:text-sm text-gray-400 break-all">{siteConfig.email}</p>
                </div>
              </a>

              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="p-2 md:p-3 rounded-full bg-[#0077b5]/20 text-[#0077b5] group-hover:scale-110 transition-transform shrink-0"><MessageCircle size={18} /></div>
                <div>
                  <h4 className="text-white font-medium text-sm md:text-base">LinkedIn</h4>
                  <p className="text-xs md:text-sm text-gray-400">Connect professionally</p>
                </div>
              </a>

              <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="p-2 md:p-3 rounded-full bg-gray-600/20 text-gray-300 group-hover:scale-110 transition-transform shrink-0"><Code size={18} /></div>
                <div>
                  <h4 className="text-white font-medium text-sm md:text-base">GitHub</h4>
                  <p className="text-xs md:text-sm text-gray-400">View source code</p>
                </div>
              </a>
            </div>

            {/* Resume Card: Full width below */}
            <a href={siteConfig.resumePath} download className="group flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <div className="p-2 md:p-3 rounded-full bg-accent1/20 text-accent1 group-hover:scale-110 transition-transform shrink-0"><FileText size={18} /></div>
              <div>
                <h4 className="text-white font-medium text-sm md:text-base">Resume</h4>
                <p className="text-xs md:text-sm text-gray-400">Download PDF</p>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}