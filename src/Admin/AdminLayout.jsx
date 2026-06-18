import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./AdminLayout.css";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <h2>Loadify Admin</h2>
        </div>
        <nav className="admin-nav">
          <Link to="/admin" className="admin-nav-link">
            &#x1F4CA; Dashboard
          </Link>

          <Link to="/admin/drivers" className="admin-nav-link">
            &#x1F69B; Manage Drivers
          </Link>

          <Link to="/admin/testimonials" className="admin-nav-link">
            &#x2B50; Manage Testimonials
          </Link>

          <Link to="/admin/manageUsers" className="admin-nav-link">
            &#128101; Manage Users
          </Link>
        </nav>
      </aside>
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
