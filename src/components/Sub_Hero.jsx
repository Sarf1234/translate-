import React, { useState, useRef, useEffect } from "react";
import image1 from "../assets/sub_hero_image.jpg";

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
    <div id="about" className="scroll-mt-12 flex flex-col justify-center items-center"
        onMouseEnter={() => setIsTextHovered(true)}
        onMouseLeave={() => setIsTextHovered(false)}
    >
      {/* Text block with hover triggering image animation */}
      <div
        className="flex justify-center mb-12 items-center transition-all duration-500 ease-in-out"
        // onMouseEnter={() => setIsTextHovered(true)}
        // onMouseLeave={() => setIsTextHovered(false)}
      >
        <span className="w-[1050px] text-center font-poppins">
          Drive your global success with precise, reliable translations. Trusted
          by 50+ companies, Transverse delivers accurate solutions for
          businesses and individuals, ensuring your message resonates seamlessly
          across industries.
        </span>
      </div>

      {/* Image block with animation on hover */}
      <div
        className={`relative w-full transition-all duration-1000 ease-in-out transform ${
          isImageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
      >
        <img ref={imageRef} src={image1} className="w-full" alt="" />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#00296B] to-[rgba(0,41,107,0)]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0, 41, 107, 0) 42.39%, #00296B 100%)",
          }}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-full text-center pb-1 transition-all duration-500 ease-in-out transform ${
            showTransverseText
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
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
