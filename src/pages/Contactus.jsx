import React from 'react';
import './Contactus.css';
import Navbar from '../components/Navbar';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contactus() {
  return (
    <div className='contact-us'>
      <Navbar />
      <div className='contact-container'>
        <div className='contact-info'>
          <h1>Contact Us</h1>
          <p>Follow us on social media:</p>
          <ul className='social-media'>
            <li><a href='https://instagram.com/ccc_cbit' target='_blank' rel='noopener noreferrer'><FaInstagram /> Instagram</a></li>
            <li><a href='https://www.linkedin.com/company/cbit-cybersecurity-club/mycompany/' target='_blank' rel='noopener noreferrer'><FaLinkedin /> LinkedIn</a></li>
          </ul>
          <p>Visit us at:</p>
          <address>
            <p>Chaitanya Bharati Institute of Technology-Osman Sagar Rd, Kokapet, Gandipet, Hyderabad, Telangana 500075</p>
          </address>
          <div className='contacts'>
            <h2>Contact Details</h2>
            <p><strong>President:</strong> Manobhiram Reddy +91 93914 68489</p>
            <p><strong>Vice President:</strong> Gayatri K +91 76808 71908</p>
          </div>
        </div>
        
        <div className='map'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.412650300948!2d78.31686187493482!3d17.391973483496027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb94eba8ad7c87%3A0xb78f51ed556f7cc5!2sChaitanya%20Bharathi%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1725100704126!5m2!1sen!2sin'
            width='100%'
            height='300'
            frameBorder='0'
            style={{ border: 0 }}
            allowFullScreen=''
            aria-hidden='false'
            tabIndex='0'
            title='Location Map'
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
