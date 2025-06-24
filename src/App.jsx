import React, { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";

// 💡 Critical Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SubHero from "./components/Sub_Hero";
import SplashScreen from "./components/SplashScreen";

// 💡 UI Components (needed early)
import CenterReveal from "./components/ui/CenterReveal";

// 💡 Lazy-loaded Components
const Translation = lazy(() => import("./components/Translation"));
const Localization = lazy(() => import("./components/Localization"));
const Language = lazy(() => import("./components/Language"));
const Tele = lazy(() => import("./components/Tele"));
const Divider = lazy(() => import("./components/Divider"));
const Metrics = lazy(() => import("./components/Metrics"));
const Patrons = lazy(() => import("./components/Patrons"));
const Clients = lazy(() => import("./components/clients"));
const Gallery = lazy(() => import("./components/Gallery"));
const Separator = lazy(() => import("./components/Separator"));
const Footer = lazy(() => import("./components/Footer"));
const AnimatedSection = lazy(() => import("./components/AnimatedSection"));

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const hideSplash = () => {
      setFadeOut(true);
      setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem("hasSeenSplash", "true");
      }, 200);
    };

    const timer = setTimeout(hideSplash, 4500);

    const handleKeyPress = () => {
      clearTimeout(timer);
      hideSplash();
    };
    const handleClick = () => {
      clearTimeout(timer);
      hideSplash();
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("click", handleClick);

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
        <div className="max-w-[1280px] w-full mx-auto">
          <Navbar />
          <Hero />
          <SubHero />

          <Suspense fallback={<div>Loading...</div>}>
            <CenterReveal>
              <Translation />
            </CenterReveal>
           <CenterReveal>
              <Localization />
            </CenterReveal>
              <CenterReveal>
              <Language />
            </CenterReveal> 
            <CenterReveal>
              <Tele />
            </CenterReveal>

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

            <Footer />
          </Suspense> 

          {/* <hr className="border-2 border-[#FDC550]" /> */}
        </div>
      )}
    </>
  );
}

export default App;
