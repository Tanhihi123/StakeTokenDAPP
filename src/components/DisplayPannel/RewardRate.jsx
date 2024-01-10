import React, { useContext, useEffect, useState } from 'react';
import Web3Context from '../../context/Web3Context';
import { ethers } from 'ethers';

const RewardRate = () => {
  const { stakingContract, selectedAccount } = useContext(Web3Context);
  const [rewardRate, setRewardRate] = useState("0");
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
    }
    stakingContract && fetchRewardRate()
  }, [stakingContract, selectedAccount]);
  return (
    <p>Reward Rate : { rewardRate } token / second</p>
  );
};

export default RewardRate;