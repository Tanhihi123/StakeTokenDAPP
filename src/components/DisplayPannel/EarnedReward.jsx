import React, { useContext, useEffect, useState } from "react";
import Web3Context from "../../context/Web3Context";
import { ethers } from "ethers";

const EarnedReward = () => {
  const { stakingContract, selectedAccount } = useContext(Web3Context);
  const [rewardVal, setRewardVal] = useState("0");
  useEffect(() => {
    const fetchStakeRewardInfo = async () => {
      try {
        // fetching earned amount of a user
        const rewardValueWei = await stakingContract.earned(selectedAccount);
        const rewardValueEth = ethers.formatUnits(
          rewardValueWei.toString(),
          18
        );
        const roundedReward = parseFloat(rewardValueEth).toFixed(2);
        setRewardVal(roundedReward);
      } catch (error) {
        console.log("Error fetching data :", error.message);
      }
    };
    const interval = setInterval(() => {
      stakingContract && fetchStakeRewardInfo();
    }, 1000);
    return () => clearInterval(interval);
  }, [stakingContract, selectedAccount]);
  return <p>Earned Reward : {rewardVal}</p>;
};

export default EarnedReward;
