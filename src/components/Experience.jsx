import React from 'react';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 relative bg-slate-900/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
            Career Journey
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Work Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
            Proven track record of engineering scalable backends, full-stack MERN systems, and cloud AI deployments.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-800 ml-3 xs:ml-4 sm:ml-6 space-y-10 sm:space-y-12">
          {experience.map((item, idx) => (
            <div key={idx} className="relative pl-6 xs:pl-8 sm:pl-10 group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:border-emerald-400 transition-colors flex items-center justify-center">
                {item.current && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                )}
              </div>

              {/* Timeline Card */}
              <div className="rounded-2xl bg-slate-900/80 border border-slate-800/90 p-6 sm:p-7 shadow-lg group-hover:border-slate-700 transition">
                
                {/* Header: Date + Role + Company */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition">
                        {item.role}
                      </h3>
                      {item.current && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-semibold text-indigo-400 mt-0.5">
                      {item.company} &bull; <span className="text-slate-400 font-normal">{item.location}</span>
                    </div>
                  </div>

                  <span className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 w-fit">
                    {item.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Achievements List */}
                <ul className="space-y-2 mb-5">
                  {item.achievements.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                      <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs text-slate-500 font-mono mr-1">Stack:</span>
                  {item.technologies.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800 text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
