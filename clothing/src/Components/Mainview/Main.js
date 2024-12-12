import React, { useState } from 'react';
import './Main.css';

const productsData = [
    { id: 1, name: 'Classic T-Shirt', category: 'T-Shirts', price: '150 EGP', image: '/images/redt.jpg'},
    { id: 2, name: 'Graphic Tee', category: 'T-Shirts', price: '399 EGP',image: '/images/download.jpg'},
    { id: 3, name: 'Striped T-Shirt', category: 'T-Shirts', price: '250 EGP',image: '/images/download.jpg' },
    { id: 4, name: 'Long Sleeve Tee', category: 'T-Shirts', price: '422 EGP', image: '/images/longsleeve.jpeg'},
    { id: 5, name: 'Skinny Jeans', category: 'Pants', price: '560 EGP',image: '/images/skinny jeans.jpg' },
    { id: 6, name: 'Cargo Pants', category: 'Pants', price: '730 EGP', image: '/images/Cargo.jpg'},
    { id: 7, name: 'Sweatpants', category: 'Pants', price: '220 EGP',image: '/images/sweatpants.jpg' }
];

function Main({ onLogout }) {
    const [products, setProducts] = useState(productsData);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        const searchValue = event.target.value.toLowerCase();
        setSearchTerm(searchValue);
        const filteredProducts = productsData.filter(product =>
            product.name.toLowerCase().includes(searchValue) ||
            product.category.toLowerCase().includes(searchValue)
        );
        setProducts(filteredProducts);
    };

    const handleCartClick = () => {
        window.location.href = '/cart';
    };

    const handleReviewsClick = () => { 
        window.location.href = '/reviews';
    };

    return (
        <div className="main-container">
            <div className="header">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="search-bar"
                />
                <div className="cart-icon" onClick={handleCartClick}>
                    🛒
                </div>
                <button onClick={onLogout} className="logout-button">Logout</button>
            </div>
            <h1>Our Products</h1>
            <div className="products-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h2>{product.name}</h2>
                        <p>Category: {product.category}</p>
                        <p>Price: {product.price}</p>
                    </div>
                ))}
            </div>
            <button onClick={handleReviewsClick} className="reviews-button">Reviews</button>
        </div>
    );
}

export default Main;
