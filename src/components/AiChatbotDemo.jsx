import React, { useState } from 'react';
import { mockAiChatKnowledge } from '../data/portfolioData';

export default function AiChatbotDemo() {
  const [selectedModel, setSelectedModel] = useState('Phi 3 Mini (3.8B)');
  const [showPromptInspector, setShowPromptInspector] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "Hello! I am your AI Store Assistant deployed with Docker & Ollama on Azure. I can search live MongoDB inventory, suggest recipes, and assemble your cart. What would you like to find today?"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const samplePrompts = [
    "Is fresh milk available today?",
    "What can I cook with tomatoes and paneer?",
    "Show me dairy products",
    "How does Vasanth deploy Ollama on Azure?",
    "What role-based access exists in the grocery app?"
  ];

  const handleSend = (text) => {
    if (!text.trim() || isGenerating) return;

    const userMsg = text.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsGenerating(true);

    setTimeout(() => {
      let reply = "I found several matches in the live inventory! Would you like to proceed with cart checkout or add more items?";
      const lower = userMsg.toLowerCase();

      if (lower.includes('milk') || lower.includes('dairy')) {
        reply = "Yes! Farm Fresh Milk (Aavin & Organic Farm 500ml / 1L) is currently in stock. Price: ₹32 / 500ml. Want me to add 1 unit to your cart?";
      } else if (lower.includes('paneer') || lower.includes('tomato') || lower.includes('cook')) {
        reply = "Here's an easy recipe: Paneer Butter Masala! Ingredients needed: Fresh Cottage Paneer (200g) + 3 Ripe Tomatoes + Butter & Garam Masala. Both paneer and tomatoes are in stock for 20-min delivery!";
      } else if (lower.includes('azure') || lower.includes('docker') || lower.includes('ollama')) {
        reply = "Architecture Breakdown: Ollama is packaged into a Docker container on an Azure Ubuntu VM. Azure NSG firewall rules isolate port 11434, allowing requests strictly from the internal Express.js backend. Systemd handles automatic restart if memory thresholds are exceeded.";
      } else if (lower.includes('role') || lower.includes('rbac') || lower.includes('access')) {
        reply = "The grocery platform supports 4 distinct roles: Admin (catalog & sales), Seller (inventory & dispatch), Buyer (cart & payment), and Delivery Boy (route tracking & order fulfillment), each secured with granular JWT permissions.";
      }

      setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
      setIsGenerating(false);
    }, 450);
  };

  return (
    <section id="ai-demo" className="py-16 sm:py-20 relative bg-slate-900/30 border-y border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-3">
            Interactive AI Showcase
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Experience the AI Store Assistant
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Simulated interface demonstrating how TinyLlama & Phi-3 Mini models converse with live MongoDB grocery data on an Azure VM.
          </p>
        </div>

        {/* The Interactive Simulator Terminal */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Top Bar / Controls */}
          <div className="bg-slate-900/90 border-b border-slate-800 px-4 sm:px-5 py-3 sm:py-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80"></span>
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80"></span>
              </div>
              <span className="text-[11px] sm:text-xs font-mono text-slate-300 font-semibold pl-2 border-l border-slate-700">
                ollama-service@azure-vm
              </span>
            </div>

            {/* Model Selector and Prompt Inspector Toggle */}
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <div className="flex items-center bg-slate-950 rounded-xl p-1 border border-slate-800 text-xs font-mono flex-1 sm:flex-initial justify-center">
                <button
                  onClick={() => setSelectedModel('Phi 3 Mini (3.8B)')}
                  className={`px-2.5 py-1 rounded-lg transition text-[11px] sm:text-xs ${
                    selectedModel.includes('Phi')
                      ? 'bg-indigo-600 text-white font-medium'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Phi 3 Mini
                </button>
                <button
                  onClick={() => setSelectedModel('TinyLlama (1.1B)')}
                  className={`px-2.5 py-1 rounded-lg transition text-[11px] sm:text-xs ${
                    selectedModel.includes('TinyLlama')
                      ? 'bg-indigo-600 text-white font-medium'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  TinyLlama
                </button>
              </div>

              <button
                onClick={() => setShowPromptInspector(!showPromptInspector)}
                className={`px-2.5 sm:px-3 py-1.5 rounded-xl border text-[11px] sm:text-xs font-mono transition flex-shrink-0 ${
                  showPromptInspector
                    ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                    : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white'
                }`}
              >
                {showPromptInspector ? 'Hide Prompt' : 'Inspect RAG'}
              </button>
            </div>
          </div>

          {/* Prompt Inspector Drawer */}
          {showPromptInspector && (
            <div className="bg-slate-900 border-b border-slate-800 p-3 sm:p-4 font-mono text-xs text-slate-300 space-y-2 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-slate-400 text-[10px] sm:text-[11px] gap-1">
                <span className="text-emerald-400 font-semibold">// SYSTEM PROMPT & LIVE MONGO CONTEXT</span>
                <span>Context Window: 4096 tokens</span>
              </div>
              <pre className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[10px] sm:text-[11px] text-slate-300 overflow-x-auto whitespace-pre-wrap sm:whitespace-pre">
{`[SYSTEM]
You are a helpful Store Assistant for our MERN Grocery Platform.
Live Stock Context:
- Milk (Aavin 500ml: ₹32, Qty: 45 units)
- Paneer (Fresh Dairy 200g: ₹95, Qty: 18 units)
- Tomatoes (Organic Hybrid 1kg: ₹40, Qty: 60 units)
- Amul Butter (100g: ₹58, Qty: 30 units)

Instruction: Suggest recipes, confirm stock immediately, and offer to add items to cart.`}
              </pre>
            </div>
          )}

          {/* Chat Transcript Area */}
          <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 min-h-[260px] sm:min-h-[300px] max-h-[360px] overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-2.5 sm:gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs flex-shrink-0 font-bold">
                    AI
                  </div>
                )}

                <div
                  className={`max-w-[88%] sm:max-w-[80%] rounded-2xl p-3 sm:p-4 text-xs sm:text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-indigo-600 text-white rounded-tr-none shadow-md shadow-indigo-600/20'
                      : 'bg-slate-900/90 text-slate-200 border border-slate-800 rounded-tl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
              </div>
            ))}

            {isGenerating && (
              <div className="flex gap-2.5 sm:gap-3 items-center">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs flex-shrink-0 font-bold">
                  AI
                </div>
                <div className="p-2.5 sm:p-3 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-2 text-xs text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-[11px] sm:text-xs">Streaming tokens ({selectedModel})...</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Query Suggestions — scrollable on mobile */}
          <div className="px-4 sm:px-6 py-3 bg-slate-900/50 border-t border-slate-800/80">
            <div className="text-[11px] text-slate-400 mb-2 font-medium">Quick suggestions to test:</div>
            <div className="overflow-x-auto -mx-1 px-1 pb-1">
              <div className="flex gap-1.5 sm:gap-2 min-w-max sm:min-w-0 sm:flex-wrap">
                {samplePrompts.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(prompt)}
                    className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 transition whitespace-nowrap"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Custom Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(inputValue);
            }}
            className="p-3 sm:p-4 bg-slate-900 border-t border-slate-800 flex items-center gap-2 sm:gap-3"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask grocery, recipes, or Azure architecture..."
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
            />
            <button
              type="submit"
              disabled={isGenerating || !inputValue.trim()}
              className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-medium text-xs sm:text-sm transition flex items-center gap-1.5 flex-shrink-0"
            >
              <span>Send</span>
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>

          {/* Footer metrics bar */}
          <div className="bg-slate-950 px-4 sm:px-6 py-2.5 border-t border-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[10px] sm:text-[11px] text-slate-500 font-mono gap-1">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Docker: healthy (Azure VM East US)
            </span>
            <span>Latency: ~410ms &bull; RAM: 1.8GB / 4GB</span>
          </div>

        </div>

      </div>
    </section>
  );
}
