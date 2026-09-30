import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen({ progress = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07090e] text-white px-4"
    >
      <div className="relative flex flex-col items-center max-w-sm w-full text-center">
        {/* Animated Glow Halo */}
        <div className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 blur-3xl opacity-30 animate-pulse" />

        {/* Brand Logo/Initials */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-6 text-3xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-cyan-400 font-heading"
        >
          VISHWAS SUTHAR
        </motion.div>

        {/* Loading Spinner ring */}
        <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-indigo-500/20" />
          <motion.div 
            className="absolute inset-0 rounded-full border-t-2 border-r-2 border-cyan-400"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          />
          <span className="text-xs font-mono text-cyan-300 font-medium">
            {Math.min(100, Math.round(progress))}%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden mb-3 border border-white/5">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(100, Math.round(progress))}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>

        <p className="text-xs tracking-wider text-slate-400 uppercase font-mono">
          Loading 3D Experience...
        </p>
      </div>
    </motion.div>
  );
}
