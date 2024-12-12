import React, { useState } from 'react';
import './login.css';

function Login() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [message, setMessage] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     fetch('http://localhost:3000/users/login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ email, password })
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         if (data.success) {
    //             setMessage('Login successful!');
    //             // Redirect to another page or perform further actions
    //         } else {
    //             setMessage('Login failed: ' + data.message);
    //         }
    //     })
    //     .catch(error => {
    //         setMessage('Error: ' + error);
    //     });
    // };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form >
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    //value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                  //  value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            {/* <div id="message">{message}</div> */}
        </div>
    );
}

export default Login;
