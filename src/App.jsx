// App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './assets/styles/App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Header />
      <SearchBar onSearch={handleSearch} />
      {/* Aquí renderiza otros componentes o contenido de la aplicación */}
    </>
  );
}

export default App;
