import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logonavbar.svg";

const Navbar = () => {
  const handleScroll = (e, id) => {
    e.preventDefault(); // Prevent default anchor behavior
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
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
    <div className="relative">
      <div className="fixed top-0 left-0 w-full z-50">
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
              onClick={(e) => handleScroll(e, "about")}
            >
              About
            </a>
            <a
              href="#services"
              className="mx-3 hover:text-gray-300"
              onClick={(e) => handleScroll(e, "services")}
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
