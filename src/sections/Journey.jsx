import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Code, Rocket, Search, ChevronLeft, ChevronRight } from 'lucide-react';

const journeyData = [
  {
    year: "2026",
    title: "Looking for Software Development Opportunities",
    description: "Actively seeking a role as a Software Developer to build scalable products.",
    icon: <Search size={28} className="text-white" />,
    color: "bg-primary",
    glow: "shadow-[0_0_25px_rgba(99,102,241,0.5)]",
    ring: "ring-primary/30"
  },
  {
    year: "2025",
    title: "Built JARVIS AI",
    description: "Developed an intelligent assistant with context-aware responses and NLP.",
    icon: <Rocket size={28} className="text-white" />,
    color: "bg-accent1",
    glow: "shadow-[0_0_25px_rgba(139,92,246,0.5)]",
    ring: "ring-accent1/30"
  },
  {
    year: "2024",
    title: "Developed CampusSync ERP",
    description: "Architected a full-stack university management system from scratch.",
    icon: <Code size={28} className="text-white" />,
    color: "bg-accent2",
    glow: "shadow-[0_0_25px_rgba(45,212,191,0.5)]",
    ring: "ring-accent2/30"
  },
  {
    year: "2023",
    title: "Learned Full Stack Development",
    description: "Mastered React, Node.js, and complex database structures.",
    icon: <Briefcase size={28} className="text-white" />,
    color: "bg-pink-500",
    glow: "shadow-[0_0_25px_rgba(236,72,153,0.5)]",
    ring: "ring-pink-500/30"
  },
  {
    year: "2022",
    title: "Started B.Tech in Computer Science",
    description: "Began my formal education and wrote my first lines of code.",
    icon: <GraduationCap size={28} className="text-white" />,
    color: "bg-green-500",
    glow: "shadow-[0_0_25px_rgba(34,197,94,0.5)]",
    ring: "ring-green-500/30"
  }
];

const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 400 : -400,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir) => ({
    x: dir > 0 ? -400 : 400,
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
    if (offset.x < -80 || velocity.x < -300) {
      goNext();
    } else if (offset.x > 80 || velocity.x > 300) {
      goPrev();
    }
  };

  return (
    <section id="journey" className="py-20 md:py-32 px-6 relative z-10 w-full flex flex-col items-center overflow-hidden">
      <div className="container mx-auto max-w-3xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Timeline</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white">My Journey.</h3>
        </motion.div>

        {/* Counter + Arrows */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <button
            onClick={goPrev}
            disabled={current === 0}
            aria-label="Previous milestone"
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <ChevronLeft size={18} />
          </button>

          <span className="text-xl md:text-2xl font-light text-white tabular-nums">
            <span className="font-bold">{String(current + 1).padStart(2, '0')}</span>
            <span className="text-gray-500 mx-2">/</span>
            <span className="text-gray-500">{String(total).padStart(2, '0')}</span>
          </span>

          <button
            onClick={goNext}
            disabled={current === total - 1}
            aria-label="Next milestone"
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Milestone Content */}
        <div className="relative w-full min-h-[320px] md:min-h-[360px] flex items-center justify-center mb-14">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={handleDragEnd}
              className="w-full cursor-grab active:cursor-grabbing"
              style={{ touchAction: 'pan-y' }}
            >
              <div className="flex flex-col items-center text-center px-4">

                {/* Year */}
                <span className="text-5xl md:text-7xl font-bold text-white/10 mb-6 tracking-tight select-none">
                  {item.year}
                </span>

                {/* Icon */}
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${item.color} ${item.glow} flex items-center justify-center mb-6 ring-4 ${item.ring}`}>
                  {item.icon}
                </div>

                {/* Title */}
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4 max-w-md">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg font-light">
                  {item.description}
                </p>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/10 mb-8" />

        {/* Progress Timeline */}
        <div className="relative flex items-center justify-center mb-6">
          <div className="absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-white/10 -translate-y-1/2" />

          <div className="relative flex items-center justify-between w-[80%] max-w-sm">
            {journeyData.map((node, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                aria-label={`Go to ${node.year}`}
                className="relative z-10 flex flex-col items-center gap-2 focus:outline-none group"
              >
                <div
                  className={
                    "w-4 h-4 md:w-5 md:h-5 rounded-full border-2 transition-all duration-500 " +
                    (idx === current
                      ? `${node.color} border-transparent ${node.glow} scale-125`
                      : idx < current
                      ? "bg-white/30 border-white/20"
                      : "bg-white/5 border-white/10")
                  }
                />
                <span
                  className={
                    "text-[10px] md:text-xs font-bold tracking-wider transition-colors duration-500 " +
                    (idx === current ? "text-white" : "text-gray-600 group-hover:text-gray-400")
                  }
                >
                  {node.year}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Hint */}
        <p className="text-center text-gray-600 text-xs mt-6 select-none">
          Swipe, drag, or use the arrows to explore my journey
        </p>

      </div>
    </section>
  );
}