import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <h1>Natural <br /> Store</h1>
        <p>This is a template landing page, created with Figma and Anima. No coding involved.</p>
        <div className="buttons">
          <button className="primary">Primary</button>
          <button className="cta">CTA</button>
        </div>
      </div>
      <div className="header-image">
        <img src="Image-6.png" alt ="natural"/>
      </div>
    </div>
  );
}

export default Header;
