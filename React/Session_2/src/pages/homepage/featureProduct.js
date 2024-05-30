// src/components/FeatureProduct.js

import React from 'react';

const FeatureProduct = () => {
    const products = [
        {
            name: "Samsung Galaxy Tab S9 FE",
            description: "Samsung Galaxy Tab S9 FE 27.69 cm (10.9 inch) Display, RAM 6 GB, ROM 128",
            price: " ₹35,999",
            image: "https://m.media-amazon.com/images/I/31OVAmHjLPL._SX300_SY300_QL70_FMwebp_.jpg"
        },
        {
            name: "realme GT 6T 5G ",
            description: "realme GT 6T 5G (Fluid Silver,8GB RAM+128GB Storage) | India's 1st 7+ Gen 3 Flagship Chipset | 1.5M+AnTuTu Score | 5500mAh+120W | The World's Brightest Flagship Display",
            price: "₹30,999",
            image: "https://m.media-amazon.com/images/I/41O23PSvpGL._SX300_SY300_QL70_FMwebp_.jpg"
        },
        {
            name: "Lenovo IdeaPad Slim 3",
            description: "Lenovo IdeaPad Slim 3 Intel Core i3-1115G4 11th Gen 15.6",
            price: "₹59,999",
            image: "https://m.media-amazon.com/images/I/61ta6vDkCRL._SL1000_.jpg"
        }
    ];

    return (
        <div className="feature-product-container">
            {products.map((product, index) => (
                <div key={index} className="product-card">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <div className="product-info">
                        <h2 className="product-name">{product.name}</h2>
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">{product.price}</p>
                        <button className="buy-button">Buy Now</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FeatureProduct;
