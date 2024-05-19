import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function SignupPage() {
    navigate("/signup");
  }

  return (
    <>
      <center>
        <div className="container">
          <div className="box">
            <h2>Login</h2>
            <div className="text">
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="text">
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div className="login-btns">
              <button id="login" className="btn">
                Login
              </button>
              <a onClick={SignupPage} className="link">
                Register Here
              </a>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default Login;
