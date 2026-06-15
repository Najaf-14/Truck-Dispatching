import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      
      <div className="stats-container">
        <div className="stat-box">
          <h3>🚛 Total Drivers</h3>
          <p>0</p>
        </div>
        
        <div className="stat-box">
          <h3>⭐ Total Testimonials</h3>
          <p>0</p>
        </div>
        
        <div className="stat-box">
          <h3>📦 Total Loads</h3>
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;