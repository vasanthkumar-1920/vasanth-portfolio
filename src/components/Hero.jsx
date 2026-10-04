import React, { useState } from 'react';
import { personalInfo, mockAiChatKnowledge } from '../data/portfolioData';

export default function Hero() {
  const [activeChatIndex, setActiveChatIndex] = useState(0);
  const [customInput, setCustomInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'user', text: mockAiChatKnowledge[0].prompt },
    { role: 'assistant', text: mockAiChatKnowledge[0].response }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSelectPrompt = (item, index) => {
    setActiveChatIndex(index);
    setIsTyping(true);
    setMessages(prev => [
      ...prev,
      { role: 'user', text: item.prompt }
    ]);

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', text: item.response }
      ]);
      setIsTyping(false);
    }, 450);
  };

  const handleSendCustom = (e) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    const userText = customInput;
    setCustomInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsTyping(true);

    setTimeout(() => {
      let reply = "I'm Vasanth's AI Grocery Assistant preview. In the live Azure VM, I query MongoDB inventory in real-time with Phi-3 Mini! Try clicking one of the preset prompts above.";
      const lower = userText.toLowerCase();
      if (lower.includes('milk') || lower.includes('dairy')) {
        reply = "Fresh organic milk and dairy essentials are stocked and ready for immediate delivery!";
      } else if (lower.includes('azure') || lower.includes('docker') || lower.includes('ollama')) {
        reply = "Deployed via Docker on Azure Ubuntu VM with NSG rules, port mapping, and systemd watchdog for 99.9% uptime.";
      } else if (lower.includes('contact') || lower.includes('hire') || lower.includes('email')) {
        reply = `You can reach Vasanth directly at ${personalInfo.email} or call ${personalInfo.phone}.`;
      }

      setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
      setIsTyping(false);
    }, 500);
  };

  return (
    <section id="about" className="relative pt-24 pb-14 sm:pt-36 sm:pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] xs:w-[400px] sm:w-[600px] h-[200px] sm:h-[350px] bg-indigo-600/15 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-0 w-[150px] sm:w-[350px] h-[150px] sm:h-[350px] bg-cyan-500/10 blur-[60px] sm:blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Intro */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 shadow-sm backdrop-blur-md max-w-full overflow-hidden">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium tracking-wide truncate text-[11px] xs:text-xs">{personalInfo.status}</span>
              <span className="text-slate-600 flex-shrink-0">&bull;</span>
              <span className="text-slate-400 flex items-center gap-1 flex-shrink-0 text-[11px] xs:text-xs">
                <svg className="w-3 h-3 text-slate-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Hosur, TN
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[1.75rem] xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Hi, I'm <span className="text-white">{personalInfo.name}</span>. <br className="hidden xs:inline" />
              I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-300 to-cyan-300">full-stack products</span> with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-300">AI</span>.
            </h1>

            {/* Bio paragraph */}
            <p className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl font-normal">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-row xs:flex-wrap items-stretch xs:items-center gap-2.5 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <span>View my work</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <span>Contact me</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 font-medium text-sm transition flex items-center justify-center gap-1.5"
              >
                <span>Download Resume</span>
                <span className="text-base leading-none">&darr;</span>
              </a>
            </div>

            {/* Metrics Row */}
            <div className="pt-5 sm:pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-2 sm:gap-4 max-w-xl">
              <div className="text-center xs:text-left">
                <div className="text-lg xs:text-2xl sm:text-3xl font-extrabold text-white tracking-tight">1+ yr</div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5 leading-tight">Experience</div>
              </div>
              <div className="text-center xs:text-left">
                <div className="text-lg xs:text-2xl sm:text-3xl font-extrabold text-indigo-400 tracking-tight">50+</div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5 leading-tight">API Endpoints</div>
              </div>
              <div className="text-center xs:text-left">
                <div className="text-lg xs:text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight">~25%</div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5 leading-tight">Faster Queries</div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive AI Assistant Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-4 sm:p-5 shadow-2xl shadow-black/60 backdrop-blur-xl">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                      <span className="truncate">Store Assistant</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono flex-shrink-0">Live Demo</span>
                    </h3>
                    <p className="text-[11px] text-slate-400 font-mono truncate">
                      Powered by TinyLlama &bull; Phi 3 Mini
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                </div>
              </div>

              {/* Chat Message Box */}
              <div className="space-y-3 min-h-[160px] max-h-[220px] overflow-y-auto pr-1 text-xs">
                {messages.slice(-4).map((msg, i) => (
                  <div
                    key={i}
                    className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[92%] rounded-xl px-3 py-2.5 leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-indigo-600 text-white rounded-br-none'
                          : 'bg-slate-800/90 text-slate-200 border border-slate-700/60 rounded-bl-none shadow-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-1.5 text-slate-400 bg-slate-800/60 w-fit px-3 py-1.5 rounded-xl text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]"></span>
                    <span className="text-[11px] ml-1 text-slate-400">Thinking...</span>
                  </div>
                )}
              </div>

              {/* Quick Chip Prompts */}
              <div className="pt-3 border-t border-slate-800/70 mt-3">
                <div className="text-[11px] text-slate-400 font-medium mb-2">Try asking:</div>
                <div className="flex flex-wrap gap-1.5">
                  {mockAiChatKnowledge.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectPrompt(item, idx)}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700/80 border border-slate-700/50 text-slate-300 hover:text-white transition text-left"
                    >
                      {item.prompt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendCustom} className="mt-3 flex items-center gap-2">
                <input
                  type="text"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder="Ask the AI grocery assistant..."
                  className="flex-1 bg-slate-950/80 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition min-w-0"
                />
                <button
                  type="submit"
                  className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition flex-shrink-0 flex items-center justify-center"
                  aria-label="Send query"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>

              {/* Bottom footer badge */}
              <div className="mt-2 text-center text-[10px] text-slate-500">
                Deployed on Azure VM with Docker &bull; NSG Secured
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
