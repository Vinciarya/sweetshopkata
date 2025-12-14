import { Router } from 'express';
import { register, login } from '../controllers/auth.controller';

const router = Router();

/**
 * ====================================================================================
 * AUTHENTICATION ROUTES
 * Base Path: /api/auth
 * ====================================================================================
 */

// POST /api/auth/register
// Registers a new user with the system.
// Body: { username, password }
router.post('/register', register);

// POST /api/auth/login
// Authenticates a user and returns a JWT token.
// Body: { username, password }
router.post('/login', login);

export default router;

