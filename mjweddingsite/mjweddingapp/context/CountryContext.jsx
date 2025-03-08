import React, { createContext, useContext, useState, useEffect } from 'react';

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState('PL');

  useEffect(() => {
    const userLanguage = navigator.language || navigator.userLanguage;

    if (userLanguage.includes('en')) {
      setSelectedCountry('UK');
    } else if (userLanguage.includes('pl')) {
      setSelectedCountry('PL');
    }
  }, []);

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