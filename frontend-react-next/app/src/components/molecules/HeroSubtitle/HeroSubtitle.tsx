'use client';

import { motion } from 'framer-motion';

export default function HeroSubtitle() {
  return (
    <motion.p 
      className="text-white/90 text-center text-xl md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      Revolutionizing dental restoration with{' '}
      <span className="text-[#E4B441] font-bold">ExoCAD</span> integration, 
      real-time tracking, and instant online payments
    </motion.p>
  );
}