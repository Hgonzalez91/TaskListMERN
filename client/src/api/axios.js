import axios from 'axios'

const url = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000'

const instance = axios.create({
    baseURL: `${url}/api`,
    withCredentials: true
})

export default instance