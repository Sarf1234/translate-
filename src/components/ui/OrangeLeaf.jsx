"use client";
import { motion } from "framer-motion";

const leaves = [
    [
    "M78.7021 78.7021C79.7565 115.015 109 144.259 145.313 145.313C144.259 109 115.015 79.7565 78.7021 78.7021Z",
    "M145.313 2.03027C144.259 38.3433 115.015 67.587 78.7022 68.6416C79.7568 32.3286 109 3.08462 145.313 2.03027Z",
  ],
  [
    "M155.374 78.7021C156.428 115.015 185.672 144.259 221.985 145.313C220.931 109 191.687 79.7565 155.374 78.7021Z",
    "M221.985 2.03027C220.931 38.3433 191.687 67.587 155.374 68.6416C156.429 32.3286 185.672 3.08462 221.985 2.03027Z",
  ],
  [
    "M298.657 78.7021C297.603 115.015 268.359 144.259 232.046 145.313C233.101 109 262.344 79.7565 298.657 78.7021Z",
    "M232.046 2.03027C233.1 38.3433 262.344 67.587 298.657 68.6416C297.603 32.3286 268.359 3.08462 232.046 2.03027Z",
  ],
  [
    "M375.329 78.7021C374.275 115.015 345.031 144.259 308.718 145.313C309.772 109 339.016 79.7565 375.329 78.7021Z",
    "M308.718 2.03027C309.772 38.3433 339.016 67.587 375.329 68.6416C374.274 32.3286 345.031 3.08462 308.718 2.03027Z",
  ],
    [
    "M452.005 78.7021C450.951 115.015 421.707 144.259 385.394 145.313C386.448 109 415.692 79.7565 452.005 78.7021Z",
    "M385.394 2.03027C386.448 38.3433 415.692 67.587 452.005 68.6416C450.95 32.3286 421.707 3.08462 385.394 2.03027Z",
  ],
  [
    "M462.065 78.7021C463.12 115.015 492.364 144.259 528.677 145.313C527.622 109 498.379 79.7565 462.065 78.7021Z",
    "M528.677 2.03027C527.622 38.3433 498.378 67.587 462.065 68.6416C463.12 32.3286 492.364 3.08462 528.677 2.03027Z",
  ],
  
  [
    "M2.03027 78.7021C3.08461 115.015 32.3286 144.259 68.6416 145.313C67.587 109 38.3434 79.7565 2.03027 78.7021Z",
    "M68.6416 2.03027C67.5873 38.3433 38.3433 67.587 2.03028 68.6416C3.0849 32.3286 32.3285 3.08462 68.6416 2.03027Z",
  ],
];

// Static last 2 leaves (unchanging)
const staticLeaves = leaves.slice(-1);

const animatedLeaves = leaves.slice(0, -1);

const leafVariants = {
  hidden: { opacity: 0, x: 100 }, // Right se start
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: Math.floor(i) * 0.2, // 2-2 leaves ek saath
      type: "spring",
      stiffness: 50,
      damping: 20,
    },
  }),
};

export default function AnimatedLeaves() {
  return (
    <motion.svg
      width="531"
      height="147"
      viewBox="0 0 531 147"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="mx-auto"
    >
      {/* Animate hone wale leaves */}
      {animatedLeaves.map(([path1, path2], i) => (
        <motion.g key={i} custom={i} variants={leafVariants}>
          <path d={path1} stroke="#FDC550" strokeWidth="4" />
          <path d={path2} stroke="#FDC550" strokeWidth="4" />
        </motion.g>
      ))}

      {/* Static last 2 leaves */}
      {staticLeaves.map(([path1, path2], i) => (
        <g key={`static-${i}`}>
          <path d={path1} stroke="#FDC550" strokeWidth="4" />
          <path d={path2} stroke="#FDC550" strokeWidth="4" />
        </g>
      ))}
    </motion.svg>
  );
}
