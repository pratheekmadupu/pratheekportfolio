import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onFinished: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onFinished();
          }, 600); // Small pause for aesthetic
          return 100;
        }
        // Increment with random step
        const step = Math.floor(Math.random() * 8) + 2;
        return Math.min(prev + step, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onFinished]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-[#050505] z-[9999] flex flex-col items-center justify-center p-6"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Glowing Ambient Background Orbs */}
        <div className="absolute w-[300px] h-[300px] bg-[#7B61FF] rounded-full blur-[120px] opacity-10 animate-pulse pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-md w-full">
          {/* Logo Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-2xl font-bold font-heading"
          >
            <svg
              className="w-8 h-8 text-[#00D4FF]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            <span className="text-gradient">PRATHEEK / PORTFOLIO</span>
          </motion.div>

          {/* Progress Bar Track */}
          <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden relative border border-white/5">
            <motion.div
              className="h-full bg-gradient-to-r from-[#00D4FF] via-[#7B61FF] to-[#00FFC6]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          {/* Progress Percent & Telemetry */}
          <div className="flex justify-between w-full text-xs font-mono text-[#86868B]">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.2 }}
            >
              Initializing modules...
            </motion.span>
            <span className="text-white font-semibold">{progress}%</span>
          </div>

          {/* Loading logs / simulated boot parameters */}
          <div className="h-16 w-full overflow-hidden text-[10px] font-mono text-white/20 select-none flex flex-col justify-end gap-1">
            {progress > 15 && <div>[SYS] Zero-Trust network engine loaded successfully</div>}
            {progress > 40 && <div>[R3F] Interactive 3D graphics nodes bound to canvas</div>}
            {progress > 70 && <div>[SEC] Encryption certificates verified with AWS keys</div>}
            {progress > 90 && <div>[VITE] Optimization bundle splits ready for mount</div>}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
