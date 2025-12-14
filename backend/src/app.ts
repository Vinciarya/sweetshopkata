import express from 'express';
import cors from 'cors';
import { createUserTable } from './models/user.model';
import { createSweetTable } from './models/sweet.model';
import authRoutes from './routes/auth.routes';
import sweetRoutes from './routes/sweet.routes';

export const app = express();

// Define allowed origins
const allowedOrigins = [
    'http://localhost:5173',                   // Your local frontend
    'https://sweetshopkata.vercel.app'         // ⚠️ CHANGE THIS to your actual Vercel URL!
];

// Configure CORS
app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true
}));

// Debug Middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Middleware to parse JSON bodies
app.use(express.json());

// Initialize Database Tables
const initDB = async () => {
    try {
        await createUserTable();
        await createSweetTable();
        console.log('Database tables initialized');
    } catch (error) {
        console.error('Failed to initialize database tables:', error);
    }
};

// Initialize tables immediately
initDB();

// Register Routes
app.use('/api/auth', authRoutes);
app.use('/api/sweets', sweetRoutes);
