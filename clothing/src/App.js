import React from 'react';
import Login from './Components/loginpage/Login.js'
import { useState } from 'react';
import Home from './Components/Homepage/Home.js';
import Main from './Components/Mainview/Main.js'


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <Main/>
    );
}

export default App;

LLL,HTMLHeadElement