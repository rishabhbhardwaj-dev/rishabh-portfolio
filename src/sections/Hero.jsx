import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { siteConfig } from '../data/siteConfig';

export default function Hero() {
  const containerRef = useRef(null);

  // Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Mouse Follow Glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Premium easing curve for fade-ins
  const ease = [0.16, 1, 0.3, 1];

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center pt-24 px-6 overflow-hidden"
      onMouseMove={handleMouseMove}
    >

      {/* Mouse Follow Glow */}
      <motion.div
        className="pointer-events-none absolute top-0 left-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px] mix-blend-screen z-20"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* 1. Grid Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* 2. Aurora/Glow Layer (Animated) */}
      <motion.div
        style={{ y: glowY }}
        className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center overflow-hidden"
      >
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.05, 0.95, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen will-change-transform"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 40, -20, 0],
            scale: [1, 0.95, 1.05, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] right-[25%] w-[500px] h-[500px] bg-accent1/5 rounded-full blur-[100px] mix-blend-screen will-change-transform"
        ></motion.div>
      </motion.div>

      {/* 4. Typography / Foreground Layer */}
      <div className="container mx-auto max-w-5xl flex flex-col items-center text-center z-10 relative">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-12 shadow-[0_0_20px_rgba(255,255,255,0.05)] -translate-x-2 sm:-translate-x-4 md:-translate-x-6"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
          </span>
          <span className="text-sm font-medium text-gray-300">Available for new opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight mb-8 leading-[1.1]"
        >
          Hi, I'm <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent1 to-accent2 drop-shadow-sm">
            {siteConfig.name}
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="text-2xl md:text-3xl font-medium text-gray-300 mb-8 tracking-wide"
        >
          Full Stack Developer <span className="text-gray-600 mx-3">|</span> AI Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-14 leading-relaxed font-light"
        >
          I build scalable full-stack applications, ERP systems, and AI-powered software focused on solving real-world problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-base transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.5)]"
          >
            View Projects
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a
            href={siteConfig.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white font-semibold transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.1)]"
          >
            Download Resume
            <span className="group-hover:translate-y-1 transition-transform duration-300">↓</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease }}
          className="mt-16 flex gap-6"
        >
          <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex items-center justify-center text-gray-400 hover:text-white transition-all duration-500 px-6 py-3 bg-white/5 border border-white/5 backdrop-blur-md rounded-full hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.1)] font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center justify-center text-gray-400 hover:text-white transition-all duration-500 px-6 py-3 bg-white/5 border border-white/5 backdrop-blur-md rounded-full hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.1)] font-medium">
             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white/50 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}