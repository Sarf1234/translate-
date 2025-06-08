import React, { useRef, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/globalflow.json";

const GlassyText = ({ texttrue, textfalse}) => {
  const lottieRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  const totalFrames = animationData.op;
  const halfFrame = Math.floor(totalFrames / 2);

  const playSegment = (from, to) => {
    if (lottieRef.current) {
      lottieRef.current.goToAndStop(from, true);
      lottieRef.current.playSegments([from, to], true);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    playSegment(0, halfFrame);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    playSegment(halfFrame, totalFrames);
  };

  return (
    <div
      onMouseEnter={() =>{
        handleMouseEnter();
        texttrue(true);
      }}
      onMouseLeave={() =>{
        handleMouseLeave();
        textfalse(false);
      }}
      // Hides overflow, animates height
      className={`w-screen relative cursor-pointer overflow-hidden transition-all duration-300 ease-in-out`}
      style={{
        height: isHovered ? "calc(100vw / 3 - 30px)" : "calc(100vw / 3)", // aspect-[3/1] with 20px cut
      }}
    >
      {/* Animation takes full width & natural height */}
      <div className="absolute top-0 left-0 w-full h-auto">
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={false}
          autoplay={false}
          className="w-full"
        />
      </div>

      {/* Overlay content */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "black",
          pointerEvents: "none",
          userSelect: "none",
          textAlign: "center",
        }}
        className="w-[1050px] font-poppins"
      >
        Drive your global success with precise, reliable translations. Trusted
        by 50+ companies, Transverse delivers accurate solutions for businesses
        and individuals, ensuring your message resonates seamlessly across
        industries.
      </div>
    </div>
  );
};

export default GlassyText;
