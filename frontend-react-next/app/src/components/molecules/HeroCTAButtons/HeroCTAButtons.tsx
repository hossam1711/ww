'use client';

import { motion } from 'framer-motion';
import { Upload, ActivitySquare } from 'lucide-react';
import Button from '../../atoms/Button/Button';

export default function HeroCTAButtons() {
  return (
 <motion.div 
      className="flex flex-col sm:flex-row items-start justify-end gap-6 mt-12 mr-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.8 }}
    >
      <div className="flex items-center gap-3">
        <Upload className="w-5 h-5 text-[#E4B441]" />
        <Button variant="solid">
          Upload Your Case Now
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <ActivitySquare className="w-5 h-5 text-[#E4B441]" />
        <Button variant="outline">
          Track Manufacturing Process
        </Button>
      </div>
    </motion.div>
  );
}