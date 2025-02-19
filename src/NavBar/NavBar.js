import React, { useState } from "react";
import './NavBar.css';

const NavBar = () => {
    const [menuActive, setMenuActive] = useState(false);  // State to control menu visibility

    const toggleMenu = () => {
        setMenuActive(!menuActive); // Toggle the menu
    };

    return (
        <nav className="Navbar">
            <div className="logo">
                <img src="512png.png" alt="search-icon" />
            </div>
            <div className="menu-toggle" onClick={toggleMenu}>
                <i className="fas fa-bars"></i>  {/* Add an icon for the hamburger menu */}
            </div>
            <ul className={`menu ${menuActive ? 'active' : ''}`}>
                <li><a href="#">Sign Up</a></li>
            </ul>
            <div className="button">
                <button className="btn btn-secondary">Secondary</button>
            </div>
        </nav>
    );
};

export default NavBar;
