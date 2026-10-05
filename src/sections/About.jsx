import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Lightbulb, Code2, Database, GraduationCap, MapPin, Briefcase, Monitor, Calendar } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import profileImage from '../assets/profile.jpg';

export default function About() {
  const cards = [
    {
      title: "Full Stack Development",
      description: "Building scalable web applications from relational database schemas to interactive user interfaces.",
      icon: <Terminal size={18} className="text-primary" />
    },
    {
      title: "AI Integration",
      description: "Incorporating language models, speech recognition, and intelligent automation into web and desktop software.",
      icon: <Cpu size={18} className="text-primary" />
    },
    {
      title: "Software Engineering",
      description: "Designing structured codebases with role-based security, modular architectures, and RESTful APIs.",
      icon: <Lightbulb size={18} className="text-primary" />
    }
  ];

  const stats = [
    { label: "Major Projects", value: "2+", icon: <Code2 size={16} /> },
    { label: "ERP Modules", value: "8+", icon: <Database size={16} /> },
    { label: "Core Technologies", value: "15+", icon: <Terminal size={16} /> },
    { label: "Graduation", value: siteConfig.education.graduationYear, icon: <GraduationCap size={16} /> }
  ];

  const profileSnapshot = [
    {
      icon: <MapPin size={16} className="text-primary" />,
      label: "Location",
      value: siteConfig.location,
    },
    {
      icon: <GraduationCap size={16} className="text-primary" />,
      label: "Education",
      value: siteConfig.education.degree,
      subValue: siteConfig.education.field,
      detail: siteConfig.education.institution,
      subDetail: `${siteConfig.education.university} • CGPA: ${siteConfig.education.cgpa}`,
    },
    {
      icon: <Calendar size={16} className="text-primary" />,
      label: "Graduation",
      value: siteConfig.education.graduationDate,
    },
    {
      icon: <Briefcase size={16} className="text-primary" />,
      label: "Current Status",
      value: siteConfig.currentStatus,
    },
    {
      icon: <Monitor size={16} className="text-primary" />,
      label: "Focus",
      value: siteConfig.focus.join(" • "),
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 w-full border-t border-[#2A2925] scroll-mt-20">
      <div>
        
        {/* Header Label */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-xs font-mono font-bold tracking-widest text-[#5B7FA6] uppercase">01 // ABOUT</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Storytelling & Profile Image */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-base text-gray-300 leading-relaxed space-y-6"
          >
            <div className="float-none sm:float-left w-full sm:w-44 aspect-[4/5] sm:mr-6 sm:mb-4 mb-6 rounded-xl overflow-hidden border border-white/10 bg-white/5 relative">
              <img 
                src={profileImage} 
                alt="Rishabh Bhardwaj" 
                className="w-full h-full object-cover object-top grayscale filter contrast-105" 
              />
            </div>
            <p>
              I am a Software Developer and AI Engineer who completed a Bachelor of Technology (B.Tech) in Computer Science & Engineering from Sir Chhotu Ram Institute of Engineering and Technology (SCRIET), CCSU Meerut in May 2026 with an 8.6 / 10 CGPA. My work focuses on building full-stack applications and AI-driven software that tackle complex operational challenges.
            </p>
            <p>
              My background includes developing <span className="text-white font-medium">CampusSync ERP</span>—a multi-module university management platform handling student lifecycles, attendance, and role-based permissions—and <span className="text-white font-medium">JARVIS AI</span>, a voice and text assistant built with LLM integrations and custom task automation workflows.
            </p>
            <div className="clear-both" />
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
                className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">{card.title}</h3>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{card.description}</p>
                  </div>
                </div>
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
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-start p-5 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="text-gray-400 mb-2">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-0.5 tracking-tight">{stat.value}</div>
              <div className="text-xs font-medium text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Profile Snapshot */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase mb-4">Profile Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {profileSnapshot.map((item, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl bg-white/[0.03] border border-white/10 ${
                  item.detail ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded bg-white/5 border border-white/10">
                    {item.icon}
                  </div>
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">{item.label}</span>
                </div>
                <p className="text-white font-medium text-sm">{item.value}</p>
                {item.subValue && (
                  <p className="text-gray-300 text-xs mt-0.5">{item.subValue}</p>
                )}
                {item.detail && (
                  <p className="text-gray-400 text-xs mt-2 leading-relaxed">{item.detail}</p>
                )}
                {item.subDetail && (
                  <p className="text-gray-500 text-xs mt-0.5">{item.subDetail}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
