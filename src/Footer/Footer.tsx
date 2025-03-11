import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { AiFillApple } from 'react-icons/ai';
import { SiGoogleplay } from 'react-icons/si';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h2 className="footer-title">Listen <span>UP</span></h2>
          <p className="footer-text">Stream. Download. Experience music like never before.</p>
          <div className="footer-icons">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>

        
        <div className="footer-section">
          <h3 className="footer-subtitle">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#" className="footer-link">Home</a></li>
            <li><a href="#" className="footer-link">Features</a></li>
            <li><a href="#" className="footer-link">Pricing</a></li>
            <li><a href="#" className="footer-link">Contact</a></li>
            <li><a href="#" className="footer-link">FAQs</a></li>
          </ul>
        </div>

       
        <div className="footer-section">
          <h3 className="footer-subtitle">Get the App</h3>
          <div className="footer-buttons">
            <button className="app-button">
              <AiFillApple className="app-icon" />
              <span>App Store</span>
            </button>
            <button className="app-button">
              <SiGoogleplay className="app-icon" />
              <span>Google Play</span>
            </button>
          </div>
        </div>
      </div>

     
      <div className="footer-copyright">
        <p>&copy; 2025 ListenUP. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
