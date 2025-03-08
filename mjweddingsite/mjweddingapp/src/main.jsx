import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CountryProvider } from '../context/CountryContext';
import Home from '../pages/Home/Home';
import App from './App';  
import Header from '../components/header';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <CountryProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </CountryProvider>
  </BrowserRouter>
);