import React, { useState } from "react";
import image1 from "../assets/GroupLeaf.svg";
import emailjs from "emailjs-com";
import FooterSplashLogo from "./ui/FooterSplashLogo";

const Footer = () => {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    emailjs
      .sendForm(
        "service_x2zkxhi",
        "template_ydoiqdv",
        e.target,
        "t0Uc25bQ8TACi4rFo"
      )
      .then(
        () => {
          setFormStatus("success");
          e.target.reset();
        },
        () => {
          setFormStatus("error");
        }
      );
  };

  return (
    <div
      id="contact"
      className="bg-[#00296B] text-white px-6 sm:px-10 md:px-16 lg:px-24 py-10"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-40" />

      {/* Content */}
      <div className="z-10 flex flex-col md:flex-row justify-between h-[65vh] gap-y-20 md:gap-x-20">
        {/* Logo + Info */}
        <div
          className="w-[468px] h-[401px] bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url(${image1})`,
          }}
        >
          <FooterSplashLogo />
          <div className="flex items-center justify-center font-light text-xs gap-x-10 pt-10 font-poppins">
          <div>Accessibility Statement</div>
          <div>Privacy Policy</div>
          <div>Terms & Condition</div>
        </div>
        </div>

        {/* Contact + Form */}
        <div className="w-full md:w-1/2 flex flex-col gap-y-6 font-poppins p-4">
          <div className="flex flex-col sm:flex-row justify-between gap-y-2">
            <div className="font-medium">Contact Us:</div>
            <div className="text-right font-base">
              <div>+91 9999108727</div>
              <div>contact@transversesolutions.com</div>
            </div>
          </div>

          <div className="font-semibold mt-4">Send an Email:</div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-3 w-full max-w-xl"
          >
            <input
              type="email"
              name="email"
              placeholder="Your Email Address*"
              className="border-2 border-[#FDC550] bg-white text-black outline-0 w-full rounded-l-full rounded-tr-full py-2 px-4"
              required
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Write your message here*"
              className="border-2 border-[#FDC550] bg-white text-black outline-0 w-full rounded-l-3xl rounded-tr-3xl py-2 px-4"
              required
            />
           <div className="flex justify-end">
    <button
      type="submit"
      className="bg-[#BADA55] hover:bg-[#A8C63D] cursor-pointer transition duration-300 text-white font-semibold rounded-l-full rounded-br-full py-2.5 px-6 w-fit"
      disabled={formStatus === "submitting"}
    >
      {formStatus === "submitting" ? "Submitting..." : "Send"}
    </button>
  </div>

            {formStatus === "success" && (
              <div className="text-green-500 font-semibold">
                Message sent successfully!
              </div>
            )}
            {formStatus === "error" && (
              <div className="text-red-500 font-semibold">
                Failed to send message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
