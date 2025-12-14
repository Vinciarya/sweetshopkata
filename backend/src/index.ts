// Import necessary tools to build the website server and handle configuration
import dotenv from 'dotenv';
import { app } from './app';

// Load settings from the configuration file (like passwords and addresses)
dotenv.config();

// Decide which "door" (port) the website will open on. If not specified, use door 3000.
const port = process.env.APP_PORT || 3000;

// Function to start the website server
const startServer = async () => {
    try {
        // Start listening for visitors on the specified door
        app.listen(port, () => {
            console.log(`Server is running and listening on port ${port}`);
        });
    } catch (error) {
        // If something goes wrong while starting, report the error and stop
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

// Actually run the function to start everything up, but only if we are not determining "test" functionality
if (process.env.NODE_ENV !== 'test') {
    startServer();
}
