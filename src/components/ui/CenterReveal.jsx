// components/CenterReveal.js
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CenterReveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // 0.5 = center

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0.5 } : {}}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

export default CenterReveal;
