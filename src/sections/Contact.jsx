import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Code, FileText, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-32 px-6 relative z-10 w-full flex flex-col items-center">
      <div className="container mx-auto max-w-6xl">

        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center bg-white/5 border border-white/10 p-6 md:p-16 rounded-3xl backdrop-blur-xl relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>

          {/* Left Side: CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative z-10"
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Get in Touch</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 md:mb-6">Let's build something amazing together.</h3>
            <p className="text-base md:text-lg text-gray-400 mb-6 md:mb-8 leading-relaxed max-w-lg">
              Whether you have a specific project in mind, need a full-stack developer for your team, or just want to chat about AI integration—my inbox is always open.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] text-sm md:text-base"
            >
              Send an Email <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* Right Side: Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col gap-3 md:gap-4 relative z-10"
          >
            <a href={`mailto:${siteConfig.email}`} className="group flex items-center justify-between p-4 md:p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-3 md:gap-4 min-w-0">
                <div className="p-2 md:p-3 rounded-full bg-primary/20 text-primary group-hover:scale-110 transition-transform shrink-0"><Mail size={18} /></div>
                <div className="min-w-0">
                  <h4 className="text-white font-medium text-sm md:text-base">Email</h4>
                  <p className="text-xs md:text-sm text-gray-400 break-all">{siteConfig.email}</p>
                </div>
              </div>
              <ArrowRight size={16} className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 hidden md:block" />
            </a>

            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 md:p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-full bg-[#0077b5]/20 text-[#0077b5] group-hover:scale-110 transition-transform"><MessageCircle size={18} /></div>
                <div>
                  <h4 className="text-white font-medium text-sm md:text-base">LinkedIn</h4>
                  <p className="text-xs md:text-sm text-gray-400">Connect professionally</p>
                </div>
              </div>
              <ArrowRight size={16} className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all hidden md:block" />
            </a>

            <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 md:p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-full bg-gray-600/20 text-gray-300 group-hover:scale-110 transition-transform"><Code size={18} /></div>
                <div>
                  <h4 className="text-white font-medium text-sm md:text-base">GitHub</h4>
                  <p className="text-xs md:text-sm text-gray-400">View source code</p>
                </div>
              </div>
              <ArrowRight size={16} className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all hidden md:block" />
            </a>

            <a href={siteConfig.resumePath} download className="group flex items-center justify-between p-4 md:p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-full bg-accent1/20 text-accent1 group-hover:scale-110 transition-transform"><FileText size={18} /></div>
                <div>
                  <h4 className="text-white font-medium text-sm md:text-base">Resume</h4>
                  <p className="text-xs md:text-sm text-gray-400">Download PDF</p>
                </div>
              </div>
              <ArrowRight size={16} className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all hidden md:block" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}