import { createContext } from "react";

const Web3Context = createContext();

import React from 'react';

const Web3Provider = () => {
  return (
    <Web3Context.Provider>
      {children}
    </Web3Context.Provider>
  );
};

export default Web3Context;