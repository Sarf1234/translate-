'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function ContactButton() {
  const [hovered, setHovered] = useState(false);
  const phone = '+91 9999108727';
  const whatsappLink = 'https://wa.me/919999108727';
  const phoneLink = 'tel:+919999108727';

  return (
    <motion.div
      className="inline-block"
    >
      <motion.div
        initial={{ width: "auto", height: 'auto' }}
        animate={{
          width: hovered ? 150 : 90,
          backgroundColor: hovered ? '#c5e86c' : '#c5e86c',
        }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        transition={{ duration: 0.3 }}
        className="inline-block px-4 py-2 text-white text-[16px] font-bold text-center cursor-pointer
         bg-[#c5e86c] hover:bg-[#b0d35e] rounded-br-[20px] rounded-tr-[20px] rounded-bl-[20px] border-0 mt-[15px] whitespace-nowrap"
      >
        <AnimatePresence mode="wait">
          {hovered ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-start text-left space-y-2 py-1"
            >
              <p className="text-green-700 text-md font-semibold">{phone}</p>
              <a
                href={whatsappLink}
                target="_blank"
                className="text-white text-sm hover:underline"
              >
                Whatsapp
              </a>
              <a
                href={phoneLink}
                className="text-white text-sm hover:underline"
              >
                Dial Number
              </a>
            </motion.div>
          ) : (
            <motion.span
              key="text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Call Us
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
