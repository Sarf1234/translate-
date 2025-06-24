import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Separator = () => {
  // Text content for each slide
  const text = `-.-. --- -. -. . -.-. - .. -. --. .. -.. . .- ... --..-- -.-. .-. . .- - .. -. --. .. -- .--. .- -.-. - `;
  // Array of slides (4 identical texts)
  const slides = [
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
    text,
  ];
  // State to track the active slide index
  const [activeIndex, setActiveIndex] = useState(0);

  // Change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Animation variants for the container
  const containerVariants = {
    initial: { x: 0 },
    animate: (index) => ({
      x: `-${index * 100}%`, // Move left by 100% of container width per slide
      transition: {
        x: {
          type: "spring",
          mass: 1,
          stiffness: 80,
          damping: 20,
          delay: 0.002, // 1ms delay
        },
      },
    }),
  };

  // Animation variants for individual slides
  const slideVariants = {
    active: {
      opacity: 1,
      transition: {
        type: "spring",
        mass: 1,
        stiffness: 80,
        damping: 20,
        delay: 0.002, // 1ms delay
      },
    },
    inactive: {
      opacity: 1,
      transition: {
        type: "spring",
        mass: 1,
        stiffness: 80,
        damping: 20,
        delay: 0.002, // 1ms delay
      },
    },
  };

  return (
   <div className="overflow-hidden pt-16 pb-4 text-[#00296B]">
  <motion.div
    className="flex w-full" // Changed from w-[100%] to w-full for responsiveness
    variants={containerVariants}
    initial="initial"
    animate={{ x: `-${activeIndex * 100}%` }}
  >
    {slides.map((slide, index) => (
      <motion.div
        key={index}
        className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-10 text-base sm:text-lg md:text-xl whitespace-nowrap"
        variants={slideVariants}
        animate={index === activeIndex ? "active" : "inactive"}
      >
        {slide}
      </motion.div>
    ))}
  </motion.div>
</div>

  );
};

export default Separator;
