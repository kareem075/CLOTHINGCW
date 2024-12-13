import React, { useState, useEffect } from 'react';
import './Cart.css';

function Cart() {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
        calculateTotalPrice(storedCart);
    }, []);

    const calculateTotalPrice = (cartItems) => {
        const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price.split(' ')[0]), 0);
        setTotalPrice(total);
    };

    const handleBuy = () => {
        alert('Purchase successful!');
        localStorage.removeItem('cart');
        setCart([]);
        setTotalPrice(0);
    };

    return (
        <div className="cart-container">
            <h2>Your Cart 🛒</h2>
            {cart.length > 0 ? (
                <div className="cart-items">
                    {cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <p>Category: {item.category}</p>
                                <p>Price: {item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
            <div className="cart-summary">
                <h3>Total Price: {totalPrice} EGP</h3>
                <button onClick={handleBuy} className="buy-button">Buy</button>
            </div>
        </div>
    );
}

export default Cart;
