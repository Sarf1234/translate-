import React from "react";

const StretchedText = () => {
  const characters = "your global voice locally tuned".split("");

  return (
    <div
      className="w-screen overflow-hidden bg-black flex items-center justify-center"
      style={{ height: "60vh" }}
    >
      <div
        className="whitespace-nowrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        {characters.map((char, index) => (
          <span
            key={index}
            className="font-bold font-urbanist inline-block text-white"
            style={{
              fontSize: "18vh",
              lineHeight: 1,
              transformOrigin: "center",
              margin: "0 -0.05em",
              WebkitTextStroke: "1px white",
              textShadow: "0 0 10px rgba(255,255,255,0.3)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StretchedText;
