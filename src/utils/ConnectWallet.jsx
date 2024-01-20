import React from 'react';
import { Contract, ethers } from "ethers";
import stakingABI from "../ABI/stakingABI.json";
import stakeTokenABI from "../ABI/stakeTokenABI.json";


export const ConnectWallet = async () => {
  try {
    let [signer, provider, stakingContract, stakeTokenContract, chainId] = [null,null,null,null,null];
    if (window.ethereum == null) {
      throw new Error("Metamask is not installed");
    }
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts"
    })
    let chainIdHex = await window.ethereum.request({
      method: 'eth_chainId'
    })
    chainId = parseInt(chainIdHex, 16);
    let selectedAccount = accounts[0];
    if (!selectedAccount) {
      throw new Error("No ethereum accounts available")
    }
    provider = new ethers.BrowserProvider(window.ethereum);
    signer = await provider.getSigner();
    
    const stakingContractAddress = "0xE479087dA66F6030581A13673E1D321543fA8F96"
    const stakeTokenContractAddress = "0xAb10Ba025ae4e134C0F5330648f10A7559eCa89B"
    const rewardToken = "0x963263f138D0bB3A8b81bC386753Bc6f31609200";
    stakingContract = new Contract(stakingContractAddress, stakingABI, signer);
    stakeTokenContract = new Contract(stakeTokenContractAddress, stakeTokenABI, signer);

    return {provider,selectedAccount,stakeTokenContract,stakingContract,chainId}
  } catch (error) {
    console.log("Error : ",error);
  }
}

export default ConnectWallet;