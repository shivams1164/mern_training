// src/components/Homepage.js

import React from 'react';
import Navbar from './navbar';
import Carousal from './carousal';
import CategoryRow from './categegoryRow';
import Footer from './footer';
import FeatureProduct from './featureProduct';

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <CategoryRow />
            <Carousal />
            <FeatureProduct /> 
            <Footer />
        </div>
    );
}

export default Homepage;
