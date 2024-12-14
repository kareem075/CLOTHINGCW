import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Home.css';

function Home() {
    const navigate = useNavigate();

    const handleShopNow = () => {
        navigate('/main');
    };

    return (
        <div className="home-container">
            <h1>Welcome to Our Clothing Brand</h1>
            <p>Discover the latest trends and find your perfect outfit.</p>
            <button onClick={handleShopNow}>Shop Now</button>
        </div>
    );
}

export default Home;

