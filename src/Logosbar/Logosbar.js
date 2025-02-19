
import React from "react";
import "./Logosbar.css";

const Logosbar = () => {
    return (
        <div className="logo-container">
        <div className="logo-grid">
          <div className="logo-item">
            <img src="/B&B&W.png" alt="Nestle Logo" className="logo-image" />
          </div>
          <div className="logo-item">
            <img src="/sephora.png" alt="Apple Logo" className="logo-image" />
          </div>
          <div className="logo-item">
            <img src="/Watsons.png" alt="Amazon Logo" className="logo-image" />
          </div>
        </div>
      </div>
      );
    };
    



export default Logosbar;