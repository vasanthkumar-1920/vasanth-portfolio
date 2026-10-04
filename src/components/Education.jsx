import React from 'react';
import { education, certifications, languages } from '../data/portfolioData';

export default function Education() {
  return (
    <section className="py-14 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
            Background
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Education & Credentials
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Academic foundations in computer science, professional industry certifications, and multilingual fluency.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          
          {/* Card 1: Degree / College */}
          <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zM12 14v7" />
                </svg>
              </div>

              <span className="text-xs font-mono text-indigo-400 font-semibold">{education.period}</span>
              <h3 className="text-xl font-bold text-white mt-1">{education.degree}</h3>
              <p className="text-sm font-medium text-slate-300 mt-1">{education.institution}</p>
              <p className="text-xs text-slate-500">{education.location}</p>

              {/* Coursework Tags */}
              <div className="mt-5">
                <div className="text-xs text-slate-400 font-semibold mb-2">Core Coursework:</div>
                <div className="flex flex-wrap gap-1.5">
                  {education.keyTopics.map((topic, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 text-[11px]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500">
              Foundation in algorithms, systems & database architecture
            </div>
          </div>

          {/* Card 2: Certifications */}
          <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-white">Certifications & Training</h3>
              <p className="text-xs text-slate-400 mt-0.5">Verified professional credentials</p>

              <div className="mt-5 space-y-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-white">{cert.title}</h4>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono">
                        Verified
                      </span>
                    </div>
                    <div className="text-xs text-emerald-400 font-medium">{cert.issuer}</div>
                    <p className="text-[11px] text-slate-400 leading-relaxed mt-1">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500">
              Industry validated skills
            </div>
          </div>

          {/* Card 3: Languages */}
          <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-white">Languages</h3>
              <p className="text-xs text-slate-400 mt-0.5">Spoken & written communication</p>

              <div className="mt-5 space-y-4">
                {languages.map((lang, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white">{lang.name}</span>
                      <span className="text-xs text-indigo-400 font-medium">{lang.level}</span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-full rounded-full transition-all duration-1000"
                        style={{ width: `${lang.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500">
              Clear technical documentation & cross-functional teamwork
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
