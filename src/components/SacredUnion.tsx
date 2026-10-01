import React from 'react';
import { motion } from 'motion/react';
import { CalendarDays, Clock, MapPin } from 'lucide-react';

export const SacredUnion: React.FC = () => {
  return (
    <div className="w-full flex justify-center bg-[#fdfaf5] overflow-hidden">
      <div 
        className="relative w-full max-w-[862px] aspect-[862/1824]"
        style={{
          backgroundImage: `url('/ChatGPT Image Sep 24, 2026, 10_33_37 PM.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-[18%] left-0 w-full text-center flex flex-col items-center px-[10%]"
        >
          <span className="text-[#3b2a1a] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-sm sm:text-[20px] md:text-[24px] font-semibold font-serif mb-1 sm:mb-0 drop-shadow-sm">
            The Sacred
          </span>
          <h2 className="text-[#3b2a1a] font-serif text-5xl sm:text-[6rem] md:text-[7rem] tracking-tight leading-none uppercase mb-6 sm:mb-8 drop-shadow-sm">
            Union
          </h2>

          <span className="text-[#1a1005] uppercase tracking-[0.15em] text-xs sm:text-[16px] md:text-[18px] font-semibold font-sans mb-1 sm:mb-2 drop-shadow-sm">
            A Celebration Of
          </span>
          <h3 className="text-[#3b2a1a] font-display text-4xl sm:text-[4.5rem] md:text-[5rem] tracking-tight leading-none italic drop-shadow-sm mb-6 sm:mb-12">
            Tradition & Love
          </h3>

          <p className="text-[#1a1005] font-serif text-sm sm:text-[18px] md:text-[22px] leading-[1.8] max-w-[95%] sm:max-w-[85%] mx-auto mb-8 sm:mb-16 drop-shadow-sm">
            Request the Honor of Your Presence<br/>
            At the Celebration of the Marriage of their beloved children<br/>
            <span className="font-semibold text-base sm:text-2xl mt-1 sm:mt-2 block">Harshani & Madhawa</span>
          </p>

          <div className="flex flex-col gap-4 sm:gap-8 w-full max-w-[90%] sm:max-w-[75%] mx-auto items-start text-left bg-white/30 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none p-4 sm:p-0 rounded-2xl border border-white/40 sm:border-none shadow-sm sm:shadow-none">
            <div className="flex items-center gap-3 sm:gap-6 w-full">
              <div className="w-10 h-10 sm:w-[55px] sm:h-[55px] rounded-full border border-[#3b2a1a] flex items-center justify-center flex-shrink-0 bg-[#fdfaf5]/50 sm:bg-transparent">
                <CalendarDays className="w-4 h-4 sm:w-[28px] sm:h-[28px] text-[#3b2a1a]" />
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-[#333333] uppercase tracking-[0.1em] text-xs sm:text-[18px] md:text-[20px] font-semibold font-serif leading-tight mb-0.5">Thursday, November 19</span>
                <span className="text-[#d28b3d] uppercase tracking-[0.05em] text-[9px] sm:text-[15px] md:text-[16px] font-sans">The Year Two Thousand Twenty Six</span>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-6 w-full">
              <div className="w-10 h-10 sm:w-[55px] sm:h-[55px] rounded-full border border-[#3b2a1a] flex items-center justify-center flex-shrink-0 bg-[#fdfaf5]/50 sm:bg-transparent mt-1">
                <Clock className="w-4 h-4 sm:w-[28px] sm:h-[28px] text-[#3b2a1a]" />
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-[#333333] uppercase tracking-[0.1em] text-xs sm:text-[18px] md:text-[20px] font-semibold font-serif leading-tight mb-0.5 sm:mb-1">10:00 AM - 04:00 PM</span>
                <span className="text-[#d28b3d] tracking-[0.05em] text-[10px] sm:text-[15px] md:text-[16px] font-sans leading-snug">
                  The Poruwa Ceremony will be held at 10:20 AM
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-6 w-full">
              <div className="w-10 h-10 sm:w-[55px] sm:h-[55px] rounded-full border border-[#3b2a1a] flex items-center justify-center flex-shrink-0 bg-[#fdfaf5]/50 sm:bg-transparent">
                <MapPin className="w-4 h-4 sm:w-[28px] sm:h-[28px] text-[#3b2a1a]" />
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-[#333333] uppercase tracking-[0.1em] text-xs sm:text-[18px] md:text-[20px] font-semibold font-serif leading-tight mb-0.5 sm:mb-1">Seetha Banquet Halls</span>
                <span className="text-[#d28b3d] uppercase tracking-[0.05em] text-[9px] sm:text-[15px] md:text-[16px] font-sans leading-tight">Pilimathalawa</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
