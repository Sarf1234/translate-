// ./ui/FooterSplashLogoHoverSequence.jsx
import React, { useState } from "react";
import Lottie from "lottie-react";
import flow1 from "../../assets/flow9.json";
import flow3 from "../../assets/flow8.json";
import flow6 from "../../assets/flow7.json";

const FooterSplashLogoHoverSequence = () => {
  const [hovering, setHovering] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState(1);

  const handleHoverStart = () => {
    setHovering(true);
    setCurrentAnimation(1);
  };

  const handleHoverEnd = () => {
    setHovering(false);
    setCurrentAnimation(1);
  };

  const handleAnimationComplete = () => {
    if (currentAnimation < 3) {
      setCurrentAnimation((prev) => prev + 1);
    }
  };

  return (
    <div
      className="relative w-[220px] h-[220px] bg-transparent rounded-xl cursor-pointer overflow-hidden flex items-center justify-center"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {hovering ? (
        <>
          {currentAnimation === 1 && (
            <Lottie
              animationData={flow1}
              loop={false}
              onComplete={handleAnimationComplete}
              className="absolute w-full h-full"
            />
          )}
          {currentAnimation === 2 && (
            <Lottie
              animationData={flow3}
              loop={false}
              onComplete={handleAnimationComplete}
              className="absolute w-full h-full"
            />
          )}
          {currentAnimation === 3 && (
            <Lottie
              animationData={flow6}
              loop={false}
              onComplete={handleAnimationComplete}
              className="absolute w-full h-full"
            />
          )}
        </>
      ) : (
        <div className="z-10 text-center">
          <div className="font-urbanist text-5xl font-medium">Transverse</div>
          <div className="font-poppins mt-1 text-xs">Hover to Animate</div>
        </div>
      )}
    </div>
  );
};

export default FooterSplashLogoHoverSequence;
