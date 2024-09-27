// services/api.js
import axios from '../api/axios';

const API = {
  getGames: async () => {
    try {
      const response = await axios.get('/games');
      // Asegurémonos de que la respuesta sea tratada como un array
      const gamesArray = Array.isArray(response.data.results) ? response.data.results : [];

      return gamesArray;
    } catch (error) {
      throw error;
    }
  },

  getGamesWithParams: async (params) => {
    try {
      const response = await axios.get('/games', { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getPopularGames: async () => {
    try {
      const allGames = await API.getGames(); // Utilizamos el método existente para obtener todos los juegos

      const popularGames = allGames.sort((a, b) => b.popularity - a.popularity);

      const numberOfGamesToShow = 5;
      const topGames = popularGames.slice(0, numberOfGamesToShow);

      return topGames;
    } catch (error) {
      throw error;
    }
  },
};

export default API;
