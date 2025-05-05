import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/header.css';
import logoimg from '../assets/logo.png';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaBlog, FaBriefcase, FaCertificate } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logoimg} alt="Logo" />
      </div>
      
      <div className="menu-icon" onClick={toggleMenu}>
        <span className={menuOpen ? 'bar open' : 'bar'}></span>
        <span className={menuOpen ? 'bar open' : 'bar'}></span>
        <span className={menuOpen ? 'bar open' : 'bar'}></span>
      </div>

      <nav className={menuOpen ? 'nav active' : 'nav'}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}><FaHome className="nav-icon" /> HOME</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}><FaUser className="nav-icon" /> ABOUT ME</Link></li>
          <li><Link to="/BlogPage" onClick={() => setMenuOpen(false)}><FaBlog className="nav-icon" /> BLOGS</Link></li>
          <li><Link to="/Experience" onClick={() => setMenuOpen(false)}><FaBriefcase className="nav-icon" /> EXPERIENCE</Link></li>
          <li><Link to="/Projects" onClick={() => setMenuOpen(false)}><FaProjectDiagram className="nav-icon" /> PROJECTS</Link></li>
          <li><Link to="/CertificationsPage" onClick={() => setMenuOpen(false)}><FaCertificate className="nav-icon" /> CERTIFICATIONS</Link></li>
          <li><Link to="/ContactPage" onClick={() => setMenuOpen(false)}><FaEnvelope className="nav-icon" /> CONTACT</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
