import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Background() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Small optimization to avoid too many re-renders
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay"></div>
      
      {/* Premium Linear Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      {/* Aurora Floating Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[150px] mix-blend-screen animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-accent1/20 blur-[150px] mix-blend-screen animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[50%] rounded-full bg-accent2/20 blur-[150px] mix-blend-screen animate-blob" style={{ animationDelay: '4s' }}></div>

      {/* Dynamic Mouse Glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] mix-blend-screen"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
      />
    </div>
  );
}
