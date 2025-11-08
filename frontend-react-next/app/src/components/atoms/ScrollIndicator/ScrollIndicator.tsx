'use client';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ScrollIndicator() {
  return (
    <motion.div 
      className="absolute bottom-12 left-1/2 -translate-x-1/2"
      animate={{
        y: [0, 15, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <motion.div
        className="text-[#E4B441] cursor-pointer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronDown className="w-12 h-12" strokeWidth={3} />
      </motion.div>
    </motion.div>
  );
}