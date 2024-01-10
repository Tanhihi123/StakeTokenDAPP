import React, { useContext } from "react";
import Button from "../../components/Button/Button";
import Web3Context from "../../context/Web3Context";

const Description = ({onClick}) => {
  const { state } = useContext(Web3Context);
  const { selectedAccount } = state;
  return (
    <div className="flex flex-col">
      <h1 className="hidden md:block text-4xl md:text-4xl lg:text-7xl mb-6 md:mb-0">
        MEV Powered Staking Rewards.
      </h1>
      <p className="hidden md:block text-lg md:text-xl lg:text-2xl text-gray-500 dark:text-darkmode-medium-gray font-normal">
        Choose how much you want to stake and earn rewards.
      </p>
      <div className="border-b border-gray-500 my-9"></div>
      {selectedAccount ? null : (
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
