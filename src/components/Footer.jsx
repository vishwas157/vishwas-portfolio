import React from 'react';
import { ChevronUp, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-8 bg-[#0f172a] text-white border-t-2 border-slate-900 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
        
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-[#ff5e36]" />
          <span>
            Built by <strong className="text-white font-bold">{portfolioData.personal.name}</strong>
          </span>
        </div>

        <div>
          © {currentYear} Vishwas Suthar
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl btn-bold-primary text-xs uppercase"
          aria-label="Scroll to top of page"
        >
          <span>Top</span>
          <ChevronUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
