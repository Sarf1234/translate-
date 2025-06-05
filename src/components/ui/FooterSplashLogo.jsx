import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { useInView } from "react-intersection-observer";

import flow1 from "../../assets/flow13.json";
import flow3 from "../../assets/flow009.json";
import flow6 from "../../assets/flow10.json";

const FooterSplashLogoHoverSequence = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState(0);
  const [hasAnimatedOnce, setHasAnimatedOnce] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  // Auto play once when in view
  useEffect(() => {
    if (inView && !hasAnimatedOnce) {
      triggerAnimation();
      setHasAnimatedOnce(true);
    }
  }, [inView, hasAnimatedOnce]);

  // Run next animation after delay
 useEffect(() => {
  if (isAnimating && currentAnimation > 0 && currentAnimation < 3) {
    const delay =
      currentAnimation === 1
        ? 1000 // flow1 duration (shorter)
        : currentAnimation === 2
        ? 4000 // flow3 duration (longer)
        : 1000; // flow6 duration (optional, if needed)

    const timer = setTimeout(() => {
      setCurrentAnimation((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timer);
  }
}, [isAnimating, currentAnimation]);


  const triggerAnimation = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentAnimation(1);
    }
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
    setCurrentAnimation(0);
  };

  return (
    <div
      ref={ref}
      onMouseEnter={triggerAnimation}
      onMouseLeave={triggerAnimation}
      className="relative w-full h-6/8 bg-transparent rounded-xl cursor-pointer overflow-hidden flex items-center justify-center"
    >
      {isAnimating && currentAnimation > 0 ? (
        <>
          {currentAnimation === 1 && (
            <Lottie
              animationData={flow1}
              loop={false}
              className="absolute top-4/12 w-full h-full scale-125"
              style={{ transform: "scale(2.5)", transformOrigin: "center" }}
            />
          )}
          {currentAnimation === 2 && (
            <Lottie
              animationData={flow3}
              loop={false}
              className="absolute top-4/12 w-full h-full scale-125"
              style={{ transform: "scale(2.5)", transformOrigin: "center" }}
              onComplete={handleAnimationEnd}
            />
          )}
          {currentAnimation === 3 && (
            <Lottie
              animationData={flow6}
              loop={false}
              className="absolute top-4/12 w-full h-full"
              onComplete={handleAnimationEnd}
              style={{ transform: "scale(2.5)", transformOrigin: "center" }}
            />
          )}
        </>
      ) : (
        // 👇 Show final static animation (flow6) after complete
        <Lottie
          animationData={flow3}
          loop={false}
          autoplay={false}
          className="absolute top-4/12 w-full h-full scale-125"
          style={{ transform: "scale(2.5)", transformOrigin: "center" }}
        />
      )}
    </div>
  );
};

export default FooterSplashLogoHoverSequence;
