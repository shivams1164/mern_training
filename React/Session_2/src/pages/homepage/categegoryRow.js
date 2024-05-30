// src/components/Category.js

import React from 'react';

const Category = () => {
    const categories = [
        'Mobile', 'Laptop', 'Fashion', 'Electronics', 'Home Appliances', 'Books', 'Toys', 'Groceries'
    ];

    return (
        <div className="category-row">
            {categories.map((category, index) => (
                <a key={index} href={`#${category.toLowerCase()}`} className="category-link">
                    {category}
                </a>
            ))}
        </div>
    );
}

export default Category;
