import React, { useState } from "react";
import "./LoginComp.css";
import { Link, useNavigate } from "react-router-dom";

function LoginComp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // TODO: Connect to backend
    console.log("Login: ", { email, password });

    setTimeout(() => {
      setLoading(false);
      navigate("/")
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Login to your Loadify account</p>
        </div>
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Email Address:</label>
            <input
              placeholder="Enter your email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password:</label>
            <input
              placeholder="Enter your password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="login-footer">
          <p>Dont't have an account? <Link to="/signup">Sign up here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default LoginComp;
