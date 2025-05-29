import React from "react";
import one from "../assets/one.png";
import two from "../assets/twp.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import five from "../assets/five.png";
import six from "../assets/six.png";
import seven from "../assets/seven.png";
import eight from "../assets/eight.png";
import nine from "../assets/nine.png";
import ten from "../assets/ten.png";
import eleven from "../assets/eleven.png";
import twelve from "../assets/twelve.png";
import thirteen from "../assets/thirteen.png";
import fourteen from "../assets/fourteen.png";
import fifteen from "../assets/fifteen.png";

const images = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen,
  fifteen,
];

const Gallery = () => {
  return (
   <div className="relative w-1/2 mx-auto h-[500px] overflow-hidden">
  {/* Stronger and smaller foggy shadows */}
  <div className="pointer-events-none absolute top-0 left-0 w-full h-8 z-10 bg-gradient-to-b from-white/90 to-transparent" />
  <div className="pointer-events-none absolute bottom-0 left-0 w-full h-8 z-10 bg-gradient-to-t from-white/90 to-transparent" />

  {/* Scrollable content */}
  <div className="h-full overflow-y-auto scrollbar-hide px-4 py-10">
    <div className="flex flex-col items-center gap-y-5">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery item ${index + 1}`}
          className="w-full h-auto"
        />
      ))}
    </div>
  </div>
</div>

  );
};

export default Gallery;
