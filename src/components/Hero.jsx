import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Hero() {
  const { hero, characterDoodle } = portfolioData;
  const imagePath = characterDoodle?.imagePath || '/images/vishwas-doodle.png';

  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(motionQuery.matches);

    const handleMotionChange = (e) => setReducedMotion(e.matches);
    motionQuery.addEventListener('change', handleMotionChange);

    return () => motionQuery.removeEventListener('change', handleMotionChange);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] w-full flex items-center justify-center pt-20 pb-12 overflow-hidden bg-[#f8fafc]"
    >
      {/* Energetic Background Shapes */}
      <div className="absolute top-10 left-10 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-amber-300/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[24rem] sm:w-[30rem] h-[24rem] sm:h-[30rem] rounded-full bg-cyan-200/50 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-orange-300/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 items-center justify-center relative z-10 py-6 lg:py-0">
        
        {/* Left / Top Column: Typography, Mobile Character, and Action Buttons */}
        <div className="w-full lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left">
          
          {/* Greeting & Subtitle */}
          <div className="space-y-2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight text-slate-900 font-heading leading-[0.95]"
            >
              {hero.greeting}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block pt-2"
            >
              <span className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#ff5e36] font-heading tracking-wide">
                {hero.subtitle}
              </span>
            </motion.div>
          </div>

          {/* Mobile & Tablet Character Image (Visible only below lg breakpoint) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="block lg:hidden w-full my-2 flex items-center justify-center relative"
          >
            {/* Subtle Graphic Backdrop Blob */}
            <div className="absolute w-[16rem] h-[16rem] sm:w-[22rem] sm:h-[22rem] rounded-full bg-gradient-to-tr from-amber-300 via-orange-300 to-rose-300 opacity-60 blur-xl pointer-events-none" />

            <motion.div
              animate={reducedMotion ? {} : { y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="relative z-10 w-full flex items-center justify-center p-2"
            >
              <img
                src={imagePath}
                alt={characterDoodle?.altText || 'Vishwas Suthar Avatar'}
                className="w-[72vw] sm:w-[55vw] max-w-[280px] sm:max-w-[320px] h-auto max-h-[380px] sm:max-h-[460px] object-contain drop-shadow-2xl select-none pointer-events-none"
                loading="eager"
              />
            </motion.div>
          </motion.div>

          {/* Intro Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-2xl text-slate-700 font-bold max-w-lg leading-relaxed mx-auto lg:mx-0"
          >
            {hero.intro}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 sm:pt-4"
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
        </div>

        {/* Desktop Character Column (Visible only on lg breakpoint and above) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex lg:col-span-5 w-full h-[620px] xl:h-[700px] relative items-center justify-center"
        >
          {/* Subtle Graphic Backdrop Blob */}
          <div className="absolute w-[24rem] h-[24rem] xl:w-[28rem] xl:h-[28rem] rounded-full bg-gradient-to-tr from-amber-300 via-orange-300 to-rose-300 opacity-60 blur-2xl pointer-events-none" />

          {/* Floating VISHWAS Character Image */}
          <motion.div
            animate={reducedMotion ? {} : { y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="relative z-10 w-full h-full flex items-center justify-center p-4"
          >
            <img
              src={imagePath}
              alt={characterDoodle?.altText || 'Vishwas Suthar Avatar'}
              className="w-full max-w-[420px] xl:max-w-[460px] h-auto max-h-[620px] xl:max-h-[680px] object-contain drop-shadow-2xl select-none pointer-events-none"
              loading="eager"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
