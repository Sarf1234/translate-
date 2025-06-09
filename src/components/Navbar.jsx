import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logonavbar.svg";

const Navbar = () => {
  const handleScroll = (e, id, offset = 0, align = "start") => {
  e.preventDefault();
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
  const navbarVariants1 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative w-[1280px] mx-auto">
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[1280px]">
        <motion.div
          variants={navbarVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative flex justify-center items-center h-[40px] bg-[#00296B] text-white px-[50px]">
          <div className="absolute left-12">
            <img src={logo} alt="Logo" className="h-[22px] w-[22px]" />
          </div>

          <div className="font-poppins">Connecting Ideas, Creating Impact</div>

          <div className="absolute right-15 flex items-center">
            <a
              href="#about"
              className="mx-3 hover:text-gray-300"
              onClick={(e) => handleScroll(e, "about", 40, "bottom")}
            >
              About
            </a>
            <a
              href="#services"
              className="mx-3 hover:text-gray-300"
              onClick={(e) => handleScroll(e, "services", 40, "start")}
            >
              Services
            </a>
            <a
              href="#contact"
              className="mx-3 hover:text-gray-300"
              onClick={(e) => handleScroll(e, "contact")}
            >
              Contact
            </a>
          </div>
          </div>
          <motion.hr 
          className="border-2 border-[#FDC550]" 
        />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
