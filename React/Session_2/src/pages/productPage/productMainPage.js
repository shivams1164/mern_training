// src/pages/productPage/productMainPage.js

import React from 'react';
import Navbar from '../homepage/navbar';
import Footer from '../homepage/footer';
import ProductInfo from './product';

const ProductMain = () => {
    return (
        <div>
            <Navbar />
            <ProductInfo />
            <Footer />
        </div>
    );
}

export default ProductMain;
