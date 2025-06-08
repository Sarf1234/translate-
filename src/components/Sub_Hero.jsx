import React, { useState, useRef, useEffect } from "react";
import image1 from "../assets/sub_hero_image.jpg";
import GlassyText from "./ui/GlassyText";

const SubHero = () => {
  const [isTextHovered, setIsTextHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [showTransverseText, setShowTransverseText] = useState(false);
  const imageRef = useRef(null);

  const isImageVisible = isTextHovered || isImageHovered;

  useEffect(() => {
    let timer;
    if (isImageHovered) {
      timer = setTimeout(() => {
        setShowTransverseText(true);
      }, 500);
    } else {
      setShowTransverseText(false);
    }
    return () => clearTimeout(timer);
  }, [isImageHovered]);

  return (
    <div
      id="about"
      className="scroll-mt-10 flex flex-col justify-center items-center"
    >
      {/* Text block with hover triggering image animation */}
      <GlassyText texttrue={setIsTextHovered} textfalse={setIsTextHovered} />

      {/* Image block with animation on hover */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
      >
        {/* Masking Container with overflow-hidden */}
        <div
          className={`transform transition-all duration-1000 ease-in-out ${
            isImageVisible ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <img
            ref={imageRef}
            src={image1}
            className="w-full"
            alt=""
          />
        </div>

        {/* Gradient Overlay */}
        {/* Dynamic Background Based on `showTransverseText` */}
        <div
          className={`absolute bottom-0 left-0 w-full h-1/2 transition-all duration-1500 ease-in-out pointer-events-none ${
            showTransverseText ? "" : "bg-transparent"
          }`}
          style={
            showTransverseText
              ? {
                  backgroundImage:
                   "linear-gradient(0deg, #00296B 0px, #00296B 12px, rgba(0, 41, 107, 0) 100%)",
                }
              : {}
          }
        />

        {/* Text Reveal */}
        <div
          className={`absolute bottom-0 left-0 w-full text-center pb-1 transition-all duration-1500 ease-in-out transform ${
            showTransverseText ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <span className="text-[200px] text-white font-urbanist">
            Transverse
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubHero;
