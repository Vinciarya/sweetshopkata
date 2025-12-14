import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

/**
 * ====================================================================================
 * FRONTEND ENTRY POINT
 * This is where the React application starts.
 * ====================================================================================
 */

// Find the HTML element with id 'root' and mount the React app into it.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* The main App component that contains all others */}
    <App />
  </StrictMode>,
)

