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
    
    const stakingContractAddress = "0x747d89d4e15894f410550b581c2e3ce387477c22"
    const stakeTokenContractAddress = "0xbbd2043f4a49e4741ada4e797db8ff99c0f5486b"
    
    stakingContract = new Contract(stakingContractAddress, stakingABI, signer);
    stakeTokenContract = new Contract(stakeTokenContractAddress, stakeTokenABI, signer);

    return {provider,selectedAccount,stakeTokenContract,stakingContract,chainId}
  } catch (error) {
    console.log("Error : ",error);
  }
}

export default ConnectWallet;