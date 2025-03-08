import React, { useState, useEffect } from 'react';
import './Header.css';
import { useCountry } from '../context/CountryContext';
import { Dropdown } from 'react-bootstrap';

const Header = () => {
  const { changeCountry } = useCountry();
  const [selectedCountry, setSelectedCountry] = useState('PL');

  useEffect(() => {
    const userLanguage = navigator.language || navigator.userLanguage;
    if (userLanguage.includes('en')) {
      setSelectedCountry('UK');
      changeCountry('UK');
    } else if (userLanguage.includes('pl')) {
      setSelectedCountry('PL');
      changeCountry('PL');
    }
  }, [changeCountry]);

  const handleCountryChange = (countryCode) => {
    setSelectedCountry(countryCode);
    changeCountry(countryCode);
  };

  return (
    <header className="app-header">
      <div className="headertext playfair-display">MARTA AND JAMIE</div> {/* Add this back */}

      <Dropdown className="language-dropdown">
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          {selectedCountry}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleCountryChange('PL')}>PL</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCountryChange('UK')}>UK</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </header>
  );
};

export default Header;