"use client";
import { motion } from "framer-motion";

// Last ke 2 leaves static dikhne hain
const staticLeaves = [
  {
    d: "M460.039 0C460.039 39.0313 491.68 70.6724 530.711 70.6724C530.711 31.6411 499.07 0 460.039 0Z",
  },
  {
    d: "M530.711 76.6719C530.711 115.703 499.07 147.344 460.039 147.344C460.039 108.313 491.68 76.6719 530.711 76.6719Z",
  },
];

// Baaki leaves animate hone hain left se ek hi path pe aate hue
const animatedLeaves = [
  "M0 0C0 39.0313 31.6411 70.6724 70.6724 70.6724C70.6724 31.6411 39.0313 0 0 0Z",
  "M70.6719 76.6719C70.6719 115.703 39.0308 147.344 -0.0005 147.344C-0.0005 108.313 31.6406 76.6719 70.6719 76.6719Z",
  "M147.348 0C147.348 39.0313 115.707 70.6724 76.6752 70.6724C76.6752 31.6411 108.316 0 147.348 0Z",
  "M76.6719 76.6719C76.6719 115.703 108.313 147.344 147.344 147.344C147.344 108.313 115.703 76.6719 76.6719 76.6719Z",
  "M224.02 0C224.02 39.0313 192.378 70.6724 153.347 70.6724C153.347 31.6411 184.988 0 224.02 0Z",
  "M153.348 76.6719C153.348 115.703 184.989 147.344 224.02 147.344C224.02 108.313 192.379 76.6719 153.348 76.6719Z",
  "M300.691 0C300.691 39.0313 269.05 70.6724 230.019 70.6724C230.019 31.6411 261.66 0 300.691 0Z",
  "M230.02 76.6719C230.02 115.703 261.661 147.344 300.692 147.344C300.692 108.313 269.051 76.6719 230.02 76.6719Z",
  "M306.691 0C306.691 39.0313 338.333 70.6724 377.364 70.6724C377.364 31.6411 345.723 0 306.691 0Z",
  "M377.363 76.6719C377.363 115.703 345.722 147.344 306.691 147.344C306.691 108.313 338.332 76.6719 377.363 76.6719Z",
  "M383.363 0C383.363 39.0313 415.004 70.6724 454.036 70.6724C454.036 31.6411 422.395 0 383.363 0Z",
  "M454.039 76.6719C454.039 115.703 422.398 147.344 383.367 147.344C383.367 108.313 415.008 76.6719 454.039 76.6719Z",
];

const pathVariants = {
  hidden: { opacity: 0, x: -100 }, // Sab ek jagah se aayenge
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2, // Delay se 2-2 leaves ek saath aayenge
      type: "spring",
      stiffness: 60,
      damping: 14,
    },
  }),
};

export default function Leaf() {
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
      className="w-full max-w-[509px] h-auto mx-auto"
    >
      {/* Static right ke 2 leaves */}
      {staticLeaves.map((leaf, i) => (
        <path key={`static-${i}`} d={leaf.d} fill="#00296B" />
      ))}

      {/* Animate hone wale leaves - group of 2 ek sath aayenge */}
      {animatedLeaves.map((d, i) => (
        <motion.path
          key={`animated-${i}`}
          d={d}
          fill="#00296B"
          custom={Math.floor((animatedLeaves.length - 1 - i) / 2)} // group by 2 leaves
          variants={pathVariants}
        />
      ))}
    </motion.svg>
  );
}
