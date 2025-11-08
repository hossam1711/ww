'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroLogo3() {
  return (
    <motion.div
      className="text-center mt-8" 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut"
      }}
    >
      <div className="inline-block relative">
   
        <div
          className="absolute inset-0 bg-gradient-radial from-[#E4B441]/20 via-[#E4B441]/5 to-transparent blur-2xl"
        />
        
        {/* Logo3 Image */}
        <motion.div
          animate={{ 
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/logo3.svg"
            alt="Avanté Dental Lab"
            width={800}  
            height={400}  
            className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-auto mx-auto relative z-10"
            style={{ 
              filter: "drop(0 0 30px rgba(228, 180, 65, 0.5))" 
            }}
            priority
          />
        </motion.div>

        {/* underline  */}
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
