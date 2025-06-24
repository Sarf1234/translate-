import React from "react";
import { motion, useInView } from "framer-motion";

const Metrics = () => {
  const boxVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const centerTextVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const boxConfigs = [
    {
      borderColor: "#FDC550",
      borderRadius: "rounded-t-full rounded-r-full",
      fillDirection: "top-right",
      text: "Words/Year",
      centerText: "1M+",
      textColor: "white",
    },
    {
      borderColor: "#00296B",
      borderRadius: "rounded-b-full rounded-l-full",
      fillDirection: "bottom-left",
      text: "Trade Fairs Promotion",
      centerText: "15",
      textColor: "white",
    },
    {
      borderColor: "#FDC550",
      borderRadius: "rounded-t-full rounded-r-full",
      fillDirection: "top-right",
      text: "Interpretation",
      centerText: "100+",
      textColor: "white",
    },
    {
      borderColor: "#00296B",
      borderRadius: "rounded-b-full rounded-l-full",
      fillDirection: "bottom-left",
      text: "Experts",
      centerText: "500+",
      textColor: "white",
    },
  ];

  const ref = React.useRef(null);
  const inView = useInView(ref, { amount: 0.5, once: true });

  return (
    <div
      ref={ref}
      className="flex flex-wrap justify-center md:justify-between items-start px-4 sm:px-10 lg:px-20 py-10 gap-10 sm:gap-14 lg:gap-20 bg-white"
    >
      {boxConfigs.map((config, index) => (
        <div key={index} className="flex flex-col items-center">
          <motion.div
            className={`w-28 sm:w-36 lg:w-[152px] h-28 sm:h-36 lg:h-[152px] border-[3px] ${config.borderRadius} relative overflow-hidden`}
            style={{
              borderColor: config.borderColor,
              transformOrigin: "center",
            }}
            variants={boxVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
          >
            <motion.div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: config.borderColor,
                clipPath:
                  config.fillDirection === "bottom-left"
                    ? "circle(0% at 0% 100%)"
                    : "circle(0% at 100% 0%)",
              }}
              animate={
                inView
                  ? {
                      clipPath:
                        config.fillDirection === "bottom-left"
                          ? "circle(150% at 0% 100%)"
                          : "circle(150% at 100% 0%)",
                    }
                  : {}
              }
              transition={{ duration: 1, delay: 2, ease: "easeOut" }}
            />
            <motion.span
              className="absolute inset-0 flex items-center justify-center font-semibold font-poppins text-lg sm:text-xl"
              style={{ color: config.textColor }}
              variants={centerTextVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 3 }}
            >
              {config.centerText}
            </motion.span>
          </motion.div>

          <motion.p
            className="mt-6 text-base sm:text-lg font-medium text-gray-800 text-center"
            variants={textVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.4, ease: "easeOut", delay: 1.3 }}
          >
            {config.text}
          </motion.p>
        </div>
      ))}
    </div>
  );
};

export default Metrics;
