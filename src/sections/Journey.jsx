import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code, Rocket, Search } from 'lucide-react';

const timeline = [
  {
    year: "2026",
    title: "Looking for Software Development Opportunities",
    description: "Actively seeking a role as a Software Developer to build scalable products.",
    icon: <Search size={20} className="text-white" />,
    color: "bg-primary"
  },
  {
    year: "2025",
    title: "Built JARVIS AI",
    description: "Developed an intelligent assistant with context-aware responses and NLP.",
    icon: <Rocket size={20} className="text-white" />,
    color: "bg-accent1"
  },
  {
    year: "2024",
    title: "Developed CampusSync ERP",
    description: "Architected a full-stack university management system from scratch.",
    icon: <Code size={20} className="text-white" />,
    color: "bg-accent2"
  },
  {
    year: "2023",
    title: "Learned Full Stack Development",
    description: "Mastered React, Node.js, and complex database structures.",
    icon: <Briefcase size={20} className="text-white" />,
    color: "bg-pink-500"
  },
  {
    year: "2022",
    title: "Started B.Tech in Computer Science",
    description: "Began my formal education and wrote my first lines of code.",
    icon: <GraduationCap size={20} className="text-white" />,
    color: "bg-green-500"
  }
];

export default function Journey() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="journey" className="py-32 px-6 relative z-10 w-full flex flex-col items-center overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Timeline</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">My Journey.</h3>
        </motion.div>

        <div className="relative border-l border-white/10 ml-6 md:ml-0 md:pl-0 md:border-none">
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2"></div>
          
          {timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className="relative flex flex-col md:flex-row items-center justify-between mb-16 last:mb-0">
                
                {/* Timeline Icon */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`absolute left-[-28px] md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full border-4 border-background ${item.color} flex items-center justify-center z-10 shadow-xl`}
                >
                  {item.icon}
                </motion.div>

                {/* Content Left (Empty on Mobile) */}
                <div className={`hidden md:block w-5/12 ${isEven ? 'pr-12 text-right' : 'order-1'} `}>
                  {isEven && (
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <span className="text-sm font-bold text-primary tracking-widest block mb-2">{item.year}</span>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{item.description}</p>
                    </motion.div>
                  )}
                </div>

                {/* Content Right (Main content on Mobile) */}
                <div className={`w-full pl-8 md:pl-0 md:w-5/12 ${isEven ? 'order-1' : 'pl-12 text-left'} `}>
                  {(!isEven || isMobile) && (
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={isEven ? "md:hidden" : ""}
                    >
                      <span className="text-sm font-bold text-primary tracking-widest block mb-2">{item.year}</span>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{item.description}</p>
                    </motion.div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
