import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Journey from '../sections/Journey';
import Contact from '../sections/Contact';
import Background from '../components/Background';

export default function Home() {
  return (
    <div className="relative min-h-screen text-textPrimary bg-background selection:bg-primary/30 overflow-x-hidden transition-colors duration-200">
      <Background />
      <Navbar />
      
      <main className="w-full max-w-5xl mx-auto px-6 font-sans">
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
