"use client";
import { motion } from "framer-motion";

// All SVG paths (top row + bottom row)
const topRow = [
  "M70.1914 30.096C70.1914 13.4744 83.6658 0 100.287 0H248.655V30.096C248.655 46.7176 235.181 60.192 218.559 60.192H100.287C83.6659 60.192 70.1914 46.7176 70.1914 30.096Z", // Leaf
  "M0 30.096C0 13.4744 13.4744 0 30.096 0H60.192V30.096C60.192 46.7176 46.7176 60.192 30.096 60.192C13.4744 60.192 0 46.7176 0 30.096Z", // Box
  "M258.656 30.096C258.656 13.4744 272.131 0 288.752 0H319.904V30.096C319.904 46.7176 306.43 60.192 289.808 60.192H288.752C272.131 60.192 258.656 46.7176 258.656 30.096Z", // Leaf
  "M329.906 30.096C329.906 13.4744 343.381 0 360.002 0H508.37V30.096C508.37 46.7176 494.896 60.192 478.274 60.192H360.002C343.381 60.192 329.906 46.7176 329.906 30.096Z", // Box ✅ static
];

const bottomRow = [
  "M0 101.287C0 84.6658 13.4744 71.1914 30.096 71.1914H178.464V102.343C178.464 118.965 164.99 132.439 148.368 132.439H30.096C13.4745 132.439 0 118.965 0 102.343V101.287Z", // Box
  "M188.465 101.287C188.465 84.6658 201.939 71.1914 218.561 71.1914H248.657V102.343C248.657 118.965 235.182 132.439 218.561 132.439C201.939 132.439 188.465 118.965 188.465 102.343V101.287Z", // Leaf
  "M258.656 101.287C258.656 84.6658 272.131 71.1914 288.752 71.1914H437.12V102.343C437.12 118.965 423.646 132.439 407.024 132.439H288.752C272.131 132.439 258.656 118.965 258.656 102.343V101.287Z", // Box
  "M447.121 101.287C447.121 84.6658 460.596 71.1914 477.217 71.1914H508.369V102.343C508.369 118.965 494.895 132.439 478.273 132.439H477.217C460.596 132.439 447.121 118.965 447.121 102.343V101.287Z", // Leaf ✅ static
];

// Total columns = 4 (each column = 1 top + 1 bottom path)
const totalPairs = topRow.length;

const leafVariants = {
  hidden: { opacity: 0, x: -100 },
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

export default function BoxAndLeaf() {
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
      className="mx-auto"
    >
      {Array.from({ length: totalPairs }).map((_, i) => {
        const isStatic = i === totalPairs - 1; // last column static
        return (
          <>
            {isStatic ? (
              <>
                <path key={`static-top-${i}`} d={topRow[i]} fill="#FEFEFE" />
                <path key={`static-bot-${i}`} d={bottomRow[i]} fill="#FEFEFE" />
              </>
            ) : (
              <>
                <motion.path
                  key={`animated-top-${i}`}
                  d={topRow[i]}
                  fill="#FEFEFE"
                  custom={totalPairs - i - 2}
                  variants={leafVariants}
                />
                <motion.path
                  key={`animated-bot-${i}`}
                  d={bottomRow[i]}
                  fill="#FEFEFE"
                  custom={totalPairs - i - 2}
                  variants={leafVariants}
                />
              </>
            )}
          </>
        );
      })}
    </motion.svg>
  );
}
