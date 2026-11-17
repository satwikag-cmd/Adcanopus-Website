import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onLoaded: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onLoaded }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Allows the authentic animated logo loop to play cleanly before smoothly fading out
    const timer = setTimeout(() => {
      setIsVisible(false);
      onLoaded();
    }, 1200);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 z-[9999999] flex items-center justify-center bg-white"
          aria-label="Loading Adcanopus"
          role="status"
        >
          {/* Authentic Logo Loader from original website */}
          <div id="status" className="flex items-center justify-center">
            <div className="spinner flex items-center justify-center w-[160px] h-[160px] sm:w-[260px] sm:h-[260px]">
              <img
                src="/assets/images/ADCLogoMain1.gif"
                alt="Adcanopus Loading..."
                className="w-full h-full object-contain pointer-events-none select-none"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

