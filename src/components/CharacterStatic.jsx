import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export default function CharacterStatic() {
  const { character3d } = portfolioData;
  const fallbackSrc = character3d?.fallbackImage || '/models/character-fallback.png';

  return (
    <div className="w-full h-full relative flex items-center justify-center select-none p-4">
      {/* Subtle Glow Backdrop */}
      <div className="absolute w-[18rem] h-[18rem] sm:w-[24rem] sm:h-[24rem] rounded-full bg-gradient-to-tr from-amber-300 via-orange-300 to-rose-300 opacity-50 blur-2xl pointer-events-none" />

      {/* Static Character Image Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 w-full h-full flex items-center justify-center max-w-[480px] max-h-[640px]"
      >
        <picture className="w-full h-full flex items-center justify-center">
          {/* Priority order: WebP -> PNG fallback */}
          <source srcSet="/models/character-fallback.webp" type="image/webp" />
          <img
            src={fallbackSrc}
            alt="Vishwas Suthar Avatar"
            className="w-full h-full object-contain max-h-[520px] drop-shadow-2xl pointer-events-none"
            loading="eager"
            decoding="async"
            onError={(e) => {
              // Fallback to placeholder avatar styling if image missing
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/assets/hero.png';
            }}
          />
        </picture>
      </motion.div>
    </div>
  );
}
