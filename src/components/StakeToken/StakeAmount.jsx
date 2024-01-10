import React, { useContext, useRef, useState } from "react";
import { ethers } from "ethers";
import Button from "../Button/Button";
import Web3Context from "../../context/Web3Context";
import StakingContext from "../../context/StakingContext";
const StakeAmount = () => {
  const { stakingContract } = useContext(Web3Context);
  const { isReload, setIsReload } = useContext(StakingContext);
  const stakeAmountRef = useRef();
  const [transactionStatus, setTransactionStatus] = useState("");
  const stakeToken = async (e) => {
    e.preventDefault();
    const amount = stakeAmountRef.current.value.trim();
    console.log(typeof(amount));
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
  return (
    <div>
      {transactionStatus && <div>{transactionStatus}</div>}
      <form onSubmit={stakeToken}>
        <label>Amount to Stake : </label>
        <input type="text" ref={stakeAmountRef} />
        <Button
          onClick={stakeToken}
          type="submit"
          label="Stake"
        ></Button>
      </form>
    </div>
  );
};

export default StakeAmount;
