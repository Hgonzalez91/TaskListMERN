import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import tasksRoutes from './routes/tasks.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { ALLOWED_ORIGINS } from './config.js';

// Servidor
const app = express();

// Solución de CORS: Permite múltiples orígenes
const corsOptions = {
  origin: (origin, callback) => {
    // Verifica si el origen está en la lista permitida o si no hay origen (por ejemplo, Postman)
    if (ALLOWED_ORIGINS.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Permitir cookies u otras credenciales
};

// Middleware
app.use(cors(corsOptions)); // Configuración de CORS
app.use(morgan('dev')); // Morgan: Para ver peticiones por consola
app.use(express.json()); // Para entender peticiones JSON
app.use(cookieParser()); // Para convertir cookies en JSON

// Rutas de la API
app.use('/api', authRoutes);
app.use('/api', tasksRoutes);

// Ruta raíz (GET /)
app.get('/', (req, res) => {
  res.send('Welcome to the API. Use /api for API endpoints.');
});

export default app;
