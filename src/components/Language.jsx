import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isHoveredDescription, setIsHoveredDescription] = useState(false);

  const springSettings = {
    type: "spring",
    mass: 1,
    stiffness: 200,
    damping: 20,
  };

  const riseAnimation = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
      duration: 0.2,
      delay: 1,
    },
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-[#00296B] text-white px-6 sm:px-10 md:px-14 lg:px-[3.5rem] py-10 md:py-16 gap-10">
      {/* LEFT SECTION */}
      <div className="flex flex-col items-start text-[36px] sm:text-[48px] md:text-[64px] lg:text-[88px] leading-tight w-full md:w-1/2">
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

        <motion.div
          className="pt-10 sm:pt-14 lg:pt-20"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <CircleLeaf />
        </motion.div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex flex-col items-start w-full md:w-1/2 gap-y-14 md:gap-y-20">
        <motion.div
          className="flex flex-col justify-center items-center gap-4"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
            <CircleOrangeLeaf />
            <AnimatedLeaf delayIndex={0} />
            <AnimatedLeaf delayIndex={1} />
            <AnimatedLeaf delayIndex={2} />
            <AnimatedLeaf delayIndex={3} />
          </div>
          {/* Row 2 */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
            <CircleOrangeLeaf />
            <AnimatedLeaf delayIndex={0} />
            <AnimatedLeaf delayIndex={1} />
            <AnimatedLeaf delayIndex={2} />
            <AnimatedLeaf delayIndex={3} />
            <AnimatedLeaf delayIndex={4} />
          </div>
          {/* Row 3 */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
            <CircleOrangeLeaf />
            <AnimatedLeaf delayIndex={0} />
            <AnimatedLeaf delayIndex={1} />
            <AnimatedLeaf delayIndex={2} />
            <AnimatedLeaf delayIndex={3} />
          </div>
        </motion.div>

        {/* Description */}
        <div className="relative w-full min-h-[150px]">
          <motion.div
            onMouseEnter={() => setIsHoveredDescription(true)}
            onMouseLeave={() => setIsHoveredDescription(false)}
            initial={riseAnimation.initial}
            whileInView={riseAnimation.animate}
            transition={riseAnimation.transition}
            viewport={{ once: true, amount: 0.5 }}
          >
            <AnimatePresence mode="sync">
              <div className="tracking-wide font-poppins text-sm sm:text-base md:text-lg min-h-[100px] w-full">
                {isHoveredDescription ? (
                  <motion.div
                    key="hindi-description"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ ...springSettings, delay: 0.001 }}
                    className="absolute"
                  >
                    उद्देश्यपूर्ण भाषा प्रशिक्षण के साथ प्रवाह्यता प्राप्त करें। हमारे अनुभवी 
                    <br />
                    और कुशल द्विभाषी प्रशिक्षक आपकी आवश्यकताओं और समयानुसार
                    <br />
                    अनुकूलित कार्यक्रम प्रदान करते हैं, जिससे आप आत्मविश्वास, स्पष्टता{" "}
                    <br />
                    और प्रभावशीलता के साथ किसी भी भाषा में संवाद कर सकें।
                  </motion.div>
                ) : (
                  <motion.div
                    key="english-description"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ ...springSettings, delay: 0.001 }}
                    className="absolute"
                  >
                    Achieve fluency with purpose-driven language training. 
                    <br />
                    Our expert bilingual trainers deliver tailored programs 
                    <br />
                    that fit your schedule, empowering you to communicate confidently and effectively.
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
