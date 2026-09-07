import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Server, Database, Brain, Wrench } from 'lucide-react';

const techLogos = {
  // === FRONTEND ===
  "React": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="2.2" fill="#61DAFB"/>
      <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
      <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
    </svg>
  ),
  "JavaScript": (
    <svg width="16" height="16" viewBox="0 0 32 32">
      <rect width="32" height="32" rx="4" fill="#F7DF1E"/>
      <path d="M9 24.5l2-1.2c.4.7.8 1.2 1.7 1.2.9 0 1.5-.3 1.5-1.6V15h2.4v8c0 2.6-1.5 3.8-3.8 3.8-2 0-3.2-1-3.8-2.3zm9 0l2-1.2c.5.8 1.2 1.4 2.4 1.4 1 0 1.7-.5 1.7-1.2 0-.8-.6-1.1-1.8-1.6l-.6-.3c-1.8-.7-2.9-1.7-2.9-3.6 0-1.8 1.4-3.1 3.5-3.1 1.5 0 2.6.5 3.4 1.8l-1.9 1.2c-.4-.7-.8-1-1.5-1-.7 0-1.1.4-1.1 1 0 .7.4 1 1.4 1.4l.6.3c2.1.9 3.2 1.8 3.2 3.8 0 2.2-1.7 3.4-4 3.4-2.2 0-3.6-1-4.5-2.4z" fill="#323330"/>
    </svg>
  ),
  "Tailwind CSS": (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="#06B6D4">
      <path d="M16 6c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.14.29 1.95 1.11 2.85 2.02 1.48 1.5 3.19 3.23 6.9 3.23 4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.29-1.95-1.11-2.85-2.02C20.92 7.48 19.21 6 16 6zm-7.5 6c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.14.29 1.95 1.11 2.85 2.02 1.48 1.5 3.19 3.23 6.9 3.23 4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.29-1.95-1.11-2.85-2.02C13.42 13.48 11.71 12 8.5 12z"/>
    </svg>
  ),
  "TypeScript": (
    <svg width="16" height="16" viewBox="0 0 32 32">
      <rect width="32" height="32" rx="4" fill="#3178C6"/>
      <path d="M7 18.5v-3h4.5v12h3v-12H19v-3H7z" fill="white"/>
      <path d="M23 15.5l-1.5 1c.5.5 1.2.9 2 1.4.8.4 1.4.9 1.4 1.9 0 1.3-.8 2.2-2.6 2.2-.9 0-1.7-.2-2.3-.6l1-2.3c.5.3.9.4 1.3.4.5 0 .8-.2.8-.6 0-.4-.2-.6-1.1-1-.8-.4-1.8-.9-1.8-2.2 0-1.2.8-2 2.3-2 .8 0 1.5.2 2 .5l-1 2.2z" fill="white"/>
    </svg>
  ),
  "Redux": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#764ABC">
      <path d="M16.63 17.26c-.56.99-.19 2.26.83 2.78 1.01.52 2.27.06 2.81-.96.54-1.02.18-2.24-.81-2.77-1.04-.56-2.31-.11-2.85.95h.02zm-11.23 0c-.57.99-.19 2.26.82 2.78 1.02.52 2.28.06 2.81-.96.54-1.02.18-2.24-.81-2.77-1.04-.56-2.31-.11-2.85.95h.03zm12.9-5.45c-.66-1.2-1.5-2.25-2.52-3.1-2.38-1.96-5.2-2.69-7.85-2.24-3.2.54-5.65 2.88-6.5 5.87-1.15 4.04.67 8.37 4.36 10.13.26.12.55.2.84.23.28.03.56.02.83-.03a.97.97 0 0 0-.21-.46c-.62-.78-1.01-1.67-.84-2.67.16-.95.79-1.82 1.73-2.38a.18.18 0 0 0 .08-.15c0-.09-.07-.16-.16-.16a.74.74 0 0 0-.5.21c-.78.76-.97 1.73-.64 2.58-1.62-.93-2.72-2.55-2.96-4.42-.33-2.6 1.12-5.12 3.54-6.32 2.33-1.16 5.1-.72 7 1.15.9.87 1.47 1.95 1.73 3.08.1.39.14.78.12 1.16a.18.18 0 0 0 .18.18c.1 0 .18-.08.18-.18.02-.48-.04-.97-.16-1.44z"/>
    </svg>
  ),

  // === BACKEND ===
  "Node.js": (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="#339933">
      <path d="M15.7 1.3c-.4-.2-.8-.2-1.2 0L3.3 7.5c-.4.2-.6.6-.6 1v11c0 .4.2.8.6 1l11.2 6.2c.4.2.8.2 1.2 0l11.2-6.2c.4-.2.6-.6.6-1v-11c0-.4-.2-.8-.6-1L15.7 1.3z"/>
      <path d="M21.3 18.7c-1.2 0-2-.6-2.4-1.5l-1.4.8c.6 1.2 1.8 2 3.8 2 2.3 0 3.6-1.2 3.6-3.2 0-1.6-1-2.5-3.2-3.1-1.8-.5-2.5-1-2.5-2 0-.8.6-1.4 1.6-1.4 1 0 1.6.5 2 1.4l1.4-.8c-.6-1.2-1.6-1.8-3.4-1.8-2.1 0-3.5 1.3-3.5 3.1 0 1.8 1.1 2.6 3.3 3.2 1.8.5 2.4 1 2.4 2s-.7 1.6-1.7 1.6z" fill="white"/>
    </svg>
  ),
  "Express": (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor">
      <path d="M4 19.7l6.3-8.4h0L5 4h4.4l6.6 9.3L22.6 4H27l-10 13.4h0L27 28h-4.5l-7-9.9L9.3 28H4l5.8-8.3H4zm4.2 2.4c0 0 1.4-.7 2.3-.7 1.8 0 2.1 1.3 2.1 2.1 0 1.4-.9 2.7-2.7 2.7-1 0-1.7-.3-1.7-.3l-.5-2.3s.9.5 1.5.5c.9 0 1.2-.5 1.2-.9 0-.7-.5-.9-.9-.9-.5 0-.8.1-.8.1l-.5-1.8z"/>
    </svg>
  ),
  "Python": (
    <svg width="16" height="16" viewBox="0 0 32 32">
      <path d="M15.9.4c-4.3 0-5 2.2-5 4.1v2.4h5.3v.7H7.3S3 7.2 3 12.2s3 5.4 3 5.4h1.8v-2.6s-.1-3 2.9-3h5.1s2.8 0 2.8-2.7V5.5S19 3 15.9 3v-.1c-.1-.2-.1-.3 0-.5v-.1c0 .1.1.1 0-.1zM12.3 4.2a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z" fill="#3776AB"/>
      <path d="M16.1 31.6c4.3 0 5-2.2 5-4.1v-2.4h-5.3v-.7h9.3S29 24.8 29 19.8s-3-5.4-3-5.4h-1.8v2.6s.1 3-2.9 3h-5.1s-2.8 0-2.8 2.7v5.8S13 29.6 16.1 29.6v.1c.1.2.1.3 0 .5v.1c0-.1-.1-.1 0 .1zM19.7 27.8a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z" fill="#FFD43B"/>
    </svg>
  ),
  "Flask": (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor">
      <path d="M14 3.5l-1 3.5c-2 .8-3.5 2.5-4 4.7L5.5 24c-.3 1.2.5 2.3 1.7 2.3h17.6c1.2 0 2-1.1 1.7-2.3l-3.5-12.3c-.5-2.2-2-3.9-4-4.7l-1-3.5h-4zm-1.5 2h7l.8 2.8c1.5.6 2.7 2 3.2 3.7l3.3 11.5H5.7l3.3-11.5c.5-1.7 1.7-3.1 3.2-3.7l.8-2.8z" opacity=".5"/>
      <path d="M16 8c-3.9 0-7 2.2-7 5 0 1.7.9 3.2 2.3 4.2L10 24h12l-1.3-6.8C22.1 16.2 23 14.7 23 13c0-2.8-3.1-5-7-5zm-2.3 3.8c.4-.1.8.1.9.5s-.1.8-.5.9-.8-.1-.9-.5.1-.8.5-.9zm4.6 0c.4-.1.8.1.9.5s-.1.8-.5.9-.8-.1-.9-.5.1-.8.5-.9zM16 11c2.8 0 5 1.7 5 3.5S18.8 18 16 18s-5-1.7-5-3.5S13.2 11 16 11z" opacity=".8"/>
    </svg>
  ),
  "FastAPI": (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="#009688">
      <path d="M18 2L6 18h8l-3 12 15-17h-9l4-11h-3z"/>
    </svg>
  ),
  "REST APIs": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12h16M4 12l4-4m-4 4l4 4M20 12l-4-4m4 4l-4 4"/>
      <circle cx="8" cy="12" r="2" fill="none"/>
      <circle cx="16" cy="12" r="2" fill="none"/>
    </svg>
  ),
  "JWT": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="none"/>
      <path d="M7 12h10M7 9h4M7 15h6"/>
      <circle cx="17" cy="9" r="1.5" fill="currentColor"/>
    </svg>
  ),

  // === DATABASES ===
  "MySQL": (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="#4479A1">
      <path d="M16 3C9.4 3 4 4.8 4 7v18c0 2.2 5.4 4 12 4s12-1.8 12-4V7c0-2.2-5.4-4-12-4z" opacity=".2"/>
      <ellipse cx="16" cy="7" rx="12" ry="4" fill="none" stroke="#4479A1" strokeWidth="1.5"/>
      <path d="M4 7v9c0 2.2 5.4 4 12 4s12-1.8 12-4V7" fill="none" stroke="#4479A1" strokeWidth="1.5"/>
      <path d="M4 16v9c0 2.2 5.4 4 12 4s12-1.8 12-4v-9" fill="none" stroke="#4479A1" strokeWidth="1.5"/>
    </svg>
  ),
  "MongoDB": (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="#47A248">
      <path d="M16.5 3C16 3 15.2 5 14.5 8.2c-2 7.5-2.3 12.5-2.3 12.5l3.8 8.7c.2.3.3.3.5 0l3.5-8.5s-.5-5.5-2.5-13C17.1 5.5 16.8 3 16.5 3z"/>
      <path d="M16.5 22c-1 0-2-.5-2.5-1.3l1.5-6.5.5 6c.2.7.3 1.3.5 1.8z" opacity=".5" fill="white"/>
    </svg>
  ),
  "PostgreSQL": (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="#336791">
      <path d="M16 3C9.4 3 4 5.7 4 9v14c0 3.3 5.4 6 12 6s12-2.7 12-6V9c0-3.3-5.4-6-12-6z" opacity=".15"/>
      <ellipse cx="16" cy="9" rx="12" ry="6" fill="none" stroke="#336791" strokeWidth="1.5"/>
      <ellipse cx="16" cy="16" rx="12" ry="5" fill="none" stroke="#336791" strokeWidth="1.5"/>
      <ellipse cx="16" cy="23" rx="12" ry="5" fill="none" stroke="#336791" strokeWidth="1.5"/>
    </svg>
  ),
  "Prisma": (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor">
      <path d="M27 22.5L17 3.5c-.4-.7-1.2-1-1.9-.5-.3.2-.5.5-.5.9l3 18.5-7.3 2.5c-.7.2-1 .9-.7 1.5l.2.3c.2.4.6.6 1 .5l18-5.5c.6-.2.9-.8.7-1.4-.1-.3-.2-.5-.5-.6l-3-.7z"/>
    </svg>
  ),

  // === AI & LLM ===
  "OpenAI API": (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor">
      <path d="M28 13.3a6 6 0 0 0-4.8-5.4 6 6 0 0 0-6.3 2.9 6 6 0 0 0-11.5 2.2 6 6 0 0 0 3.3 6.4 6 6 0 0 0-.3 2.8 6 6 0 0 0 3.2 4.6 6 6 0 0 0 6.7.4 6 6 0 0 0 3.5-3.2 6 6 0 0 0 6.1-1.3 6 6 0 0 0 2.3-5.1 6 6 0 0 0-2.2-1.9zm-12 9.6a4 4 0 0 1-2.5-1L20 18.6v3.3a.1.1 0 0 1 0 .1 4.2 4.2 0 0 1-4 0zm-6-7.6a4 4 0 0 1 2-1.7v6.5l-2 1.2a.1.1 0 0 1-.1 0 4 4 0 0 1 .1-6zm2-3.4a4 4 0 0 1 3.7-2.6 4.2 4.2 0 0 1 2.5 1l-3.2 1.9-.1.1-2.9-1.7v.3zm12 2.7l.1-.1 3 1.8a4 4 0 0 1-.3 6.6l-3 1.8v-3.6a.1.1 0 0 1 0-.1 4.2 4.2 0 0 1 .2-6.4zm2 7.5l-2.8-1.7a4 4 0 0 1 .1-3l2.8-1.7a4 4 0 0 1 1.5 5.4 4 4 0 0 1-1.6 1z"/>
    </svg>
  ),
  "Gemini": (
    <svg width="16" height="16" viewBox="0 0 32 32">
      <path d="M16 4l2.8 8.6H28l-7.4 5.4 2.8 8.6L16 21.2 8.6 26.6l2.8-8.6L4 12.6h9.2z" fill="#4285F4"/>
    </svg>
  ),
  "Groq": (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor">
      <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13S23.2 3 16 3zm-4.5 7h3v12h-3V10zm6 0h3v12h-3V10z"/>
    </svg>
  ),
  "LangChain": (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor">
      <path d="M4 4h6v6H4zM13 4h6v6h-6zM22 4h6v6h-6zM4 13h6v6H4zM13 13h6v6h-6zM22 13h6v6h-6zM4 22h6v6H4zM13 22h6v6h-6zM22 22h6v6h-6z"/>
      <path d="M10 7h3M19 7h3M10 16h3M19 16h3M10 25h3M19 25h3M7 10v3M7 19v3M16 10v3M16 19v3M25 10v3M25 19v3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  "LLM Integration": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 0 1 7 7c0 2.4-1.2 4.5-3 5.7V17a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2.3C6.2 13.5 5 11.4 5 9a7 7 0 0 1 7-7z"/>
      <path d="M9 21h6M10 17v4M14 17v4"/>
    </svg>
  ),

  // === DEV TOOLS ===
  "Git": (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="#F05032">
      <path d="M31.3 14.7L17.3.7c-.7-.7-1.8-.7-2.5 0l-3.2 3.2 4 4c.5-.2 1.1-.1 1.5.3.4.4.5 1 .3 1.5l3.8 3.8c.5-.2 1.1-.1 1.5.3.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.5-.5-.5-1.2-.2-1.7l-3.5-3.5v9.2c.3.1.5.3.7.5.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1.2-.2.5-.4.7-.5V12.3c-.2-.1-.5-.3-.7-.5-.5-.5-.5-1.2-.2-1.7L10.2 6.6.7 16.1c-.7.7-.7 1.8 0 2.5L14.7 33c.7.7 1.8.7 2.5 0L31.6 18.6c.7-.7.7-1.8-.3-3.9z"/>
    </svg>
  ),
  "GitHub": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.8.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.2.1-2.6 0 0 .8-.3 2.7 1 .8-.2 1.6-.3 2.4-.3.8 0 1.7.1 2.4.3 1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5C19.1 20.2 22 16.4 22 12c0-5.5-4.5-10-10-10z"/>
    </svg>
  ),
  "Docker": (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="#2496ED">
      <path d="M29 14.3c-.4-.2-1.4-.4-2.3-.4-.5 0-1 .1-1.5.2-.2-1.6-1.1-2.5-1.2-2.6l-.6-.4-.4.6c-.5.8-.9 1.8-1.2 2.8-.4 2-.2 3.7.8 5.2-1.7.7-4.2.4-5.8-.5-.4-.3-.8-.5-1.2-.8l-.1 6.3c0 1.4.6 2.3 1.8 2.7.5.2 1.4.3 2.4.3 2 0 3.7-.5 5-1.6.9-.8 1.6-1.9 2.1-3.3 1.1 0 2.2-.2 3-.8.5-.4.9-.9 1.2-1.5.5-1.2.6-3 .1-4.6zM4.5 14.7c-1.2 0-2 .6-2.4 1.8-.3.9-.4 2.1-.1 3.4.3 1.4 1.1 2.5 2.2 3.1.5.3 1.3.5 2.2.5 1.9 0 3.4-.8 4.2-2.2l.1-6.6h-6.2z"/>
      <rect x="8" y="7.5" width="2.5" height="3" rx=".3"/>
      <rect x="11" y="7.5" width="2.5" height="3" rx=".3"/>
      <rect x="14" y="7.5" width="2.5" height="3" rx=".3"/>
      <rect x="17" y="7.5" width="2.5" height="3" rx=".3"/>
      <rect x="14" y="4" width="2.5" height="3" rx=".3"/>
      <rect x="11" y="4" width="2.5" height="3" rx=".3"/>
    </svg>
  ),
  "Vercel": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 20h20L12 2z"/>
    </svg>
  ),
  "Render": (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="16" cy="16" r="4"/>
      <path d="M16 4v5M16 23v5M4 16h5M23 16h5M7.5 7.5l3.5 3.5M21 21l3.5 3.5M24.5 7.5l-3.5 3.5M11 21l-3.5 3.5"/>
    </svg>
  ),
  "Postman": (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="#FF6C37">
      <path d="M16 2C8.8 2 3 7.8 3 15s5.8 13 13 13 13-5.8 13-13S23.2 2 16 2zm6 16.3c0 .3-.2.5-.5.5h-2.7l-4.8-6.2v7.3h-2.5c-.3 0-.5-.2-.5-.5V13c0-.3.2-.5.5-.5h2.7l4.8 6.2v-7.3h2.5c.3 0 .5.2.5.5v6.3z"/>
    </svg>
  ),
};

const skillsData = [
  {
    title: "Frontend Development",
    icon: <Layers size={24} className="text-primary" />,
    description: "Crafting responsive, accessible, and highly interactive user interfaces with modern frameworks.",
    chips: ["React", "JavaScript", "Tailwind CSS", "TypeScript", "Redux"],
  },
  {
    title: "Backend Architecture",
    icon: <Server size={24} className="text-accent1" />,
    description: "Building scalable and secure server-side applications and RESTful APIs.",
    chips: ["Node.js", "Express", "Python", "Flask", "FastAPI", "REST APIs", "JWT"],
  },
  {
    title: "Databases",
    icon: <Database size={24} className="text-accent2" />,
    description: "Designing efficient schemas and managing data flow.",
    chips: ["MySQL", "MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    title: "AI & LLM Integration",
    icon: <Brain size={24} className="text-pink-500" />,
    description: "Integrating LLMs and AI services to build intelligent, context-aware applications.",
    chips: ["OpenAI API", "Gemini", "Groq", "LangChain", "LLM Integration"],
    className: "md:col-start-1 md:col-end-2"
  },
  {
    title: "Developer Tools",
    icon: <Wrench size={24} className="text-green-500" />,
    description: "Streamlining development and deployment workflows.",
    chips: ["Git", "GitHub", "Docker", "Vercel", "Render", "Postman"],
    className: "md:col-start-2 md:col-end-4"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-6 md:p-7 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-md overflow-hidden hover:border-white/10 transition-colors duration-500 ${skill.className || ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 w-fit mb-5 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>

                <h4 className="text-lg md:text-xl font-bold text-white mb-2">{skill.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {skill.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {skill.chips.map((chip, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 border border-white/5 rounded-full hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                    >
                      {techLogos[chip]}
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