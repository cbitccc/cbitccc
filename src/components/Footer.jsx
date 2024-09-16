import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>CBIT Cyber Security Club</h3>
          <p>Empowering the next generation of cyber defenders.</p>
        </div>
        <div className="footer-center">
          <h4>Contact Us</h4>
          <ul>
            <li><FaEnvelope /> ccc@cbit.ac.in</li>
          </ul>
        </div>
        <div className="footer-right">
          <h4>Follow Us</h4>
          <ul className="social-icons">
            <li><a href="https://www.instagram.com/ccc_cbit" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
            <li><a href="https://www.linkedin.com/company/cbit-cybersecurity-club/mycompany/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
            
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 CBIT Cyber Security Club. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
