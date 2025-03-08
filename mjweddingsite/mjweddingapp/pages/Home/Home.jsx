import React, { useEffect } from 'react';
import './Home.css';
import Hero from '../../src/components/hero';
import { useCountry } from '../../src/context/CountryContext';
import { saveAs } from 'file-saver';

const Home = () => {
  const { selectedCountry } = useCountry(); // Getting selectedCountry from context

  const handleSaveEvent = () => {
    const startDate = new Date('2026-09-05T00:00:00Z');
    const endDate = new Date('2026-09-07T00:00:00Z'); 

    const formatDate = (date) => {
      const year = date.getUTCFullYear();
      const month = String(date.getUTCMonth() + 1).padStart(2, '0');
      const day = String(date.getUTCDate()).padStart(2, '0');
      return `${year}${month}${day}`;
    };

    const startDateFormatted = formatDate(startDate);
    const endDateFormatted = formatDate(endDate);

    const summary =
      selectedCountry === 'ENG'
        ? "Save the Date: Jamie and Marta's Wedding"
        : "Zarezerwuj datę: Ślub Marty i Jamie'ego";

    const description =
      selectedCountry === 'ENG'
        ? "We would love to have you there to celebrate with us."
        : "Chcielibyśmy, abyście byli z nami, by świętować ten dzień.";

    const location =
      selectedCountry === 'ENG'
        ? 'Poznan, Poland'
        : 'Poznań, Polska'; 

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Your Event//NONSGML v1.0//EN
BEGIN:VEVENT
UID:${new Date().getTime()}
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').replace(/\..+/g, '')}
DTSTART;VALUE=DATE:${startDateFormatted}
DTEND;VALUE=DATE:${endDateFormatted}
SUMMARY:${summary}
DESCRIPTION:${description}
LOCATION:${location}
STATUS:TENTATIVE
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });

    const filename =
      selectedCountry === 'ENG'
        ? 'Save the Date - Jamie and Marta\'s Wedding.ics'
        : 'Zarezerwuj datę - Ślub Marty i Jamie\'ego.ics';

    saveAs(blob, filename); 
  };

  return (
    <div>
      <Hero />
      <div className="hello-container">
        <div className="highlightable-group" onClick={handleSaveEvent}>
          <div className="savethedate-message great-vibes-regular">
            {selectedCountry === 'ENG' ? 'Save the Date' : 'Zarezerwuj datę'}
          </div>
          <span className="material-icons calendar-icon">calendar_today</span>
          <div className="date-message playfair-display">05-09-2026</div>
          <div className="location-message playfair-display">
            {selectedCountry === 'ENG' ? 'Poznań, Poland' : 'Poznań, Polska'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;