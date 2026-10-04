import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';

export const GuestGreeting: React.FC = () => {
  const { guestName: routeGuestName } = useParams();
  const [searchParams] = useSearchParams();
  const prefix = searchParams.get('prefix');
  const queryGuest = searchParams.get('guest');

  let displayName = '';
  if (routeGuestName) {
    displayName = decodeURIComponent(routeGuestName);
  } else if (prefix && queryGuest) {
    // Fallback for old URL structure
    if (prefix === 'Family') {
      displayName = `${queryGuest} and Family`;
    } else if (prefix === 'Dear') {
      displayName = queryGuest;
    } else {
      displayName = `${prefix} ${queryGuest}`;
    }
  }

  if (!displayName) {
    return null;
  }

  return (
    <div className="w-full bg-[#fbf8f1] flex justify-center items-center py-12 px-4 z-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl text-center flex flex-col items-center"
      >
        <h2 
          className="text-[#d28b3d] font-serif text-[clamp(1.5rem,4vw,2.5rem)] tracking-wide leading-relaxed mb-4 px-4 drop-shadow-sm"
        >
          We cordially invite {displayName} to celebrate our special day with us.
        </h2>
        
        <div className="flex items-center gap-3 mt-4 w-48 mx-auto">
          <div className="h-[1px] flex-1 bg-[#d28b3d]/50"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#d28b3d]/80"></div>
          <div className="h-[1px] flex-1 bg-[#d28b3d]/50"></div>
        </div>
      </motion.div>
    </div>
  );
};
