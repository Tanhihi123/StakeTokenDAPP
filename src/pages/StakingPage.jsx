import React from 'react';
import Wallet from "../components/Wallet/Wallet";
import { StakingProvider } from "../context/StakingContext";
import StakePage from "../pages/StakePage";
const StakingPage = () => {
  return (
    <div>
      <Wallet>
        <StakingProvider>
          <StakePage></StakePage>
        </StakingProvider>
      </Wallet>
    </div>
  );
};

export default StakingPage;