import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';
import CharacterScene from './CharacterScene';
import { portfolioData } from '../data/portfolio';

export default function Hero() {
  const { hero } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center pt-20 pb-12 overflow-hidden bg-[#f8fafc]"
    >
      {/* Energetic Background Shapes */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-amber-300/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] rounded-full bg-cyan-200/50 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-orange-300/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-h-[calc(100vh-5rem)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Column: Bold Asymmetrical Typography */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 flex flex-col justify-center space-y-6 text-left"
        >
          {/* Main Heading */}
          <div className="space-y-2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl sm:text-7xl xl:text-8xl font-black tracking-tight text-slate-900 font-heading leading-[0.95]"
            >
              {hero.greeting}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block pt-2"
            >
              <span className="text-2xl sm:text-4xl font-extrabold text-[#ff5e36] font-heading tracking-wide">
                {hero.subtitle}
              </span>
            </motion.div>
          </div>

          {/* Minimal Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl sm:text-2xl text-slate-700 font-bold max-w-lg leading-relaxed"
          >
            {hero.intro}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4"
          >
            <a
              href={hero.primaryCta.href}
              className="w-full sm:w-auto px-9 py-4 rounded-2xl btn-bold-primary text-sm tracking-wider uppercase flex items-center justify-center gap-3 group"
            >
              <span>{hero.primaryCta.text}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={hero.secondaryCta.href}
              className="w-full sm:w-auto px-9 py-4 rounded-2xl btn-bold-secondary text-sm tracking-wider uppercase flex items-center justify-center gap-3 group"
            >
              <span>{hero.secondaryCta.text}</span>
              <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Prominent Large 3D Character Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 h-[520px] sm:h-[620px] lg:h-[720px] w-full relative flex items-center justify-center"
        >
          {/* Subtle Graphic Backdrop Blob */}
          <div className="absolute w-[22rem] h-[22rem] sm:w-[28rem] sm:h-[28rem] rounded-full bg-gradient-to-tr from-amber-300 via-orange-300 to-rose-300 opacity-60 blur-xl pointer-events-none" />

          {/* Interactive R3F Scene */}
          <CharacterScene />
        </motion.div>

      </div>
    </section>
  );
}
