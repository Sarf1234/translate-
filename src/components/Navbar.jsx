import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logonavbar.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (e, id, offset = 0, align = "start") => {
    e.preventDefault();
    // Close mobile menu when clicking a link
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      if (align === "start") {
        // Normal scrollIntoView with offset from top
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementTop - offset,
          behavior: "smooth",
        });
      } else if (align === "bottom") {
        // Scroll so that element bottom is offset px above viewport bottom
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = window.pageYOffset + elementRect.top;
        const elementHeight = element.offsetHeight;
        const viewportHeight = window.innerHeight;

        const scrollTo = absoluteElementTop + elementHeight - viewportHeight + offset;
        window.scrollTo({
          top: scrollTo,
          behavior: "smooth",
        });
      } else {
        // Default fallback
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // Define the animation variants
  const navbarVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const hamburgerVariants = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: 180,
      transition: {
        duration: 0.3,
      }
    }
  };

  return (
    <div className="relative w-full">
      <div className="fixed top-0 left-0 right-0 z-50 w-full">
        <motion.div
          variants={navbarVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-[1280px] mx-auto"
        >
          {/* Main Navbar */}
          <div className="relative flex justify-between lg:justify-center items-center h-[40px] sm:h-[50px] bg-[#00296B] text-white px-4 sm:px-6 lg:px-[50px]">
            {/* Logo - Left side on mobile, absolute positioned on desktop */}
            <div className="flex items-center lg:absolute lg:left-12">
              <img src={logo} alt="Logo" className="h-[20px] w-[20px] sm:h-[22px] sm:w-[22px]" />
            </div>

            {/* Center Text - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:block font-poppins text-sm xl:text-base">
              Connecting Ideas, Creating Impact
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden lg:flex lg:absolute lg:right-15 items-center">
              <a
                href="#about"
                className="mx-3 hover:text-gray-300 transition-colors duration-200 text-sm xl:text-base"
                onClick={(e) => handleScroll(e, "about", 40, "bottom")}
              >
                About
              </a>
              <a
                href="#services"
                className="mx-3 hover:text-gray-300 transition-colors duration-200 text-sm xl:text-base"
                onClick={(e) => handleScroll(e, "services", 40, "start")}
              >
                Services
              </a>
              <a
                href="#contact"
                className="mx-3 hover:text-gray-300 transition-colors duration-200 text-sm xl:text-base"
                onClick={(e) => handleScroll(e, "contact")}
              >
                Contact
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <motion.button
              variants={hamburgerVariants}
              animate={isMobileMenuOpen ? "open" : "closed"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-6 h-6 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 mt-1 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 mt-1 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="lg:hidden bg-[#00296B] border-t border-[#FDC550] overflow-hidden"
              >
                <div className="px-4 py-4 space-y-3">
                  {/* Mobile tagline */}
                  <div className="font-poppins text-center text-[#FDC550] text-sm pb-2 border-b border-gray-600">
                    Connecting Ideas, Creating Impact
                  </div>
                  
                  <a
                    href="#about"
                    className="block text-white py-2 px-3 hover:bg-[#003f8f] rounded-md transition-colors duration-200 text-center"
                    onClick={(e) => handleScroll(e, "about", 40, "bottom")}
                  >
                    About
                  </a>
                  <a
                    href="#services"
                    className="block  text-white py-2 px-3 hover:bg-[#003f8f] rounded-md transition-colors duration-200 text-center"
                    onClick={(e) => handleScroll(e, "services", 40, "start")}
                  >
                    Services
                  </a>
                  <a
                    href="#contact"
                    className="block  text-white py-2 px-3 hover:bg-[#003f8f] rounded-md transition-colors duration-200 text-center"
                    onClick={(e) => handleScroll(e, "contact")}
                  >
                    Contact
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Border */}
          <motion.hr className="border-2 border-[#FDC550]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;