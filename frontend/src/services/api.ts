import axios from 'axios';

/**
 * ====================================================================================
 * API CONFIGURATION
 * Configures Axios for making HTTP requests to the backend.
 * ====================================================================================
 */

// Create a customized Axios instance
// It automatically uses the correct API URL depending on the environment.
// VITE_API_URL is set in .env files.
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
});

// Request Interceptor: Automatically attaches the JWT token to every request.
// This means we don't have to manually add the 'Authorization' header in every API call.
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
