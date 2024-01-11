import React, { useContext } from "react";
import Web3Context from "../context/Web3Context";
import Navbar from "../modules/Dashboard/Navbar";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";
import ConnectUs from "../modules/ConnectUs/ConnectUs";

const HomePage = () => {
  const { handleWallet, isLoading } = useContext(Web3Context);
  return (
    <>
      <Navbar onClick={handleWallet}></Navbar>
      <div className="flex flex-col gap-3 justify-center items-center pt-16">
        <div className="flex flex-col items-center gap-4 lg:gap-5 pt-16">
          <div className="rounded-full border border-gray-300 dark:border-darkmode-border p-2 md:p-4">
            <div className="flex items-center justify-center gap-x-2 font-bold text-[#2a7a60]">
              Build On
              <img
                src="https://i.ibb.co/wMMdckS/ethereum-logo1-1.png"
                alt="ethereum-logo1-1"
                border="0"
                className="w-8 h-auto rounded-full"
              ></img>{" "}
              Ethereum
            </div>
          </div>
          <h1 className="text-2xl xs:text-4xl lg:text-7xl leading-none font-semibold flex flex-col items-center text-center pt-1 mt-5">
            <span className="text-[#b96bfc]">MEV Powered</span>
            <span>Staking Rewards.</span>
          </h1>
          <div className="font-medium text-center text-gray-400 dark:text-light-gray lg:text-left text-base xs:text-lg sm:text-xl">
            Earn MEV rewards through liquid staking
          </div>
          <div className="flex items-center justify-center w-[235px] sm:w-[280px] md:w-[320px] lg:w-[420px]">
            <h1 className="text-base sm:text-xl lg:text-3xl leading-none flex flex-col items-center text-center justify-center">
              <span className="text-[#cc94fd] text-center font-bold mb-[6px] md:mb-[2px] lg:mb-2 min-w-[70px] sm:min-w-[90px] lg:min-w-[130px]">
                TVL
              </span>
              <span className="text-gray-500 dark:text-zinc-300 font-medium text-center lg:font-semibold justify-center items-center min-w-[70px] sm:min-w-[90px] lg:min-w-[140px]">
                6.5M SOL
              </span>
            </h1>
            <h1 className="text-base sm:text-xl lg:text-3xl leading-none flex flex-col items-center text-center justify-center">
              <span className="text-[#cc94fd] text-center font-bold mb-[6px] md:mb-[2px] lg:mb-2 min-w-[70px] sm:min-w-[90px] lg:min-w-[130px]">
                APY
              </span>
              <span className="text-gray-500 dark:text-zinc-300 font-medium text-center lg:font-semibold justify-center items-center min-w-[70px] sm:min-w-[90px] lg:min-w-[140px]">
                7.16%
              </span>
            </h1>
            <h1 className="text-base sm:text-xl lg:text-3xl leading-none flex flex-col items-center text-center justify-center">
              <span className="text-[#cc94fd] text-center font-bold mb-[6px] md:mb-[2px] lg:mb-2 min-w-[70px] sm:min-w-[90px] lg:min-w-[130px]">
                Holders
              </span>
              <span className="text-gray-500 dark:text-zinc-300 font-medium text-center lg:font-semibold justify-center items-center min-w-[70px] sm:min-w-[90px] lg:min-w-[140px]">
                131.601
              </span>
            </h1>
          </div>
          <Link to={"/stake"}>
            <Button className="btnconnect" label="Stake Now"></Button>
          </Link>
        </div>
        <div className="relative w-full flex items-center justify-center mt-0 xs:-mt-24 lg:mt-[144px] px-6 md:px-16 border border-t-gray-200 p-28">
          <div className="m-auto max-w-[956px] text-center">
            <div className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-[51px] leading-[26px] sm:leading-[31px] md:leading-[40px] lg:leading-[55px]">
              <span className="text-basic text-[#b96bfc]">”</span>JITO has a
              great approach to maximize the benefits of MEV to the network
              while minimizing its negative externalities...{" "}
              <span className="text-basic text-[#b96bfc]">”</span>
            </div>
            <div className=" text-gray-400 dark:text-gray-500 text-sm lg:text-2xl mt-6">
              Anatoly Yakovenko, CEO of Solana Labs
            </div>
          </div>
          <img
            src="https://i.ibb.co/gMmVGgk/a11.webp"
            alt="a11"
            border="0"
            className="w-[200px] h-[300px] absolute right-10 top-[150px]"
          ></img>
          <img
            src="https://i.ibb.co/8MKKJ32/falling-coins.webp"
            alt="falling-coins"
            border="0"
            className="w-[150px] h-[200px] absolute left-10 top-[50px]"
          ></img>
        </div>
        <ConnectUs></ConnectUs>
        <div className="w-full p-4 lg:p-10 mt-6 sm:mt-10 lg:mt-12 flex flex-col">
          <div className="flex justify-center text-3xl lg:mt-0 w-full h-full md:text-5xl xl:text-6xl font-semibold leading-none">
            <div className="text-center">
              Why Staking With Us{" "}
              <p className="text-basic pt-2 text-[#b96bfc]">Helps You</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-14 max-w-sm  mx-auto md:max-w-none">
            <div className="bg-surface flex flex-col justify-between dark:bg-darkmode-surface border border-gray-300 dark:border-gray-300 shadow-xl rounded-[35px] p-4 lg:p-10 h-[225px]  md:h-[300px] lg:h-[450px] xl:h-[530px]">
              <div className="flex justify-between">
                <div className="font-normal text-5xl text-basic md:text-3xl lg:text-4xl xl:text-6xl text-[#b96bfc]">
                  01.
                </div>
                <img
                  src="https://i.ibb.co/8Y5vBBp/unlock-liquidity.webp"
                  alt="unlock-liquidity"
                  border="0"
                  className="w-[150px] h-[140px]"
                ></img>
              </div>
              <div className="text-lg w-4/5 lg:leading-10 font-semibold md:text-lg lg:text-3xl xl:text-5xl mt-10">
                Unlock liquidity on your staked SOL to use across DeFi
              </div>
            </div>
            <div className="bg-surface flex flex-col justify-between dark:bg-darkmode-surface border border-gray-300 dark:border-gray-300 shadow-xl rounded-[35px] p-4 lg:p-10 h-[225px]  md:h-[300px] lg:h-[450px] xl:h-[530px]">
              <div className="flex justify-between">
                <div className="font-normal text-5xl text-basic md:text-3xl lg:text-4xl xl:text-6xl text-[#b96bfc]">
                  01.
                </div>
                <img
                  src="https://i.ibb.co/hVHdzJv/custody-funds.webp"
                  alt="unlock-liquidity"
                  border="0"
                  className="w-[150px] h-[140px]"
                ></img>
              </div>
              <div className="text-lg w-4/5 lg:leading-10 font-semibold md:text-lg lg:text-3xl xl:text-5xl mt-10">
                Always keep custody of your funds
              </div>
            </div>
            <div className="bg-surface flex flex-col justify-between dark:bg-darkmode-surface border border-gray-300 dark:border-gray-300 shadow-xl rounded-[35px] p-4 lg:p-10 h-[225px]  md:h-[300px] lg:h-[450px] xl:h-[530px]">
              <div className="flex justify-between">
                <div className="font-normal text-5xl text-basic md:text-3xl lg:text-4xl xl:text-6xl text-[#b96bfc]">
                  01.
                </div>
                <img
                  src="https://i.ibb.co/pZ7rWsX/MEV-rewards.webp"
                  alt="unlock-liquidity"
                  border="0"
                  className="w-[150px] h-[140px]"
                ></img>
              </div>
              <div className="text-lg w-4/5 lg:leading-10 font-semibold md:text-lg lg:text-3xl xl:text-5xl mt-10">
                Stake to the first MEV-powered stake pool
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
