import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const journeyData = [
  {
    year: "July 2026 — Present",
    navYear: "2026",
    phase: "PHASE 05",
    title: "Software Development Intern — Full Stack & AI/ML",
    description: "EvolveSpark Services and Solutions (OPC) Pvt. Ltd.",
  },
  {
    year: "2025",
    phase: "PHASE 04",
    title: "Built JARVIS AI Assistant",
    description: "Developed an intelligent assistant with context-aware responses, NLP, and task automation workflows.",
  },
  {
    year: "2024",
    phase: "PHASE 03",
    title: "Developed CampusSync ERP",
    description: "Architected a full-stack university management system with role-based access and 8 operational modules.",
  },
  {
    year: "2023",
    phase: "PHASE 02",
    title: "Full Stack Engineering Foundations",
    description: "Mastered React, Node.js, Express, relational databases, and RESTful web service architecture.",
  },
  {
    year: "2022",
    phase: "PHASE 01",
    title: "Started B.Tech in Computer Science",
    description: "Began formal education at SCRIET, CCSU Meerut and began building software systems.",
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
    <section id="journey" className="py-12 sm:py-16 w-full border-t border-borderToken overflow-hidden scroll-mt-20">
      <div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-xs font-mono font-bold tracking-widest text-primary uppercase">02 // EXPERIENCE</h2>
        </motion.div>

        {/* Quieter Counter & Controls */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <button
            onClick={goPrev}
            disabled={current === 0}
            aria-label="Previous milestone"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-borderToken bg-surface text-textSecondary hover:text-textPrimary hover:bg-surfaceDark dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/10 transition-colors disabled:opacity-20 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-primary shadow-sm dark:shadow-none text-sm font-medium select-none"
          >
            ←
          </button>

          <span className="text-xs font-mono text-textMuted">
            {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>

          <button
            onClick={goNext}
            disabled={current === total - 1}
            aria-label="Next milestone"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-borderToken bg-surface text-textSecondary hover:text-textPrimary hover:bg-surfaceDark dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/10 transition-colors disabled:opacity-20 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-primary shadow-sm dark:shadow-none text-sm font-medium select-none"
          >
            →
          </button>
        </div>

        {/* Milestone Display Box */}
        <div className="relative w-full min-h-[260px] flex items-center justify-center mb-10 border border-borderToken bg-surface dark:border-white/10 dark:bg-white/[0.02] rounded-2xl p-6 md:p-10 shadow-sm dark:shadow-none">
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

                {/* Milestone Phase & Year */}
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="text-[11px] font-mono text-primary font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-surfaceDark border border-borderToken dark:bg-white/5 dark:border-white/10">
                    {item.phase}
                  </span>
                  <span className="text-xs font-mono text-textMuted tracking-wider font-medium">
                    {item.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-textPrimary mb-3 max-w-md">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-textSecondary text-sm leading-relaxed max-w-lg font-normal">
                  {item.description}
                </p>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Node Navigation */}
        <div className="relative flex items-center justify-center">
          <div className="absolute top-1/2 left-[5%] right-[5%] h-[1px] bg-borderToken dark:bg-white/10 -translate-y-1/2" />

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
                      ? "bg-primary/40 border-primary/30"
                      : "bg-surface border-borderToken dark:bg-background dark:border-white/20")
                  }
                />
                <span
                  className={
                    "text-[10px] font-mono transition-colors duration-200 " +
                    (idx === current ? "text-textPrimary font-bold" : "text-textMuted")
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