// Header.js

import React from 'react';
import Logo from '../assets/images/logo_gamer_forever.png';
import NameLogo from '../assets/images/name_gamer_forever.png';
import '../assets/styles/App.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={Logo} alt="Logo de la página" className="logo" />
        <img src={NameLogo} alt="Nombre de la página" className="name-logo" />
      </div>
    </header>
  );
};

export default Header;
