import React from "react";
import image from "../assets/patron.svg";
import { motion } from "framer-motion";

const Patrons = () => {
  const riseAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
      duration: 0.2,
      delay: 1,
    },
  };

  const leafAnimation = {
    initial: {
      scaleX: 0,
      scaleY: 0,
      transformOrigin: "bottom left",
    },
    animate: {
      scaleX: 1,
      scaleY: 1,
      transition: {
        type: "tween",
        duration: 0.1,
        delay: 1.6,
      },
    },
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#00296B] py-10 px-4">
      <div className="flex flex-wrap justify-center items-center gap-2 text-center whitespace-nowrap">
        <motion.div
          initial={riseAnimation.initial}
          whileInView={riseAnimation.animate}
          transition={riseAnimation.transition}
          viewport={{ once: true, amount: 0.5 }}
          className="font-urbanist text-white"
        >
          <span className="text-[36px] sm:text-[60px] lg:text-[88px]">
            Our Esteemed Patrons
          </span>
        </motion.div>
        <motion.div
          initial={leafAnimation.initial}
          whileInView={leafAnimation.animate}
          transition={leafAnimation.transition}
          viewport={{ once: true, amount: 0.5 }}
          className="flex items-end"
        >
          <img
            src={image}
            alt="Leaf"
            className="w-6 h-6 sm:w-8 sm:h-8 pl-1.5"
          />
        </motion.div>
      </div>

      <motion.div
        initial={riseAnimation.initial}
        whileInView={riseAnimation.animate}
        transition={riseAnimation.transition}
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-screen-lg text-white text-base sm:text-lg text-center font-poppins pt-4 leading-relaxed"
      >
        Transverse works with organizations that require precision, reliability,
        and strategic communication. From public institutions to multinational
        corporations, we help streamline communication across languages and
        industries. Our clients trust us to refine and optimize their
        communication strategies, enabling clarity and efficiency at every
        level. With a commitment to excellence, Transverse continues to be a
        trusted ally for organizations that operate on a global scale.
      </motion.div>
    </div>
  );
};

export default Patrons;
