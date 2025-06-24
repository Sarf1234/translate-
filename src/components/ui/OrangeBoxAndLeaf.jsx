"use client";
import { motion } from "framer-motion";

const pairs = [
  {
    top: "M148.369 2H2.00098V30.0957C2.00098 45.6126 14.5798 58.1923 30.0967 58.1924H148.369C163.886 58.1922 176.465 45.6126 176.465 30.0957C176.465 14.5789 163.886 2.00016 148.369 2Z", // Box (1)
    bottom: "M31.1504 73.1914H1.99805V102.344C1.99822 117.86 14.577 130.439 30.0938 130.439H31.1504C46.6671 130.439 59.2459 117.86 59.2461 102.344V101.287C59.2459 85.7703 46.6672 73.1916 31.1504 73.1914Z", // Leaf (8)
  },
  {
    top: "M219.615 2H190.463V30.0957C190.463 45.6126 203.042 58.1922 218.559 58.1924H219.615C235.132 58.1922 247.711 45.6126 247.711 30.0957C247.711 14.5789 235.132 2.00016 219.615 2Z", // Leaf (5)
    bottom: "M219.615 73.1914H73.2471V102.344C73.2472 117.861 85.826 130.439 101.343 130.439H219.615C235.132 130.439 247.711 117.86 247.711 102.344V101.287C247.711 85.7703 235.132 73.1916 219.615 73.1914Z", // Leaf (2)
  },
  {
    top: "M408.08 2H261.712V30.0957C261.712 45.6126 274.291 58.1923 289.808 58.1924H408.08C423.597 58.1922 436.176 45.6126 436.176 30.0957C436.176 14.5789 423.597 2.00016 408.08 2Z", // Box (3)
    bottom: "M289.807 73.1914H261.71V102.344C261.71 117.861 274.29 130.439 289.807 130.439C305.323 130.439 317.902 117.86 317.902 102.344V101.287C317.902 85.7703 305.323 73.1916 289.807 73.1914Z", // Box (7)
  },
  {
    top: "M478.271 2H450.175V30.0957C450.175 45.6127 462.754 58.1924 478.271 58.1924C493.788 58.1922 506.367 45.6126 506.367 30.0957C506.367 14.5789 493.788 2.00016 478.271 2Z", // Leaf (4)
    bottom: "M478.271 73.1914H331.903V102.344C331.903 117.861 344.482 130.439 359.999 130.439H478.271C493.788 130.439 506.367 117.86 506.367 102.344V101.287C506.367 85.7703 493.788 73.1916 478.271 73.1914Z", // Box (6)
  },
];

const leafVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 60,
      damping: 14,
    },
  }),
};

export default function OrangeBoxAndLeaf() {
  return (
    <motion.svg
      width="509"
      height="133"
      viewBox="0 0 509 133"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="w-full max-w-[509px] h-auto mx-auto"
    >
      {pairs.map((pair, i) => {
        const isStatic = i === 0;

        return (
          <g key={`pair-${i}`}>
            {isStatic ? (
              <>
                <path d={pair.top} stroke="#FDC550" strokeWidth="4" />
                <path d={pair.bottom} stroke="#FDC550" strokeWidth="4" />
              </>
            ) : (
              <>
                <motion.path
                  d={pair.top}
                  stroke="#FDC550"
                  strokeWidth="4"
                  custom={i}
                  variants={leafVariants}
                />
                <motion.path
                  d={pair.bottom}
                  stroke="#FDC550"
                  strokeWidth="4"
                  custom={i}
                  variants={leafVariants}
                />
              </>
            )}
          </g>
        );
      })}
    </motion.svg>
  );
}
