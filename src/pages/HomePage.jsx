import React, { useContext } from "react";
import Web3Context from "../context/Web3Context";
import Navbar from "../modules/Dashboard/Navbar";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";
import ConnectUs from "../modules/ConnectUs/ConnectUs";
import { LazyLoadImage } from 'react-lazy-load-image-component';
const HomePage = () => {
  const { handleWallet, isLoading } = useContext(Web3Context);
  return (
    <>
      <Navbar onClick={handleWallet}></Navbar>
      <div className="flex flex-col gap-3 justify-center items-center pt-36">
        <div className="flex flex-col items-center gap-4 lg:gap-5 pt-16">
          <div className="rounded-full border border-gray-300 dark:border-darkmode-border p-2 md:p-4">
            <div className="flex items-center justify-center gap-x-2 font-bold text-[#2a7a60] dark:text-white">
              Built On
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
            <span className="text-[#b96bfc] dark:text-[#8849ff]">
              MEV Powered
            </span>
            <span className="dark:text-white">Staking Rewards.</span>
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
        <div className="relative w-full flex items-center justify-center mt-0 xs:-mt-24 lg:mt-[144px] px-6 md:px-16 border border-t-gray-200 dark:border-gray-500 p-28">
          <div className="m-auto max-w-[956px] text-center">
            <div className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-[51px] leading-[26px] sm:leading-[31px] md:leading-[40px] lg:leading-[55px] dark:text-white">
              <span className="text-basic text-[#b96bfc]">”</span>JITO has a
              great approach to maximize the benefits of MEV to the network
              while minimizing its negative externalities...{" "}
              <span className="text-basic text-[#b96bfc]">”</span>
            </div>
            <div className=" text-gray-400 dark:text-gray-500 text-sm lg:text-2xl mt-6">
              Anatoly Yakovenko, CEO of Ethereum Labs
            </div>
          </div>
          <img
            src="https://i.ibb.co/gMmVGgk/a11.webp"
            alt="a11"
            border="0"
            // effect="blur"
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
            <div className="text-center dark:text-white">
              Why Staking With Us{" "}
              <p className="text-basic pt-2 text-[#b96bfc]">Helps You</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-14 max-w-sm  mx-auto md:max-w-none dark:text-white">
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
                Unlock liquidity on your staked ETH to use across DeFi
              </div>
            </div>
            <div className="bg-surface flex flex-col justify-between dark:bg-darkmode-surface border border-gray-300 dark:border-gray-300 shadow-xl rounded-[35px] p-4 lg:p-10 h-[225px]  md:h-[300px] lg:h-[450px] xl:h-[530px]">
              <div className="flex justify-between">
                <div className="font-normal text-5xl text-basic md:text-3xl lg:text-4xl xl:text-6xl text-[#b96bfc]">
                  02.
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
                  03.
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
          <div className="flex flex-col w-full items-center mt-[100px] py-10 dark:text-white">
            <div className="m-auto text-[#b96bfc] hidden lg:block text-[70px] font-bold leading-none">
              <p className="dark:text-[#8849ff]">Why Staking With Us</p>
              <p className="text-basic text-center">Helps the Network</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-10 lg:mt-10">
              <div className="flex flex-col w-full justify-between max-h-96">
                <div className="flex justify-center">
                  <img
                    src="https://i.ibb.co/LhLWKXx/redistribute-profits.webp"
                    alt="redistribute-profits"
                    border="0"
                    className="w-[300px] h-[300px]"
                  ></img>
                </div>
                <div className="text-lg text-center">
                  Jito&apos;s software enables Ethereum to run more efficiently
                  and earn MEV rewards
                </div>
              </div>
              <div className="flex flex-col w-full justify-between max-h-96">
                <div className="flex justify-center">
                  <img
                    src="https://i.ibb.co/tb2ZsfC/help-decentralize.webp"
                    alt="redistribute-profits"
                    border="0"
                    className="w-[300px] h-[300px]"
                  ></img>
                </div>
                <div className="text-lg text-center">
                  The Jito Stake Pool helps decentralize Ethereum by spreading
                  stake across the network
                </div>
              </div>
              <div className="flex flex-col w-full justify-between max-h-96">
                <div className="flex justify-center">
                  <img
                    src="https://i.ibb.co/ckzYnmH/earn-mev.webp"
                    alt="redistribute-profits"
                    border="0"
                    className="w-[300px] h-[300px]"
                  ></img>
                </div>
                <div className="text-lg text-center">
                  Staking to Jito&apos;s Stake Pool encourages validators to
                  redistribute MEV profits
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-4">
          <div className="w-full text-[#09563a] dark:text-[#8849ff]  text-[70px] font-bold leading-none text-center mb-14">
            Jito Stats
          </div>
          <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-[120px] dark:text-white">
            <div className="relative w-72 h-60 sm:w-48 sm:h-54 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-[35px] border border-gray-300 dark:border-gray-300 shadow-xl p-8 flex flex-col justify-between">
              <div className="font-semibold text-2xl sm:text-xl md:text-3xl">
                TVL in pool
              </div>
              <div className="font-medium text-[#b96bfc] text-basic text-4xl sm:text-2xl md:text-4xl lg:text-5xl">
                1.491.732 ETH
              </div>
              <img
                src="https://i.ibb.co/6vP1c8q/jito-sol-token.webp"
                alt="jito-sol-token"
                border="0"
                className="absolute w-[150px] h-[170px] top-0 right-0 -translate-y-[50%] translate-x-[20%] transform -rotate-45"
              ></img>
            </div>
            <div className="relative w-72 h-60 sm:w-48 sm:h-54 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-[35px] border border-gray-300 dark:border-gray-300 shadow-xl p-8 flex flex-col justify-between">
              <div className="font-semibold text-2xl sm:text-xl md:text-3xl">
                Number of Validators
              </div>
              <div className="font-medium text-[#b96bfc] text-basic text-4xl sm:text-2xl md:text-4xl lg:text-5xl">
                82
              </div>
              <img
                src="https://i.ibb.co/6vP1c8q/jito-sol-token.webp"
                alt="jito-sol-token"
                border="0"
                className="absolute w-[150px] h-[170px] bottom-0 right-0 -translate-y-[5%] -translate-x-[20%] transform -rotate-45"
              ></img>
            </div>
            <div className="relative w-72 h-60 sm:w-48 sm:h-54 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-[35px] border border-gray-300 dark:border-gray-300 shadow-xl p-8 flex flex-col justify-between">
              <div className="font-semibold text-2xl sm:text-xl md:text-3xl">
                Number of stakers in pool
              </div>
              <div className="font-medium text-[#b96bfc] text-basic text-4xl sm:text-2xl md:text-4xl lg:text-5xl">
                132.607
              </div>
              <img
                src="https://i.ibb.co/6vP1c8q/jito-sol-token.webp"
                alt="jito-sol-token"
                border="0"
                className="absolute w-[150px] h-[170px] top-0 right-0 -translate-y-[50%] transform rotate-45"
              ></img>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center rounded-xl px-10 pt-28 pb-10">
          <div className="text-4xl lg:text-6xl font-bold text-[#b96bfc] dark:text-[#8849ff]">
            How it works
          </div>
          <div className="text-center font-semibold mt-4 text-xl lg:text-2xl pb-16 text-[#b96bfc] dark:text-[#b96bfc]">
            Stake ETH with us and earn additional MEV rewards!
          </div>
          <div className="hidden sm:flex flex-row flex-wrap gap-x-12 gap-y-16 justify-center items-center dark:text-white">
            <div className="relative rounded-xl shadow-xl w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96">
              <img
                src="https://i.ibb.co/RcfsdcX/liquid-token.webp"
                alt="liquid-token"
                border="0"
                className="w-[350px] h-[230px] absolute right-0"
              ></img>
              <div className="absolute bottom-8 text-lg sm:text-lg md:text-xl lg:text-2xl left-8 w-9/12">
                <div className="font-normal text-basic mb-2 text-[#b96bfc]">
                  01
                </div>
                <div className="font-medium">
                  Deposit ETH into the pool and receive RWT
                </div>
              </div>
            </div>
            <div className="relative rounded-xl shadow-xl w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96">
              <img
                src="https://i.ibb.co/jRGTW8m/delegate-to-validators.webp"
                alt="liquid-token"
                border="0"
                className="w-[330px] h-[230px] absolute right-0"
              ></img>
              <div className="absolute bottom-8 text-lg sm:text-lg md:text-xl lg:text-2xl left-8 w-9/12">
                <div className="font-normal text-basic mb-2 text-[#b96bfc]">
                  02
                </div>
                <div className="font-medium">
                  The Jito Stake Pool delegates your ETH to MEV-enabled
                  validators
                </div>
              </div>
            </div>
            <div className="relative rounded-xl shadow-xl w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96">
              <img
                src="https://i.ibb.co/6Y0WC1J/accrue-rewards.webp"
                alt="liquid-token"
                border="0"
                className="w-[350px] h-[230px] absolute -right-5"
              ></img>
              <div className="absolute bottom-8 text-lg sm:text-lg md:text-xl lg:text-2xl left-8 w-9/12">
                <div className="font-normal text-basic mb-2 text-[#b96bfc]">
                  03
                </div>
                <div className="font-medium">
                  Those validators auction off blockspace and receive MEV
                  rewards
                </div>
              </div>
            </div>
            <div className="relative rounded-xl shadow-xl w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96">
              <img
                src="https://i.ibb.co/jLDXmb6/rewards-to-stake-pool.webp"
                alt="liquid-token"
                border="0"
                className="w-[330px] h-[230px] absolute right-0"
              ></img>
              <div className="absolute bottom-8 text-lg sm:text-lg md:text-xl lg:text-2xl left-8 w-9/12">
                <div className="font-normal text-basic mb-2 text-[#b96bfc]">
                  04
                </div>
                <div className="font-medium">
                  These MEV rewards are redistributed to the stake pool as extra
                  APY
                </div>
              </div>
            </div>
            <div className="relative rounded-xl shadow-xl w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96">
              <img
                src="https://i.ibb.co/GvPSMHL/more-sol.webp"
                alt="liquid-token"
                border="0"
                className="w-[350px] h-[230px] absolute -right-5"
              ></img>
              <div className="absolute bottom-8 text-lg sm:text-lg md:text-xl lg:text-2xl left-8 w-9/12">
                <div className="font-normal text-basic mb-2 text-[#b96bfc]">
                  05
                </div>
                <div className="font-medium">
                  Your JitoSOL accrues MEV rewards in addition to staking
                  rewards
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-24 pb-4 w-full relative">
          <div className="font-medium text-4xl lg:text-[80px] leading-none text-center pb-3 dark:text-white">
            Earn Boosted
            <p>Rewards Now.</p>
          </div>
          <Link to={"/stake"}>
            <Button className="btnconnect" label="Stake Now"></Button>
          </Link>
          <img
            src="https://i.ibb.co/gMmVGgk/a11.webp"
            alt="a11"
            border="0"
            className="w-[200px] h-[300px] absolute right-10 top-[10px]"
          ></img>
          <img
            src="https://i.ibb.co/8MKKJ32/falling-coins.webp"
            alt="falling-coins"
            border="0"
            className="w-[200px] h-[250px] absolute left-10 -top-[100px]"
          ></img>
        </div>
      </div>
    </>
  );
};

export default HomePage;
