import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send a request to your backend
    console.log('Login/Register with:', email, password);
    onLogin();
  };

  return (
    <div className="card">
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          required
        />
        <button type="submit" className="button">
          {isRegistering ? 'Register' : 'Login'}
        </button>
      </form>
      <button onClick={() => setIsRegistering(!isRegistering)} className="button">
        {isRegistering ? 'Already have an account? Login' : 'Need an account? Register'}
      </button>
      <div>
        <button onClick={onLogin} className="button">Login with Google</button>
        <button onClick={onLogin} className="button">Login with Facebook</button>
      </div>
    </div>
  );
};

export default Login;

