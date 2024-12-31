import express from 'express'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes.js'
import tasksRoutes from './routes/tasks.routes.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'

//Servidor
const app = express();

//Soluciona el problema de cors de los navegadores con la comunicacion entre dominios(permite la comunicacion entre dominios localhost:3000[backend] y localhost:5173[frontend])
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
//Morgan: Para ver peticiones por consola
app.use(morgan('dev'))
//Para entender peticiones json
app.use(express.json())
//Para convertir una cookie en json
app.use(cookieParser())

//Rutas de la API
app.use("/api", authRoutes);
app.use("/api", tasksRoutes);

//Ruta raiz (get /)
app.get("/", (req, res) => {
    res.send("Welcome to the API. Use /api for API endpoints.");
});

export default app;