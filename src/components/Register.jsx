// src/components/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (username && password) {
      // Save user data in local storage
      localStorage.setItem('user', JSON.stringify({ username, password }));
      setMessage('Registration successful! Please login.');
      navigate('/login'); // Redirect to login page after registration
    } else {
      setMessage('Please enter both username and password.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
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
          onClick={handleRegister} 
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
        {message && <p className="mt-4 text-center text-green-500">{message}</p>}
      </div>
    </div>
  );
};

export default Register;
