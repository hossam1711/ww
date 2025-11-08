'use client';

import { motion } from 'framer-motion';

export default function HeroHeading() {
  return (
    <motion.h1 
      className="text-3xl md:text-7xl font-black text-center mb-8 leading-tight"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      <span className="text-white">Egypt&apos;s First </span>
      <motion.span 
        className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#E4B441] to-[#C39321]"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      >
        Digital Dental Lab
      </motion.span>
    </motion.h1>
  );
}