import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Lightbulb, Code2, Database, GraduationCap, MapPin, Briefcase, Monitor, Calendar } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import profileImage from '../assets/profile.jpg';

export default function About() {
  const cards = [
    {
      title: "Full Stack Development",
      description: "Building scalable web applications from database architecture to responsive UIs.",
      icon: <Terminal size={20} className="text-primary" />
    },
    {
      title: "AI Engineering",
      description: "Integrating intelligent LLM features to create software that understands and adapts.",
      icon: <Cpu size={20} className="text-accent1" />
    },
    {
      title: "Problem Solving",
      description: "Translating complex business requirements into elegant technical solutions.",
      icon: <Lightbulb size={20} className="text-accent2" />
    }
  ];

  const stats = [
    { label: "Major Projects", value: "2+", icon: <Code2 size={18} /> },
    { label: "ERP Modules", value: "8+", icon: <Database size={18} /> },
    { label: "Technologies", value: "15+", icon: <Terminal size={18} /> },
    { label: "Graduation", value: siteConfig.education.graduationYear, icon: <GraduationCap size={18} /> }
  ];

  const profileSnapshot = [
    {
      icon: <MapPin size={18} className="text-primary" />,
      label: "Location",
      value: siteConfig.location,
    },
    {
      icon: <GraduationCap size={18} className="text-accent1" />,
      label: "Education",
      value: siteConfig.education.degree,
      subValue: siteConfig.education.field,
      detail: siteConfig.education.institution,
      subDetail: `${siteConfig.education.university} • CGPA: ${siteConfig.education.cgpa}`,
    },
    {
      icon: <Calendar size={18} className="text-accent2" />,
      label: "Graduation",
      value: siteConfig.education.graduationDate,
    },
    {
      icon: <Briefcase size={18} className="text-pink-500" />,
      label: "Current Status",
      value: siteConfig.currentStatus,
    },
    {
      icon: <Monitor size={18} className="text-green-500" />,
      label: "Focus",
      value: siteConfig.focus.join(" • "),
    },
  ];

  return (
    <section id="about" className="py-16 md:py-32 px-6 relative z-10 w-full flex flex-col items-center">
      <div className="container mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-20"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2 md:mb-3">About Me</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 md:mb-6">Engineered for Impact.</h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-gray-400 leading-relaxed font-light space-y-4 md:space-y-8 block"
          >
            <div className="float-none sm:float-left w-full sm:w-48 aspect-[4/5] sm:mr-8 sm:mb-4 mb-6 md:mb-8 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_-15px_rgba(255,255,255,0.05)] relative group">
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10 pointer-events-none"></div>
              <img
                src={profileImage}
                alt="Rishabh Bhardwaj"
                className="w-full h-full object-cover object-top filter contrast-[1.1] grayscale-[0.2]"
              />
            </div>
            <p>
              I didn't just learn to code; I learned to solve problems. My journey into software engineering started with a fascination for how elegant systems could automate complex tasks. Today, I specialize in building end-to-end applications that don't just function—they perform beautifully.
            </p>
            <p>
              My engineering philosophy revolves around <strong className="text-white font-medium">clean architecture, exceptional user experience, and forward-thinking technologies.</strong> Whether I'm designing a massive relational database for an ERP system or crafting a micro-interaction in Framer Motion, I treat every line of code as a critical part of the user's journey.
            </p>
            <div className="clear-both"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 md:gap-4"
          >
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="group relative p-4 md:p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md overflow-hidden hover:bg-white/10 transition-colors duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex items-start gap-3 md:gap-4">
                  <div className="p-2.5 md:p-3 rounded-xl bg-white/5 border border-white/10">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-white mb-1.5 md:mb-2">{card.title}</h4>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center p-5 md:p-8 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm group hover:border-white/10 transition-colors">
              <div className="text-gray-500 mb-2 md:mb-4 group-hover:text-primary transition-colors duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight">{stat.value}</div>
              <div className="text-[10px] md:text-sm font-medium text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-16"
        >
          <h4 className="text-sm font-bold tracking-widest text-primary uppercase mb-5 md:mb-8 text-center">Profile Snapshot</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {profileSnapshot.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`group relative p-4 md:p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md overflow-hidden hover:bg-white/10 hover:border-white/10 transition-all duration-300 ${
                  item.detail ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2.5 md:gap-3 mb-2 md:mb-3">
                    <div className="p-1.5 md:p-2 rounded-lg bg-white/5 border border-white/10">
                      {item.icon}
                    </div>
                    <span className="text-[10px] md:text-xs font-bold tracking-widest text-gray-500 uppercase">{item.label}</span>
                  </div>
                  <p className="text-white font-semibold text-sm md:text-base leading-relaxed">{item.value}</p>
                  {item.subValue && (
                    <p className="text-gray-300 text-xs md:text-sm mt-1">{item.subValue}</p>
                  )}
                  {item.detail && (
                    <p className="text-gray-400 text-xs md:text-sm mt-2 md:mt-3 leading-relaxed">{item.detail}</p>
                  )}
                  {item.subDetail && (
                    <p className="text-gray-500 text-[10px] md:text-xs mt-1">{item.subDetail}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}