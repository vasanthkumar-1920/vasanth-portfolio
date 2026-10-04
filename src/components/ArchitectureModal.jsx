import React from 'react';

export default function ArchitectureModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase">
              System Architecture & Flow
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition flex-shrink-0"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Architecture Diagram Visualization */}
        <div className="py-5 sm:py-6 space-y-5 sm:space-y-6">
          {project.id === 'ai-grocery' ? (
            <div className="space-y-4">
              <div className="text-xs text-slate-300">
                End-to-end cloud and microservice communication pipeline:
              </div>

              {/* Step 1: Client & Roles */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px]">
                <div className="p-2.5 rounded-xl bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-medium">
                  Admin Portal
                </div>
                <div className="p-2.5 rounded-xl bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-medium">
                  Seller Dashboard
                </div>
                <div className="p-2.5 rounded-xl bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-medium">
                  Buyer App
                </div>
                <div className="p-2.5 rounded-xl bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-medium">
                  Delivery Agent
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="text-slate-500 font-mono text-[11px] sm:text-xs flex items-center gap-1 text-center">
                  <span>&darr;</span> Secure JWT & REST APIs (50+ Endpoints) <span>&darr;</span>
                </div>
              </div>

              {/* Step 2: Backend API & AI Gateway */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 text-xs space-y-1">
                  <div className="font-semibold text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></span>
                    <span>Node.js & Express API Gateway</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Role-Based Access Control, Razorpay webhook signature verification, cart & orders.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/90 border border-indigo-500/40 text-xs space-y-1">
                  <div className="font-semibold text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"></span>
                    <span>Azure VM & Docker (Ollama)</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    TinyLlama & Phi 3 Mini running locally in isolated containers, secured by Azure NSG rules.
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="text-slate-500 font-mono text-[11px] sm:text-xs flex items-center gap-1 text-center">
                  <span>&darr;</span> Live Context Injection & DB Queries <span>&darr;</span>
                </div>
              </div>

              {/* Step 3: MongoDB Database */}
              <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                <div>
                  <div className="font-semibold text-emerald-300">MongoDB Database (Optimized Queries)</div>
                  <p className="text-slate-400 text-[11px] mt-0.5 leading-relaxed">
                    Compound indexed collections for instant product stock lookup & ~25% lower latency.
                  </p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-mono flex-shrink-0">
                  ~25% Faster
                </span>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs space-y-2">
                <div className="font-semibold text-white">Backend Infrastructure Highlights:</div>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 flex-shrink-0 mt-0.5">&bull;</span>
                    <div><strong>Cloudinary Asset Pipeline:</strong> Handles high-resolution property photography, compression, and responsive CDN delivery.</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 flex-shrink-0 mt-0.5">&bull;</span>
                    <div><strong>Cryptographic Auth:</strong> JWT access tokens paired with timed OTP verification for administrative modifications.</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 flex-shrink-0 mt-0.5">&bull;</span>
                    <div><strong>Inquiry Engine:</strong> Asynchronous dispatch for property contact, lead tracking, and newsletter subscriptions.</div>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Tech Badges & Footer */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t, idx) => (
              <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                {t}
              </span>
            ))}
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition text-center"
          >
            Close View
          </button>
        </div>

      </div>
    </div>
  );
}
