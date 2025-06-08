import React, { useState } from "react";
import Lottie from "lottie-react";
import flow1 from "../assets/flow1.json";
import flow3 from "../assets/flow3.json";
import flow6 from "../assets/flow6.json";

const SplashScreen = () => {
  const [currentAnimation, setCurrentAnimation] = useState(1);

  // Function to handle animation completion
  const handleAnimationComplete = () => {
    if (currentAnimation < 2) {
      setCurrentAnimation(currentAnimation + 1);
    } else {
      // Optionally, handle what happens after all animations are done
      // e.g., navigate to another page or hide the splash screen
      console.log("All animations completed");
    }
  };

  // Function to skip animations
  const handleSkip = () => {
    setCurrentAnimation(3); // Skip to the last animation or handle navigation
    console.log("Skipped animations");
  };

  return (
    <div
      className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50 transition-opacity duration-500 opacity-100"
      onClick={handleSkip}
      aria-label="Loading splash screen"
      role="alert"
    >
      {currentAnimation === 1 && (
        <Lottie
          animationData={flow1}
          loop={false}
          onComplete={handleAnimationComplete}
          className="w-full h-full"
        />
      )}
      {currentAnimation === 2 && (
        <Lottie
          animationData={flow3}
          loop={false}
          onComplete={handleAnimationComplete}
          className="w-full h-full"
        />
      )}
      {/* {currentAnimation === 3 && (
        <Lottie
          animationData={flow6}
          loop={false}
          onComplete={handleAnimationComplete}
          className="w-full h-full"
        />
      )} */}
      <p className="text-sm text-gray-600 mt-4">Click anywhere to skip</p>
    </div>
  );
};

export default SplashScreen;
