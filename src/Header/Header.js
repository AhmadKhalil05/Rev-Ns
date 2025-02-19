import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <h1>Natural <br /> Store</h1>
        <p>This is a natural products store, offering organic items without any artificial additives. Shop here for your healthy lifestyle needs.</p>
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
