import { createContext, useEffect, useRef, useState } from "react";
import React from "react";
import { handleAccountChange } from "../utils/HandleAccountChange";
import { handleChainChange } from "../utils/HandleChainChange";
import ConnectWallet from "../utils/ConnectWallet";
import { ethers, formatEther } from "ethers";
const Web3Context = createContext();
export const Web3Provider = ({ children }) => {
  const [state, setState] = useState({
    provider: null,
    account: null,
    stakingContract: null,
    stakeTokenContract: null,
    chainId: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [storage, setStorage] = useState(false); 
  const handleDark = () => {
    setDarkMode(!darkMode);
  }
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
    // console.log(JSON.parse(localStorage.getItem("dark")));
    if (JSON.parse(localStorage.getItem('dark')) === true) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-black");
    }
    if (JSON.parse(localStorage.getItem('dark')) === false) {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("bg-black");
    }
    setStorage(JSON.parse(localStorage.getItem("dark")));
  }, [darkMode]);
  useEffect(() => {
    try {
      window.ethereum.on("accountsChanged", () =>
        handleAccountChange(setState)
      );
      window.ethereum.on("chainChanged", () => handleChainChange(setState));
      return () => {
        window.ethereum.removeListener("accountsChanged", () =>
          handleAccountChange(setState)
        );
        window.ethereum.removeListener("chainChanged", () =>
          handleChainChange(setState)
        );
      };
    } catch (error) {
      console.log("Vui long cai dat metamask");
    }
  });

  const handleWallet = async () => {
    try {
      setIsLoading(true);
      const {
        provider,
        selectedAccount,
        stakingContract,
        stakeTokenContract,
        chainId,
      } = await ConnectWallet();
      console.log(
        provider,
        "Account : ",
        selectedAccount,
        stakingContract,
        stakeTokenContract,
        "Chain Id :",
        chainId
      );
      setState({
        provider,
        selectedAccount,
        stakingContract,
        stakeTokenContract,
        chainId,
      });
    } catch (error) {
      console.error("Error connecting wallet :", error);
      window.open(
        "https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
        "_blank"
      );
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Web3Context.Provider value={{ state, handleWallet, isLoading , storage , handleDark}}>
      {children}
    </Web3Context.Provider>
  );
};

export default Web3Context;
