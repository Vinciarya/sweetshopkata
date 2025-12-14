// Import necessary tools to build the website server and handle configuration
import dotenv from 'dotenv';
import { app } from './app';

// Load settings from the configuration file (like passwords and addresses)
// This enables us to use process.env.VAR_NAME
dotenv.config();

/**
 * ====================================================================================
 * SERVER STARTUP
 * ====================================================================================
 */

// Decide which "door" (port) the website will open on. 
// It looks for a PORT variable in the environment, otherwise defaults to 3000.
const port = process.env.PORT || 3000;

// Function to start the website server
const startServer = async () => {
    try {
        // Start listening for visitors on the specified door
        app.listen(port, () => {
            console.log(`Server is running and listening on port ${port}`);
        });
    } catch (error) {
        // If something goes wrong while starting, report the error and stop the process
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

// Actually run the function to start everything up, but usually we skip this in test mode 
// (though here the logic implies we only skip if specific conditions are met, standard pattern shown)
if (process.env.NODE_ENV !== 'test') {
    startServer();
}

