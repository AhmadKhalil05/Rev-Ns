import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'; // استيراد الأيقونات
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="logo">
        <img src="logo.png" alt="product"></img>
      </div>
        <p>Updates right to your Inbox</p>
        <input type="email" placeholder="Email Address" className="email-input" />
        <button className="subscribe-btn">Subscribe</button>
      </div>
      <div className="footer-right">
        <div className="footer-column">
          <h4>Our story</h4>
          <ul>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Title</h4>
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Title</h4>
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </div>
        <div className="footer-socials">
          <a href="#" className="social-icon"><FaFacebook /></a>
          <a href="#" className="social-icon"><FaLinkedin /></a>
          <a href="#" className="social-icon"><FaInstagram /></a>
          <a href="#" className="social-icon"><FaTwitter /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; NaturalStore 2025 | <a href="#">Privacy policy</a> | <a href="#">Terms of use</a></p>
      </div>
    </div>
  );
};

export default Footer;
