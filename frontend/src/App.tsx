import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import './App.css';

/**
 * ====================================================================================
 * MAIN APPLICATION COMPONENT
 * Handles client-side routing and global layout structure.
 * ====================================================================================
 */
function App() {
  return (
    // Wrap the app in Router to enable navigation without page reloads
    <Router>
      <div className="App">
        <Routes>
          {/* Define the mapping between URL paths and Components */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

