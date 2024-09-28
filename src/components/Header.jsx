import React, { useState } from 'react';
import Logo from '../assets/images/logo_gamer_forever.png';
import NameLogo from '../assets/images/name_gamer_forever.png';
import SearchBar from './SearchBar'; // Importa el componente SearchBar
import Profile from './Profile'; // Importa el componente Profile
import '../assets/styles/App.css'; // Asegúrate de tener estilos específicos para Header

const Header = () => {
  // Estado para manejar la búsqueda globalmente si se necesita
  const [searchQuery, setSearchQuery] = useState('');

  // Función para manejar la búsqueda
  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log('Búsqueda global:', query);
  };

  return (
    <header className="header">
      {/* Contenedor del logo y nombre */}
      <div className="logo-container">
        <img src={Logo} alt="Logo de GamerForever" className="logo" />
        <img src={NameLogo} alt="GamerForever" className="name-logo" />
      </div>

      {/* Barra de búsqueda */}
        {/* Componente de búsqueda integrado */}
        <SearchBar onSearch={handleSearch} />

      {/* Componente de perfil */}
      <div className="profile-container">
        <Profile /> 
      </div>
    </header>
  );
};

export default Header;
