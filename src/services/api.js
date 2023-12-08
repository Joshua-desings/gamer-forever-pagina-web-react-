// services/api.js
import axios from '../api/axios';

const API = {
  getGames: async () => {
    try {
      const response = await axios.get('/games');
      // Devolver directamente los datos para que puedan ser manejados en el componente
      return response.data;
    } catch (error) {
      // Lanzar el error nuevamente para que pueda ser manejado en el componente
      throw error;
    }
  },

  // Método mejorado que acepta parámetros
  getGamesWithParams: async (params) => {
    try {
      const response = await axios.get('/games', { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default API;

