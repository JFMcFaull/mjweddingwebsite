import React, { useState } from 'react';
import './header.css';
import { useCountry } from '../context/CountryContext';
import { Dropdown } from 'react-bootstrap';

const Header = () => {
  const { changeCountry } = useCountry();
  const [selectedCountry, setSelectedCountry] = useState('PL');  

  const handleCountryChange = (countryCode) => {
    setSelectedCountry(countryCode);
    changeCountry(countryCode);  
  };

  return (
    <header className="app-header">
      <div className="headertext great-vibes-regular">Marta & Jamie</div> 

      <Dropdown className="language-dropdown">
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          {selectedCountry}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleCountryChange('PL')}>PL</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCountryChange('ENG')}>ENG</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </header>
  );
};

export default Header;