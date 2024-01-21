import React from "react";

const Banner = ({ isFixed }) => {
  return (
    <div
      className={`fixed top-0 transition-transform duration-700 ${
        isFixed ? "-translate-y-[75px]" : ""
      }`}
    >
      <img
        src="https://i.ibb.co/sbJGBSv/banner-Jito.png"
        alt="banner-Jito"
        border="0"
        className="w-full"
      />
    </div>
  );
};

export default Banner;
