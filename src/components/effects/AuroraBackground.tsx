import React from 'react';

export const AuroraBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none">
      {/* 1. Hot Magenta / Pink orb (top left) */}
      <div className="absolute -top-24 -left-24 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-pink-500/25 via-fuchsia-600/20 to-transparent blur-[130px] animate-float-slow" />

      {/* 2. Electric Cyan / Sky Blue orb (top right) */}
      <div className="absolute top-10 -right-20 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-cyan-400/25 via-blue-600/20 to-transparent blur-[140px] animate-float-reverse" />

      {/* 3. Vivid Royal Violet / Purple orb (center) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-gradient-to-r from-purple-600/20 via-indigo-500/25 to-pink-500/15 blur-[150px] animate-pulse-subtle" />

      {/* 4. Energetic Emerald / Mint orb (bottom left) */}
      <div className="absolute bottom-1/4 -left-32 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-emerald-400/20 via-teal-500/20 to-transparent blur-[130px] animate-float" />

      {/* 5. Sunset Amber / Tangerine orb (bottom right) */}
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-amber-500/20 via-orange-600/20 to-pink-600/15 blur-[140px] animate-float-slow" />
    </div>
  );
};
