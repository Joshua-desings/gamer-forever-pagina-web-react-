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
      // Obtener todos los juegos desde la API
      const allGames = await API.getGames({ ordering: "-popularity" });
  
      // Filtrar los juegos lanzados en 2024 o antes, asegurando que la fecha exista y esté en el formato esperado
      const filteredGames = allGames.filter(game => {
        if (!game.released) return false; // Ignorar juegos sin fecha de lanzamiento
        const releaseDate = new Date(game.released);
        return releaseDate.getFullYear() <= 2024;
      });
  
      // Ordenar los juegos por popularidad de mayor a menor, asegurando que la propiedad 'popularity' exista
      const popularGames = filteredGames.sort((a, b) => {
        const popularityA = a.popularity || 0; // Si 'popularity' es undefined o null, considerar como 0
        const popularityB = b.popularity || 0;
        return popularityB - popularityA;
      });
  
      // Definir el número de juegos a mostrar
      const numberOfGamesToShow = 5;
      const topGames = popularGames.slice(0, numberOfGamesToShow);
  
      return topGames;
    } catch (error) {
      // Manejar el error de la API
      console.error("Error al obtener los juegos más populares:", error);
      throw error;
    }
  },  
};

export default API;
