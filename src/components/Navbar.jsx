import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  const cls = ({ isActive }) =>
    `text-sm transition-colors ${isActive ? 'text-slate-50 border-b border-indigo-500 pb-1' : 'text-slate-400 hover:text-slate-50'}`;

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-950 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-xl font-semibold text-slate-50 tracking-tight">
          Vasanth Kumar V<span className="text-indigo-500">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => <NavLink key={l.to} to={l.to} end={l.end} className={cls}>{l.label}</NavLink>)}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer"
             className="px-4 py-2 text-sm border border-slate-600 hover:border-slate-100 transition-colors">Resume ↓</a>
          <Link to="/contact" className="px-4 py-2 text-sm font-semibold bg-indigo-500 text-slate-950 hover:bg-indigo-400 transition-colors">Hire me</Link>
        </div>

        <button onClick={() => setOpen(!open)} aria-label="Menu"
                className="md:hidden px-3 py-2 border border-slate-700 text-xs font-mono uppercase tracking-widest">
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-slate-950 px-6 py-8 animate-fadeIn overflow-y-auto">
          {links.map((l, i) => (
            <NavLink key={l.to} to={l.to} end={l.end}
              className={({ isActive }) => `flex items-baseline gap-4 py-4 border-b border-slate-800 font-display text-4xl ${isActive ? 'text-indigo-500' : 'text-slate-100'}`}>
              <span className="font-mono text-xs text-slate-500">0{i + 1}</span>{l.label}
            </NavLink>
          ))}
          <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer"
             className="mt-8 block text-center py-3 border border-slate-600 text-sm">Download resume ↓</a>
        </div>
      )}
    </header>
  );
}
