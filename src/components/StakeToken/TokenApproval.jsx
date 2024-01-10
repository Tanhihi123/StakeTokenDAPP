import { ethers } from "ethers";
import React, { useContext, useRef, useState } from "react";
import Web3Context from "../../context/Web3Context";
import Button from "../Button/Button";

const TokenApproval = () => {
  const { stakeTokenContract, stakingContract } = useContext(Web3Context);
  const approvedTokenRef = useRef();
  const [transactionStatus, setTransactionStatus] = useState("");
  const approveToken = async (e) => {
    e.preventDefault();
    const amount = approvedTokenRef.current.value.trim();
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
        approvedTokenRef.current.value = "";
      } else {
        setTransactionStatus("Transaction failed");
      }
    } catch (error) {
      console.log("Token Approval Failed", error.message);
    }
  };
  return (
    <div>
      {transactionStatus && <div>{transactionStatus}</div>}
      <form onSubmit={approveToken}>
        <label>Token Approval : </label>
        <input type="text" ref={approvedTokenRef} />
        <Button
          onClick={approveToken}
          type="submit"
          label="Token Approve"
        ></Button>
      </form>
    </div>
  );
};

export default TokenApproval;
