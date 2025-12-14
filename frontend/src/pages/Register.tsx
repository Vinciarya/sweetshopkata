import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { isAxiosError } from 'axios';


const Register: React.FC = () => {
  // Local state for user input and feedback messages
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages
    try {
      await api.post('/auth/register', { username, password });
      setMessage('Registration successful! Redirecting to login...');
      setTimeout(() => {
        navigate('/login', { replace: true });
      }, 1500);
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        console.error('Registration failed:', error);
        const msg = error.response?.data?.message || 'Registration failed. Please try again.';
        setMessage(msg);
      } else {
        console.error('Registration failed:', error);
        setMessage('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400">
      <div className="w-96 p-8 bg-white/40 backdrop-blur-[2px] border border-white/50 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-2xl">
        <h2 className="mb-6 text-3xl font-extrabold text-center text-white drop-shadow-md">
          Create Account
        </h2>
        
        {message && (
          <div className={`mb-4 p-3 rounded-lg text-center text-sm font-medium border ${
            message.includes('successful') 
              ? 'bg-green-100 text-green-700 border-green-200' 
              : 'bg-red-100 text-red-700 border-red-200'
          }`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-bold text-white drop-shadow-sm" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-3 leading-tight text-white bg-white/20 border border-white/40 rounded-lg focus:outline-none focus:bg-white/30 focus:ring-2 focus:ring-white/50 placeholder-white/70 transition-all duration-200 backdrop-blur-[2px]"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-white drop-shadow-sm" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 leading-tight text-white bg-white/20 border border-white/40 rounded-lg focus:outline-none focus:bg-white/30 focus:ring-2 focus:ring-white/50 placeholder-white/70 transition-all duration-200 backdrop-blur-[2px]"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            className="w-full px-4 py-3 font-bold text-indigo-900 uppercase tracking-wider bg-white/60 hover:bg-white/80 rounded-lg shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-[2px]"
            type="submit"
          >
            Sign Up
          </button>
          
          <div className="text-center mt-4">
             <p className="text-sm text-white/90">
               Already have an account?{' '}
               <span 
                 onClick={() => navigate('/login')}
                 className="font-bold text-white hover:text-white/80 cursor-pointer hover:underline transition-colors"
                 role="button"
                 tabIndex={0}
               >
                 Log In
               </span>
             </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
