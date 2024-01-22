import React from "react";

const Banner = ({ isFixed }) => {
  return (
    <>
      <div
        className={`fixed top-0 z-40 transition-transform duration-700 ${
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
      <div
        className={`w-full fixed top-[30px] z-50 text-[17px] text-zinc-100 text-center font-bold transition-transform duration-700 ${
          isFixed ? "-translate-y-[50px]" : ""
        }`}
      >
        👉 Currently the project only supports sepolia network 👈
      </div>
    </>
  );
};

export default Banner;
