import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundComp.css';

const NotFoundComp = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div className="notfound-code">404</div>
        <h1>Page Not Found</h1>
        <p>Oops! The page you're looking for doesn't exist or has been moved.</p>
        <div className="notfound-buttons">
          <Link to="/" className="home-btn">Go Back Home</Link>
          <Link to="/contact" className="contact-btn">Contact Support</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundComp;