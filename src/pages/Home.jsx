import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo, projects } from '../data/portfolioData';
import AiChatbotDemo from '../components/AiChatbotDemo';

const ticker = ['MongoDB', 'Express', 'React', 'Node.js', 'Docker', 'Azure', 'Ollama', 'REST APIs', 'JWT', 'Razorpay'];
const stats = [['2 yr', 'Professional experience'], ['50+', 'API endpoints built'], ['~25%', 'Faster database queries']];

export default function Home() {
  const featured = projects.slice(0, 3);
  return (
    <>
      {/* Hero */}
      <section className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-14 sm:pb-20">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] sm:text-xs uppercase tracking-[0.18em] text-slate-400">
            <span className="w-2 h-2 bg-emerald-400"></span>
            {personalInfo.status}<span className="text-slate-600">/</span>{personalInfo.location}
          </p>
          <h1 className="font-display mt-6 text-[2.8rem] xs:text-6xl sm:text-7xl lg:text-[7.5rem] font-semibold leading-[0.95] tracking-tight text-slate-50">
            I build <em className="font-normal text-indigo-500">full-stack</em> products with AI.
          </h1>
          <div className="mt-10 grid lg:grid-cols-12 gap-8 items-end">
            <p className="lg:col-span-6 text-base sm:text-lg text-slate-300 leading-relaxed">{personalInfo.bio}</p>
            <div className="lg:col-span-6 flex flex-wrap gap-3 lg:justify-end">
              <Link to="/work" className="px-6 py-3 bg-indigo-500 text-slate-950 font-semibold text-sm shadow-[4px_4px_0_0_#EDE8DD] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#EDE8DD] transition-all">View my work →</Link>
              <Link to="/contact" className="px-6 py-3 border border-slate-600 font-semibold text-sm hover:border-slate-100 transition-colors">Contact me</Link>
            </div>
          </div>
        </div>

        {/* Ticker */}
        <div className="border-t border-slate-800 overflow-hidden py-4 bg-slate-900">
          <div
            className="flex w-max animate-marquee whitespace-nowrap hover:[animation-play-state:paused]"
            style={{ animationDuration: '160s' }}
          >
            {[...ticker, ...ticker, ...ticker, ...ticker].map((t, i) => (
              <span key={i} className="font-display text-2xl sm:text-3xl px-6 text-slate-300">
                {t}<span className="text-indigo-500 pl-12">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-800">
        <dl className="max-w-6xl mx-auto grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
          {stats.map(([v, l]) => (
            <div key={l} className="px-4 sm:px-8 py-8 sm:py-12">
              <dd className="font-display text-6xl sm:text-7xl text-slate-50">{v}</dd>
              <dt className="mt-2 text-sm text-slate-400">{l}</dt>
            </div>
          ))}
        </dl>
      </section>

      {/* Featured work */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-indigo-500">Selected work</p>
            <h2 className="font-display mt-3 text-4xl sm:text-5xl font-semibold">Featured projects</h2>
          </div>
          <Link to="/work" className="hidden sm:block text-sm text-slate-300 underline underline-offset-4 hover:text-indigo-400">All projects →</Link>
        </div>
        {featured.map((p, i) => (
          <Link key={p.id} to={`/work/${p.id}`}
            className="group grid grid-cols-12 gap-4 items-center border-t border-slate-700 py-8 sm:py-10 hover:bg-slate-900 transition-colors px-2">
            <span className="col-span-2 sm:col-span-1 font-display text-3xl sm:text-5xl text-indigo-500">0{i + 1}</span>
            <div className="col-span-10 sm:col-span-8">
              <h3 className="font-display text-2xl sm:text-4xl font-semibold group-hover:translate-x-2 transition-transform">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-400 max-w-xl">{p.category} · {p.badge}</p>
            </div>
            <span className="hidden sm:block col-span-3 text-right text-sm text-slate-300 group-hover:text-indigo-400">View case study →</span>
          </Link>
        ))}
        <div className="border-t border-slate-700"></div>
      </section>

      <AiChatbotDemo />

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="bg-slate-100 text-slate-950 px-6 sm:px-14 py-12 sm:py-16">
          <h2 className="font-display text-4xl sm:text-6xl font-semibold leading-none">Let's build something.</h2>
          <p className="mt-4 max-w-md text-slate-700">I'm looking for my next MERN or AI-integrated development role.</p>
          <Link to="/contact" className="mt-8 inline-block px-6 py-3 bg-slate-950 text-slate-50 text-sm font-semibold hover:bg-indigo-600 transition-colors">Get in touch →</Link>
        </div>
      </section>
    </>
  );
}
