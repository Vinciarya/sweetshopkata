import { Pool } from 'pg';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

/**
 * ====================================================================================
 * DATABASE CONFIGURATION
 * ====================================================================================
 */

// Determine the connection string:
// 1. Used in production (Render) where DATABASE_URL is provided.
// 2. Can be set locally for easier configuration.
const connectionString = process.env.DATABASE_URL;

// Configure the PostgreSQL connection pool
const poolConfig = connectionString
    ? {
        connectionString,
        ssl: {
            rejectUnauthorized: false // Required for Render's self-signed certificates in production
        }
    }
    : {
        // Fallback for local development if DATABASE_URL is not set
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DB,
        port: parseInt(process.env.DB_PORT || '5432'), // Use DB_PORT env var, default to 5432
    };

// Create a new Pool instance to manage database connections
const pool = new Pool(poolConfig);

// Event listener for successful connection
pool.on('connect', () => {
    console.log('Connected to the PostgreSQL database');
});

/**
 * Helper function to execute queries
 * @param text The SQL query string
 * @param params Optional parameters for the query
 */
export const query = (text: string, params?: any[]) => pool.query(text, params);
export default pool;

