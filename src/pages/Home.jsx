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
    <div className="relative min-h-screen text-[#F1EFE8] bg-[#11110F] selection:bg-[#5B7FA6]/30 overflow-x-hidden">
      <Background />
      <Navbar />
      
      <main className="w-full max-w-3xl mx-auto px-6 font-sans">
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
