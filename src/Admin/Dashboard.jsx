import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [stats, setStats] = useState({
    drivers: 0,
    users: 0,
    contacts: 0,
  });

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const token = localStorage.getItem("token");

      const [driversRes, usersRes, contactsRes] = await Promise.all([
        axios.get("http://localhost:5000/api/driverform/all"),

        axios.get(
          "http://localhost:5000/api/auth/admin/manageUsers",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        ),

        axios.get(
          "http://localhost:5000/api/contact/admin/messages"
        ),
      ]);

      setStats({
        drivers: driversRes.data.drivers?.length || 0,
        users: usersRes.data.users?.length || 0,
        contacts: contactsRes.data.message?.length || 0,
      });
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome back, Admin 👋</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="icon">🚛</div>

          <div>
            <h3>Total Drivers</h3>
            <h2>{stats.drivers}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon">👤</div>

          <div>
            <h3>Total Users</h3>
            <h2>{stats.users}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon">📩</div>

          <div>
            <h3>Contact Messages</h3>
            <h2>{stats.contacts}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;