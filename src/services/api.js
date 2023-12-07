// services/api.js
import axios from '../api/axios';

const api = {
  getGames: () => {
    return axios.get('/games') // Hacer la solicitud GET a la lista de juegos
  .then(response => {
    // Manejar los datos de la respuesta aquí
    console.log(response.data);
  })
  .catch(error => {
    // Manejar cualquier error que pueda ocurrir durante la solicitud
    console.error('Error al hacer la solicitud a la API', error);
  });
  }
}
