import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import image1 from "../assets/client1.png";
import image2 from "../assets/client2.png";
import image3 from "../assets/client3.png";
import image4 from "../assets/client4.png";
import image5 from "../assets/client5.png";
import image6 from "../assets/client6.png";
import image7 from "../assets/client7.png";
import image8 from "../assets/cl1.png";
import image9 from "../assets/cl2.png";
import image10 from "../assets/cl3.png";
import image11 from "../assets/cl4.png";
import image12 from "../assets/cl5.png";

const images = [image1, image2, image3, image4, image5, image6, image7];
const images2 = [image8, image9, image10, image11, image12, image8];

const extendedImages = [
  ...images,
  ...images,
  ...images,
  ...images,
  ...images,
  ...images,
  ...images,
  ...images,
  ...images,
];
const extendedImages2 = [
  ...images2,
  ...images2,
  ...images2,
  ...images2,
  ...images2,
  ...images2,
  ...images2,
  ...images2,
  ...images2,
];

const Clients = () => {
  const controls = useAnimation();
  const controls2 = useAnimation();

  const animationDuration = 20;
  const totalWidth = images.length * 150;
  const totalWidth2 = images2.length * 150;

  useEffect(() => {
    controls.start({
      x: -totalWidth,
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: animationDuration,
          ease: "linear",
        },
      },
    });
  }, [controls, totalWidth]);

  useEffect(() => {
    controls2.start({
      x: 0,
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: animationDuration,
          ease: "linear",
        },
      },
    });
  }, [controls2, totalWidth2]);

  return (
    <div className="relative py-10 flex flex-col gap-y-10 overflow-hidden">
      {/* Left fog */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-40 z-30 bg-[linear-gradient(to_right,_white_50%,_transparent)]" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-40 z-30 bg-[linear-gradient(to_left,_white_50%,_transparent)]" />

      {/* First Carousel */}
      <motion.div
        className="flex gap-x-20"
        animate={controls}
        style={{ width: `${totalWidth * 2}px` }}
      >
        {extendedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Client ${(index % images.length) + 1}`}
            className="w-auto h-auto mx-10 object-contain"
          />
        ))}
      </motion.div>

      {/* Second Carousel */}
      <motion.div
        className="flex gap-x-20"
        initial={{ x: -totalWidth2 }}
        animate={controls2}
        style={{ width: `${totalWidth2 * 2}px` }}
      >
        {extendedImages2.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Client ${(index % images2.length) + 1}`}
            className="w-auto h-auto mx-10 object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Clients;
