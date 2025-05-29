import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import image from "../assets/tele2.png";
import image2 from "../assets/tele1.png";
import BoxLeaf from "./ui/BoxLeaf";
import OrangeBoxLeaf from "./ui/OrangeBoxLeaf";

const Tele = () => {
  const [isHoveredTitle, setIsHoveredTitle] = useState(false); // Track hover state for title (Translation/अनुवाद)
  const [isHoveredDescription, setIsHoveredDescription] = useState(false); // Track hover state for description

  // Spring animation settings for a faster transition
  const springSettings = {
    type: "spring",
    mass: 1,
    stiffness: 200, // Increased stiffness for a quicker snap
    damping: 20, // Slightly increased damping to reduce bounciness
  };

    const riseAnimation = {
    initial: { opacity: 0, y: 50 }, // Start 50px below and invisible
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
    <div className="grid grid-cols-2 bg-white py-14">
      <div className="flex flex-col items-start text-[88px] pl-20 space-y-28">
        {/* Container for the title text with relative positioning */}
        <div className="relative h-[76px]">
          <motion.div
            onMouseEnter={() => setIsHoveredTitle(true)} // Show Hindi title on hover
            onMouseLeave={() => setIsHoveredTitle(false)} // Show English title on hover out
            initial={riseAnimation.initial} // Explicitly set initial state
            whileInView={riseAnimation.animate} // Use whileInView for viewport detection
            transition={riseAnimation.transition} // Apply transition with delay
            viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of component is in view
          >
            <AnimatePresence mode="sync">
              {isHoveredTitle ? (
                <motion.div
                  key="hindi-title"
                  initial={{ opacity: 0, y: 10 }} // Start below
                  animate={{ opacity: 1, y: 0 }} // Move to position
                  exit={{ opacity: 0, y: 10 }} // Exit below
                  transition={{ ...springSettings, delay: 0.001 }} // 1ms delay
                  className="absolute text-nowrap"
                >
                  टेली विपणन
                </motion.div>
              ) : (
                <motion.div
                  key="english-title"
                  initial={{ opacity: 0, y: 10 }} // Start below
                  animate={{ opacity: 1, y: 0 }} // Move to position
                  exit={{ opacity: 0, y: 10 }} // Exit below
                  transition={{ ...springSettings, delay: 0.001 }} // 1ms delay
                  className="absolute font-urbanist"
                >
                  Telemarketing
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
              stiffness: 50,
              damping: 10,
              duration: 0.5, // Smooth duration
              delay: 0.7, // Delay to sync with other animations
            }}
            viewport={{ once: true, amount: 0.5 }} // Trigger when 50% in view
          /> */}
          <BoxLeaf />
        </div>
      </div>

      <div className="flex flex-col items-start text-[16px] pl-20 gap-y-10">
        <div>
          {/* <motion.img
            src={image2}
            alt=""
            initial={{ scaleX: 0, originX: 0 }} // Start scaled down from the left
            whileInView={{ scaleX: 1 }} // Scale to full width
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
              duration: 0.5, // Smooth duration
              delay: 0.7, // Delay to sync with other animations
            }}
            viewport={{ once: true, amount: 0.5 }} // Trigger when 50% in view
          /> */}
          <OrangeBoxLeaf />
        </div>
        {/* Container for the description text */}
        <div className="relative w-full pt-2">
          <motion.div
            onMouseEnter={() => setIsHoveredDescription(true)} // Show Hindi description on hover
            onMouseLeave={() => setIsHoveredDescription(false)} // Show English description on hover out
            initial={riseAnimation.initial} // Explicitly set initial state
            whileInView={riseAnimation.animate} // Use whileInView for viewport detection
            transition={riseAnimation.transition} // Apply transition with delay
            viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of component is in view
          >
            <AnimatePresence mode="sync">
              {isHoveredDescription ? (
                <motion.div
                  key="hindi-description"
                  initial={{ opacity: 0, y: 10 }} // Start below
                  animate={{ opacity: 1, y: 0 }} // Move to position
                  exit={{ opacity: 0, y: 10 }} // Exit below
                  transition={{ ...springSettings, delay: 0.001 }} // 1ms delay
                  className="absolute tracking-wide"
                >
                  रणनीतिक टेलीमार्केटिंग के साथ अपने व्यवसाय को बढ़ावा दें।
                  हमारे कुशल
                  <br />
                  विशेषज्ञ लक्षित अभियानों को डिज़ाइन करते हैं, जिससे आपकी पहुंच
                  का
                  <br />
                  विस्तार हो, निवेश पर अधिकतम लाभ मिले, और अवसरों को ठोस सफलता{" "}
                  <br />
                  में बदला जा सके।
                </motion.div>
              ) : (
                <motion.div
                  key="english-description"
                  initial={{ opacity: 0, y: 10 }} // Start below
                  animate={{ opacity: 1, y: 0 }} // Move to position
                  exit={{ opacity: 0, y: 10 }} // Exit below
                  transition={{ ...springSettings, delay: 0.001 }} // 1ms delay
                  className="absolute tracking-wide font-poppins"
                >
                  Fuel your business growth with strategic telemarketing. Our
                  <br />
                  skilled experts design targeted campaigns to expand your
                  <br />
                  reach, maximize ROI, and turn opportunities into measurable
                  <br />
                  success.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Tele;
