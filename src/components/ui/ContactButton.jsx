"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ContactButton() {
  const [hovered, setHovered] = useState(false);
  const [animationStage, setAnimationStage] = useState("idle");
  const phone = "+91 9999108727";
  const whatsappLink = "https://wa.me/919999108727";
  const phoneLink = "tel:+919999108727";

  const handleHoverStart = () => {
    setAnimationStage("opening");
    setHovered(true);
  };

  const handleHoverEnd = () => {
    setAnimationStage("closing");
    setTimeout(() => setHovered(false), 300);
    setTimeout(() => setAnimationStage("idle"), 600);
  };

  return (
    <motion.div className="inline-block">
      <motion.div
        initial={{ width: 90 }}
        animate={{
          width: hovered ? 150 : 90,
          backgroundColor: "#c5e86c",
        }}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        transition={{
          duration: 0.6,
          delay: animationStage === "opening" ? 0.3 : 0,
        }}
        className="inline-block px-4 py-2 text-white text-[16px] font-bold text-center cursor-pointer
         bg-[#c5e86c] hover:bg-[#b0d35e] rounded-br-[20px] rounded-tr-[20px] rounded-bl-[20px] border-0 mt-[15px] whitespace-nowrap
         overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {!hovered ? (
            <motion.span
              key="callUs"
              initial={{ y: 0, opacity: 1 }}
              exit={{
                y: -40, // slide upward like curtain
                opacity: 0,
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
              className="block"
            >
              Call Us
            </motion.span>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.6,
                  duration: 0.1,
                },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.2 },
              }}
              className="flex flex-col items-start text-left space-y-2 py-1 origin-bottom" // Changed from origin-top
            >
              <motion.p
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{
                  scaleY: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.4,
                    duration: 0.3,
                  },
                }}
                className="text-green-700 text-md font-semibold origin-bottom" // Added origin-bottom
              >
                {phone}
              </motion.p>

              <motion.a
                href={whatsappLink}
                target="_blank"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{
                  scaleY: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.5,
                    duration: 0.3,
                  },
                }}
                className="text-white text-sm hover:underline origin-bottom" // Added origin-bottom
              >
                Whatsapp
              </motion.a>

              <motion.a
                href={phoneLink}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{
                  scaleY: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.6,
                    duration: 0.3,
                  },
                }}
                className="text-white text-sm hover:underline origin-bottom" // Added origin-bottom
              >
                Dial Number
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
