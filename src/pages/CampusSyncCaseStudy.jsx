import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Database, Users, Shield, FileText, BarChart3, Calendar, BookOpen, Clock } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import Background from '../components/Background';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function CampusSyncCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const modules = [
    { icon: <Users size={20} />, name: "Student Management", desc: "Complete student lifecycle from admission to graduation tracking" },
    { icon: <BookOpen size={20} />, name: "Course Management", desc: "Curriculum planning, course assignment, and academic structure" },
    { icon: <Calendar size={20} />, name: "Attendance System", desc: "Real-time attendance tracking with automated reporting" },
    { icon: <BarChart3 size={20} />, name: "Marks & Grading", desc: "Automated grade calculations with customizable grading schemas" },
    { icon: <Clock size={20} />, name: "Timetable Engine", desc: "Intelligent timetable generation and conflict resolution" },
    { icon: <Shield size={20} />, name: "Role-Based Access", desc: "Admin, Faculty, and Student dashboards with granular permissions" },
    { icon: <FileText size={20} />, name: "Document Management", desc: "Secure upload, storage, and retrieval of academic documents" },
    { icon: <Database size={20} />, name: "Faculty Management", desc: "Faculty profiles, department mapping, and workload allocation" },
  ];

  const techStack = [
    { category: "Frontend", items: ["React 18", "Tailwind CSS", "Framer Motion", "React Router", "Axios"] },
    { category: "Backend", items: ["Node.js", "Express.js", "REST API", "JWT Authentication", "Multer"] },
    { category: "Database", items: ["MySQL", "Prisma ORM", "Relational Schema Design", "Seeding Scripts"] },
    { category: "DevOps", items: ["Vercel", "Railway", "Git", "Environment Config", "CORS Management"] },
  ];

  const challenges = [
    {
      problem: "Complex relational data across 8 interconnected modules",
      solution: "Designed a normalized MySQL schema with Prisma ORM, carefully mapping relationships between students, courses, faculty, marks, attendance, and timetables with proper foreign keys and cascade rules."
    },
    {
      problem: "Role-based access for Admin, Faculty, and Student with different views",
      solution: "Implemented JWT-based authentication with role middleware. Each API route validates the user's role before returning data, and the frontend dynamically renders different dashboard layouts based on the decoded token."
    },
    {
      problem: "Real-time data consistency across attendance, marks, and course enrollment",
      solution: "Built transactional database operations for critical flows. When a student is enrolled in a course, attendance records, marks entries, and timetable associations are created atomically to prevent orphaned data."
    },
    {
      problem: "Production deployment with separate frontend and backend hosting",
      solution: "Deployed the React frontend on Vercel and the Node.js backend on Railway with MySQL. Configured CORS policies, environment variables, and API URL switching between development and production environments."
    },
  ];

  const timeline = [
    { phase: "Planning & Architecture", duration: "2 weeks", detail: "Database schema design, API endpoint planning, UI wireframes" },
    { phase: "Backend Development", duration: "4 weeks", detail: "REST APIs, authentication, database seeding, file upload system" },
    { phase: "Frontend Development", duration: "4 weeks", detail: "Dashboard UIs, data tables, forms, role-based routing" },
    { phase: "Integration & Testing", duration: "2 weeks", detail: "API integration, bug fixes, edge cases, responsive design" },
    { phase: "Deployment & Polish", duration: "1 week", detail: "Production deployment, CORS config, environment setup, UI polish" },
  ];

  return (
    <div className="relative min-h-screen text-white selection:bg-primary/30 overflow-x-hidden">
      <Background />
      
      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 py-4 bg-background/70 backdrop-blur-xl border-b border-white/5"
      >
        <div className="container mx-auto max-w-5xl px-6 flex items-center justify-between">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          <a
            href={siteConfig.projects.campusSync.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </motion.div>

      <main className="relative z-10 pt-28 pb-32 px-6">
        <div className="container mx-auto max-w-5xl">

          {/* Hero Header */}
          <motion.div {...fadeUp} className="mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">Case Study</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent1 to-accent2">CampusSync</span> ERP
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light">
              A full-stack enterprise resource planning system that unifies academic management, faculty coordination, and student services for modern universities.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div {...fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
            {[
              { label: "Modules", value: "8+" },
              { label: "Tech Stack", value: "12+" },
              { label: "API Endpoints", value: "40+" },
              { label: "Database Tables", value: "15+" },
            ].map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm text-center">
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* The Problem */}
          <motion.div {...fadeUp} className="mb-24">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">The Problem</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Universities deserve better software.</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-lg text-gray-400 leading-relaxed font-light space-y-4">
                <p>
                  Most university management systems are outdated, fragmented, and painful to use. Admins juggle multiple disconnected tools for attendance, grades, scheduling, and document management — leading to data inconsistencies and wasted time.
                </p>
                <p>
                  Faculty members lack a unified view of their courses, students, and schedules. Students have no real-time visibility into their academic progress.
                </p>
              </div>
              <div className="text-lg text-gray-400 leading-relaxed font-light space-y-4">
                <p>
                  The core challenge was clear: <strong className="text-white font-medium">build a single, unified platform</strong> that replaces the chaos of spreadsheets, legacy portals, and disconnected databases with a modern, role-aware application.
                </p>
                <p>
                  The system needed to handle complex relational data across multiple modules while remaining intuitive enough for non-technical administrative staff to use confidently.
                </p>
              </div>
            </div>
          </motion.div>

          {/* The Solution */}
          <motion.div {...fadeUp} className="mb-24">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">The Solution</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">One platform. Every stakeholder.</h3>
            <p className="text-lg text-gray-400 leading-relaxed font-light max-w-3xl mb-12">
              CampusSync ERP is built as a modular, role-based system. Admins manage the entire institution, faculty members handle their courses and grading, and students track their own academic journey — all through the same application with dynamically rendered dashboards.
            </p>
          </motion.div>

          {/* 8 Modules Grid */}
          <motion.div {...fadeUp} className="mb-24">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Core Modules</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-10">8 integrated modules, zero data silos.</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {modules.map((mod, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-primary group-hover:scale-110 transition-transform">
                    {mod.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{mod.name}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{mod.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Architecture & Tech */}
          <motion.div {...fadeUp} className="mb-24">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Architecture</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-10">Built with production-grade tooling.</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {techStack.map((stack, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md"
                >
                  <h4 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">{stack.category}</h4>
                  <div className="flex flex-col gap-2">
                    {stack.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle2 size={14} className="text-gray-600 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Challenges */}
          <motion.div {...fadeUp} className="mb-24">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Engineering Challenges</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-10">Problems worth solving.</h3>
            <div className="flex flex-col gap-6">
              {challenges.map((challenge, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md"
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <span className="text-xs font-bold tracking-widest text-red-400/80 uppercase block mb-2">Challenge</span>
                      <p className="text-white font-medium leading-relaxed">{challenge.problem}</p>
                    </div>
                    <div className="md:w-2/3">
                      <span className="text-xs font-bold tracking-widest text-green-400/80 uppercase block mb-2">Solution</span>
                      <p className="text-gray-400 leading-relaxed">{challenge.solution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Development Timeline */}
          <motion.div {...fadeUp} className="mb-24">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Development Timeline</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-10">From concept to deployment.</h3>
            <div className="relative">
              {timeline.map((phase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                    {idx < timeline.length - 1 && <div className="w-[1px] h-full bg-white/10 mt-2"></div>}
                  </div>
                  <div className="pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-white font-semibold">{phase.phase}</h4>
                      <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">{phase.duration}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{phase.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Takeaways */}
          <motion.div {...fadeUp} className="mb-24">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Key Takeaways</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-10">What I learned building this.</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "System Design Matters", desc: "A well-planned schema and API structure saved weeks of refactoring. Investing time upfront in architecture pays dividends." },
                { title: "Role-Based Thinking", desc: "Every feature must be evaluated from the perspective of each user role. What Admin sees is fundamentally different from what a Student needs." },
                { title: "Production Is Different", desc: "Local development hides many issues — CORS, environment variables, database migrations, and deployment pipelines are entirely separate skills." },
              ].map((item, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md">
                  <h4 className="text-white font-semibold mb-3">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Footer */}
          <motion.div {...fadeUp} className="text-center">
            <div className="p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-white mb-4">Interested in the code?</h3>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                The full source code is available on GitHub. Feel free to explore the architecture, database schema, and implementation details.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={siteConfig.projects.campusSync.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform"
                >
                  View Repository →
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors"
                >
                  ← Back to Portfolio
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}
