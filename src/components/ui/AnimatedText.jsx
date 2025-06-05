import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedText = ({
  englishText,
  hindiText,
  englishClassName = "",
  hindiClassName = "",
  containerClassName = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [coversVisible, setCoversVisible] = useState({
    horizontal: true,
    vertical: true
  });

  const springSettings = {
    type: "tween",
  };

  return (
    <div className={`relative`}>
      <motion.div
        className="relative inline-block"
        initial={{ y: 10 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true, amount: 1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Text container */}
        <div className="relative inline-block">
          {/* Top-to-bottom cover */}
          {coversVisible.horizontal && (
  <motion.div
    className={`absolute inset-0 origin-right bg-[#00296B] z-10 ${containerClassName}`}
    initial={{ scaleX: 1 }}
    whileInView={{ scaleX: 0 }}
    transition={{ 
      duration: 0.6,
      delay: 0.1,
      ease: [0.25, 0.8, 0.9, 1]
    }}
    viewport={{ once: true }}
    onAnimationComplete={() => setCoversVisible(p => ({ ...p, horizontal: false }))}
  />
)}


          {/* Bottom-to-top cover */}
          {coversVisible.vertical && (
  <motion.div
    className={`absolute inset-0 origin-bottom bg-[#00296B] z-10 ${containerClassName}`}
    initial={{ scaleY: 1 }}
    whileInView={{ scaleY: 0 }}
    transition={{
      duration: 0.6,
      delay: 0.3,
      ease: [0.25, 0.8, 0.9, 1]
    }}
    viewport={{ once: true }}
    onAnimationComplete={() => setCoversVisible(p => ({ ...p, vertical: false }))}
  />
)}

          {/* Text content (Hover-based) */}
          <AnimatePresence mode="popLayout">
            {isHovered ? (
              <motion.div
                key="hindi-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  ...springSettings,
                  duration: 0.3
                }}
                className={`relative ${hindiClassName}`}
              >
                {hindiText}
              </motion.div>
            ) : (
              <motion.div
                key="english-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  ...springSettings,
                  duration: 0.3
                }}
                className={`relative ${englishClassName}`}
              >
                {englishText}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedText;
