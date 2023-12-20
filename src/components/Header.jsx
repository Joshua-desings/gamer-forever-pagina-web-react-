// Header.js

import React from 'react';
import Logo from '../assets/images/logo_gamer_forever.png';
import Name_logo from '../assets/images/name_gamer_forever.png';
import '../assets/styles/App.css'; // Estilos generales

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={Logo} alt="Logo de la página" className="logo" />
        <img src={Name_logo} alt="Nombre de la pagina" className="name-logo" />
      </div>
      <div className="profile-container">
        {/* Componente de perfil (Inicio de sesión, Registro) */}
        {/* Agrega aquí el componente de perfil */}
      </div>
    </header>
  );
};

export default Header;
