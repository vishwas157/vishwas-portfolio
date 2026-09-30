import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const badgeBgs = [
  'bg-amber-300 text-slate-900',
  'bg-cyan-300 text-slate-900',
  'bg-rose-300 text-slate-900',
  'bg-purple-300 text-slate-900',
  'bg-emerald-300 text-slate-900',
  'bg-blue-300 text-slate-900',
  'bg-orange-300 text-slate-900',
  'bg-lime-300 text-slate-900',
  'bg-yellow-300 text-slate-900',
];

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#f1f5f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#0f172a] text-white font-black text-xs tracking-widest uppercase mb-3 shadow-[3px_3px_0px_#ff5e36]">
            TOOLKIT
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-slate-900 font-heading tracking-tight">
            Skills & Tools
          </h2>
        </motion.div>

        {/* Visual Graphic Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {skills.items.map((skill, idx) => {
            const bgClass = badgeBgs[idx % badgeBgs.length];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`p-6 rounded-2xl border-2 border-slate-900 shadow-[5px_5px_0px_#0f172a] ${bgClass} hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_#0f172a] transition-all`}
              >
                <span className="text-xs font-mono font-black opacity-70">
                  0{idx + 1}
                </span>
                <h3 className="text-2xl font-black font-heading mt-2">
                  {skill.name}
                </h3>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
