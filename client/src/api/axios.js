import axios from 'axios';

// Usa la URL del backend desde las variables de entorno o localhost como fallback
const baseURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

const instance = axios.create({
  baseURL: `${baseURL}/api`, // Base URL para las rutas de la API
  withCredentials: true, // Necesario para manejar cookies y credenciales
});

export default instance;
