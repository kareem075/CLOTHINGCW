import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/loginpage/Login.js';
import Home from './Components/Homepage/Home.js';
import Main from './Components/Mainview/Main.js';
import Register from './Components/Register/Register.js';
import Cart from './Components/Cart/Cart.js';
import Review from './Components/Review/Review.js';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/main" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/reviews" element={<Review />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

