import instance from './axios';

// Registro de usuario
export const registerRequest = (user) => instance.post('/register', user);

// Inicio de sesión
export const loginRequest = (user) => instance.post('/login', user);

// Verificación del token
export const verifyTokenRequest = () => instance.get('/verify');
