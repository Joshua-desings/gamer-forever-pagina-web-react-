import React, { useState } from 'react';

import SearchIcon from '../assets/images/search_icon.png'; // Ajusta la ruta según la ubicación de tu icono

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div 
    className="search-container">
    <img src={SearchIcon} alt="Icono de búsqueda" className="search-icon" />
      <input
        type="text"
        placeholder="Buscar juegos..."
        value={query}
        onChange={handleChange}
        className="search-text"
      />
    </div>
  );
};

export default SearchBar;
