'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import GoldenGlow from '../../atoms/GoldenGlow/GoldenGlow';

export default function Logo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href="/"
      className="relative block group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {/* Subtle Background Card - Disabled */}
      <motion.div
        className="absolute inset-0 -m-3 rounded-xl"
        animate={{
          opacity: 0,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Glow Effect - Disabled */}
      <motion.div
        animate={{
          opacity: 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <GoldenGlow isActive={false} intensity="strong" />
      </motion.div>
      
      {/* Logo Image with Smooth 3D Effect */}
      <motion.div
        className="relative z-10"
        animate={{
          rotateY: isHovered ? 8 : 0,
          y: isHovered ? -2 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ 
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <Image
          src="/Avanté logo black.png"
          alt="Avanté Logo"
          width={600}
          height={200}
          priority
          className="h-[150px] w-auto transition-all duration-300"
        />
        
        {/* Reflection Effect - Disabled */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          animate={{
            opacity: 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Bottom Accent Line - Disabled */}
      <motion.div
        className="absolute bottom-0 left-1/2 h-[2px]"
        animate={{
          width: "0%",
          x: "-50%",
          opacity: 0,
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.a>
  );
}