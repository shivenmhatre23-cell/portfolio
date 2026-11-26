import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { Learning } from './components/learning/Learning';
import { Education } from './components/education/Education';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/layout/Footer';
import { ResumeModal } from './components/ui/ResumeModal';
import { ParticleHalo } from './components/effects/ParticleHalo';
import { AuroraBackground } from './components/effects/AuroraBackground';
import { MagneticCursor } from './components/effects/MagneticCursor';
import { ClickSpark } from './components/effects/ClickSpark';
import { Squares } from './components/effects/Squares';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Short cinematic entrance
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ClickSpark sparkColors={['#ec4899', '#06b6d4', '#8b5cf6', '#10b981', '#f59e0b']}>
      <div className={`relative min-h-screen bg-surface-950 text-slate-100 font-sans selection:bg-pink-500/30 selection:text-pink-200 overflow-x-clip ${loaded ? 'page-reveal' : 'opacity-0'}`}>
        {/* Dynamic colorful aurora glowing orbs (pink, cyan, violet, emerald, amber) */}
        <AuroraBackground />

        {/* Interactive drifting cyber grid from ReactBits */}
        <div className="fixed inset-0 pointer-events-none -z-10 opacity-35">
          <Squares squareSize={50} speed={0.3} borderColor="rgba(139, 92, 246, 0.09)" hoverFillColor="rgba(236, 72, 153, 0.2)" />
        </div>

        {/* Noise texture overlay */}
        <div className="noise-overlay pointer-events-none" />

        {/* Custom cursor (desktop only) */}
        <MagneticCursor />

        {/* Multi-color neon particle constellation */}
        <ParticleHalo />

        {/* Vibrant grid overlay */}
        <div className="fixed top-0 left-0 right-0 h-[600px] bg-grid-pattern opacity-60 pointer-events-none -z-10" />
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] radial-glow pointer-events-none -z-10" />

        {/* Navigation */}
        <Navbar onResumeClick={() => setIsResumeOpen(true)} />

        {/* Main Page Content */}
        <main className="relative z-10 space-y-12 sm:space-y-16">
          <Hero onResumeClick={() => setIsResumeOpen(true)} />
          <About />
          <Skills />
          <Projects />
          <Learning />
          <Education />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Resume Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </ClickSpark>
  );
}

export default App;
