import React, { useContext, useEffect, useState } from "react";
import "./Darklight.css";
import Web3Context from "../../context/Web3Context";

const Darklight = () => {
  const { handleDark, darkMode } = useContext(Web3Context);


  return (
    <label className="switch">
      <input
        type="checkbox"
        className="input__check"
        checked={darkMode}
        onChange={handleDark}
      />
      <span className="slider"></span>
    </label>
  );
};

export default Darklight;
