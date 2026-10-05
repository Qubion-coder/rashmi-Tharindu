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
          <p className="text-[#1a1005] font-serif text-sm sm:text-[18px] md:text-[22px] leading-[1.8] max-w-[95%] sm:max-w-[85%] mx-auto mb-8 sm:mb-12 drop-shadow-sm">
            Request the Honor of Your Presence<br/>
            At the Celebration of the Marriage of their beloved children<br/>
            <span className="font-semibold text-base sm:text-2xl mt-1 sm:mt-2 block">Rashmi & Tharindu</span>
          </p>

          <div className="flex flex-col gap-6 sm:gap-10 w-full max-w-[95%] sm:max-w-[80%] mx-auto items-center text-center bg-white/60 sm:bg-white/40 backdrop-blur-md p-8 sm:p-16 rounded-[2rem] sm:rounded-[3rem] border border-white/50 shadow-[0_10px_40px_rgba(0,0,0,0.1)] mt-[5%] sm:mt-[5%]">
            <div className="flex flex-col items-center gap-2 sm:gap-3 w-full">
              <CalendarDays className="w-8 h-8 sm:w-12 sm:h-12 text-[#3b2a1a] mb-1 sm:mb-2" strokeWidth={1.5} />
              <span className="text-[#333333] tracking-[0.1em] text-lg sm:text-[26px] md:text-[32px] font-semibold font-serif leading-tight">Thursday, November 19</span>
              <span className="text-[#d28b3d] tracking-[0.05em] text-sm sm:text-[16px] md:text-[20px] font-sans">The Year Two Thousand Twenty Six</span>
            </div>

            <div className="w-16 sm:w-24 h-[1px] bg-[#d28b3d]/40" />

            <div className="flex flex-col items-center gap-2 sm:gap-3 w-full">
              <Clock className="w-8 h-8 sm:w-12 sm:h-12 text-[#3b2a1a] mb-1 sm:mb-2" strokeWidth={1.5} />
              <span className="text-[#333333] tracking-[0.1em] text-lg sm:text-[26px] md:text-[32px] font-semibold font-serif leading-tight">10:00 AM - 04:00 PM</span>
              <span className="text-[#d28b3d] tracking-[0.05em] text-sm sm:text-[16px] md:text-[20px] font-sans leading-snug">
                The Poruwa Ceremony will be held at 10:20 AM
              </span>
            </div>

            <div className="w-16 sm:w-24 h-[1px] bg-[#d28b3d]/40" />

            <div className="flex flex-col items-center gap-2 sm:gap-3 w-full">
              <MapPin className="w-8 h-8 sm:w-12 sm:h-12 text-[#3b2a1a] mb-1 sm:mb-2" strokeWidth={1.5} />
              <span className="text-[#333333] tracking-[0.1em] text-lg sm:text-[26px] md:text-[32px] font-semibold font-serif leading-tight">Seetha Banquet Halls</span>
              <span className="text-[#d28b3d] tracking-[0.05em] text-sm sm:text-[16px] md:text-[20px] font-sans leading-tight">Pilimathalawa</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
