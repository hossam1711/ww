'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'outline' | 'solid';
  onClick?: () => void;
}

export default function Button({ children, variant = 'solid', onClick }: ButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  const variants = {
    outline: {
      default: "border-2 border-[#E4B441] text-[#E4B441] bg-transparent",
      hover: "bg-[#E4B441] text-black",
    },
    solid: {
      default: "bg-gradient-to-r from-[#E4B441] via-[#D4A431] to-[#C39321] text-black",
      hover: "from-[#C39321] via-[#D4A431] to-[#E4B441]",
    }
  };

  return (
    <motion.button
      onClick={onClick}
      className={`px-8 py-3 rounded-xl font-semibold relative overflow-hidden ${variants[variant].default}`}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(228,180,65,0.4)",
        rotateX: 5,
      }}
      whileTap={{ 
        scale: 0.95,
        rotateX: -5,
      }}
      onTapStart={() => setIsPressed(true)}
      onTapCancel={() => setIsPressed(false)}
      style={{ 
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        animate={{
          x: isPressed ? ["-100%", "200%"] : "-100%",
        }}
        transition={{ duration: 0.6 }}
      />
      
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}