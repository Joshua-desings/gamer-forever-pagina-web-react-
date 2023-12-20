import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import NavBar from './components/NavBar';
import PopularGames from './components/Carousel';
import GameList from './components/listajuegos';
import DiscordBanner from './components/bannerdiscord';
import CategoriesList from './components/categorias';
import Footer from './components/footer';
import API from './services/api';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [topGames, setTopGames] = useState([]);

  const fetchData = async () => {
    try {
      const topGamesData = await API.getPopularGames();
      setTopGames(topGamesData);
    } catch (error) {
      console.error('Error al obtener los juegos más populares:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
    <div>
        <Header />
        <SearchBar onSearch={handleSearch} />
        <NavBar />
        <PopularGames />
        <GameList/>
        <DiscordBanner />
        <CategoriesList />
        <Footer />
      </div>
    </>
  );
}

export default App;
