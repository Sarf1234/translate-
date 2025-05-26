'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

const bars = [
  { id: 1, delay: 0 },
  { id: 2, delay: 0.1 },
  { id: 3, delay: 0.2 },
  { id: 4, delay: 0.3 },
  { id: 5, delay: 0.4 },
  { id: 6, delay: 0.5 },
];

export default function GlassyText() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center justify-center h-[300px] bg-gradient-to-b from-white via-blue-900 to-white bg-[length:200%_200%] animate-gradient overflow-hidden">
      {/* Vertical Glassy Bars */}
     <h1 className="bottom-10 text-[95px] font-normal mix-blend-difference pointer-events-none text-center px-4 font-urbanist !text-white">
        Your global Voice locally tuned
      </h1>
      
    </div>
  );
}
