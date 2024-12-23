import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import App from './App';
import Home from './Components/Homepage/Home';
import Login from './Components/loginpage/Login';
import Main from './Components/Mainview/Main'
import Register from './Components/Register/Register';
import Cart from './Components/Cart/Cart.js';
import Review from './Components/Review/Review.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);

