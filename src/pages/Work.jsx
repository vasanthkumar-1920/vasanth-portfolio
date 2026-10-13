import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/portfolioData';

const tabs = [['all', 'All'], ['ai', 'Full-Stack & AI'], ['backend', 'Backend & APIs'], ['cms', 'WordPress']];

export default function Work() {
  const [f, setF] = useState('all');
  const list = f === 'all' ? projects : projects.filter(p => p.filter === f);
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-indigo-500">Work</p>
      <h1 className="font-display mt-3 text-5xl sm:text-7xl font-semibold">Things I've built</h1>
      <div className="mt-8 flex gap-6 overflow-x-auto border-b border-slate-800">
        {tabs.map(([id, label]) => (
          <button key={id} onClick={() => setF(id)}
            className={`pb-3 -mb-px text-sm whitespace-nowrap border-b-2 ${f === id ? 'border-indigo-500 text-slate-50' : 'border-transparent text-slate-400 hover:text-slate-100'}`}>{label}</button>
        ))}
      </div>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {list.map(p => (
          <Link key={p.id} to={`/work/${p.id}`} className="group border border-slate-700 p-6 sm:p-8 flex flex-col justify-between min-h-[280px] hover:border-indigo-500 hover:bg-slate-900 transition-colors">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-slate-400">{p.category}</div>
              <h2 className="font-display mt-3 text-3xl font-semibold">{p.title}</h2>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed line-clamp-3">{p.description}</p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <span className="font-mono text-[11px] text-emerald-400">{p.badge}</span>
              <span className="text-sm group-hover:text-indigo-400">Open →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
