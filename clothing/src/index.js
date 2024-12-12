import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import App from './App';
import Home from './Components/Homepage/Home';
import Login from './Components/loginpage/Login';
import Main from './Components/Mainview/Main'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Main/>
   
  </React.StrictMode>
);

