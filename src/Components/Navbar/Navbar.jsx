import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  console.log(location.pathname)
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleSmoothScroll = (e, targetId) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="heading">
      <Link to="/" className="logo-link">
        <h2>Loadify</h2>
      </Link>
      
      <div 
        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
        id="menu-toggle"
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <div className={`navbar ${isMenuOpen ? 'open' : ''}`} id="navbar">
        <ul>
          <li>
            <Link 
              to="/"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  handleSmoothScroll(e, 'home');
                }
              }}
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/#about"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  handleSmoothScroll(e, 'about');
                }
              }}
              className={location.pathname === '/' && window.location.hash === '#about' ? 'active' : ''}
            >
              About Us
            </Link>
          </li>
          <li>
            <NavLink 
              to="/services"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/pricing"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Pricing Plans
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/driver"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Driver Registration
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;