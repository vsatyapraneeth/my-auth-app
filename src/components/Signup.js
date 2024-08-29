import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('/api/signup', { email, password });
      console.log('Signup successful:', response.data);
      // Handle successful signup (e.g., redirect to login)
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle signup error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Signup</button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
};

export default Signup;
