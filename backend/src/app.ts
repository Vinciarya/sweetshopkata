import express from 'express';
import cors from 'cors';
import { createUserTable } from './models/user.model';
import { createSweetTable } from './models/sweet.model';
import authRoutes from './routes/auth.routes';
import sweetRoutes from './routes/sweet.routes';

// Create an Express application
export const app = express();

/**
 * ====================================================================================
 * CONFIGURATION & MIDDLEWARE
 * ====================================================================================
 */

// Define allowed origins for Cross-Origin Resource Sharing (CORS)
// This strictly controls which domains can access our API.
const allowedOrigins = [
    'http://localhost:5173',                  // Local development (Vite)
    'http://localhost:3000',                  // Alternative local endpoint
    'https://sweetshopkata.vercel.app',       // Production Frontend (Vercel)
    'https://sweetshopkata.vercel.app/',      // Variant with trailing slash
];

// Configure CORS Middleware
// Checks strictly if the incoming request origin is in our allowed list.
app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps, curl requests, or server-to-server)
        if (!origin) return callback(null, true);

        // Check if the origin is in our allowed list
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true // Allow cookies/headers to be sent across domains
}));

// Debug Middleware: Logs every request method and URL to the console for easier debugging
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Middleware to parse incoming JSON payloads in the request body
app.use(express.json());

/**
 * ====================================================================================
 * DATABASE INITIALIZATION
 * ====================================================================================
 */

// Function to initialize necessary database tables regarding Users and Sweets
const initDB = async () => {
    try {
        await createUserTable(); // Create 'users' table if it doesn't exist
        await createSweetTable(); // Create 'sweets' table if it doesn't exist
        console.log('Database tables initialized');
    } catch (error) {
        console.error('Failed to initialize database tables:', error);
    }
};

// Initialize tables immediately when the app starts
initDB();

/**
 * ====================================================================================
 * ROUTES
 * ====================================================================================
 */

// Mount Routes
app.use('/api/auth', authRoutes);     // User Authentication (Register, Login)
app.use('/api/sweets', sweetRoutes);   // Sweets Management (CRUD)

