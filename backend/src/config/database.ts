import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// Determine if we are in production or have a specific database URL provided (like on Render)
const connectionString = process.env.DATABASE_URL;

const poolConfig = connectionString
    ? {
        connectionString,
        ssl: {
            rejectUnauthorized: false // Required for Render's self-signed certificates
        }
    }
    : {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DB,
        port: parseInt(process.env.DB_PORT || '5432'), // Do NOT use process.env.PORT here!
    };

const pool = new Pool(poolConfig);

pool.on('connect', () => {
    console.log('Connected to the PostgreSQL database');
});

export const query = (text: string, params?: any[]) => pool.query(text, params);
export default pool;
