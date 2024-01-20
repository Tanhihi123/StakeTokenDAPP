import React, { useEffect, useState } from "react";
import "./Darklight.css";
const Darklight = ({onClick}) => {
  return (
    <label className="switch">
      <input type="checkbox" className="input__check" onClick={onClick}></input>
      <span className="slider"></span>
    </label>
  );
};

export default Darklight;
