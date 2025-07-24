import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import image1 from "../assets/hero_image_1.png";
import image2 from "../assets/hero_image_2.png";
import image3 from "../assets/hero_image_3.png";
import image4 from "../assets/GroupMouse.svg";
import ContactButton from "./ui/ContactButton";

const Hero = () => {
  // Animation for rising in (used for text, button, and images)
  const riseAnimation = {
    initial: { opacity: 0, y: 50 }, // Start 50px below and invisible
    animate: { opacity: 1, y: 0 }, // Move to original position and fully visible
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 7,
      duration: 0.5,
      delay: 0.3,
    },
  };

  // Infinite loop animation for image2 (up with pauses) and image3 (left with pauses)
  const loopAnimation = {
    image1: {
      animate: { y: [0, -20, -20, 0, 0] }, // Move 40px up, pause, return, pause
      transition: {
        y: {
          times: [0, 0.2, 0.6, 0.8, 1.8], // 30% to -40, 20% pause, 30% to 0, 20% pause
          repeat: Infinity,
          duration: 1.5, // 5s total (1.5s up, 1s pause, 1.5s down, 1s pause)
          ease: "easeInOut", // Smooth easing
          delay: 1.2, // Start after riseAnimation
        },
      },
    },
    image2: {
      animate: { y: [0, -70, -70, 0, 0] }, // Move 40px up, pause, return, pause
      transition: {
        y: {
          times: [0, 0.2, 0.6, 0.8, 1.8], // 30% to -40, 20% pause, 30% to 0, 20% pause
          repeat: Infinity,
          duration: 1.5, // 5s total (1.5s up, 1s pause, 1.5s down, 1s pause)
          ease: "easeOut", // Smooth easing
          delay: 1.2, // Start after riseAnimation
        },
      },
    },
    image3: {
      animate: {
        x: [0, -100, -100, 0, 0],
        y: [0, -15, -15, 0, 0], // upward motion in sync with x
      },
      transition: {
        x: {
          times: [0, 0.2, 0.6, 0.8, 1.8],
          repeat: Infinity,
          duration: 1.5,
          ease: "easeOut",
          delay: 1.2,
        },
        y: {
          times: [0, 0.2, 0.6, 0.8, 1.8],
          repeat: Infinity,
          duration: 1.5,
          ease: "easeOut",
          delay: 1.2,
        },
      },
    },
  };

  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row justify-between h-auto bg-white px-4 sm:px-8 lg:px-[86px] pt-6 lg:pt-10">
        {/* Text Group - Second on mobile, First on desktop */}
        <motion.div
          initial={riseAnimation.initial}
          whileInView={riseAnimation.animate}
          transition={riseAnimation.transition}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col pt-8 lg:pt-20"
        >
          <motion.div
            initial={riseAnimation.initial}
            whileInView={riseAnimation.animate}
            transition={riseAnimation.transition}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col items-center lg:items-start text-[32px] sm:text-[48px] lg:text-[64px] font-urbanist"
            style={{ lineHeight: "1.2" }}
          >
            <div>Your Language</div>
            <div>Partner</div>
          </motion.div>
          <motion.div
            initial={riseAnimation.initial}
            whileInView={riseAnimation.animate}
            transition={riseAnimation.transition}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col items-center lg:items-start text-[14px] sm:text-[16px] font-poppins mt-2 lg:mt-0"
          >
            <div>Empowering businesses</div>
            <div>worldwide</div>
          </motion.div>
          <div className="relative z-10 overflow-visible flex justify-center lg:justify-start">
            <ContactButton />
          </div>
          <div className="flex justify-center lg:justify-start">
            <img
              src={image4}
              alt="Mouse Icon"
              className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] mt-8 lg:mt-20 text-[#2595]"
            />
          </div>
        </motion.div>

        {/* Images Group - First on mobile, maintains grouping and distances */}
        <div className="flex justify-center lg:justify-end pt-12 lg:pt-[80px] mb-6 lg:mb-0">
          <motion.div
            initial={riseAnimation.initial}
            whileInView={riseAnimation.animate}
            transition={riseAnimation.transition}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-row gap-x-3 sm:gap-x-5"
          >
            <motion.img
              src={image1}
              alt="Logo 1"
              className="w-[220px] h-[155px] sm:w-[280px] sm:h-[197px] lg:w-[367px] lg:h-[259px] mt-1 sm:mt-1.5"
              viewport={{ once: true, amount: 0.5 }}
              animate={loopAnimation.image1.animate}
              transition={loopAnimation.image1.transition}
            />
            <div className="flex flex-col gap-y-3 sm:gap-y-5 mt-16 sm:mt-20 lg:mt-28">
              <motion.img
                src={image2}
                alt="Logo 2"
                className="w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] lg:w-[152px] lg:h-[152px]"
                viewport={{ once: true, amount: 0.5 }}
                animate={loopAnimation.image2.animate}
                transition={loopAnimation.image2.transition}
              />
              <motion.img
                src={image3}
                alt="Logo 3"
                className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] lg:w-[76px] lg:h-[76px]"
                animate={loopAnimation.image3.animate}
                transition={loopAnimation.image3.transition}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;