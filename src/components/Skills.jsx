import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsData.map(s => s.category)];

  const displayedSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Frontend Development':
        return 'from-cyan-500/10 to-blue-500/10 border-cyan-500/20 text-cyan-400';
      case 'Backend & APIs':
        return 'from-indigo-500/10 to-violet-500/10 border-indigo-500/20 text-indigo-400';
      case 'AI & LLM Integration':
        return 'from-emerald-500/10 to-teal-500/10 border-emerald-500/20 text-emerald-400';
      case 'Cloud & DevOps':
        return 'from-blue-500/10 to-sky-500/10 border-blue-500/20 text-sky-400';
      case 'Databases & Optimization':
        return 'from-emerald-500/10 to-emerald-500/10 border-emerald-500/20 text-emerald-400';
      default:
        return 'from-slate-800/20 to-slate-800/10 border-slate-700/50 text-slate-300';
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
            Technical Stack
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Skills & Capabilities
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            From database to browser to cloud.
          </p>
        </div>

        {/* Category Filter — scrollable on mobile */}
        <div className="overflow-x-auto pb-1.5 -mx-1 px-1 mb-7 sm:mb-10">
          <div className="flex gap-1.5 sm:gap-2 min-w-max sm:min-w-0 sm:flex-wrap sm:justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-medium transition whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {displayedSkills.map((categoryItem, idx) => {
            const colorClass = getCategoryColor(categoryItem.category);

            return (
              <div
                key={idx}
                className="rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colorClass} border flex items-center justify-center font-bold text-sm`}>
                      {categoryItem.category.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">
                        {categoryItem.category}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-1">
                        {categoryItem.description}
                      </p>
                    </div>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {categoryItem.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-xs font-medium transition shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtext info */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span>{categoryItem.skills.length} core technologies</span>
                  <span className="text-emerald-400 font-mono">Production Ready</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
