import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FileText, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

const projectsData = [
  {
    title: siteConfig.projects.campusSync.name,
    overview: "A comprehensive enterprise resource planning system designed for modern university operations. It unifies academic records, faculty allocation, student management, and role-based administrative dashboards.",
    features: ["Real-time Attendance Tracking", "Automated Grade Calculations", "Role-based Dashboards", "Document Management"],
    tech: ["React", "Node.js", "MySQL", "Prisma", "Tailwind CSS"],
    image: siteConfig.projects.campusSync.image,
    links: {
      caseStudy: siteConfig.projects.campusSync.caseStudy,
      github: siteConfig.projects.campusSync.github,
      live: siteConfig.projects.campusSync.live,
      liveTooltip: siteConfig.projects.campusSync.liveTooltip,
    }
  },
  {
    title: siteConfig.projects.jarvisAI.name,
    overview: "An intelligent assistant featuring natural language understanding, voice synthesis, context memory, and workflow execution. Designed to automate desktop and API-driven tasks.",
    features: ["Contextual Memory", "Workflow Automation", "API Integrations", "Voice Recognition"],
    tech: ["Python", "FastAPI", "OpenAI API", "Groq", "SpeechRecognition"],
    image: siteConfig.projects.jarvisAI.image,
    links: {
      caseStudy: siteConfig.projects.jarvisAI.caseStudy,
      github: siteConfig.projects.jarvisAI.github,
      live: siteConfig.projects.jarvisAI.live,
      liveTooltip: siteConfig.projects.jarvisAI.liveTooltip,
    }
  }
];

const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir) => ({
    x: dir > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = projectsData.length;
  const project = projectsData[current];

  const goNext = useCallback(() => {
    if (current + 1 < total) {
      setDirection(1);
      setCurrent((prev) => prev + 1);
    }
  }, [current, total]);

  const goPrev = useCallback(() => {
    if (current > 0) {
      setDirection(-1);
      setCurrent((prev) => prev - 1);
    }
  }, [current]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  return (
    <section id="projects" className="py-12 sm:py-16 w-full border-t border-[#2A2925] overflow-hidden scroll-mt-20">
      <div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-between"
        >
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-[#5B7FA6] uppercase">03 // PROJECTS</h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 font-mono mr-2">
              {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <button
              onClick={goPrev}
              disabled={current === 0}
              aria-label="Previous project"
              className="p-2 rounded-full border border-white/10 bg-white/[0.03] text-gray-300 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-20 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={goNext}
              disabled={current === total - 1}
              aria-label="Next project"
              className="p-2 rounded-full border border-white/10 bg-white/[0.03] text-gray-300 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-20 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>

        {/* Project Card Display */}
        <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              variants={slideVariants}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <div className={`flex flex-col ${current % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center w-full`}>

                {/* Project Image */}
                <div className="w-full lg:w-[50%]">
                  <div className="relative rounded-xl overflow-hidden border border-white/10 bg-slate-950 aspect-[16/10]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div className="w-full lg:w-[50%] flex flex-col items-start">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">{project.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-normal">{project.overview}</p>

                  {/* Feature Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 w-full">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-300 text-xs font-medium">
                        <Check size={14} className="text-primary shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Metadata */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.tech.map((chip, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-medium text-gray-300 bg-white/5 border border-white/10 rounded-md"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      to={project.links.caseStudy}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-medium text-xs transition-colors hover:bg-gray-200 focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <FileText size={14} /> Case Study
                    </Link>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white font-medium text-xs transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      GitHub Repo
                    </a>
                    {project.links.live ? (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white font-medium text-xs transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    ) : (
                      <span
                        title={project.links.liveTooltip}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.02] border border-white/5 text-gray-500 font-medium text-xs cursor-not-allowed select-none"
                      >
                        <ExternalLink size={14} /> Live Demo
                      </span>
                    )}
                  </div>

                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}