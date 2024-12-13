import React, { useState } from 'react';
import './login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegisterClick = () => {
        window.location.href = '/register';
    };
    
    return (
        <div className="login-container">
            <h2>Login</h2>
            <h3>No Account No problem, Register</h3>
            <form >
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                   value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <div id="message">{message}</div>
            <button onClick={handleRegisterClick} className="register-button">Register</button>
        </div>
    );
}

export default Login;
