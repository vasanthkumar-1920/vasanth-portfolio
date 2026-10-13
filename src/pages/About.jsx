import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo, skillsData } from '../data/portfolioData';
import Education from '../components/Education';

export default function About() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-indigo-500">About</p>
        <h1 className="font-display mt-3 text-5xl sm:text-7xl font-semibold leading-none">
          Hi, I'm {personalInfo.name.split(' ')[0]}.
        </h1>
        <div className="mt-10 grid lg:grid-cols-12 gap-10">
          <p className="lg:col-span-7 text-lg text-slate-200 leading-relaxed">{personalInfo.bio}</p>
          <div className="lg:col-span-5 text-sm text-slate-400 space-y-2">
            <p><span className="text-slate-200">Based in</span> {personalInfo.location}</p>
            <p><span className="text-slate-200">Role</span> {personalInfo.role}</p>
            <p><a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-indigo-400">Download resume ↓</a></p>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-indigo-500">Skills</p>
          <h2 className="font-display mt-3 text-4xl sm:text-5xl font-semibold mb-8">What I work with</h2>
          {skillsData.map(c => (
            <div key={c.category} className="grid md:grid-cols-12 gap-3 md:gap-8 py-6 border-t border-slate-800">
              <div className="md:col-span-4">
                <div className="font-display text-2xl">{c.category}</div>
                <p className="mt-1 text-xs text-slate-500 max-w-xs">{c.description}</p>
              </div>
              <div className="md:col-span-8 flex flex-wrap gap-2 content-start">
                {c.skills.map(s => <span key={s} className="px-3 py-1.5 border border-slate-700 text-sm hover:border-indigo-500 transition-colors">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-slate-800"><Education /></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 text-center">
        <Link to="/contact" className="inline-block px-6 py-3 bg-indigo-500 text-slate-950 font-semibold text-sm">Let's talk →</Link>
      </div>
    </>
  );
}
