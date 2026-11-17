import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onLoaded: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onLoaded }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Exact brand timing: wait 700ms so the ADC animated logo is clearly visible, then start smooth exit
    const timer = setTimeout(() => {
      setIsVisible(false);
      onLoaded();
    }, 700);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999999] flex items-center justify-center bg-white"
          aria-label="Loading Adcanopus"
          role="status"
        >
          <div id="status" className="relative flex flex-col items-center justify-center">
            {/* Subtle brand glow behind logo */}
            <motion.div
              animate={{ scale: [0.95, 1.08, 0.95], opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-primary/10 rounded-full blur-2xl pointer-events-none"
            />

            {/* Original Preloader GIF */}
            <div className="spinner relative z-10 w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] flex items-center justify-center">
              <img
                src="/assets/images/ADCLogoMain1.gif"
                alt="Adcanopus Loading"
                className="w-full h-full object-contain"
                width={300}
                height={300}
              />
            </div>

            {/* Subtle loading pulse bar */}
            <div className="w-36 h-1 bg-gray-100 rounded-full overflow-hidden mt-2 relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
