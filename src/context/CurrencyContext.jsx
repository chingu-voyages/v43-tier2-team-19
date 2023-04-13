import React, { useContext, useState, useEffect } from 'react';
import { createContext } from 'react';

export const Crypto = createContext();

const CurrencyContext = ({ children, selectedCurrency }) => {
  console.log('children:', children);
  console.log('selectedCurrency:', selectedCurrency);

  const [currency, setCurrency] = useState(selectedCurrency || 'USD');
  const [symbol, setSymbol] = useState('$');

  useEffect(() => {
    setCurrency(selectedCurrency || 'USD');
  }, [selectedCurrency]);

  useEffect(() => {
    if (currency === 'USD') {
      setSymbol('$');
    } else if (currency === 'EUR') {
      setSymbol('€');
    } else if (currency === 'UAH') {
      setSymbol('₴');
    }
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, symbol, setCurrency }}>
      {children}
    </Crypto.Provider>
  );
};

export default CurrencyContext;

export const CryptoState = () => useContext(Crypto);
