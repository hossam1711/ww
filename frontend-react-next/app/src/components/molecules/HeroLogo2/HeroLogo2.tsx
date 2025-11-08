'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroLogo() {
  return (
    <motion.div 
      className="text-center" 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8,
        ease: "easeOut"
      }}
    >
      <div className="inline-block relative">
        {/* Glow Effect */}
        <div
          className="absolute inset-0 bg-gradient-radial from-[#E4B441]/30 via-[#E4B441]/10 to-transparent blur-3xl"
        />
        
        {/* Logo */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 2, -2, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/logo2.svg"
            alt="Dental Lab"
            width={300}
            height={300}
            className="h-20 sm:h-32 md:h-40 w-auto mx-auto relative z-10"
            style={{ 
              filter: "drop(0 0 50px rgba(255, 224, 49, 1)) " 
            }}
            priority
          />
        </motion.div>

        {/* underline */}
        <motion.div
          className="mt-4 mx-auto"
          style={{
            width: '80%',
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #E4B441, #FFD700, #E4B441, transparent)',
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ 
            duration: 1,
            delay: 0.5,
            ease: "easeOut"
          }}
        />
        
      </div>
    </motion.div>
  );
}
