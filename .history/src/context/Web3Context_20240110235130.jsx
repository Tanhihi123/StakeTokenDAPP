import { createContext } from "react";

const Web3Context = createContext();

import React from 'react';

const Web3Provider = ({ children }) => {
  const [state, setState] = useState({
    provider: null,
    account: null,
    stakingContract: null,
    stakeTokenContract: null,
    chainId: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  useEffect(() => {
    try {
      window.ethereum.on("accountsChanged", () =>
        handleAccountChange(setState)
      );
      window.ethereum.on("chainChanged", () => handleChainChange(setState));
      return () => {
        window.ethereum.removeListener("accountsChanged", () =>
          handleAccountChange(setState)
        );
        window.ethereum.removeListener("chainChanged", () =>
          handleChainChange(setState)
        );
      };
    } catch (error) {
      console.log("Vui long cai dat metamask");
    }
  });
  const handleWallet = async () => {
    try {
      setIsLoading(true);
      const {
        provider,
        selectedAccount,
        stakingContract,
        stakeTokenContract,
        chainId,
      } = await ConnectWallet();
      console.log(
        provider,
        "Account : ",
        selectedAccount,
        stakingContract,
        stakeTokenContract,
        "Chain Id :",
        chainId
      );
      setState({
        provider,
        selectedAccount,
        stakingContract,
        stakeTokenContract,
        chainId,
      });
    } catch (error) {
      console.error("Error connecting wallet :", error);
      window.open("https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn", "_blank");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Web3Context.Provider value={state,{}}>
      {children}
    </Web3Context.Provider>
  );
};

export default Web3Context;