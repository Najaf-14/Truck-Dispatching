import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const userObj = localStorage.getItem("user");
  const user= JSON.parse(userObj);
  // console.log(user.fullName)

  const closeMenu = () => setIsMenuOpen(false);

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
                closeMenu();
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
                closeMenu();
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
              onClick={closeMenu}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/pricing"
              onClick={closeMenu}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Pricing Plans
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/driver"
              onClick={closeMenu}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Driver Registration
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/login"
              onClick={closeMenu}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/signup"
              onClick={closeMenu}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Signup
            </NavLink>
          </li>
          {
            user && (
              <li className='username-display'>
                <span className='username-text'>
                  &#128100; {user.fullName}
                </span>
              </li>
            )
          }
        </ul>
      </div>
    </header>
  );
};

export default Navbar;