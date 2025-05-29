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
          times: [0, 0.3, 0.5, 0.8, 1], // 30% to -40, 20% pause, 30% to 0, 20% pause
          repeat: Infinity,
          duration: 1.2, // 5s total (1.5s up, 1s pause, 1.5s down, 1s pause)
          ease: "easeInOut", // Smooth easing
          delay: 0.8, // Start after riseAnimation
        },
      },
    },
    image2: {
      animate: { y: [0, -50, -50, 0, 0] }, // Move 40px up, pause, return, pause
      transition: {
        y: {
          times: [0, 0.3, 0.5, 0.8, 1], // 30% to -40, 20% pause, 30% to 0, 20% pause
          repeat: Infinity,
          duration: 1.2, // 5s total (1.5s up, 1s pause, 1.5s down, 1s pause)
          ease: "easeOut", // Smooth easing
          delay: 0.8, // Start after riseAnimation
        },
      },
    },
    image3: {
      animate: {
        x: [0, -70, -70, 0, 0],
        y: [0, -15, -15, 0, 0], // upward motion in sync with x
      },
      transition: {
        x: {
          times: [0, 0.3, 0.5, 0.8, 1],
          repeat: Infinity,
          duration: 1.2,
          ease: "easeOut",
          delay: 0.8,
        },
        y: {
          times: [0, 0.3, 0.5, 0.8, 1],
          repeat: Infinity,
          duration: 1.2,
          ease: "easeOut",
          delay: 0.8,
        },
      },
    },
  };

  return (
    <div>
      <div className="flex flex-row justify-between h-auto bg-white px-[86px] pt-10">
        <motion.div
          initial={riseAnimation.initial}
          whileInView={riseAnimation.animate}
          transition={riseAnimation.transition}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col pt-20"
        >
          <motion.div
            initial={riseAnimation.initial}
            whileInView={riseAnimation.animate}
            transition={riseAnimation.transition}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col items-start text-[64px] font-urbanist"
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
            className="flex flex-col items-start text-[16px] font-poppins"
          >
            <div>Empowering businesses</div>
            <div>worldwide</div>
          </motion.div>
          {/* <div
          className="inline-block px-5 py-2.5 w-[90px] text-white text-[16px] font-bold text-center cursor-pointer
         bg-[#c5e86c] hover:bg-[#b0d35e] rounded-br-[20px] rounded-tr-[20px] rounded-bl-[20px] border-0 mt-[30px]"
        >
          call us
        </div> */}
          <ContactButton />
          <img
            src={image4}
            alt="Mouse Icon"
            className="w-[40px] h-[40px] mt-20 text-[#2595]"
          />
        </motion.div>

        <div className="flex pt-[80px]">
          <motion.div
            initial={riseAnimation.initial}
            whileInView={riseAnimation.animate}
            transition={riseAnimation.transition}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-row gap-x-5"
          >
            <motion.img
              src={image1}
              alt="Logo 1"
              className="w-[367px] h-[259px] mt-1.5"
              viewport={{ once: true, amount: 0.5 }}
              animate={loopAnimation.image1.animate}
              transition={loopAnimation.image1.transition}
            />
            <div className="flex flex-col gap-y-5 mt-28">
              <motion.img
                src={image2}
                alt="Logo 2"
                className="w-[152px] h-[152px]"
                viewport={{ once: true, amount: 0.5 }}
                animate={loopAnimation.image2.animate}
                transition={loopAnimation.image2.transition}
              />
              <motion.img
                src={image3}
                alt="Logo 3"
                className="w-[76px] h-[76px]"
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
