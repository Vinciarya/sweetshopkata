import api from './api';

/**
 * ====================================================================================
 * AUTHENTICATION SERVICE
 * Handles API calls related to user authentication.
 * ====================================================================================
 */

/**
 * Log in a user
 * Sends credentials to the backend and returns the response (token + user info).
 * @param credentials Object containing username and password
 */
export const login = async (credentials: any) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
};

