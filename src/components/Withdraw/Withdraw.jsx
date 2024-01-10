import React, { useContext, useRef, useState } from "react";
import { ethers } from "ethers";
import Button from "../Button/Button";
import Web3Context from "../../context/Web3Context";
import StakingContext from "../../context/StakingContext";
const WithdrawStakeAmount = () => {
  const { stakingContract } = useContext(Web3Context);
  const { isReload, setIsReload } = useContext(StakingContext);
  const withdrawStakeAmountRef = useRef();
  const [transactionStatus, setTransactionStatus] = useState("");
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
      const transaction = await stakingContract.withdrawStakedTokens(amountToWithdraw);
      setTransactionStatus("Transaction is in pending...");
      setIsReload(!isReload);
      const receipt = await transaction.wait();
      if (receipt.status === 1) {
        setTransactionStatus("Transaction is successfully");
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
    <div>
      {transactionStatus && <div>{transactionStatus}</div>}
      <form onSubmit={withdrawStakeToken}>
        <label>Amount to Withdraw : </label>
        <input type="text" ref={withdrawStakeAmountRef} />
        <Button
          onClick={withdrawStakeToken}
          type="submit"
          label="Withdraw"
        ></Button>
      </form>
    </div>
  );
};

export default WithdrawStakeAmount;
