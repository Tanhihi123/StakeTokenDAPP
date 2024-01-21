import React, { useContext, useState } from "react";
import Button from "../../components/Button/Button";
import Web3Context from "../../context/Web3Context";
import { ethers } from "ethers";

const Description = ({ onClick }) => {
  const { state } = useContext(Web3Context);
  const { selectedAccount , stakeTokenContract } = state;
  const [address, setAddress] = useState();
  const handleChange = (e) => {
    setAddress(e.target.value);
  }
  const handleFaucet = async () => {
    const amountToStake = ethers.parseUnits("100", 18).toString();
    try {
      await stakeTokenContract.mint(address,amountToStake);
    } catch (error) {
      console.log("Faucet Failed", error.message);
    }
    // console.log(typeof(amountToStake));
  }
  return (
    <div className="flex flex-col">
      <h1 className="hidden md:block text-4xl md:text-4xl lg:text-7xl mb-6 md:mb-0 dark:text-white">
        MEV Powered Staking Rewards.
      </h1>
      <p className="hidden md:block text-lg md:text-xl lg:text-2xl text-gray-500 dark:text-darkmode-medium-gray font-normal">
        Choose how much you want to stake and earn rewards.
      </p>
      <div className="border-b border-gray-500 my-9"></div>
      {selectedAccount ? (
        <div className="input-group2">
          <input
            type="email"
            className="input2 dark:text-white"
            id="Email2"
            name="Email"
            placeholder="Your wallet address"
            autoComplete="off"
            onChange={handleChange}
          ></input>
          <button
            className="button--submit"
            onClick={handleFaucet}
          >Faucet TS</button>
        </div>
      ) : (
        <>
          <h3 className="text-left text-xl md:text-2xl lg:text-3xl font-medium dark:text-zinc-200">
            Earn MEV Enhanced Rewards
          </h3>
          <p className="text-left text-base lg:text-lg text-gray-400 dark:text-darkmode-medium-gray my-4">
            Connect your wallet to start earning
          </p>
          <Button
            onClick={onClick}
            className="btnconnect w-[40%]"
            label="Connect your wallet now"
          ></Button>
        </>
      )}
    </div>
  );
};

export default Description;
