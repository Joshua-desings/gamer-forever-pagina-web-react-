// Header.js

import React from 'react';
import Logo from '../assets/images/logo_gamer_forever.png';
import SearchBar from './SearchBar';  // Importa el componente de búsqueda
import Name_logo from '../assets/images/name_gamer_forever.png';
import '../assets/styles/App.css';  // Estilos generales

const Header = () => {
    const handleSearch = (query) => {
      // Aquí puedes realizar acciones con la cadena de búsqueda (por ejemplo, llamar a la API)
      console.log('Búsqueda:', query);
    };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={Logo} alt="Logo de la página" className="logo" />
        <img src={Name_logo} alt="Nombre de la pagina" className="name-logo" />
      </div>
      <>
        {/* Componente de búsqueda */}
        <SearchBar onSearch={handleSearch} />
        {/* Agrega aquí el componente de búsqueda */}
      </>
      <div className="profile-container">
        {/* Componente de perfil (Inicio de sesión, Registro) */}
        {/* Agrega aquí el componente de perfil */}
      </div>
    </header>
  );
};

export default Header;
