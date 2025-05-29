import React, { useState, useEffect } from "react";
import "./App.css";
import AnimatedSection from "./components/AnimatedSection";
import Clients from "./components/clients";
import Divider from "./components/Divider";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Language from "./components/Language";
import Localization from "./components/Localization";
import Metrics from "./components/Metrics";
import Navbar from "./components/Navbar";
import Patrons from "./components/Patrons";
import Separator from "./components/Separator";
import SubHero from "./components/Sub_Hero";
import Tele from "./components/Tele";
import Translation from "./components/Translation";
import SplashScreen from "./components/SplashScreen";
import EndFooter from "./components/EndFooter";
import GlassyText from "./components/ui/GlassyText";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");

    // if (hasSeenSplash) {
    //   setShowSplash(false);
    //   return;
    // }

    // Function to hide splash screen with fade-out
    const hideSplash = () => {
      setFadeOut(true);
      setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem("hasSeenSplash", "true");
      }, 500); // Match the transition duration
    };

    // Set timeout for 5 seconds
    const timer = setTimeout(hideSplash, 1000);

    // Add keypress event listener
    const handleKeyPress = () => {
      clearTimeout(timer);
      hideSplash();
    };

    // Add click event listener
    const handleClick = () => {
      clearTimeout(timer);
      hideSplash();
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("click", handleClick);

    // Cleanup
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      {showSplash ? (
        <div className={fadeOut ? "opacity-0" : "opacity-100"}>
          <SplashScreen />
        </div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <GlassyText />
          <SubHero />
          <Translation />
          <Localization />
          <Language />
          <Tele />
          <Divider />
          <AnimatedSection>
            <Metrics />
          </AnimatedSection>
          <Patrons />
          <AnimatedSection>
            <Clients />
          </AnimatedSection>
          <AnimatedSection>
            <Gallery />
          </AnimatedSection>
          <AnimatedSection>
            <Separator />
          </AnimatedSection>
          <AnimatedSection>
            <Footer />
          </AnimatedSection>
          {/* <EndFooter /> */}
        </>
      )}
    </>
  );
}

export default App;
