import React, { useState, useRef, useEffect } from "react";
import image1 from "../assets/sub_hero_image.jpg";

const SubHero = () => {
  const [isTextHovered, setIsTextHovered] = useState(false); // Track hover on text
  const [isImageHovered, setIsImageHovered] = useState(false); // Track hover on image
  const [showTransverseText, setShowTransverseText] = useState(false); // Track visibility of "Transverse" text
  const imageRef = useRef(null); // Ref to the image div for scrolling

  // Determine if image should be visible (either text or image is hovered)
  const isImageVisible = isTextHovered || isImageHovered;

  // Scroll to the image when text is hovered
  const handleTextHover = () => {
    setIsTextHovered(true);
    // if (imageRef.current) {
    //   imageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    // }
  };

  // Show "Transverse" text after a delay when the image is fully visible
  useEffect(() => {
    let timer;
    if (isImageVisible) {
      timer = setTimeout(() => {
        setShowTransverseText(true);
      }, 500); // 500ms delay after image appears
    } else {
      setShowTransverseText(false); // Hide text when image is not visible
    }
    return () => clearTimeout(timer); // Cleanup timer on unmount or state change
  }, [isImageVisible]);

  return (
    <div id="about" className="flex flex-col justify-center items-center">
      {/* Text div with hover event and height animation */}
      <div
        className={`flex justify-center mb-12 items-center transition-all duration-500 ease-in-out`} // Animate height change
        onMouseEnter={handleTextHover} // Scroll to image and shrink height on hover
        onMouseLeave={() => setIsTextHovered(false)} // Update text hover state
      >
        <span className="w-[1050px] text-center font-poppins">
          Drive your global success with precise, reliable translations. Trusted
          by 50+ companies, Transverse delivers accurate solutions for
          businesses and individuals, ensuring your message resonates seamlessly
          across industries.
        </span>
      </div>
      {/* Image div with conditional rendering, animation, and hover tracking */}
      <div
        className={`relative w-full transition-all duration-1000 ease-in-out transform ${
          isImageVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`} // Animation based on combined hover state
        onMouseEnter={() => setIsImageHovered(true)} // Keep image visible on hover
        onMouseLeave={() => setIsImageHovered(false)} // Update image hover state
      >
        <img ref={imageRef} src={image1} className="w-full" alt="" />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#00296B] to-[rgba(0,41,107,0)]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0, 41, 107, 0) 42.39%, #00296B 100%)",
          }}
        ></div>
        {/* Transverse text with animation */}
        <div
          className={`absolute bottom-0 left-0 w-full text-center pb-1 transition-all duration-500 ease-in-out transform ${
            showTransverseText
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`} // Animate text rising from below
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
