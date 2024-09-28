import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import PopularGames from './components/Carousel';
import GameList from './components/GameList';
import DiscordBanner from './components/DiscordBanner';
import CategoriesList from './components/CategoriesList';
import Footer from './components/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Header />
      <NavBar />
      <PopularGames />
      <GameList />
      <DiscordBanner />
      <CategoriesList />
      <Footer />
    </div>
  );
}

export default App;
