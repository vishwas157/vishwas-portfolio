import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Building2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 relative overflow-hidden bg-[#3b82f6] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white text-slate-900 font-black text-xs tracking-widest uppercase border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] mb-3">
            ACADEMIC
          </span>
          <h2 className="text-4xl sm:text-6xl font-black font-heading tracking-tight text-white">
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white text-slate-900 border-2 border-slate-900 p-8 rounded-3xl shadow-[6px_6px_0px_#0f172a] max-w-2xl flex items-start gap-6"
        >
          <div className="w-14 h-14 rounded-2xl bg-amber-300 border-2 border-slate-900 flex items-center justify-center shrink-0 shadow-[3px_3px_0px_#0f172a]">
            <GraduationCap className="w-7 h-7 text-slate-900" />
          </div>

          <div className="space-y-2">
            <h3 className="text-3xl font-black font-heading">
              {education.degree}
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-base font-extrabold text-slate-700">
              <div className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#ff5e36]" />
                <span>{education.institution}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#3b82f6]" />
                <span>{education.location}</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
