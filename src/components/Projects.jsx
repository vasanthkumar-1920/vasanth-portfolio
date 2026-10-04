import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import ArchitectureModal from './ArchitectureModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedArchProject, setSelectedArchProject] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'ai', label: 'Full-Stack & AI', count: projects.filter(p => p.filter === 'ai').length },
    { id: 'backend', label: 'Backend & APIs', count: projects.filter(p => p.filter === 'backend').length },
    { id: 'cms', label: 'WordPress & CMS', count: projects.filter(p => p.filter === 'cms').length },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.filter === activeFilter);

  return (
    <section id="projects" className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
              Selected Work
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2">
              Featured Case Studies & Systems
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1 max-w-xl">
              Two live real estate backends, an AI-powered grocery platform, and responsive WordPress deployments.
            </p>
          </div>

          {/* Filter Pills — horizontally scrollable on mobile */}
          <div className="w-full md:w-auto overflow-x-auto pb-1 md:pb-0 -mx-1 px-1">
            <div className="flex gap-1.5 sm:gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800 backdrop-blur-md min-w-max md:min-w-0">
              {filterTabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                    activeFilter === tab.id
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <span className="whitespace-nowrap">{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activeFilter === tab.id ? 'bg-indigo-700 text-white' : 'bg-slate-800 text-slate-500'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-5 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl sm:rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-indigo-500/5"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 p-4 sm:p-6 lg:p-8">
                
                {/* Left/Main Column: Project Details */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-5 sm:space-y-6">
                  <div>
                    {/* Badge & Category */}
                    <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                        {project.badge}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-3xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 text-sm sm:text-base mt-2.5 sm:mt-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights Bullet List */}
                    <ul className="mt-4 sm:mt-5 space-y-2 sm:space-y-2.5">
                      {project.highlights.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                          <span className="mt-1 w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack & CTAs */}
                  <div className="pt-4 border-t border-slate-800/80 space-y-4">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-slate-800/90 text-slate-300 border border-slate-700/60 text-xs font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                      <button
                        onClick={() => setSelectedArchProject(project)}
                        className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition flex items-center justify-center gap-2 border border-slate-700"
                      >
                        <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <span>System Architecture</span>
                      </button>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-xl bg-indigo-600/90 hover:bg-indigo-600 text-white text-xs font-semibold transition flex items-center justify-center gap-1.5 shadow-sm"
                        >
                          <span>Visit Live Site</span>
                          <span className="text-xs">&nearr;</span>
                        </a>
                      )}
                    </div>
                  </div>

                </div>

                {/* Right Column: Visual UI Mockup — hidden on mobile, shown on large screens */}
                <div className="hidden lg:flex lg:col-span-5 flex-col justify-center">
                  <div className="rounded-2xl bg-slate-950 border border-slate-800/90 p-4 shadow-inner">
                    
                    {/* Mockup Header Bar */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px] text-slate-500 font-mono">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        {project.id === 'ai-grocery' ? 'grocery-store.local' : 'production-api.v1'}
                      </span>
                      <span>HTTPS 200 OK</span>
                    </div>

                    {/* Mockup Content Based on Type */}
                    {project.previewType === 'grocery-demo' && (
                      <div className="pt-3 space-y-3">
                        {/* Search bar mockup */}
                        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-400">
                          <svg className="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                          <span>Search fresh groceries...</span>
                        </div>

                        {/* Category chips matching PDF */}
                        <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] font-medium">
                          {['Vegetables', 'Fruits', 'Meat', 'Dairy', 'Bakery', 'Snacks'].map((cat, idx) => (
                            <div key={idx} className="py-1.5 px-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
                              {cat}
                            </div>
                          ))}
                        </div>

                        {/* Floating AI Assistant pill */}
                        <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/30 flex items-center justify-between gap-2 text-xs">
                          <div className="flex items-center gap-2 min-w-0">
                            <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-bold flex-shrink-0">
                              AI
                            </div>
                            <div className="text-[11px] min-w-0">
                              <span className="text-indigo-300 font-medium block truncate">Store Assistant</span>
                              <div className="text-slate-400 text-[10px] truncate">What can I cook with tomatoes and paneer?</div>
                            </div>
                          </div>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono flex-shrink-0">
                            Online
                          </span>
                        </div>
                      </div>
                    )}

                    {project.previewType === 'realestate' && (
                      <div className="pt-3 space-y-3">
                        <div className="text-xs font-medium text-slate-300">Find your plot or apartment</div>
                        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-2 text-xs">
                          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                            <div className="w-full h-12 rounded-lg bg-slate-800 flex items-center justify-center text-slate-600 text-[10px]">
                              VILLA PREVIEW
                            </div>
                            <div className="font-semibold text-white">Luxury Villa</div>
                            <div className="text-[11px] text-emerald-400 font-medium">Available &bull; Details &rarr;</div>
                          </div>

                          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                            <div className="w-full h-12 rounded-lg bg-slate-800 flex items-center justify-center text-slate-600 text-[10px]">
                              PLOT PREVIEW
                            </div>
                            <div className="font-semibold text-white">Gated Plot</div>
                            <div className="text-[11px] text-emerald-400 font-medium">Ready &bull; Details &rarr;</div>
                          </div>
                        </div>

                        <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-1 p-2 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
                          <span>Admin Portal (JWT + OTP)</span>
                          <span className="text-indigo-400 font-mono">Cloudinary CDN Active</span>
                        </div>
                      </div>
                    )}

                    {project.previewType === 'simple' && (
                      <div className="pt-3 space-y-2 text-xs">
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                          <div className="text-slate-200 font-semibold">{project.title}</div>
                          <div className="text-[11px] text-slate-400 leading-relaxed">
                            {project.category} with responsive layouts, inventory syncing, and custom checkout flows.
                          </div>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 text-[10px] text-slate-500 font-mono text-center">
                          Engineered for High-Conversion & Mobile Usability
                        </div>
                      </div>
                    )}

                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Architecture Modal */}
      {selectedArchProject && (
        <ArchitectureModal
          project={selectedArchProject}
          onClose={() => setSelectedArchProject(null)}
        />
      )}
    </section>
  );
}
