// src/context/CountryContext.js

import React, { createContext, useState, useContext } from 'react';

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [country, setCountry] = useState('Poland'); // Default country

  const changeCountry = (newCountry) => {
    setCountry(newCountry);
  };

  return (
    <CountryContext.Provider value={{ country, changeCountry }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = () => useContext(CountryContext);