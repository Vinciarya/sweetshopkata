import { Router } from 'express';
import * as sweetController from '../controllers/sweet.controller';
import { authenticateToken, isAdmin } from '../middleware/auth.middleware';

const router = Router();

/**
 * ====================================================================================
 * SWEET ROUTES
 * Base Path: /api/sweets
 * ====================================================================================
 */

// Global Middleware: All routes below this line require a valid JWT token.
router.use(authenticateToken);

/**
 * --- READ OPERATIONS (Accessible by any authenticated user) ---
 */

// GET /api/sweets/search?q=term
// Searches for sweets by name logic.
// MUST be defined before /:id to prevent "search" being interpreted as an ID.
router.get('/search', sweetController.searchSweets);

// GET /api/sweets
// Retrieves a list of all available sweets.
router.get('/', sweetController.getAllSweets);

// GET /api/sweets/:id
// Retrieves detailed information for a specific sweet by its unique ID.
// Note: This matches any string after the slash, so specific routes like /search must come first.
router.get('/:id', sweetController.getSweetById);

/**
 * --- USER ACTIONS (Accessible by any authenticated user) ---
 */

// POST /api/sweets/:id/purchase
// Allows a user to purchase a specific quantity of a sweet.
// Body: { quantity }
router.post('/:id/purchase', sweetController.purchaseSweet);

/**
 * --- ADMIN OPERATIONS (Accessible only by users with 'admin' role) ---
 */

// POST /api/sweets
// Create a new sweet item.
router.post('/', isAdmin, sweetController.createSweet);

// PUT /api/sweets/:id
// Update details of an existing sweet.
router.put('/:id', isAdmin, sweetController.updateSweet);

// DELETE /api/sweets/:id
// Remove a sweet from the inventory.
router.delete('/:id', isAdmin, sweetController.deleteSweet);

// POST /api/sweets/:id/restock
// Add more stock to an existing sweet.
router.post('/:id/restock', isAdmin, sweetController.restockSweet);

export default router;

