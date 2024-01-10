import React, { useContext, useEffect } from "react";
import Web3Context from "../../context/Web3Context";

const Menu = ({ toggle }) => {
  const { state } = useContext(Web3Context);
  const {selec}
  function copyToClipboard() {
    navigator.clipboard.writeText(input);
  }
  return (
    <div
      className={`input1 flex animate-once animate-duration-300 animate-ease-in-out ${
        toggle == true ? "animate-jump-in   " : " animate-jump-out "
      }`}
    >
      <button className="value1 justify-center" onClick={copyToClipboard}>Copy Address</button>
      <button className="value1 justify-center">Change Wallet</button>
      <button className="value1 justify-center">Disconnect</button>
    </div>
  );
};

export default Menu;
