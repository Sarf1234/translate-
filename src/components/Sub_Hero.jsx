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
      className="flex flex-col justify-center items-center"
      style={{marginBottom:"-2px"}}
    >
      {/* Text block with hover triggering image animation */}
      <GlassyText texttrue={setIsTextHovered} textfalse={setIsTextHovered} />

      {/* Image block with animation on hover */}
     {/* Image block with animation on hover */}
<div
  className="relative w-full overflow-hidden"
  onMouseEnter={() => setIsImageHovered(true)}
  onMouseLeave={() => setIsImageHovered(false)}
>
  {/* Image sliding container */}
  <div
    className={`transform transition-transform duration-1000 ease-in-out ${
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

  {/* Gradient Overlay - linked with image visibility */}
 <div
  className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none select-none transition-opacity duration-1500 ease-in-out"
  style={{
    backgroundImage: "linear-gradient(0deg, #00296B 0px, #00296B 12px, rgba(0, 41, 107, 0) 100%)",
    opacity: showTransverseText ? 1 : 0,
  }}
/>

  {/* Text Reveal - linked with delayed hover */}
  <div
    className={`absolute bottom-0 left-0 w-full text-center pb-1 transition-transform duration-900 ease-in-out ${
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
