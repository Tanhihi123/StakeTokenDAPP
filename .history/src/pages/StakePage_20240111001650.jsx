import React, { useContext, useEffect, useRef, useState } from "react";
import ClaimReward from "../components/ClaimReward/ClaimReward";
import DisplayPannel from "../components/DisplayPannel/DisplayPannel";
import Navigation from "../components/Navigation/Navigation";
import StakeAmount from "../components/StakeToken/StakeAmount";
import TokenApproval from "../components/StakeToken/TokenApproval";
import Wallet from "../components/Wallet/Wallet";
import WithdrawStakeAmount from "../components/Withdraw/Withdraw";
import Loading from "../components/Loading/Loading";
import StakingContext, { StakingProvider } from "../context/StakingContext";
import Button from "../components/Button/Button";
import Web3Context from "../context/Web3Context";
import axios from "axios";
import { ethers } from "ethers";
const StakePage = () => {
  const [ethPrice, setEthPrice] = useState(null);
  const [convertEth, setConvertEth] = useState(null);
  const [activeButton, setActiveButton] = useState("stake"); // Theo dõi button đang được nhấn
  const { state } = useContext(Web3Context);
  const { stakingContract, selectedAccount, stakeTokenContract } = state;
  const [rewardRate, setRewardRate] = useState(null);
  const { isReload, setIsReload } = useContext(StakingContext);
  const [inputValue, setInputValue] = useState(0);
  const [transactionStatus, setTransactionStatus] = useState("");
  const [stakedAmount, setStakedAmount] = useState("0");
  const stakeAmountRef = useRef();
  const withdrawStakeAmountRef = useRef();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
        );
        const ethData = response.data.ethereum;
        const price = ethData.usd;
        setEthPrice(price);
      } catch (error) {
        console.error("Error fetching ETH price:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const fetchRewardRate = async () => {
      try {
        const rewardR = await stakingContract.REWARD_RATE();
        const rewardRConvert = ethers.formatUnits(rewardR.toString(), 18);
        console.log(rewardRConvert);
        setRewardRate(rewardRConvert);
      } catch (error) {
        console.log("Error fetching data :", error.message);
      }
    };
    stakingContract && fetchRewardRate();
  }, [stakingContract, selectedAccount]);
  useEffect(() => {
    const fetchStakedBalance = async () => {
      try {
        const amountStakedWei = await stakingContract.stakedBalance(
          selectedAccount
        );
        const amountStakedEth = ethers.formatUnits(
          amountStakedWei.toString(),
          18
        );
        setStakedAmount(amountStakedEth);
        console.log(stakedAmount);
      } catch (error) {
        console.log("Error fetching data :", error.message);
      }
    };
    stakingContract && fetchStakedBalance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stakingContract, selectedAccount, isReload]);
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  const handleChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
    if (!isNaN(inputValue)) {
      if (inputValue !== "" && inputValue !== "0") {
        console.log(inputValue);
        // Kiểm tra xem giá ETH đã được lấy chưa
        if (ethPrice !== null) {
          const convertedValue = (inputValue * ethPrice).toFixed(2);
          setConvertEth(convertedValue);
        }
      } else {
        setConvertEth(null);
      }
    } else {
      setConvertEth(null);
    }
  };
  const approveToken = async () => {
    const amount = inputValue;
    if (isNaN(amount) || amount <= 0) {
      console.log("Please enter a valid positive number");
      return;
    }
    const amountToSend = ethers.parseUnits(amount, 18).toString();
    console.log(amountToSend);
    try {
      console.log(stakingContract.target);
      const transaction = await stakeTokenContract.approve(
        stakingContract.target,
        amountToSend
      );
      setTransactionStatus("Transaction is in pending...");
      const receipt = await transaction.wait();
      if (receipt.status === 1) {
        setTransactionStatus("Transaction is successfully");
        setTimeout(() => {
          setTransactionStatus("");
        }, 5000);
      } else {
        setTransactionStatus("Transaction failed");
      }
    } catch (error) {
      console.log("Token Approval Failed", error.message);
    }
  };
  const stakeToken = async (e) => {
    e.preventDefault();
    // const amount = stakeAmountRef.current.value.trim();
    await approveToken();
    const amount = inputValue;
    if (isNaN(amount) || amount <= 0) {
      console.log("Please enter a valid positive number");
      return;
    }
    const amountToStake = ethers.parseUnits(amount, 18).toString();
    try {
      console.log(stakingContract.target);
      const transaction = await stakingContract.stake(amountToStake);
      setTransactionStatus("Transaction is in pending...");
      const receipt = await transaction.wait();
      if (receipt.status === 1) {
        setTransactionStatus("Transaction is successfully");
        setIsReload(!isReload);
        setTimeout(() => {
          setTransactionStatus("");
        }, 5000);
        stakeAmountRef.current.value = "";
      } else {
        setTransactionStatus("Transaction failed");
      }
    } catch (error) {
      console.log("Staking Failed", error.message);
    }
  };
  const withdrawStakeToken = async (e) => {
    e.preventDefault();
    const amount = withdrawStakeAmountRef.current.value.trim();
    if (isNaN(amount) || amount <= 0) {
      console.log("Please enter a valid positive number");
      return;
    }
    const amountToWithdraw = ethers.parseUnits(amount, 18).toString();
    try {
      console.log(stakingContract.target);
      const transaction = await stakingContract.withdrawStakedTokens(
        amountToWithdraw
      );
      setTransactionStatus("Transaction is in pending...");
      const receipt = await transaction.wait();
      if (receipt.status === 1) {
        setTransactionStatus("Transaction is successfully");
        setIsReload(!isReload);
        setTimeout(() => {
          setTransactionStatus("");
        }, 5000);
        withdrawStakeAmountRef.current.value = "";
      } else {
        setTransactionStatus("Transaction failed");
      }
    } catch (error) {
      console.log("Staking Failed", error.message);
    }
  };
  return (
    <>
      {/* <Navigation></Navigation>
      <DisplayPannel></DisplayPannel>
      <StakeAmount></StakeAmount>
      <WithdrawStakeAmount></WithdrawStakeAmount>
      <TokenApproval></TokenApproval>
      <ClaimReward></ClaimReward> */}
      <div className="w-[500px] h-fit rounded-3xl px-3.5 py-5 sm:px-7 sm:py-7 shadow-lg border border-gray-200 bg-white dark:border-darkmode-border dark:bg-zinc-900 ">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-center text-4xl font-medium">Stake STK</h1>
          <div className="text-center text-lg md:text-xl text-gray-400 dark:text-gray-400 px-14">
            Choose how much you want to stake and earn rewards
          </div>
          <div className="px-2 sm:px-0 w-full">
            <div className="flex flex-col items-center mt-8 w-full">
              <div className="flex bg-gray-100 dark:bg-zinc-800 text-black text-extralight rounded-full">
                <button
                  onClick={() => handleButtonClick("stake")}
                  className={`w-full text-sm leading-5 outline-none transition-colors font-medium m-2 px-[15px] xs:px-[10px] py-[10px] xs:py-2 rounded-full dark:bg-zinc-900  dark:text-zinc-100 sm:text-base ${
                    activeButton === "stake"
                      ? "bg-white shadow text-zinc-700"
                      : "text-gray-400 hover:bg-gray-200"
                  }`}
                >
                  <div className="w-full flex justify-center items-center pl-[2px] sm:pl-1 gap-x-3">
                    <p>Stake</p>
                    <div className="inline-flex items-center h-0 rounded-full whitespace-nowrap text-[9px] sm:text-xs py-3 bg-green-500 text-white px-2.5">
                      ~ 7.09% APY
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => handleButtonClick("unstake")}
                  className={`w-full text-sm leading-5 outline-none transition-colors font-medium m-2 px-[60px] xs:px-[10px] py-[6px] xs:py-2 rounded-full dark:bg-zinc-900 dark:text-zinc-100 sm:text-base ${
                    activeButton === "unstake"
                      ? "bg-white shadow text-zinc-700"
                      : "text-gray-400 hover:bg-gray-200"
                  }`}
                >
                  Unstake
                </button>
              </div>
            </div>
            {activeButton === "stake" ? (
              <div className="flex flex-col items-center mt-8 w-full">
                <div className="flex justify-between mb-[2px] w-full">
                  <div className="text-xs text-gray-500 dark:text-gray-500 mb-[2px]">
                    You&apos;re Staking
                  </div>
                  <div className="flex items-baseline justify-center gap-x-3">
                    <i className="fa-solid fa-wallet text-gray-300 "></i>
                    <p className="text-gray-400 text-[15px]">0</p>
                  </div>
                </div>
                <div className="flex items-center border border-zinc-400 dark:border-zinc-500 rounded-xl w-full pl-2 pr-3 py-1 gap-2 h-full">
                  <div className="flex gap-2 py-1 items-center pr-1 pl-[1px] h-full flex-shrink-0">
                    <div className="pr-2">
                      <div className="flex h-[46px] gap-3 w-full flex-row items-center justify-between rounded-md border shadow-sm border-zinc-300 bg-surface py-2 px-4 text-sm font-medium  dark:border-zinc-500 focus:outline-none focus-visible:ring-0 focus-visible:ring-transparent dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800">
                        <img
                          src="https://i.ibb.co/wMMdckS/ethereum-logo1-1.png"
                          alt="ethereum-logo1-1"
                          border="0"
                          className="w-5 h-5"
                        ></img>
                        <div className="flex flex-row items-center pl-1 pt-[2px] text-base font-medium text-zinc-600 dark:text-zinc-300">
                          RWT
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 items-end justify-center">
                    <input
                      type="number"
                      pattern="[0-9]*"
                      className="text-right bg-white dark:bg-zinc-900 p-0 mb-0 border-0 w-full h-full outline-none text-2xl lg:text-3xl  placeholder:text-gray-400"
                      placeholder="O.O"
                      onChange={handleChange}
                      ref={stakeAmountRef}
                    />
                    {convertEth !== null && (
                      <div className="text-right text-zinc-400 dark:text-zinc-500 text-[11px] -mt-[4px]">
                        {convertEth} $
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center mt-8 w-full ">
                <div className="flex gap-2 items-center">
                  <img
                    src="https://i.ibb.co/wMMdckS/ethereum-logo1-1.png"
                    alt="ethereum-logo1-1"
                    border="0"
                    className="w-10 h-auto rounded-full"
                  ></img>
                  <div className="font-light text-2xl text-back">RWT</div>
                </div>
                <div className="w-full flex flex-col gap-4 mt-4 items-center">
                  <div className="flex flex-col w-full items-center">
                    <input
                      type="number"
                      className="text-center mb-2 text-4xl lg:text-5xl rounded-full w-4/5 dark:bg-zinc-900"
                      placeholder="O.OO"
                      ref={withdrawStakeAmountRef}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="p-3 px-4 text-xs sm:text-base font-medium border border-light-gray dark:border-darkmode-border dark:text-gray-300 rounded-full flex items-center gap-2">
                      <div className="inline-flex items-center">
                        Staked Amount : {stakedAmount} RWT
                      </div>
                    </div>
                    <ClaimReward></ClaimReward>
                  </div>
                </div>
              </div>
            )}
          </div>
          {selectedAccount ? (
            <Button
              label={`${
                activeButton === "stake" ? "Deposit RWT" : "Unstake RWT"
              }`}
              onClick={
                activeButton === "stake" ? stakeToken : withdrawStakeToken
              }
              className="btnconnect w-full mt-5"
            ></Button>
          ) : (
            <Button
              label="Connect Wallet"
                className="w-full btnconnect1 shadow-sm mt-5 hover:bg-[#f2e7f7] border border-gray-300"
                onClick={handle}
            ></Button>
          )}
          <div className="flex flex-col gap-3 text-sm w-full mt-4 ">
            <div className="flex justify-between">
              <div className="text-gray-500 dark:text-darkmode-medium-gray">
                1 RWT
              </div>
              {ethPrice ? (
                <div className="font-medium">~ {ethPrice} USD</div>
              ) : (
                <Loading></Loading>
              )}
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500 dark:text-darkmode-medium-gray">
                Reward Rate
              </div>
              {rewardRate ? (
                <div className="font-medium">{rewardRate} token / second</div>
              ) : (
                <Loading></Loading>
              )}
            </div>
          </div>
        </div>
      </div>
      {transactionStatus && <div>{transactionStatus}</div>}
    </>
  );
};

export default StakePage;
