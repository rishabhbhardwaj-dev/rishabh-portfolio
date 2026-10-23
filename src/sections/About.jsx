import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/siteConfig';

export default function About() {
  const cards = [
    {
      index: "// 01",
      title: "Full Stack Development",
      description: "Building scalable web applications from relational database schemas to interactive user interfaces."
    },
    {
      index: "// 02",
      title: "AI Integration",
      description: "Incorporating language models, speech recognition, and intelligent automation into web and desktop software."
    },
    {
      index: "// 03",
      title: "Software Engineering",
      description: "Designing structured codebases with role-based security, modular architectures, and RESTful APIs."
    }
  ];

  const stats = [
    { label: "Major Projects", value: "2+" },
    { label: "ERP Modules", value: "8+" },
    { label: "Core Technologies", value: "15+" },
    { label: "Graduation", value: siteConfig.education.graduationYear }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 w-full border-t border-borderToken scroll-mt-20">
      <div>

        {/* Section Header Label: 01 // ABOUT */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-xs font-mono font-bold tracking-widest text-primary uppercase">01 // ABOUT</h2>
        </motion.div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Storytelling */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-base text-textSecondary leading-relaxed space-y-6"
          >
            <p>
              I am a Software Developer and AI Engineer who completed a Bachelor of Technology (B.Tech) in Computer Science & Engineering from Sir Chhotu Ram Institute of Engineering and Technology (SCRIET), CCSU Meerut in May 2026 with an 8.6 / 10 CGPA. My work focuses on building full-stack applications and AI-driven software that tackle complex operational challenges.
            </p>
            <p>
              My background includes developing <span className="text-textPrimary font-medium">CampusSync ERP</span>—a multi-module university management platform handling student lifecycles, attendance, and role-based permissions—and <span className="text-textPrimary font-medium">JARVIS AI</span>, a voice and text assistant built with LLM integrations and custom task automation workflows.
            </p>
          </motion.div>

          {/* Right Column: Key Focus Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            {cards.map((card, idx) => (
              <div 
                key={idx}
                className="group p-5 rounded-xl bg-surface border border-borderToken hover:border-primary/40 dark:bg-white/[0.03] dark:border-white/10 dark:hover:border-white/20 transition-colors duration-200 shadow-sm dark:shadow-none"
              >
                <div className="flex items-center justify-between gap-4 mb-1.5">
                  <h3 className="text-base font-semibold text-textPrimary tracking-tight group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <span className="text-[11px] font-mono font-semibold text-primary tracking-wider select-none px-2 py-0.5 rounded bg-surfaceDark dark:bg-white/5 border border-borderToken dark:border-white/10 shrink-0">
                    {card.index}
                  </span>
                </div>
                <p className="text-textMuted text-xs md:text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Factual Statistics Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="p-5 sm:p-6 rounded-xl bg-surface border border-borderToken hover:border-primary/40 dark:bg-white/[0.03] dark:border-white/10 dark:hover:border-white/20 transition-colors duration-200 shadow-sm dark:shadow-none flex flex-col justify-between"
            >
              <div className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase select-none mb-3">
                {String(idx + 1).padStart(2, '0')} //
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-textPrimary tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-mono font-medium text-textMuted tracking-wider uppercase mt-1.5">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Profile Snapshot */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 sm:mt-14"
        >
          <h3 className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-4">
            PROFILE SUMMARY
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* 1. Education: Spans 2 cols on md/lg */}
            <div className="md:col-span-2 lg:col-span-2 p-5 sm:p-6 rounded-xl bg-surface border border-borderToken hover:border-primary/40 dark:bg-white/[0.03] dark:border-white/10 dark:hover:border-white/20 transition-colors duration-200 shadow-sm dark:shadow-none flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-primary uppercase select-none">
                    EDUCATION
                  </span>
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-surfaceDark dark:bg-white/5 border border-borderToken dark:border-white/10 text-primary">
                    CGPA: {siteConfig.education.cgpa}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-textPrimary tracking-tight">
                  {siteConfig.education.degree}
                </h4>
                <p className="text-xs sm:text-sm font-medium text-textSecondary mt-0.5">
                  {siteConfig.education.field}
                </p>
                <div className="pt-3 mt-3 border-t border-borderToken/60 dark:border-white/5 text-xs text-textMuted space-y-0.5">
                  <p className="leading-relaxed">{siteConfig.education.institution}</p>
                  <p className="text-textMuted/80">{siteConfig.education.university}</p>
                </div>
              </div>
            </div>

            {/* 2. Graduation: Spans 1 col */}
            <div className="p-5 sm:p-6 rounded-xl bg-surface border border-borderToken hover:border-primary/40 dark:bg-white/[0.03] dark:border-white/10 dark:hover:border-white/20 transition-colors duration-200 shadow-sm dark:shadow-none flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono font-bold tracking-widest text-primary uppercase select-none block mb-3">
                  GRADUATION
                </span>
                <p className="text-base sm:text-lg font-bold text-textPrimary tracking-tight">
                  {siteConfig.education.graduationDate}
                </p>
                <p className="text-xs font-mono text-textMuted mt-1">
                  Class of {siteConfig.education.graduationYear}
                </p>
              </div>
            </div>

            {/* 3. Current Status: Spans 2 cols on lg, 1 col on md */}
            <div className="md:col-span-1 lg:col-span-2 p-5 sm:p-6 rounded-xl bg-surface border border-borderToken hover:border-primary/40 dark:bg-white/[0.03] dark:border-white/10 dark:hover:border-white/20 transition-colors duration-200 shadow-sm dark:shadow-none flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono font-bold tracking-widest text-primary uppercase select-none block mb-3">
                  CURRENT STATUS
                </span>
                <p className="text-sm sm:text-base font-semibold text-textPrimary leading-snug">
                  {siteConfig.currentStatus}
                </p>
              </div>
            </div>

            {/* 4. Location: Spans 1 col */}
            <div className="p-5 sm:p-6 rounded-xl bg-surface border border-borderToken hover:border-primary/40 dark:bg-white/[0.03] dark:border-white/10 dark:hover:border-white/20 transition-colors duration-200 shadow-sm dark:shadow-none flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono font-bold tracking-widest text-primary uppercase select-none block mb-3">
                  LOCATION
                </span>
                <p className="text-sm sm:text-base font-semibold text-textPrimary">
                  {siteConfig.location}
                </p>
              </div>
            </div>

            {/* 5. Focus Areas: Spans full width (3 cols on lg, 2 cols on md) */}
            <div className="md:col-span-2 lg:col-span-3 p-5 sm:p-6 rounded-xl bg-surface border border-borderToken hover:border-primary/40 dark:bg-white/[0.03] dark:border-white/10 dark:hover:border-white/20 transition-colors duration-200 shadow-sm dark:shadow-none">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <span className="text-[11px] font-mono font-bold tracking-widest text-primary uppercase select-none shrink-0">
                  PRIMARY FOCUS
                </span>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.focus.map((item, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs font-mono font-medium text-textSecondary bg-surfaceDark dark:bg-white/5 border border-borderToken dark:border-white/10 px-3 py-1.5 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
