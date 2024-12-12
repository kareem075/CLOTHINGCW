import React, { useState } from 'react';
import './Main.css';

const products = [
    { id: 1, name: 'Classic T-Shirt', category: 'T-Shirts', price: '150 EGP', image: '/public/images/redt.jpg'},
    { id: 2, name: 'Graphic Tee', category: 'T-Shirts', price: '399 EGP',image: '/public/images/download.jpg'},
    { id: 3, name: 'Striped T-Shirt', category: 'T-Shirts', price: '250 EGP',image: '/public/images/download.jpg' },
    { id: 4, name: 'Long Sleeve Tee', category: 'T-Shirts', price: '422 EGP', image: '/public/images/longsleeve.jpeg'},
    { id: 5, name: 'Skinny Jeans', category: 'Pants', price: '560 EGP',image: '/public/images/skinny jeans.jpg' },
    { id: 6, name: 'Cargo Pants', category: 'Pants', price: '730 EGP', image: '/public/mages/Cargopants.jpg'},
    { id: 7, name: 'Sweatpants', category: 'Pants', price: '220 EGP',image: '/public/images/sweatpants.jpg' }
];

function Main() {
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
        </div>
    );
}

export default Main;
