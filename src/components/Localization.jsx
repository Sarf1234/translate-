import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import image from "../assets/local1.png";
import image2 from "../assets/local2.png";
import Leaf from "./ui/Leaf";
import OrangeLeaf from "./ui/OrangeLeaf";
import AnimatedText from "./ui/AnimatedText";

const Localization = () => {
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
    initial: { opacity: 0, y: 10 }, // Start 50px below and invisible
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
      <div className="flex flex-col items-start text-[88px] pl-20 space-y-12">
        {/* Container for the title text with relative positioning */}
          {/* <motion.div
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
                  className="absolute"
                >
                  स्थानीयकरण
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
                  Localization
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div> */}
          <AnimatedText
            englishText="Localization"
            hindiText="स्थानीयकरण"
            englishClassName="font-urbanist"
            hindiClassName = "font-urbanist"
            containerClassName="bg-[#ffffff]"
          />

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
          <Leaf />
        </div>
      </div>

      <div className="flex flex-col items-start text-[16px] pl-20 gap-y-12">
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
          <OrangeLeaf />
        </div>
        {/* Container for the description text */}
        <div className="relative w-full ">
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
                  संस्कृति-संवेदनशील स्थानीयकरण के साथ नब्ज़ों को बोलें। हम
                  <br />
                  आपके उत्पादों और सेवाओं को स्थानीय परंपराओं और प्राथमिकताओं के
                  <br />
                  अनुरूप बनाते हैं, साथ ही सबसे स्थापित करते हैं जो वैश्विक
                  विकास को तेज <br />
                  करते हैं।
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
                  Unlock new markets with culturally attuned localization. We
                  <br />
                  align your products and services with local customs and
                  <br />
                  preferences, building meaningful connections that accelerate
                  <br />
                  global growth.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Localization;
