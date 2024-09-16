import "./Navbar.css";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="Navbar">
      <h1>
      {/* <img src="assets/ccclogo.png" alt="Icon" className="nav-icon" /> */}
        CCC
        </h1>
      <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
          </li>
          <li><Link to="/teams" className="nav-link" onClick={toggleMenu}>OUR TEAM</Link></li>
          <li><Link to="/events" className="nav-link" onClick={toggleMenu}>Events</Link></li>
          <li>
            <Link to="/learning-resources" className="nav-link" onClick={toggleMenu}>Learning Resources</Link>
          </li>
          <li>
            <Link to="/contact-us" className="nav-link" onClick={toggleMenu}>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
}