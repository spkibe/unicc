// src/components/Login.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to register if no user is found
    if (!localStorage.getItem('user')) {
      navigate('/register');
    }
  }, [navigate]);

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
      setMessage('Login successful!');
      navigate('/'); // Redirect to the homepage
    } else {
      setMessage('Invalid username or password.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button 
          onClick={handleLogin} 
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
