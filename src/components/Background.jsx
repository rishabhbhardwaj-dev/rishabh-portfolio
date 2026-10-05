import React from 'react';

export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
      {/* Subtle Localized Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.2] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: 'url(/noise.svg)', backgroundRepeat: 'repeat' }}
      />
      
      {/* Single Subtle Ambient Radial Vignette in Steel Blue Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,rgba(91,127,166,0.04),transparent_100%)] pointer-events-none" />
    </div>
  );
}
