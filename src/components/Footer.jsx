import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid gap-8 sm:grid-cols-3">
        <div>
          <div className="font-display text-2xl text-slate-50">{personalInfo.name}</div>
          <p className="mt-2 text-sm text-slate-400">{personalInfo.role} · {personalInfo.location}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-slate-400">
          <Link to="/work" className="hover:text-slate-50">Work</Link>
          <Link to="/about" className="hover:text-slate-50">About</Link>
          <Link to="/experience" className="hover:text-slate-50">Experience</Link>
          <Link to="/contact" className="hover:text-slate-50">Contact</Link>
        </div>
        <div className="flex flex-col gap-2 text-sm text-slate-400">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-50">GitHub ↗</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-slate-50">LinkedIn ↗</a>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-slate-50">{personalInfo.email}</a>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center font-mono text-[11px] text-slate-500">
        © {new Date().getFullYear()} {personalInfo.name}
      </div>
    </footer>
  );
}
