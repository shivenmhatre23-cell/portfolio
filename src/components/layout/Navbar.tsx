import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface NavbarProps {
  onResumeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onResumeClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Learning', href: '#learning' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'learning', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-surface-950/85 backdrop-blur-2xl border-b border-purple-500/25 shadow-xl shadow-purple-950/40 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          className="group flex items-center gap-3 text-white hover:text-cyan-200 transition-colors"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-600 border border-pink-400/40 flex items-center justify-center text-white shadow-md shadow-pink-500/30 group-hover:scale-105 group-hover:shadow-cyan-400/40 transition-all duration-300">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-base tracking-tight text-white font-heading flex items-center gap-2">
              {PERSONAL_INFO.name}
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </span>
            <span className="text-[10px] font-mono text-cyan-300/80 leading-none">IIIT Bhubaneswar</span>
          </div>
        </a>

        {/* Desktop Navigation with colorful active pill */}
        <nav className="hidden md:flex items-center gap-1 bg-surface-900/80 p-1.5 rounded-full border border-purple-500/30 backdrop-blur-xl shadow-lg shadow-black/30">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold font-sans transition-all duration-300 ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500/80 via-purple-600/80 to-cyan-500/80 rounded-full shadow-md shadow-pink-500/25 -z-10" />
                )}
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onResumeClick}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-slate-200 hover:text-white bg-surface-900 hover:bg-surface-850 border border-purple-500/35 hover:border-cyan-400/50 transition-all duration-300 shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-pink-400" />
            <span>Resume</span>
          </button>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 hover:from-pink-400 hover:to-cyan-400 font-heading transition-all duration-300 shadow-md shadow-pink-500/25 active:scale-95"
          >
            <Send className="w-3 h-3" />
            <span>Contact</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onResumeClick}
            className="px-3 py-1 text-xs font-mono font-medium text-pink-200 bg-surface-850 border border-pink-500/30 rounded-lg"
          >
            Resume
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-pink-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-surface-950/95 border-b border-purple-500/30 px-4 pt-3 pb-6 mt-3 space-y-3 backdrop-blur-2xl animate-fade-in shadow-2xl">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-pink-500/10 border border-purple-500/20"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-purple-500/20 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onResumeClick();
              }}
              className="flex-1 py-2 text-center text-xs font-mono font-semibold text-slate-200 bg-surface-850 border border-purple-500/30 rounded-xl"
            >
              View Resume
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2 text-center text-xs font-bold text-white bg-gradient-to-r from-pink-500 to-cyan-500 rounded-xl font-heading"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
