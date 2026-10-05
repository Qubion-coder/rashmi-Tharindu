import React from 'react';
import { motion } from 'motion/react';
import { Navigation, MapPin } from 'lucide-react';

export const Location: React.FC = () => {
  const mapUrl = `https://maps.google.com/maps?q=Seetha%20Uthsawa%20Shalawa%2C%20Pilimathalawa&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const liveLocationUrl = "https://maps.app.goo.gl/vFrsLct5QXRgxPov9";

  return (
    <section className="relative w-full overflow-hidden py-20 lg:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/ChatGPT Image Aug 11, 2026, 01_19_32 AM.webp" 
          alt="Location Background"
          className="w-full h-full object-cover object-center" 
        />
        {/* Light elegant overlay to ensure text remains perfectly readable */}
        <div className="absolute inset-0 bg-[#fdfaf5]/40 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-[75rem] mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Elegant Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-12 sm:w-20 h-[1px] bg-[#d28b3d]/60" />
            <span className="text-[#d28b3d] uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold font-sans drop-shadow-sm">
              The Venue
            </span>
            <div className="w-12 sm:w-20 h-[1px] bg-[#d28b3d]/60" />
          </div>
          <h2 className="text-[#3b2a1a] font-serif text-4xl sm:text-5xl lg:text-[4rem] tracking-tight leading-none drop-shadow-sm mb-3">
            Seetha Banquet Halls
          </h2>
          <p className="text-[#1a1005] font-serif text-lg sm:text-2xl tracking-widest text-[#3b2a1a]/80">
            Pilimathalawa
          </p>
        </motion.div>

        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center">
          
          {/* Location Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-4 sm:border-8 border-white bg-white"
          >
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDJS9gg_02RrfTyKLhcep7EggukcY5ZHPngmk7izkoM79sg2Dc-byj-po&s=10" 
              alt="Seetha Banquet Halls" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Stunning Map Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] relative group rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-4 sm:border-8 border-white bg-white"
          >
            {/* Subtle overlay to blend map perfectly */}
            <div className="absolute inset-0 bg-[#d28b3d]/10 mix-blend-multiply pointer-events-none z-10 transition-opacity duration-700 group-hover:opacity-0" />
            
            <iframe
              title="Seetha Banquet Halls Location"
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full object-cover filter contrast-[1.05] saturate-[1.1] opacity-90 group-hover:opacity-100 transition-all duration-700"
            />

            {/* Floating Location Pill */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 bg-white/90 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg border border-[#3b2a1a]/10 flex items-center gap-2 sm:gap-3">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#d28b3d]" />
              <span className="text-[#3b2a1a] text-[10px] sm:text-xs font-semibold uppercase tracking-widest">
                Live Map
              </span>
            </div>
          </motion.div>

        </div>

        {/* Elegant Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 sm:mt-16"
        >
          <a
            href={liveLocationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 sm:gap-4 bg-transparent border border-[#3b2a1a] text-[#3b2a1a] px-8 sm:px-12 py-4 sm:py-5 rounded-full font-sans tracking-[0.2em] text-xs sm:text-sm uppercase hover:bg-[#3b2a1a] hover:text-[#fdfaf5] hover:shadow-xl transition-all duration-500 active:scale-95 group"
          >
            <Navigation className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-45 transition-transform duration-500" />
            View Location
          </a>
        </motion.div>

      </div>
    </section>
  );
};
