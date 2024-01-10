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
  async function DisconnectWallet() {
    if (window.ethereum) {
      // Gửi yêu cầu "disconnect"
      window.ethereum.request({
        method: "wallet_requestPermissions",
        params: [
          {
            eth_accounts: {
              address: se,
              disconnect: true
            }
          }
        ]
      }).then((permissions) => {
        // Xử lý phản hồi
        console.log("Wallet disconnected:", permissions);
      }).catch((error) => {
        console.error("Error disconnecting wallet:", error);
      });
    } else {
      console.error("Ethereum Provider not detected");
    }
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
