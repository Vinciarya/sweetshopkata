import { Router } from 'express';
import { getAllSweets } from '../controllers/sweet.controller';
import { authenticateToken } from '../middleware/auth.middleware';

const router = Router();

router.get('/', authenticateToken, getAllSweets);

export default router;
