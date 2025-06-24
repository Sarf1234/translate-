import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BoxAndLeaf from "./ui/BoxAndLeaf";
import OrangeBoxAndLeaf from "./ui/OrangeBoxAndLeaf";
import AnimatedText from "./ui/AnimatedText";

const Translation = () => {
  const [isHoveredTitle, setIsHoveredTitle] = useState(false);
  const [isHoveredDescription, setIsHoveredDescription] = useState(false);

  const springSettings = {
    type: "spring",
    mass: 1,
    stiffness: 200,
    damping: 20,
  };

  const riseAnimation = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
      duration: 0.2,
      delay: 1,
    },
  };

  return (
    <div
      id="services"
      className="
        scroll-mt-10 
        bg-[#00296B] 
        py-14 
        px-4 sm:px-6 md:px-10 lg:px-[3.5rem] 
        flex 
        justify-between 
        items-center 
        flex-wrap
        md:flex-nowrap 
        md:flex-row 
        flex-col
      "
    >
      {/* LEFT SECTION */}
      <div className="flex flex-col items-start text-[58px] md:text-[88px] text-white space-y-12 w-full md:w-auto">
        <AnimatedText
          englishText="Translation"
          hindiText="अनुवाद"
          englishClassName="font-urbanist"
          hindiClassName="font-urbanist"
          containerClassName="bg-[#00296B]"
        />
        <div>
          <BoxAndLeaf />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex flex-col items-start text-[16px] text-white space-y-12 w-full md:w-auto mt-16 md:mt-0">
        <div className="self-start">
          <OrangeBoxAndLeaf />
        </div>

        <div className="relative w-full">
          <motion.div
            onMouseEnter={() => setIsHoveredDescription(true)}
            onMouseLeave={() => setIsHoveredDescription(false)}
            initial={riseAnimation.initial}
            whileInView={riseAnimation.animate}
            transition={riseAnimation.transition}
            viewport={{ once: true, amount: 0.5 }}
          >
            <AnimatePresence mode="sync">
              <div className="tracking-wide font-poppins min-h-[200px]  md:min-h-[100px]">
                {isHoveredDescription ? (
                  <motion.div
                    key="hindi-description"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ ...springSettings, delay: 0.001 }}
                    className="absolute tracking-wide text-base/8"
                  >
                    अपने वैश्विक सफलता को सटीक और विश्वसनीय अनुवाद के साथ आगे
                    <br />
                    बढ़ाएं। 50+ कंपनियों द्वारा विश्वसनीय, ट्रांसवर्स व्यवसायों और
                    व्यक्तियों के <br />
                    लिए सटीक समाधान प्रदान करता है, जिससे आपका संदेश विभिन्न
                    <br />
                    उद्योगों में सहजता से संनादित हो।
                  </motion.div>
                ) : (
                  <motion.div
                    key="english-description"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ ...springSettings, delay: 0.001 }}
                    className="absolute tracking-wide font-poppins text-base/8"
                  >
                    Drive your global success with precise, reliable translations.
                    <br />
                    Trusted by 50+ companies, Transverse delivers accurate
                    <br />
                    solutions for businesses and individuals, ensuring your
                    <br />
                    message resonates seamlessly across industries.
                  </motion.div>
                )}
              </div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Translation;
