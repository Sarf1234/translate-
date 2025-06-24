import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import image from "../assets/tele2.png";
import image2 from "../assets/tele1.png";
import BoxLeaf from "./ui/BoxLeaf";
import OrangeBoxLeaf from "./ui/OrangeBoxLeaf";
import AnimatedText from "./ui/AnimatedText";

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
    <div  className="
        scroll-mt-10 
        bg-white 
        py-14 
        px-4 sm:px-6 md:px-10 lg:px-[3.5rem] 
        flex 
        justify-between 
        items-center 
        flex-wrap
        md:flex-nowrap 
        md:flex-row 
        flex-col
      ">
      <div className="flex flex-col items-start text-[58px] md:text-[88px] text-black space-y-12 w-full md:w-auto">
        {/* Container for the title text with relative positioning */}
        
        <AnimatedText
            englishText="Telemarketing"
            hindiText="टेली विपणन"
            englishClassName="font-urbanist whitespace-nowrap"
            hindiClassName = "font-urbanist whitespace-nowrap"
            containerClassName="bg-[#ffffff]"
          />
        {/* Image below the text */}
        <div>
          <BoxLeaf />
        </div>
      </div>

      <div className="flex flex-col items-start text-[16px] text-black space-y-12 w-full md:w-auto mt-16 md:mt-0">
        <div> 
          <OrangeBoxLeaf />
        </div>
        {/* Container for the description text */}
        <div className="relative w-full pt-2">
  <motion.div
    onMouseEnter={() => setIsHoveredDescription(true)}
    onMouseLeave={() => setIsHoveredDescription(false)}
    initial={riseAnimation.initial}
    whileInView={riseAnimation.animate}
    transition={riseAnimation.transition}
    viewport={{ once: true, amount: 0.5 }}
  >
    <AnimatePresence mode="sync">
      <div className="tracking-wide font-poppins min-h-[100px]"> {/* ✅ Force height change to be calculated */}
        {isHoveredDescription ? (
          <motion.div
            key="hindi-description"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ ...springSettings, delay: 0.001 }}
            className="text-base/8"
          >
            रणनीतिक टेलीमार्केटिंग के साथ अपने व्यवसाय को बढ़ावा दें।
            हमारे कुशल <br />
            विशेषज्ञ लक्षित अभियानों को डिज़ाइन करते हैं, जिससे आपकी पहुंच
            का <br />
            विस्तार हो, निवेश पर अधिकतम लाभ मिले, और अवसरों को ठोस सफलता <br />
            में बदला जा सके।
          </motion.div>
        ) : (
          <motion.div
            key="english-description"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ ...springSettings, delay: 0.001 }}
            className="text-base/8"
          >
            Fuel your business growth with strategic telemarketing. Our <br />
            skilled experts design targeted campaigns to expand your <br />
            reach, maximize ROI, and turn opportunities into measurable <br />
            success.
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  </motion.div>
</div>

      </div>
    </div>
  );
};

export default Tele;
