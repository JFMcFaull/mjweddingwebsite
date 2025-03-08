import React, { createContext, useContext, useState } from 'react';

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState('PL'); 

  const changeCountry = (country) => {
    setSelectedCountry(country);
  };

  return (
    <CountryContext.Provider value={{ selectedCountry, changeCountry }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = () => {
  return useContext(CountryContext);
};