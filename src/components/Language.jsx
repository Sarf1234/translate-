import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import image from "../assets/lang3.png";
import image2 from "../assets/lang1.png";
import image3 from "../assets/lang2.png";
import CircleLeaf from "./ui/CircleLeaf";
import CircleOrangeLeaf from "./ui/CircleOrangeLeaf";
import AnimatedText from "./ui/AnimatedText";

const leafVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 50,
      damping: 20,
    },
  }),
};

const AnimatedLeaf = ({ delayIndex }) => (
  <motion.div
    custom={delayIndex}
    variants={leafVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
  >
    <CircleOrangeLeaf />
  </motion.div>
);

const Language = () => {
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
    <div className="flex justify-between items-center bg-[#00296B] text-white py-16 px-[3.5rem]">
      <div className="flex flex-col items-start text-[88px] space-y-2">
        <AnimatedText
          englishText="Language Training"
          hindiText={
            <>
              भाषा <br /> प्रशिक्षण
            </>
          }
          englishClassName="font-urbanist"
          hindiClassName="font-urbanist"
          containerClassName="bg-[#00296B]"
        />
        {/* Image below the text */}

        <motion.div
          className="pt-20"
          initial={{ opacity: 1 }} // Ensure container is visible
          whileInView={{ opacity: 1 }} // No animation on container itself
          viewport={{ once: true, amount: 0.5 }} // Trigger when 50% in view
        >
          <CircleLeaf />
        </motion.div>
      </div>

      <div className="flex flex-col items-start text-[16px] gap-y-20">
        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 1 }} // Ensure container is visible
          whileInView={{ opacity: 1 }} // No animation on container itself
          viewport={{ once: true, amount: 0.5 }} // Trigger when 50% in view
        >
          <div className="flex justify-center items-center">
            <CircleOrangeLeaf />
            <AnimatedLeaf delayIndex={0} />
            <AnimatedLeaf delayIndex={1} />
            <AnimatedLeaf delayIndex={2} />
            <AnimatedLeaf delayIndex={3} />
          </div>
          <div className="flex justify-center items-center">
            <CircleOrangeLeaf />
            <AnimatedLeaf delayIndex={0} />
            <AnimatedLeaf delayIndex={1} />
            <AnimatedLeaf delayIndex={2} />
            <AnimatedLeaf delayIndex={3} />
            <AnimatedLeaf delayIndex={4} />
          </div>
          <div className="flex justify-center items-center">
            <CircleOrangeLeaf />
            <AnimatedLeaf delayIndex={0} />
            <AnimatedLeaf delayIndex={1} />
            <AnimatedLeaf delayIndex={2} />
            <AnimatedLeaf delayIndex={3} />
          </div>
        </motion.div>
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
              <div className="tracking-wide font-poppins min-h-[100px] w-full">
                {isHoveredDescription ? (
                  <motion.div
                    key="hindi-description"
                    initial={{ opacity: 0, y: 10 }} // Start below
                    animate={{ opacity: 1, y: 0 }} // Move to position
                    exit={{ opacity: 0, y: 10 }} // Exit below
                    transition={{ ...springSettings, delay: 0.001 }} // 1ms delay
                    className="absolute tracking-wide text-base/8"
                  >
                    उद्देश्यपूर्ण भाषा प्रशिक्षण के साथ प्रवाह्यता प्राप्त करें।
                    हमारे अनुभवी 
                    <br />
                   और कुशल द्विभाषी प्रशिक्षक आपकी आवश्यकताओं और समयानुसार
                    
                    <br />
                   अनुकूलित कार्यक्रम प्रदान करते हैं, जिससे आप आत्मविश्वास, स्पष्टता {" "}
                    <br />
                   और प्रभावशीलता के साथ किसी भी भाषा में संवाद कर सकें।
                  </motion.div>
                ) : (
                  <motion.div
                    key="english-description"
                    initial={{ opacity: 0, y: 10 }} // Start below
                    animate={{ opacity: 1, y: 0 }} // Move to position
                    exit={{ opacity: 0, y: 10 }} // Exit below
                    transition={{ ...springSettings, delay: 0.001 }} // 1ms delay
                    className="absolute tracking-wide font-poppins text-base/8"
                  >
                    Achieve fluency with purpose-driven language training. 
                    <br />
                   Our expert bilingual trainers deliver tailored programs 
                    <br />
                  that fit your schedule, empowering you to communicate confidently and effectively.
                    <br />
                   
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

export default Language;
