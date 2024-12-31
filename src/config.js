// Variables de configuración
export const TOKEN_SECRET = 'some secret key'; 

// Define los orígenes permitidos
export const ALLOWED_ORIGINS = [
  process.env.FRONTEND_URL || 'http://localhost:5173', // URL del frontend en producción
  'http://localhost:5173', // URL del frontend en desarrollo
];
