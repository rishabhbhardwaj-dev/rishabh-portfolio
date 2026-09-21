import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FileText, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

const projectsData = [
  {
    title: siteConfig.projects.campusSync.name,
    overview: "A comprehensive enterprise resource planning system designed specifically for modern universities. It streamlines academic management, faculty coordination, and student services into one unified platform.",
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
    overview: "An intelligent digital assistant capable of natural language processing, context-aware responses, and workflow automation. Built to handle complex multi-step reasoning tasks.",
    features: ["Contextual Memory", "Workflow Automation", "API Integrations", "Voice Recognition"],
    tech: ["Next.js", "Python", "OpenAI API", "PostgreSQL"],
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
    x: dir > 0 ? 600 : -600,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir) => ({
    x: dir > 0 ? -600 : 600,
    opacity: 0,
  }),
};

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
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

  const handleDragEnd = (_, info) => {
    setIsDragging(false);
    const { offset, velocity } = info;
    if (offset.x < -100 || velocity.x < -300) {
      goNext();
    } else if (offset.x > 100 || velocity.x > 300) {
      goPrev();
    }
  };

  return (
    <section id="projects" className="py-20 md:py-32 px-6 relative z-10 w-full flex flex-col items-center overflow-hidden">
      <div className="container mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Showcase</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">Featured Work.</h3>
        </motion.div>

        <div className="flex items-center justify-between mb-8">
          <span className="text-2xl md:text-3xl font-light text-white">
            <span className="font-bold text-white">{String(current + 1).padStart(2, '0')}</span>
            <span className="text-gray-500 mx-2">/</span>
            <span className="text-gray-500">{String(total).padStart(2, '0')}</span>
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={goPrev}
              disabled={current === 0}
              aria-label="Previous project"
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={goNext}
              disabled={current === total - 1}
              aria-label="Next project"
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="w-full h-1 rounded-full bg-white/5 mb-8 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-primary to-accent1"
            animate={{ width: ((current + 1) / total) * 100 + '%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="relative w-full overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              variants={slideVariants}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              className="w-full cursor-grab active:cursor-grabbing"
              style={{ touchAction: 'pan-y' }}
            >
              <div className={'flex flex-col ' + (current % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse') + ' gap-8 lg:gap-16 items-center w-full'}>

                <div className="w-full lg:w-[55%]">
                  <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-white/5 transition-all duration-500 hover:border-white/30 hover:shadow-[0_0_50px_-15px_rgba(255,255,255,0.15)]">
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10 pointer-events-none"></div>
                    <div className="aspect-video bg-[#0a0a0a]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                        draggable={false}
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-[45%] flex flex-col">
                  <h4 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">{project.title}</h4>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">{project.overview}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-300 text-sm font-medium">
                        <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-12">
                    {project.tech.map((chip, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-1.5 text-xs font-semibold text-primary bg-primary/10 border border-primary/20 rounded-full shadow-sm transition-colors duration-300 hover:bg-primary/20"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 mt-auto" onClick={(e) => { if (isDragging) e.preventDefault(); }}>
                    <Link
                      to={project.links.caseStudy}
                      className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.5)] hover:bg-gray-100"
                    >
                      <FileText size={18} /> Case Study
                      <span className="opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all duration-300 -ml-2 group-hover/btn:ml-0 hidden sm:inline-block">→</span>
                    </Link>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="flex items-center justify-center px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium transition-all duration-500 hover:-translate-y-1 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.1)]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                    {project.links.live ? (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium transition-all duration-500 hover:-translate-y-1 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.1)]"
                      >
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    ) : (
                      <span
                        title={project.links.liveTooltip}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/5 text-gray-500 font-medium cursor-not-allowed select-none"
                      >
                        <ExternalLink size={18} /> Live Demo
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-2 mt-10">
          {projectsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setDirection(idx > current ? 1 : -1); setCurrent(idx); }}
              aria-label={'Go to project ' + (idx + 1)}
              className={'rounded-full transition-all duration-500 ' + (idx === current ? 'w-8 h-2 bg-gradient-to-r from-primary to-accent1' : 'w-2 h-2 bg-white/15 hover:bg-white/30')}
            />
          ))}
        </div>

      </div>
    </section>
  );
}