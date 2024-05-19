import React from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  function LoginPage() {
    navigate("/login");
  }

  return (
    <div class="box">
      <div class="register">Register Here</div>
      <div class="text">
        <input type="text" name="first name" placeholder="First Name" />
      </div>
      <div class="text">
        <input type="text" name="last name" placeholder="Last Name" />
      </div>
      <div class="text">
        <input type="email" name="email" placeholder="Email" />
      </div>
      <div class="text">
        <input type="password" name="password" placeholder="Password" />
      </div>
      <div class="text">
        <input type="password" name="password" placeholder="Confirm Password" />
      </div>
      <div class="login-btns">
        <button class="btn">Sign up</button>
        <a onClick={LoginPage} class="link">
          Login
        </a>
      </div>
    </div>
  );
}

export default Signup;
