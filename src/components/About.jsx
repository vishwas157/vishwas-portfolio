import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#ff5e36] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl space-y-8 text-left"
        >
          {/* Section Label */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-white text-slate-900 font-black text-xs tracking-widest uppercase border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a]">
            {about.sectionLabel || "ABOUT ME"}
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white leading-[1.08]">
            {about.title}
          </h2>

          {/* Subtitle */}
          <div className="text-xl sm:text-2xl font-extrabold text-amber-200 tracking-wide font-heading">
            {about.subtitle}
          </div>

          {/* Body Paragraphs */}
          <div className="space-y-5 text-base sm:text-lg lg:text-xl text-white/90 font-medium leading-relaxed max-w-3xl">
            {about.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Personal Brand Closing Statement */}
          <div className="pt-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/25 text-white font-bold text-base sm:text-lg leading-snug shadow-xl inline-block max-w-3xl">
              {about.closingStatement}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

