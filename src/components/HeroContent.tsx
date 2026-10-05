import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const HeroContent: React.FC = () => {
  return (
    <section aria-label="Hero — Save the Date" className="relative min-h-[100dvh] overflow-hidden bg-[#fbf8f1]">
      {/* Background Image - fully visible without overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/ChatGPT Image Sep 23, 2026, 02_48_11 AM.png" 
          alt="Wedding Illustration"
          className="h-full w-full object-cover object-center" 
        />
      </div>

      {/* Text Overlay - Elegant Full Section Layout */}
      <div className="absolute inset-0 flex flex-col items-center justify-start z-10 pt-8 sm:pt-20 px-4">
        
        {/* Top Content */}
        <motion.div 
          className="flex flex-col items-center text-center mt-2 sm:mt-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="text-[#d28b3d] font-serif tracking-[0.2em] uppercase text-[15px] sm:text-[18px] mb-3 font-semibold" style={{ textShadow: "0 0 10px rgba(255,255,255,0.9), 1px 1px 2px rgba(0,0,0,0.1)" }}>
            SAVE THE DATE
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex items-center gap-2 w-32 mx-auto">
            <div className="h-[2px] flex-1 bg-[#d28b3d]/70"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#d28b3d]"></div>
            <div className="h-[2px] flex-1 bg-[#d28b3d]/70"></div>
          </motion.div>
        </motion.div>

        {/* Middle Content - Names */}
        <motion.div 
          className="flex flex-col items-center text-center w-full max-w-3xl mx-auto mt-2 sm:mt-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants}
            className="text-[#d28b3d] font-display font-medium leading-none mb-1 sm:mb-2"
            style={{ fontSize: "clamp(3rem, 10vw, 6rem)", textShadow: "0 0 20px rgba(255,255,255,0.9), 0 0 10px rgba(255,255,255,0.8), 2px 2px 4px rgba(0,0,0,0.1)" }}
          >
            RASHMI
          </motion.h1>
          
          <motion.span variants={itemVariants}
            className="text-[#d28b3d] font-display text-2xl sm:text-4xl my-1 sm:my-2"
            style={{ textShadow: "0 0 15px rgba(255,255,255,0.9)" }}
          >
            AND
          </motion.span>
          
          <motion.h1 variants={itemVariants}
            className="text-[#d28b3d] font-display font-medium leading-none mt-1 sm:mt-2"
            style={{ fontSize: "clamp(3rem, 10vw, 6rem)", textShadow: "0 0 20px rgba(255,255,255,0.9), 0 0 10px rgba(255,255,255,0.8), 2px 2px 4px rgba(0,0,0,0.1)" }}
          >
            THARINDU
          </motion.h1>
        </motion.div>

        {/* Bottom Content - Date (Moved higher up) */}
        <motion.div 
          className="flex flex-col items-center text-center mt-2 sm:mt-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-[#225740] font-serif whitespace-nowrap text-[12px] sm:text-xl tracking-[0.1em] sm:tracking-[0.2em] font-bold border-t-2 border-[#225740]/50 pt-4 px-4 sm:px-8" style={{ textShadow: "0 0 10px rgba(255,255,255,0.9)" }}>
            THURSDAY, NOVEMBER 19, 2026
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[#225740] text-[10px] uppercase tracking-[0.3em] font-medium" style={{ textShadow: "0 0 10px rgba(255,255,255,0.8)" }}>Scroll</span>
            <ChevronDown className="w-6 h-6 text-[#225740]" strokeWidth={1.5} />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
