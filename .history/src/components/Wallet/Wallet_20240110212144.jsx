import React, { useEffect, useRef, useState } from "react";
import Web3Context from "../../context/Web3Context";
import ConnectWallet from "../../utils/ConnectWallet";
import { handleAccountChange } from "../../utils/HandleAccountChange";
import { handleChainChange } from "../../utils/HandleChainChange";
import Button from "../Button/Button";
import Navbar from "../../modules/Dashboard/Navbar";
import Description from "../../modules/Description/Description";
import toast, { ToastIcon } from "react-hot-toast";
import Footer from "../../modules/Dashboard/Footer";
const Wallet = ({ children }) => {
  const [state, setState] = useState({
    provider: null,
    account: null,
    stakingContract: null,
    stakeTokenContract: null,
    chainId: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
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
      <clg></clg>
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
    } finally {
      setIsLoading(false);
    }
  };
  const handleSend = (e) => {
    e.preventDefault();
    toast("Successfully!", {
      icon: "👏",
    });
  };
  return (
    <Web3Context.Provider value={state}>
      <div className="flex flex-col">
        <Navbar onClick={handleWallet}></Navbar>
        <div className="flex items-center justify-around gap-x-[120px] p-[150px]">
          <Description onClick={handleWallet}></Description>
          <div>
            <div>{children}</div>
            {isLoading && <p>Loading...</p>}
          </div>
        </div>
        <div className="w-full px-8 md:px-20 pt-16 pb-0 flex flex-col justify-start items-center gap-10">
          <div className="w-full flex flex-col justify-start items-center max-w-[600px]">
            <div className="w-full text-center text-3xl md:text-[42px] font-bold leading-10 mb-4 lg:mb-10">
              Stay connected with us
            </div>
            <form
              action=""
              className="w-full relative flex items-center bg-zinc-100 dark:bg-zinc-800 rounded-lg p-3 pl-3"
              onSubmit={handleSend}
            >
              <input
                type="email"
                className="pl-4 py-3 w-full h-full bg-transparent text-zinc-600 dark:text-white text-[13px] placeholder:text-gray-400 sm:text-sm md:text-lg font-medium outline-none"
                placeholder="Your email here"
                ref={emailRef}
              />
              <button className="btnemail" onClick={handleSend}>
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-10 h-10"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Send</span>
              </button>
            </form>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </Web3Context.Provider>
  );
};

export default Wallet;
