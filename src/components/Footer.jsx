import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 sm:py-12 border-t border-slate-900 bg-slate-950 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-4">
        
        {/* Left Copyright */}
        <div className="flex items-center gap-2 text-center sm:text-left flex-wrap justify-center sm:justify-start">
          <span>&copy; {new Date().getFullYear()} {personalInfo.name}</span>
          <span className="text-slate-600">&bull;</span>
          <span className="text-slate-500">{personalInfo.location}</span>
        </div>

        {/* Center Tagline */}
        <div className="text-slate-500 font-mono text-[10px] sm:text-[11px] text-center">
          Engineered with React &bull; Tailwind CSS &bull; AI
        </div>

        {/* Right Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-slate-400 hover:text-white transition group"
        >
          <span>Back to Top</span>
          <svg className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>

      </div>
    </footer>
  );
}
