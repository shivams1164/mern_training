import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-logo">Amazon</div>
            <ul className="navbar-menu">
                <li className="navbar-item"><a href="#home">Home</a></li>
                <li className="navbar-item"><a href="#product">Product</a></li>
                <li className="navbar-item"><a href="#about">Search</a></li>
                <li className="navbar-item"><a href="#contact">Contact</a></li>
            </ul>
        </div>
    );
}

export default Navbar;
