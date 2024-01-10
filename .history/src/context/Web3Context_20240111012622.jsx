import { createContext, useEffect, useRef, useState } from "react";
import React from "react";
import { handleAccountChange } from "../utils/HandleAccountChange";
import { handleChainChange } from "../utils/HandleChainChange";
import ConnectWallet from "../utils/ConnectWallet";
import { ethers } from "ethers";
import env from "react-dotenv";
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
  const myKeyINFURA = "7921f44876d6458e8f27de5531af7752";
  const provider = new ethers.JsonRpcProvider(
    `https://mainnet.infura.io/v3/${myKeyINFURA}`
  );
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
      const balance = await provider.getBalance(currentAccount);
      // const showBalance = `${ethers.utils.formatEther(balance)}`;
      const showBalance = formatEther(balance);
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
    <Web3Context.Provider value={{ state, handleWallet, isLoading }}>
      {children}
    </Web3Context.Provider>
  );
};

export default Web3Context;
