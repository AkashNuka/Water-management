// frontend/src/Login.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('owner');
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role) {
      navigate(`/${role}-dashboard`);
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { name, password });
      const { role } = response.data;
      localStorage.setItem('role', role);
      navigate(`/${role}-dashboard`);
    } catch (error) {
      console.error('Login failed', error);
      alert('Invalid credentials');
    }
  };

  return (
    <div className="Login">
      <div className="LoginContainer">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="UserType">
            <label>User Type:</label>
            <div>
              <input
                type="radio"
                id="owner"
                name="userType"
                value="owner"
                checked={userType === 'owner'}
                onChange={(e) => setUserType(e.target.value)}
              />
              <label htmlFor="owner">Owner</label>
            </div>
            <div>
              <input
                type="radio"
                id="driver"
                name="userType"
                value="driver"
                checked={userType === 'driver'}
                onChange={(e) => setUserType(e.target.value)}
              />
              <label htmlFor="driver">Driver</label>
            </div>
            <div>
              <input
                type="radio"
                id="dealer"
                name="userType"
                value="dealer"
                checked={userType === 'dealer'}
                onChange={(e) => setUserType(e.target.value)}
              />
              <label htmlFor="dealer">Dealer</label>
            </div>
          </div>
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;