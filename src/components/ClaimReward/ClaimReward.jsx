import React, { useContext, useEffect, useState } from "react";
import Web3Context from "../../context/Web3Context";
import Button from "../Button/Button";
import { ethers } from "ethers";

const ClaimReward = () => {
  const [transactionStatus, setTransactionStatus] = useState("");
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
  const claimReward = async () => {
    try {
      const transaction = await stakingContract.getReward();
      console.log(transaction);
      const receipt = await transaction.wait();
      setTransactionStatus("Transaction Is Pending.....");
      if (receipt.status === 1) {
        setTransactionStatus("Transaction Is Successful");
        setTimeout(() => {
          setTransactionStatus("");
        }, 5000);
      } else {
        setTransactionStatus("Transaction failed. Pls try again !");
      }
    } catch (error) {
      console.log("Claim Reward Failed", error.message);
    }
  };
  return (
    <div>
      {transactionStatus && <div>{transactionStatus}</div>}
      <button className="btn2" type="button" onClick={claimReward}>
        <strong>Earned: {rewardVal} RWT</strong>
        <div id="container-stars">
          <div id="stars"></div>
        </div>

        <div id="glow">
          <div className="circle1"></div>
          <div className="circle1"></div>
        </div>
      </button>
    </div>
  );
};

export default ClaimReward;
