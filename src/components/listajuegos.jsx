// Listajuegos.jsx
import React, { useState, useEffect } from 'react';
import '../assets/styles/App.css';

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Obtener una lista de juegos utilizando la API de RAWG
    fetch("https://api.rawg.io/api/games?key=f91db0b1d11143638d9547da8056c0b4&ordering=-added&dates=2023-12-01,2023-12-31")
      .then(response => response.json())
      .then(data => {
        // Guardar la lista de juegos en el estado
        setGames(data.results);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="game-list">
      <h3>LISTA DE <span>JUEGOS</span></h3>
      <ul>
        {games.map(game => (
          <li key={game.id} className="game-item">
            <img src={game.background_image} alt={`${game.name} cover`} />
            <div className='game-info'>
              <h4>{game.name}</h4>
              <p>Género: {game.genres.map(genre => genre.name).join(', ')}</p>
              <p>Fecha de lanzamiento: {game.released}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
