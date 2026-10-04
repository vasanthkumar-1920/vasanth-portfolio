import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'AI Assistant', href: '#ai-demo' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl shadow-black/30' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#about" className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 group min-w-0">
          <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20 flex-shrink-0">
            <div className="w-full h-full bg-slate-950 rounded-[10px] xs:rounded-[11px] flex items-center justify-center group-hover:bg-slate-900 transition">
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300 text-xs sm:text-sm tracking-wider">
                VK
              </span>
            </div>
          </div>
          <div className="min-w-0">
            <div className="font-bold text-white tracking-tight text-sm sm:text-base truncate max-w-[120px] xs:max-w-none">
              {personalInfo.name}
            </div>
            <div className="text-[10px] xs:text-[11px] text-slate-400 font-mono tracking-wide hidden xs:block truncate">
              MERN &bull; AI Engineer
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action & Status */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Available for Hire</span>
          </div>

          <a
            href="#contact"
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 transition-all flex items-center gap-1.5"
          >
            <span>Get in Touch</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white focus:outline-none flex-shrink-0"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer & Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 top-[65px] bg-slate-950/70 backdrop-blur-sm -z-10 animate-fadeIn"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          <div className="bg-slate-950/98 border-b border-slate-800 px-5 py-4 space-y-3 backdrop-blur-xl shadow-2xl max-h-[calc(100vh-70px)] overflow-y-auto animate-fadeIn">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>{personalInfo.status}</span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">Hosur, TN</span>
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg transition"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Quick Actions in Mobile Drawer */}
            <div className="pt-3 border-t border-slate-800/80 space-y-2">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-xs font-semibold rounded-xl bg-slate-900 border border-slate-800 text-indigo-300 hover:text-white flex items-center justify-center gap-1.5 transition"
              >
                <span>Download Resume (PDF)</span>
                <span>&darr;</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center py-2 text-xs font-medium rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white transition"
                >
                  GitHub &rarr;
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center py-2 text-xs font-medium rounded-xl bg-slate-900/80 border border-slate-800 text-sky-400 hover:text-sky-300 transition"
                >
                  LinkedIn &rarr;
                </a>
              </div>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 flex items-center justify-center gap-1.5 transition"
              >
                <span>Get in Touch</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
