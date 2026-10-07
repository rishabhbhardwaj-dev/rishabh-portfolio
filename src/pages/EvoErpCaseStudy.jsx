import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Database, 
  Users, 
  Shield, 
  FileText, 
  BarChart3, 
  Calendar, 
  BookOpen, 
  Clock, 
  Lock, 
  AlertTriangle, 
  Layers, 
  CreditCard, 
  Bell, 
  FileSpreadsheet, 
  Code2,
  ExternalLink,
  Check
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import Background from '../components/Background';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function EvoErpCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickStats = [
    { label: "Architecture", value: "Next.js 15 App Router" },
    { label: "RBAC Roles", value: "4 (Admin, Teacher, Student, Parent)" },
    { label: "Data Integrity", value: "Prisma 6 & PostgreSQL" },
    { label: "Current Status", value: "Verified Core Delivery" },
  ];

  const features = [
    { icon: <Shield size={20} />, name: "Auth & Tenant Isolation", desc: "Credentials auth via NextAuth v5, session JWT context, and server-derived tenant context for tenant-scoped record isolation." },
    { icon: <Users size={20} />, name: "Role-Based Access Control", desc: "Granular server-side RBAC for ADMIN, TEACHER, STUDENT, and PARENT with role-aware dashboard access." },
    { icon: <BookOpen size={20} />, name: "Academic Structure", desc: "School-scoped class and section management, subject catalogs with code normalization and deletion guards." },
    { icon: <Users size={20} />, name: "Student Directory", desc: "Admissions, enrollment, section transfers, parent linkage, status tracking, and strict deletion protection." },
    { icon: <Code2 size={20} />, name: "Teacher Onboarding", desc: "Staff directory, employee codes, department records, and atomic user + teacher creation transactions." },
    { icon: <Calendar size={20} />, name: "Attendance Register", desc: "Daily register tracking (PRESENT, ABSENT, LATE, HALF_DAY, EXCUSED) with a strict 48-hour teacher edit window." },
    { icon: <BarChart3 size={20} />, name: "CBSE Exams & Grading", desc: "Exam setup, server-validated marks entry, automatic 8-tier CBSE grading (A1 to E), and grade access." },
    { icon: <FileText size={20} />, name: "A4 Report Cards", desc: "Single & multi-term report card generation, term aggregation, teacher remarks, co-scholastic grading, and batch printing." },
    { icon: <CreditCard size={20} />, name: "Finance Configuration", desc: "Stage 1 fee categories, structure items, RTE waivers, sibling concessions, and snapshot-style allocation rules." },
    { icon: <Bell size={20} />, name: "Audience Notices", desc: "Draft/publish/archive notice lifecycle targeted by role (ALL, STUDENTS, PARENTS, TEACHERS) with 48h NEW tags." },
    { icon: <FileSpreadsheet size={20} />, name: "Institutional Reports", desc: "Enrollment stats, attendance analytics, shortage-risk reports (<75% CBSE threshold), and CSV exports." },
    { icon: <Database size={20} />, name: "Audit Logging & Safety", desc: "Backend database audit logs via AuditLog table, Zod payload validation, and atomic Prisma transactions." },
  ];

  const techStack = [
    { category: "Frontend", items: ["Next.js 15 (App Router)", "React Server Components", "TypeScript", "Tailwind CSS", "Base UI", "Lucide Icons", "Recharts"] },
    { category: "Backend Logic", items: ["Next.js Server Actions", "Server-Side Rendering", "Zod Validation", "Prisma Transactions", "NextAuth v5 / Auth.js", "bcryptjs"] },
    { category: "Database & Infra", items: ["PostgreSQL", "Prisma 6 ORM", "Relational Migrations", "Docker", "WSL2 / Ubuntu", "npm", "Git & GitHub"] },
    { category: "Security & Testing", items: ["Server-Derived Tenant Isolation", "Role Middleware Guards", "Integration Smoke Testing", "Zod Schema Enforcement"] },
  ];

  const challenges = [
    {
      problem: "Ensuring strict tenant isolation across all database queries without relying on client-supplied parameters",
      solution: "Implemented server-derived tenant context inside NextAuth session handlers and Server Actions. Every database query implicitly injects and filters by the authenticated schoolId derived from the verified session context."
    },
    {
      problem: "Preventing orphan records during multi-table onboarding (e.g. creating User credentials alongside Teacher/Student profiles)",
      solution: "Wrapped multi-step DB creations inside Prisma $transaction blocks. If creation of a profile, credential, or default allocation fails at any step, all database mutations rollback atomically."
    },
    {
      problem: "Preserving historical attendance integrity while allowing reasonable correction windows for staff",
      solution: "Enforced a server-side 48-hour edit window rule. Teachers can update registers for up to 48 hours post-submission; after 48 hours, register edits require administrative unlock."
    },
    {
      problem: "Calculating complex CBSE academic term aggregations and shortage risks without degrading page loads",
      solution: "Leveraged React Server Components for heavy server-side score aggregation, 8-tier grade mapping, and attendance percentage calculations before streaming lightweight pre-rendered HTML to the client."
    },
  ];

  const futureScopeItems = [
    "Finance Stage 2: Invoicing, payment gateway integration (Razorpay/Stripe), digital receipt generation, and fee defaulter tracking",
    "Visual Audit Log Viewer: Dedicated administrative UI for querying and filtering backend AuditLog table entries",
    "Superadmin Workspace: Multi-school institution oversight dashboard for group administrative management",
    "Automated Timetable Generator: Constraint-satisfaction timetable builder for conflict-free period assignments",
  ];

  return (
    <div className="relative min-h-screen text-white selection:bg-primary/30 overflow-x-hidden bg-[#11110F]">
      <Background />
      
      {/* Top Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 py-4 bg-[#11110F]/80 backdrop-blur-xl border-b border-white/5"
      >
        <div className="container mx-auto max-w-5xl px-6 flex items-center justify-between">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          <a
            href={siteConfig.projects.evoErp.github}
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
          <motion.div {...fadeUp} className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8">
              <span className="text-xs font-bold tracking-widest text-[#5B7FA6] uppercase">Case Study</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.15] text-white">
              <span className="text-[#5B7FA6]">EvoERP</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light">
              Multi-tenant web-based School Enterprise Resource Planning (ERP) platform for Indian K-12 school administration and academic workflows.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div {...fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {quickStats.map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm text-center">
                <div className="text-lg md:text-xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* 1. Overview */}
          <motion.section {...fadeUp} className="mb-20">
            <h2 className="text-xs font-mono font-bold tracking-widest text-[#5B7FA6] uppercase mb-4">01 // OVERVIEW</h2>
            <h3 className="text-2xl font-bold text-white mb-6">Strategic System Scope</h3>
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 text-gray-300 leading-relaxed space-y-4">
              <p>
                EvoERP was architected to address the operational complexities faced by Indian K-12 educational institutions. Traditional management tools often suffer from fragmented database structures, weak tenant separation, manual grade formatting, and lack of enforcement around academic business rules.
              </p>
              <p>
                The primary objective of EvoERP is to deliver a consolidated, multi-tenant platform centered around core academic administrative workflows: tenant isolation, role-based access control (RBAC) across four distinct personas, section-level daily registers, automated CBSE 8-tier grade processing, term report card generation, stage-1 fee allocation configuration, and actionable institutional analytics.
              </p>
            </div>
          </motion.section>

          {/* 2. Project Status */}
          <motion.section {...fadeUp} className="mb-20">
            <h2 className="text-xs font-mono font-bold tracking-widest text-[#5B7FA6] uppercase mb-4">02 // PROJECT STATUS</h2>
            <h3 className="text-2xl font-bold text-white mb-6">Current Implementation & Verification</h3>
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#5B7FA6]/10 text-[#5B7FA6] shrink-0 mt-1">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Delivery Milestone Reached</h4>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Core delivery scope is implemented and locally verified. The completed feature branch has been merged into main. A hosted production cloud deployment is not currently established.
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Explicitly Deferred / Future Modules</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                    <span>Finance Stage 2 (Invoices & Receipts)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                    <span>Razorpay / Gateway Integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                    <span>Dedicated Visual Audit Log Viewer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                    <span>System Settings & Users Admin UI</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 3. Architecture */}
          <motion.section {...fadeUp} className="mb-20">
            <h2 className="text-xs font-mono font-bold tracking-widest text-[#5B7FA6] uppercase mb-4">03 // ARCHITECTURE</h2>
            <h3 className="text-2xl font-bold text-white mb-6">Full-Stack Next.js App Router Paradigm</h3>
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6 text-gray-300 leading-relaxed">
              <p>
                EvoERP is engineered as a unified full-stack application leveraging Next.js 15 App Router. All backend workflows, database queries, authentication guards, and business logic are executed natively inside Next.js using React Server Components (RSC) and Server Actions (not as a separate Express or FastAPI backend).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[#5B7FA6] font-mono text-xs font-bold mb-2">PRESENTATION LAYER</div>
                  <div className="text-white font-semibold mb-1">React Server Components</div>
                  <p className="text-xs text-gray-400">Direct server-side data fetching and pre-rendered HTML streaming with zero client bundle overhead for static views.</p>
                </div>
                <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[#5B7FA6] font-mono text-xs font-bold mb-2">DATA MUTATION LAYER</div>
                  <div className="text-white font-semibold mb-1">Next.js Server Actions</div>
                  <p className="text-xs text-gray-400">Type-safe server-side mutations protected by Zod schemas and session tenant guards.</p>
                </div>
                <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[#5B7FA6] font-mono text-xs font-bold mb-2">PERSISTENCE LAYER</div>
                  <div className="text-white font-semibold mb-1">Prisma 6 & PostgreSQL</div>
                  <p className="text-xs text-gray-400">Relational schema with tenant foreign keys (<code className="text-[#5B7FA6]">schoolId</code>), relational constraints, and transaction blocks.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 4. Authentication & Multi-Tenancy */}
          <motion.section {...fadeUp} className="mb-20">
            <h2 className="text-xs font-mono font-bold tracking-widest text-[#5B7FA6] uppercase mb-4">04 // AUTHENTICATION & MULTI-TENANCY</h2>
            <h3 className="text-2xl font-bold text-white mb-6">Server-Derived Tenant Isolation</h3>
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4 text-gray-300 leading-relaxed">
              <p>
                Multi-tenancy in EvoERP is strictly enforced at the data access level. Authentication is handled via NextAuth v5 (Auth.js) using credentials provider and secure bcryptjs hashing. Upon authentication, the server resolves the user’s associated school context and embeds <code className="text-[#5B7FA6]">schoolId</code> into the session JWT.
              </p>
              <p>
                Every Server Action and database read operation extracts the tenant context directly from the verified server session, preventing cross-tenant data leaks and eliminating client-side tenant parameter tampering.
              </p>
            </div>
          </motion.section>

          {/* 5. Role-Based Access Control */}
          <motion.section {...fadeUp} className="mb-20">
            <h2 className="text-xs font-mono font-bold tracking-widest text-[#5B7FA6] uppercase mb-4">05 // ROLE-BASED ACCESS CONTROL</h2>
            <h3 className="text-2xl font-bold text-white mb-6">4 Personas & Server-Side Enforcement</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { role: "ADMIN", desc: "Full institutional oversight — manages classes, sections, staff directory, student admissions, fee structures, exam creation, and institutional reporting." },
                { role: "TEACHER", desc: "Academic management — section registers, attendance submissions (48h edit rule), exam mark entry, term remarks, and student grade tracking." },
                { role: "STUDENT", desc: "Self-service academic view — attendance register history, monthly attendance totals, CBSE shortage risk notifications, exam report cards, and notices." },
                { role: "PARENT", desc: "Guardian portal — multi-child switching, child academic history, section attendance registers, fee structure allocations, and targeted notices." },
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                  <div className="inline-block px-3 py-1 text-xs font-mono font-bold text-[#5B7FA6] bg-[#5B7FA6]/10 border border-[#5B7FA6]/20 rounded-md mb-3">
                    ROLE: {item.role}
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 6. Feature Modules Grid (6 to 11) */}
          <motion.section {...fadeUp} className="mb-20">
            <h2 className="text-xs font-mono font-bold tracking-widest text-[#5B7FA6] uppercase mb-4">06–11 // IMPLEMENTED FEATURE MODULES</h2>
            <h3 className="text-2xl font-bold text-white mb-6">Core Workflows & Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col items-start">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#5B7FA6] mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.name}</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Finance Stage 1 Note */}
          <motion.section {...fadeUp} className="mb-20">
            <div className="p-8 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-gray-300 leading-relaxed">
              <div className="flex items-center gap-2 text-amber-400 font-semibold mb-3">
                <AlertTriangle size={18} />
                <span>Finance Module Boundary Clarification</span>
              </div>
              <p className="text-sm text-gray-300">
                EvoERP implements <strong className="text-white">Finance Stage 1</strong> (fee categories, fee structures, structure items, RTE waivers, sibling concessions, snapshot fee allocation values, duplicate-allocation protection, and section-transfer handling). <strong className="text-white">Finance Stage 2</strong> (invoices, payment gateway integration, digital receipts, fee defaulters tracking, and Razorpay) is explicitly non-implemented and deferred.
              </p>
            </div>
          </motion.section>

          {/* 12. Validation, Transactions & Audit Logging */}
          <motion.section {...fadeUp} className="mb-20">
            <h2 className="text-xs font-mono font-bold tracking-widest text-[#5B7FA6] uppercase mb-4">12 // DATA SAFETY & INTEGRITY</h2>
            <h3 className="text-2xl font-bold text-white mb-6">Validation, Transactions & Audit Logging</h3>
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6 text-gray-300 leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <Shield size={16} className="text-[#5B7FA6]" /> Zod Validation
                  </h4>
                  <p className="text-xs text-gray-400">Strict runtime schema validation on all Server Action input payloads before database execution.</p>
                </div>
                <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <Database size={16} className="text-[#5B7FA6]" /> Prisma Transactions
                  </h4>
                  <p className="text-xs text-gray-400">Atomic <code className="text-[#5B7FA6]">$transaction</code> blocks for teacher onboarding, fee allocations, and marks entry.</p>
                </div>
                <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <FileText size={16} className="text-[#5B7FA6]" /> Database Audit Logs
                  </h4>
                  <p className="text-xs text-gray-400">Centralized backend audit utility writing key mutation events to the database <code className="text-[#5B7FA6]">AuditLog</code> table.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Tech Stack Breakdown */}
          <motion.section {...fadeUp} className="mb-20">
            <h2 className="text-xs font-mono font-bold tracking-widest text-[#5B7FA6] uppercase mb-4">TECH STACK</h2>
            <h3 className="text-2xl font-bold text-white mb-6">Technology Ecosystem</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techStack.map((group, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                  <h4 className="text-[#5B7FA6] font-mono text-xs font-bold uppercase tracking-wider mb-4">{group.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 text-xs font-medium text-gray-300 bg-white/5 border border-white/10 rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 13. Testing & Engineering Work */}
          <motion.section {...fadeUp} className="mb-20">
            <h2 className="text-xs font-mono font-bold tracking-widest text-[#5B7FA6] uppercase mb-4">13 // ENGINEERING WORK & CONTRIBUTION</h2>
            <h3 className="text-2xl font-bold text-white mb-6">Development Scope & Process</h3>
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4 text-gray-300 leading-relaxed">
              <p>
                Directed, implemented, reviewed, tested, and refined the full-stack development of EvoERP across the frontend, server-side workflows, database layer, authentication, authorization, validation, testing, and delivery process.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm">
                {[
                  "Enforcing delivery scope boundaries",
                  "Database schema & Prisma migrations",
                  "Server-side RBAC & tenant isolation",
                  "Student & Teacher management logic",
                  "Attendance & 48h lock rule",
                  "Exams, grading & A4 report cards",
                  "Finance Stage 1 allocation engine",
                  "WSL2 / Docker / Postgres setup",
                  "Role-by-role smoke verification",
                  "Main branch promotion & docs",
                ].map((task, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-300">
                    <Check size={14} className="text-[#5B7FA6] shrink-0" />
                    <span>{task}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Engineering Challenges */}
          <motion.section {...fadeUp} className="mb-20">
            <h2 className="text-xs font-mono font-bold tracking-widest text-[#5B7FA6] uppercase mb-4">CHALLENGES & SOLUTIONS</h2>
            <h3 className="text-2xl font-bold text-white mb-6">Engineering Solutions</h3>
            <div className="space-y-4">
              {challenges.map((c, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                  <h4 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-[#5B7FA6] font-mono text-xs">PROBLEM:</span> {c.problem}
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed pl-4 border-l-2 border-[#5B7FA6]/40">
                    <strong className="text-white">Solution:</strong> {c.solution}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 14. Current Limitations & 15. Future Scope */}
          <motion.section {...fadeUp} className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <h3 className="text-xs font-mono font-bold tracking-widest text-[#5B7FA6] uppercase mb-3">14 // CURRENT LIMITATIONS</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">•</span>
                  <span>Hosted production deployment not yet live; verified in local Docker/PostgreSQL environments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">•</span>
                  <span>Targeted specifically for Indian K-12 CBSE academic grading frameworks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">•</span>
                  <span>Report card batch rendering depends on browser PDF print engines.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <h3 className="text-xs font-mono font-bold tracking-widest text-[#5B7FA6] uppercase mb-3">15 // FUTURE SCOPE</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {futureScopeItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#5B7FA6]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* 16. Source Code Call to Action */}
          <motion.section {...fadeUp} className="text-center p-12 rounded-3xl bg-white/[0.02] border border-white/10">
            <h2 className="text-xs font-mono font-bold tracking-widest text-[#5B7FA6] uppercase mb-3">16 // SOURCE CODE</h2>
            <h3 className="text-3xl font-bold text-white mb-4">Explore the EvoERP Repository</h3>
            <p className="text-gray-300 max-w-xl mx-auto text-sm leading-relaxed mb-8">
              Inspect the source code, Prisma schema definitions, Server Actions, and validation layer on GitHub.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href={siteConfig.projects.evoErp.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors"
              >
                <Code2 size={18} /> View GitHub Repository
              </a>
            </div>
          </motion.section>

        </div>
      </main>
    </div>
  );
}
