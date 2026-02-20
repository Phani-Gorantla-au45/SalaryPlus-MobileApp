import React, { createContext, useContext, useState } from 'react';

interface Rates {
  gBuy: number;
  gSell: number;
  sBuy: number;
  sSell: number;
  blockId: string;
  updatedAt: string;
}

interface RatesContextType {
  rates: Rates | null;
  setRates: (rates: Rates) => void;
}

const RatesContext = createContext<RatesContextType | undefined>(
  undefined
);

export const RatesProvider = ({ children }: any) => {
  const [rates, setRates] = useState<Rates | null>(null);

  return (
    <RatesContext.Provider value={{ rates, setRates }}>
      {children}
    </RatesContext.Provider>
  );
};

export const useRates = () => {
  const context = useContext(RatesContext);
  if (!context) {
    throw new Error('useRates must be used inside RatesProvider');
  }
  return context;
};