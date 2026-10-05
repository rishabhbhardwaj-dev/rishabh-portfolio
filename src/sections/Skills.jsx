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
  SiDocker,
  SiPostman,
} from 'react-icons/si';

const techStack = [
  // Languages & Core
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "C", Icon: SiC, color: "#A8B9CC" },
  { name: "SQL", fallback: "SQL", color: "#38BDF8" },
  { name: "HTML5", Icon: SiHtml5, color: "#E44D26" },
  { name: "CSS3", fallback: "CSS3", color: "#38BDF8" },

  // Frameworks & Frontend
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Vite", Icon: SiVite, color: "#646CFF" },

  // Backend & APIs
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", Icon: SiExpress, color: "#E2E8F0" },
  { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
  { name: "Flask", Icon: SiFlask, color: "#E2E8F0" },
  { name: "JWT", Icon: SiJsonwebtokens, color: "#FB4141" },

  // Databases & ORM
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Prisma", Icon: SiPrisma, color: "#E2E8F0" },

  // AI & Developer Tools
  { name: "OpenAI API", fallback: "OpenAI", color: "#E2E8F0" },
  { name: "Google Gemini", fallback: "Gemini", color: "#38BDF8" },
  { name: "Groq", fallback: "Groq", color: "#F55036" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "#E2E8F0" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Vercel", Icon: SiVercel, color: "#E2E8F0" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
];

const row1 = techStack.slice(0, 12);
const row2 = techStack.slice(12);

function MarqueeRow({ items, direction, speed }) {
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden w-full py-2"
      style={{
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
      }}
    >
      <div
        className="flex items-center gap-10 md:gap-14 w-max marquee-track"
        style={{
          animationDirection: direction === 'left' ? 'normal' : 'reverse',
          animationDuration: `${speed}s`,
        }}
      >
        {doubled.map((tech, idx) => (
          <div
            key={idx}
            className="relative flex items-center gap-2.5 flex-shrink-0 group px-3 py-1.5 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-200"
            title={tech.name}
          >
            <div className="w-5 h-5 flex items-center justify-center shrink-0">
              {tech.Icon ? (
                <tech.Icon size="100%" style={{ color: tech.color }} />
              ) : (
                <span
                  className="text-[10px] font-bold tracking-wider"
                  style={{ color: tech.color }}
                >
                  {tech.fallback}
                </span>
              )}
            </div>
            <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">
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
    <section id="skills" className="py-12 sm:py-16 w-full border-t border-[#2A2925] overflow-hidden scroll-mt-20">
      <div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-xs font-mono font-bold tracking-widest text-[#5B7FA6] uppercase">04 // SKILLS</h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          <MarqueeRow items={row1} direction="left" speed={45} />
          <MarqueeRow items={row2} direction="right" speed={40} />
        </div>

      </div>
    </section>
  );
}