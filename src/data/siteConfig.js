/**
 * Centralized Site Configuration
 * ================================
 * All personal information, social links, project URLs,
 * education, and profile data are managed here.
 * Import this wherever needed to avoid duplicate hardcoded values.
 */

export const siteConfig = {
  // ─── Personal Info ──────────────────────────────────────
  name: "Rishabh Bhardwaj",
  firstName: "Rishabh",
  title: "Full Stack Developer | AI Engineer",
  location: "Khurja, Uttar Pradesh, India",

  // ─── Contact ────────────────────────────────────────────
  email: "officialrishabhbhardwaj@gmail.com",

  // ─── Social Links ──────────────────────────────────────
  social: {
    github: "https://github.com/rishabhbhardwaj-dev",
    linkedin: "https://www.linkedin.com/in/rishabhbhardwaj-tech",
  },

  // ─── Resume ─────────────────────────────────────────────
  resumePath: "/resume.pdf",

  // ─── Education ──────────────────────────────────────────
  education: {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institution: "Sir Chhotu Ram Institute of Engineering and Technology (SCRIET)",
    university: "CCSU, Meerut",
    cgpa: "8.6 / 10",
    graduationDate: "May 2026",
    graduationYear: "2026",
  },

  // ─── Current Status ─────────────────────────────────────
  currentStatus: "Open to Software Development Opportunities",

  // ─── Focus Areas ────────────────────────────────────────
  focus: [
    "Full Stack Development",
    "Backend Engineering",
    "AI Applications",
  ],

  // ─── Projects ───────────────────────────────────────────
  projects: {
    campusSync: {
      name: "CampusSync ERP",
      caseStudy: "/projects/campussync",
      github: "https://github.com/rishabhbhardwaj-dev/CampusSyncERP",
      live: "https://campus-sync-erp.vercel.app/",
      liveTooltip: "View Live Demo",
      image: "https://raw.githubusercontent.com/rishabhbhardwaj-dev/CampusSyncERP/main/Assets/Dashboard.png",
    },
    jarvisAI: {
      name: "JARVIS AI Assistant",
      caseStudy: "/projects/jarvis",
      github: "https://github.com/rishabhbhardwaj-dev/Jarvis-voice-assistant",
      // Desktop application — no web deployment
      live: null,
      liveTooltip: "Desktop application - deployment coming soon",
      image: "https://raw.githubusercontent.com/rishabhbhardwaj-dev/Jarvis-voice-assistant/main/Jarvis_Interface%28Dashboard%29.png",
    },
  },

  // ─── SEO ────────────────────────────────────────────────
  seo: {
    title: "Rishabh Bhardwaj - Full Stack Developer & AI Engineer",
    description:
      "Portfolio of Rishabh Bhardwaj — a Full Stack Developer and AI Engineer building scalable applications, ERP systems, and AI-powered software.",
  },
};
