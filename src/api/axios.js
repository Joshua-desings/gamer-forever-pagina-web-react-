// axios.js
import axios from 'axios';
import API_KEY from './api_key';

// Configuración de Axios con la clave de la API
const instance = axios.create({
  baseURL: 'https://api.rawg.io/api/v1', // Ajusta la URL base según la documentación de la API
  headers: {
    'Content-Type': 'application/json',
    'Key': API_KEY,
    // Otros encabezados según sea necesario
  },
});

export default instance;
