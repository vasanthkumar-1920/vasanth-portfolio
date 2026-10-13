import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import ArchitectureModal from '../components/ArchitectureModal';

export default function ProjectDetail() {
  const { id } = useParams();
  const [arch, setArch] = useState(false);
  const idx = projects.findIndex(p => p.id === id);
  const p = projects[idx];
  if (!p) return (
    <section className="max-w-6xl mx-auto px-4 py-24"><p>Project not found.</p><Link to="/work" className="text-indigo-400">← Back to work</Link></section>
  );
  const next = projects[(idx + 1) % projects.length];
  const live = p.liveUrl && p.liveUrl !== '#';

  return (
    <article className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <Link to="/work" className="text-sm text-slate-400 hover:text-indigo-400">← All projects</Link>
      <p className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-slate-400">{p.category} · <span className="text-emerald-400">{p.badge}</span></p>
      <h1 className="font-display mt-3 text-5xl sm:text-7xl font-semibold leading-none">{p.title}</h1>

      {/* Optional screenshot: put an image at public/screens/<project-id>.png */}
      <div className="mt-10 border border-slate-700 bg-slate-900">
        <div className="flex items-center gap-2 border-b border-slate-700 px-4 py-2.5">
          <span className="w-2.5 h-2.5 bg-slate-600"></span><span className="w-2.5 h-2.5 bg-slate-600"></span><span className="w-2.5 h-2.5 bg-slate-600"></span>
          <span className="ml-3 font-mono text-[11px] text-slate-500 truncate">{live ? p.liveUrl.replace(/^https?:\/\//, '') : p.id}</span>
        </div>
        <img src={`/screens/${p.id}.png`} alt={`${p.title} screenshot`} className="w-full"
             onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }} />
        <div style={{ display: 'none' }} className="h-56 sm:h-80 items-center justify-center text-center px-6">
          <span className="font-display text-3xl sm:text-5xl text-slate-600">{p.title}</span>
        </div>
      </div>

      <div className="mt-12 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <h2 className="font-mono text-xs uppercase tracking-widest text-indigo-500">Overview</h2>
          <p className="mt-3 text-lg text-slate-200 leading-relaxed">{p.description}</p>
          <h2 className="mt-10 font-mono text-xs uppercase tracking-widest text-indigo-500">What I built</h2>
          <ul className="mt-4 space-y-3">
            {p.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-slate-300 leading-relaxed"><span className="text-indigo-500">—</span>{h}</li>
            ))}
          </ul>
        </div>
        <aside className="lg:col-span-5">
          <h2 className="font-mono text-xs uppercase tracking-widest text-indigo-500">Stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tech.map(t => <span key={t} className="px-3 py-1.5 border border-slate-700 text-sm">{t}</span>)}
          </div>
          <div className="mt-8 flex flex-col gap-3">
            {live && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-indigo-500 text-slate-950 text-sm font-semibold text-center hover:bg-indigo-400">Visit live site ↗</a>}
            <button onClick={() => setArch(true)} className="px-5 py-3 border border-slate-600 text-sm font-semibold hover:border-slate-100">System architecture</button>
          </div>
        </aside>
      </div>

      <Link to={`/work/${next.id}`} className="mt-16 block border-t border-slate-700 pt-8 group">
        <span className="font-mono text-xs uppercase tracking-widest text-slate-500">Next project</span>
        <div className="font-display text-3xl sm:text-5xl mt-2 group-hover:text-indigo-500 transition-colors">{next.title} →</div>
      </Link>

      {arch && <ArchitectureModal project={p} onClose={() => setArch(false)} />}
    </article>
  );
}
