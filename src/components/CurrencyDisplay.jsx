import React, { useContext } from 'react';
import { Crypto } from '../context/CurrencyContext';

const CurrencyDisplay = () => {
  const { currency } = useContext(Crypto);

  return (
    <div>
      <p>Current currency: {currency}</p>
    </div>
  );
};

export default CurrencyDisplay;
