import React from 'react';
import { motion } from 'framer-motion';
import {
  SiPython,
  SiJavascript,
  SiC,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiJsonwebtokens,
  SiMysql,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiGithub,
  SiVercel,
  SiThreedotjs,
  SiDocker,
  SiPostman,
} from 'react-icons/si';
import { Mic } from 'lucide-react';

const techStack = [
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "C", Icon: SiC, color: "#A8B9CC" },
  { name: "SQL", fallback: "SQL", color: "#336791" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "HTML5", Icon: SiHtml5, color: "#E44D26" },
  { name: "CSS3", fallback: "CSS3", color: "#1572B6" },
  { name: "Vite", Icon: SiVite, color: "#646CFF" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", Icon: SiExpress, color: "#FFFFFF" },
  { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
  { name: "Flask", Icon: SiFlask, color: "#FFFFFF" },
  { name: "JWT", Icon: SiJsonwebtokens, color: "#FB4141" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "MongoDB Atlas", Icon: SiMongodb, color: "#47A248" },
  { name: "Prisma", Icon: SiPrisma, color: "#FFFFFF" },
  { name: "Groq", fallback: "Groq", color: "#F55036" },
  { name: "Google Gemini", fallback: "Gemini", color: "#4285F4" },
  { name: "OpenAI", fallback: "OpenAI", color: "#FFFFFF" },
  { name: "Speech Recognition", Icon: Mic, color: "#FFFFFF" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
  { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
  { name: "Three.js", Icon: SiThreedotjs, color: "#049EF4" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Render", fallback: "Render", color: "#FFFFFF" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
];

const row1 = techStack.slice(0, 15);
const row2 = techStack.slice(15);

function MarqueeRow({ items, direction, speed }) {
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden w-full"
      style={{
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
      }}
    >
      <div
        className="flex items-center gap-12 md:gap-16 w-max marquee-track"
        style={{
          animationDirection: direction === 'left' ? 'normal' : 'reverse',
          animationDuration: `${speed}s`,
        }}
      >
        {doubled.map((tech, idx) => (
          <div
            key={idx}
            className="relative flex items-center justify-center flex-shrink-0 group"
            title={tech.name}
            aria-label={tech.name}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:scale-[1.15] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]">
              {tech.Icon ? (
                <tech.Icon size="100%" style={{ color: tech.color }} />
              ) : (
                <span
                  className="text-xs md:text-sm font-bold tracking-wider"
                  style={{ color: tech.color }}
                >
                  {tech.fallback}
                </span>
              )}
            </div>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 translate-y-1 group-hover:translate-y-0 text-[11px] font-medium text-white bg-black/80 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-50">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-32 px-6 relative z-10 w-full flex flex-col items-center overflow-hidden">
      <div className="container mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16 text-center"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2 md:mb-3">Technical Arsenal</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 md:mb-6">Tools of the Trade.</h3>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">Technologies I use to build scalable, intelligent applications.</p>
        </motion.div>

        <div className="flex flex-col gap-8 md:gap-10">
          <MarqueeRow items={row1} direction="left" speed={45} />
          <MarqueeRow items={row2} direction="right" speed={38} />
        </div>

      </div>
    </section>
  );
}