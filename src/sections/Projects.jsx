import React from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

const projectsData = [
  {
    title: siteConfig.projects.campusSync.name,
    overview: "A comprehensive enterprise resource planning system designed specifically for modern universities. It streamlines academic management, faculty coordination, and student services into one unified platform.",
    features: ["Real-time Attendance Tracking", "Automated Grade Calculations", "Role-based Dashboards", "Document Management"],
    tech: ["React", "Node.js", "MySQL", "Prisma", "Tailwind CSS"],
    image: siteConfig.projects.campusSync.image,
    reverse: false,
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
    reverse: true,
    links: {
      caseStudy: siteConfig.projects.jarvisAI.caseStudy,
      github: siteConfig.projects.jarvisAI.github,
      live: siteConfig.projects.jarvisAI.live,
      liveTooltip: siteConfig.projects.jarvisAI.liveTooltip,
    }
  }
];

export default function Projects() {
  const ease = [0.16, 1, 0.3, 1];

  return (
    <section id="projects" className="py-32 px-6 relative z-10 w-full flex flex-col items-center">
      <div className="container mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease }}
          className="mb-32 text-center"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Showcase</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">Featured Work.</h3>
        </motion.div>

        <div className="flex flex-col gap-32 lg:gap-40">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${project.reverse ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Container */}
              <motion.div
                initial={{ opacity: 0, x: project.reverse ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease }}
                className="w-full lg:w-[55%] relative group rounded-2xl overflow-hidden border border-white/10 bg-white/5 transition-all duration-500 hover:border-white/30 hover:shadow-[0_0_50px_-15px_rgba(255,255,255,0.15)] hover:-translate-y-2"
              >
                {/* Subtle border glow effect inner */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10 pointer-events-none"></div>
                <div className="w-full aspect-video bg-[#0a0a0a]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>
              </motion.div>

              {/* Content Container */}
              <motion.div
                initial={{ opacity: 0, x: project.reverse ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.1, ease }}
                className="w-full lg:w-[45%] flex flex-col"
              >
                <h4 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">{project.title}</h4>
                <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                  {project.overview}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-300 text-sm font-medium">
                      <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Upgraded Tech Chips */}
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

                {/* Buttons: Case Study → GitHub → Live Demo */}
                <div className="flex flex-wrap gap-4 mt-auto">
                  <Link
                    to={project.links.caseStudy}
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.5)] hover:bg-gray-100"
                  >
                    <FileText size={18} /> Case Study
                    <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 -ml-2 group-hover:ml-0 hidden sm:inline-block">→</span>
                  </Link>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium transition-all duration-500 hover:-translate-y-1 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.1)]"
                  >
                    <Code size={18} /> GitHub
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
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
