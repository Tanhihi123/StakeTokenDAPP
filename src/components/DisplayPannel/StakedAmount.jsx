import React, { useContext, useEffect, useState } from 'react';
import Web3Context from '../../context/Web3Context';
import { ethers } from 'ethers';
import StakingContext from '../../context/StakingContext';

const StakedAmount = () => {
  const { stakingContract, selectedAccount } = useContext(Web3Context);
  const { isReload } = useContext(StakingContext);
  const [stakedAmount, setStakedAmount] = useState("0");
  useEffect(() => {
    const fetchStakedBalance = async () => {
      try {
        const amountStakedWei = await stakingContract.stakedBalance(selectedAccount);
        const amountStakedEth = ethers.formatUnits(amountStakedWei.toString(), 18);
        setStakedAmount(amountStakedEth)
      } catch (error) {
        console.log("Error fetching data :", error.message);
      }
    }
    stakingContract && fetchStakedBalance()
  }, [stakingContract, selectedAccount,isReload]);
  return (
    <p>Staked Amount : {stakedAmount }</p>
  )
};

export default StakedAmount;