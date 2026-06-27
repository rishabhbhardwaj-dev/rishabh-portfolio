import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Server, Code, Database, Brain, Wrench } from 'lucide-react';

const skillsData = [
  {
    title: "Frontend Development",
    icon: <Layers size={24} className="text-primary" />,
    description: "Crafting responsive, accessible, and highly interactive user interfaces with modern frameworks.",
    chips: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Redux"],
    className: "md:col-span-2 md:row-span-2"
  },
  {
    title: "Backend Architecture",
    icon: <Server size={24} className="text-accent1" />,
    description: "Building scalable and secure server-side applications and RESTful APIs.",
    chips: ["Node.js", "Express", "REST APIs", "JWT", "Microservices"],
    className: "md:col-span-1 md:row-span-2"
  },
  {
    title: "Databases",
    icon: <Database size={24} className="text-accent2" />,
    description: "Designing efficient schemas and managing data flow.",
    chips: ["MySQL", "PostgreSQL", "MongoDB", "Prisma ORM"],
    className: "md:col-span-1 md:row-span-1"
  },
  {
    title: "AI Integration",
    icon: <Brain size={24} className="text-pink-500" />,
    description: "Empowering applications with intelligent models.",
    chips: ["OpenAI API", "LangChain", "Prompt Engineering"],
    className: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Developer Tools",
    icon: <Wrench size={24} className="text-green-500" />,
    description: "Streamlining development and deployment workflows.",
    chips: ["Git", "Docker", "Vercel", "Railway", "Postman"],
    className: "md:col-span-1 md:row-span-1"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative z-10 w-full flex flex-col items-center">
      <div className="container mx-auto max-w-6xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Technical Arsenal</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Tools of the Trade.</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-md overflow-hidden hover:border-white/10 transition-colors duration-500 ${skill.className}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-3">{skill.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  {skill.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {skill.chips.map((chip, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 border border-white/5 rounded-full"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
