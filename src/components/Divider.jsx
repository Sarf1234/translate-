import { motion } from "framer-motion";

const Divider = () => {
  const riseAnimation = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    transition: {
      type: "tween",
      stiffness: 150,
      damping: 15,
      duration: 0.25,
      delay: 0.5,
    },
  };

  return (
    <div className="w-full flex justify-start items-center font-urbanist bg-[#00296B] text-white px-4 sm:px-10 lg:px-20 py-6">
      <motion.div
        initial={riseAnimation.initial}
        whileInView={riseAnimation.animate}
        transition={riseAnimation.transition}
        viewport={{ once: true, amount: 0.5 }}
        className="text-3xl sm:text-5xl lg:text-[88px] leading-tight"
      >
        Charting Our Ascent
      </motion.div>
    </div>
  );
};

export default Divider;
