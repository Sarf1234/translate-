import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import image from "../assets/translation.png";
import image2 from "../assets/trans_2.png";
import BoxAndLeaf from "./ui/BoxAndLeaf";
import OrangeBoxAndLeaf from "./ui/OrangeBoxAndLeaf";

const Translation = () => {
  const [isHoveredTitle, setIsHoveredTitle] = useState(false); // Track hover state for title
  const [isHoveredDescription, setIsHoveredDescription] = useState(false); // Track hover state for description

  // Spring animation settings for hover transitions
  const springSettings = {
    type: "spring",
    mass: 1,
    stiffness: 200,
    damping: 20,
  };

  // Animation settings for the initial rise effect
  const riseAnimation = {
    initial: { opacity: 0, y: 100 }, // Start 50px below and invisible
    animate: { opacity: 1, y: 0 }, // Move to original position and fully visible
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
      duration: 0.2, // Smooth duration for the rise
      delay: 1, // Add 0.3s delay for the animation
    },
  };

  return (
    <div id="services" className="scroll-mt-12 grid grid-cols-2 bg-[#00296B] py-14">
      <div className="flex flex-col items-start text-[88px] text-white pl-20 space-y-28">
        {/* Container for the title text with relative positioning */}
        <div className="relative h-[76px]">
          <motion.div
            onMouseEnter={() => setIsHoveredTitle(true)}
            onMouseLeave={() => setIsHoveredTitle(false)}
            initial={riseAnimation.initial} // Explicitly set initial state
            whileInView={riseAnimation.animate} // Use whileInView for viewport detection
            transition={riseAnimation.transition} // Apply transition with delay
            viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of component is in view
          >
            <AnimatePresence mode="sync">
              {isHoveredTitle ? (
                <motion.div
                  key="hindi-title"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ ...springSettings, delay: 0.001 }}
                  className="absolute"
                >
                  अनुवाद
                </motion.div>
              ) : (
                <motion.div
                  key="english-title"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ ...springSettings, delay: 0.001 }}
                  className="absolute font-urbanist"
                >
                  Translation
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
        {/* Image below the text */}
        <div>
          {/* <motion.img
            src={image}
            alt=""
            initial={{ scaleX: 0, originX: 0 }} // Start scaled down from the left
            whileInView={{ scaleX: 1 }} // Scale to full width
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 10,
              duration: 0.5, // Smooth duration
              delay: 0.7, // Delay to sync with other animations
            }}
            viewport={{ once: true, amount: 0.5 }} // Trigger when 50% in view
          /> */}
          <BoxAndLeaf />
        </div>
      </div>

      <div className="flex flex-col items-start text-[16px] text-white pl-20 gap-y-10">
        <div>
          {/* <motion.img
            src={image2}
            alt=""
            initial={{ scaleX: 0, originX: 1 }} // Start scaled down from the left
            whileInView={{ scaleX: 1 }} // Scale to full width
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 10,
              duration: 0.5, // Smooth duration
              delay: 0.7, // Delay to sync with other animations
            }}
            viewport={{ once: true, amount: 0.5 }} // Trigger when 50% in view
          /> */}
          <OrangeBoxAndLeaf />
        </div>
        {/* Container for the description text */}
        <div className="relative w-full pt-2">
          <motion.div
            onMouseEnter={() => setIsHoveredDescription(true)}
            onMouseLeave={() => setIsHoveredDescription(false)}
            initial={riseAnimation.initial} // Explicitly set initial state
            whileInView={riseAnimation.animate} // Use whileInView for viewport detection
            transition={riseAnimation.transition} // Apply transition with delay
            viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of component is in view
          >
            <AnimatePresence mode="sync">
              {isHoveredDescription ? (
                <motion.div
                  key="hindi-description"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ ...springSettings, delay: 0.001 }}
                  className="absolute tracking-wide"
                >
                  अपने वैश्विक सफलता को सटीक और विश्वसनीय अनुवाद के साथ आगे
                  <br />
                  बढ़ाएं। 50+ कंपनियों द्वारा विश्वसनीय, ट्रांसवर्स व्यवसायों और
                  व्यक्तियों के <br />
                  लिए सटीक समाधान प्रदान करता है, जिससे आपका संदेश विभिन्न
                  उद्योगों में <br />
                  सहजता से संनादित हो।
                </motion.div>
              ) : (
                <motion.div
                  key="english-description"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ ...springSettings, delay: 0.001 }}
                  className="absolute tracking-wide font-poppins"
                >
                  Drive your global success with precise, reliable translations.
                  <br />
                  Trusted by 50+ companies, Transverse delivers accurate
                  <br />
                  solutions for businesses and individuals, ensuring your
                  <br />
                  message resonates seamlessly across industries.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Translation;
