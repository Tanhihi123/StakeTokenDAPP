import React, { useContext, useEffect } from "react";
import Web3Context from "../../context/Web3Context";
import toast from "react-hot-toast";

const Menu = ({ toggle }) => {
  const { state } = useContext(Web3Context);
  const {selectedAccount} = state
  function copyToClipboard() {
    navigator.clipboard.writeText(selectedAccount);
    toast.success("Copy successfully !");
  }
  const DisconnectWallet = () => {
    toast(
      "This toast is super big. I don't think anyone could eat it in one bite.\n\nIt's larger than you expected. You eat it but it does not seem to get smaller.",
      {
        duration: 6000,
      }
    );
  }
  return (
    <div
      className={`input1 flex animate-once animate-duration-300 animate-ease-in-out ${
        toggle == true ? "animate-jump-in   " : " animate-jump-out "
      }`}
    >
      <button className="value1 justify-center" onClick={copyToClipboard}>Copy Address</button>
      <button className="value1 justify-center">Change Wallet</button>
      <button className="value1 justify-center" onClick={DisconnectWallet}>Disconnect</button>
    </div>
  );
};

export default Menu;
