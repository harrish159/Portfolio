import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 z-[-2] w-full h-full bg-bg-main overflow-hidden pointer-events-none">
      {/* Very low-opacity grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Very soft green glow in hero section (top left/center area) */}
      <div className="absolute top-[-10%] left-[10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full bg-accent-lime/5 blur-[120px]" />
      
      {/* Subtle secondary radial glow (bottom right) */}
      <div className="absolute bottom-[-10%] right-[10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full bg-white/[0.01] blur-[100px]" />
    </div>
  );
};

export default Background;
