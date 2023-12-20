// axios.js
import axios from 'axios';
import API_KEY from './api_key';

// Configuración de Axios con la clave de la API
const instance = axios.create({
  baseURL: 'https://api.rawg.io/api/', // Ajusta la URL base según la documentación de la API
  params: {
    key: API_KEY,
  },
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
