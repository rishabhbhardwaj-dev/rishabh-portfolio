import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Code, Rocket, ChevronLeft, ChevronRight } from 'lucide-react';

const journeyData = [
  {
    year: "July 2026 — Present",
    navYear: "2026",
    title: "Software Development Intern — Full Stack & AI/ML",
    description: "EvolveSpark Services and Solutions (OPC) Pvt. Ltd.",
    icon: <Briefcase size={20} className="text-primary" />,
  },
  {
    year: "2025",
    title: "Built JARVIS AI Assistant",
    description: "Developed an intelligent assistant with context-aware responses, NLP, and task automation workflows.",
    icon: <Rocket size={20} className="text-primary" />,
  },
  {
    year: "2024",
    title: "Developed CampusSync ERP",
    description: "Architected a full-stack university management system with role-based access and 8 operational modules.",
    icon: <Code size={20} className="text-primary" />,
  },
  {
    year: "2023",
    title: "Full Stack Engineering Foundations",
    description: "Mastered React, Node.js, Express, relational databases, and RESTful web service architecture.",
    icon: <Briefcase size={20} className="text-primary" />,
  },
  {
    year: "2022",
    title: "Started B.Tech in Computer Science",
    description: "Began formal education at SCRIET, CCSU Meerut and began building software systems.",
    icon: <GraduationCap size={20} className="text-primary" />,
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

export default function Journey() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = journeyData.length;
  const item = journeyData[current];

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

  const goTo = useCallback((index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
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
    const { offset, velocity } = info;
    if (offset.x < -60 || velocity.x < -250) {
      goNext();
    } else if (offset.x > 60 || velocity.x > 250) {
      goPrev();
    }
  };

  return (
    <section id="journey" className="py-12 sm:py-16 w-full border-t border-[#2A2925] overflow-hidden scroll-mt-20">
      <div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-xs font-mono font-bold tracking-widest text-[#5B7FA6] uppercase">02 // EXPERIENCE</h2>
        </motion.div>

        {/* Quieter Counter & Controls */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <button
            onClick={goPrev}
            disabled={current === 0}
            aria-label="Previous milestone"
            className="p-2 rounded-full border border-white/10 bg-white/[0.03] text-gray-400 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-20 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ChevronLeft size={16} />
          </button>

          <span className="text-xs font-mono text-gray-400">
            {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>

          <button
            onClick={goNext}
            disabled={current === total - 1}
            aria-label="Next milestone"
            className="p-2 rounded-full border border-white/10 bg-white/[0.03] text-gray-400 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-20 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Milestone Display Box */}
        <div className="relative w-full min-h-[260px] flex items-center justify-center mb-10 border border-white/10 bg-white/[0.02] rounded-2xl p-6 md:p-10">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              className="w-full cursor-grab active:cursor-grabbing"
              style={{ touchAction: 'pan-y' }}
            >
              <div className="flex flex-col items-center text-center px-2">

                {/* Milestone Icon */}
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  {item.icon}
                </div>

                {/* Milestone Year */}
                <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold mb-2">
                  {item.year}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 max-w-md">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed max-w-lg font-normal">
                  {item.description}
                </p>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Node Navigation */}
        <div className="relative flex items-center justify-center">
          <div className="absolute top-1/2 left-[5%] right-[5%] h-[1px] bg-white/10 -translate-y-1/2" />

          <div className="relative flex items-center justify-between w-full max-w-md px-4">
            {journeyData.map((node, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                aria-label={`Go to milestone year ${node.navYear || node.year}`}
                className="relative z-10 flex flex-col items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-primary rounded-full p-1"
              >
                <div
                  className={
                    "w-3 h-3 rounded-full border transition-all duration-300 " +
                    (idx === current
                      ? "bg-primary border-primary scale-110"
                      : idx < current
                      ? "bg-white/40 border-white/20"
                      : "bg-background border-white/20")
                  }
                />
                <span
                  className={
                    "text-[10px] font-mono transition-colors duration-200 " +
                    (idx === current ? "text-white font-bold" : "text-gray-500")
                  }
                >
                  {node.navYear || node.year}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}