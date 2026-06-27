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
    <div className="relative min-h-screen text-white selection:bg-primary/30 overflow-x-hidden">
      <Background />
      <Navbar />
      
      <main className="flex flex-col items-center w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
    </div>
  );
}
