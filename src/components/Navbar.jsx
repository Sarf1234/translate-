import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logonavbar.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e, id, offset = 0, align = "start") => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      if (align === "start") {
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementTop - offset, behavior: "smooth" });
      } else if (align === "bottom") {
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = window.pageYOffset + elementRect.top;
        const elementHeight = element.offsetHeight;
        const viewportHeight = window.innerHeight;
        const scrollTo = absoluteElementTop + elementHeight - viewportHeight + offset;
        window.scrollTo({ top: scrollTo, behavior: "smooth" });
      } else {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setMenuOpen(false);
  };

  const navbarVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.2, ease: "easeOut" } },
  };

  const menuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
    exit: { height: 0, opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <div className="relative w-[1280px] mx-auto">
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[1280px]">
        <motion.div variants={navbarVariants} initial="hidden" animate="visible">
          <div className="flex justify-between items-center h-[40px] bg-[#00296B] text-white px-[50px]">

            {/* Left - Logo */}
            <div className="flex-shrink-0 flex items-center w-[100px]">
              <img src={logo} alt="Logo" className="h-[22px] w-[22px]" />
            </div>

            {/* Center - Text */}
            <div className="hidden md:flex justify-center flex-grow text-center font-poppins text-base">
              Connecting Ideas, Creating Impact
            </div>

            {/* Right - Menu */}
            <div className="hidden md:flex items-center justify-end w-[250px]">
              <a href="#about" className="mx-3 hover:text-gray-300" onClick={(e) => handleScroll(e, "about", 40, "bottom")}>
                About
              </a>
              <a href="#services" className="mx-3 hover:text-gray-300" onClick={(e) => handleScroll(e, "services", 40, "start")}>
                Services
              </a>
              <a href="#contact" className="mx-3 hover:text-gray-300" onClick={(e) => handleScroll(e, "contact")}>
                Contact
              </a>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <div className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </button>
            </div>

          </div>

          {/* Animated Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={menuVariants}
                className="bg-[#00296B] text-white flex flex-col items-center py-4 md:hidden overflow-hidden"
              >
                <a href="#about" className="py-2" onClick={(e) => handleScroll(e, "about", 40, "bottom")}>
                  About
                </a>
                <a href="#services" className="py-2" onClick={(e) => handleScroll(e, "services", 40, "start")}>
                  Services
                </a>
                <a href="#contact" className="py-2" onClick={(e) => handleScroll(e, "contact")}>
                  Contact
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.hr className="border-2 border-[#FDC550]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
