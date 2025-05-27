import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import image1 from "../../assets/textanimation.png";

const FullScreenImage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  // Stretch effect on scroll (scaleY)
  const scaleY = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  return (
    <div className="mt-24 overflow-hidden" ref={ref}>
      <motion.img
        src={image1}
        alt="Animated Stretch Image"
        style={{ scaleY }}
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default FullScreenImage;
