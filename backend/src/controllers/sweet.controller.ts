import { Request, Response } from 'express';
import pool from '../config/database';

export const getAllSweets = async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM sweets');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching sweets:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
