import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isRegistering, setIsRegistering] = useState(false); // State to toggle between login and register forms
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(''); // New state for email
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsRegistering(!isRegistering);
    setMessage('');
    setUsername('');
    setEmail(''); // Clear email field when toggling
    setPassword('');
  };

  const handleRegister = () => {
    if (username && email && password) {
      localStorage.setItem('user', JSON.stringify({ username, email, password }));
      setMessage('Registration successful! Please login.');
      setIsRegistering(false); // Switch to login form after registration
    } else {
      setMessage('Please enter all required fields.');
    }
  };

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
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isRegistering ? 'Register' : 'Login'}
        </h2>
        {isRegistering && (
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
        )}
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
        {isRegistering ? (
          <button
            onClick={handleRegister}
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Register
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        )}
        <p className="mt-4 text-center text-gray-500">
          {isRegistering ? 'Already have an account?' : "Don't have an account?"}
          <button
            onClick={handleToggle}
            className="text-blue-500 hover:underline ml-2"
          >
            {isRegistering ? 'Login here' : 'Register here'}
          </button>
        </p>
        {message && (
          <p className={`mt-4 text-center ${isRegistering ? 'text-green-500' : 'text-red-500'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthPage;