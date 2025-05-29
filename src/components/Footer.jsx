import React, { useState } from "react";
import image from "../assets/logowhiteee.png";
import image1 from "../assets/GroupLeaf.svg";
import emailjs from "emailjs-com";

const Footer = () => {
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success, error

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setFormStatus("submitting");

  //   const form = e.currentTarget;
  //   const formData = new FormData(form);

  //   const email = formData.get("email");
  //   const message = formData.get("message");

  //   // Format the current date and time (01:33 AM IST on Tuesday, May 20, 2025)
  //   const submittedAt = "01:33 AM IST on Tuesday, May 20, 2025";

  //   const emailPayload = {
  //     to: "contact@transversesolutions.com",
  //     subject: "You Have a New Lead - Transverse Solutions",
  //     html: `
  //       <div style="font-family: 'Poppins', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #f9f9f9;">
  //         <!-- Header -->
  //         <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #BADA55;">
  //           <h1 style="font-size: 24px; color: #00296B; margin: 0;">Transverse Solutions</h1>
  //           <p style="font-size: 14px; color: #343434; margin: 5px 0;">Connecting Ideas, Creating Impacts</p>
  //         </div>

  //         <!-- Body -->
  //         <div style="padding: 20px 0;">
  //           <h2 style="font-size: 20px; color: #343434; margin-bottom: 15px;">New Lead Submission</h2>
  //           <p style="font-size: 16px; color: #343434; line-height: 1.6;">
  //             You’ve received a new message from a potential lead:
  //           </p>
  //           <div style="background-color: #ffffff; padding: 15px; border-radius: 8px; margin: 10px 0; border: 1px solid #e0e0e0;">
  //             <p style="margin: 5px 0; font-size: 14px; color: #343434;">
  //               <strong>Email:</strong> ${email}
  //             </p>
  //             <p style="margin: 5px 0; font-size: 14px; color: #343434;">
  //               <strong>Message:</strong> ${message}
  //             </p>
  //             <p style="margin: 5px 0; font-size: 14px; color: #343434;">
  //               <strong>Submitted At:</strong> ${submittedAt}
  //             </p>
  //           </div>
  //           <p style="font-size: 14px; color: #343434; line-height: 1.6;">
  //             Please follow up with this lead at your earliest convenience.
  //           </p>
  //         </div>

  //         <!-- Footer -->
  //         <div style="text-align: center; padding-top: 20px; border-top: 2px solid #BADA55;">
  //           <p style="font-size: 12px; color: #777777; margin: 5px 0;">
  //             © 2025 Transverse Solutions. All rights reserved.
  //           </p>
  //           <p style="font-size: 12px; color: #777777; margin: 5px 0;">
  //             <a href="mailto:contact@transversesolutions.com" style="color: #BADA55; text-decoration: none;">contact@transversesolutions.com</a> | +91 9999108727
  //           </p>
  //         </div>
  //       </div>
  //     `,
  //   };

  //   try {
  //     const response = await fetch("https://backend.tychr.com/api/email", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(emailPayload),
  //     });

  //     if (response.ok) {
  //       setFormStatus("success");
  //       form.reset();
  //     } else {
  //       console.error("Failed to send email:", await response.text());
  //       setFormStatus("error");
  //     }
  //   } catch (err) {
  //     console.error("Error sending email:", err);
  //     setFormStatus("error");
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    emailjs
      .sendForm(
        "service_x2zkxhi", // Replace with actual
        "template_ydoiqdv", // Replace with actual
        e.target,
        "t0Uc25bQ8TACi4rFo" // Replace with actual
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormStatus("success");
          e.target.reset(); // Reset form fields
        },
        (error) => {
          console.error(error.text);
          setFormStatus("error");
        }
      );
  };

  return (
    <div
      id="contact"
      className="flex justify-between px-32 bg-[#00296B] !text-white py-12 "
    >
      <div className="relative p-[25px]">
        {/* Background image with reduced opacity */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundSize: "cover", // 🔧 Shows full image without cropping
            backgroundRepeat: "no-repeat",
            zIndex: 0,
          }}
        />
        {/* Content on top */}
        <div className="relative z-10 flex flex-col justify-center items-center">
          <img
            src={image}
            className="w-[400px] mix-blend-multiply h-auto"
            alt="Footer Logo"
          />
          {/* <div className="font-urbanist text-7xl font-normal text-white">Transverse</div>
        <div className="font-poppins text-white mt-3 font-light">
          Connecting Ideas, Creating Impacts
        </div> */}
          <div className="flex items-center justify-center gap-x-10 pt-2 font-poppins font-light text-[12px] text-white">
            <div>Accessibility Statement</div>
            <div>Privacy Policy</div>
            <div>Terms & Condition</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col font-poppins gap-y-2 pt-5">
        <div className="flex gap-x-10 w-full">
          <div className="flex justify-between w-full">
            <div className="font-medium">Contact Us:</div>
            <div className="flex flex-col text-right">
              <div>91+ 9999108727</div>
              <div>contact@transversesolutions.com</div>
            </div>
          </div>
        </div>

        <div className="font-semibold mt-5">Send an Email:</div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-end items-end gap-y-2.5 w-[509px]"
        >
          <input
            type="email"
            name="email"
            placeholder="Your Email Address*"
            className="border-2 border-[#FDC550] bg-white text-black outline-0 w-[500px] rounded-l-full rounded-tr-full py-2 px-5"
            required
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Write your message here*"
            className="border-2 border-[#FDC550] bg-white text-black outline-0 w-[500px] rounded-l-3xl rounded-tr-3xl py-2 px-5"
            required
          />
          <button
            type="submit"
            className="font-semibold rounded-l-full rounded-br-full bg-[#BADA55] text-white font-poppins text-center py-2.5 px-6 w-fit cursor-pointer hover:bg-[#A8C63D] transition duration-300 ease-in-out"
            disabled={formStatus === "submitting"}
          >
            {formStatus === "submitting" ? "Submitting..." : "Send"}
          </button>
          {formStatus === "success" && (
            <div className="text-green-600 font-semibold">
              Message sent successfully!
            </div>
          )}
          {formStatus === "error" && (
            <div className="text-red-600 font-semibold">
              Failed to send message. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Footer;
