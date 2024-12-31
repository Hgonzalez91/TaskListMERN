import instance from './axios';

// Obtener todas las tareas
export const getTasksRequest = () => instance.get('/tasks');

// Obtener una tarea por ID
export const getTaskRequest = (id) => instance.get(`/tasks/${id}`);

// Crear una nueva tarea
export const createTaskRequest = (task) => instance.post('/tasks', task);

// Actualizar una tarea por ID
export const updateTaskRequest = (id, task) =>
  instance.put(`/tasks/${id}`, task);

// Eliminar una tarea por ID
export const deleteTaskRequest = (id) => instance.delete(`/tasks/${id}`);
