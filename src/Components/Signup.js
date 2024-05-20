import React, { useState } from "react";
import "./Signup.css";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  let [first, setFirst] = useState("");
  let [last, setLast] = useState("");
  let [email, setEmail] = useState("");
  let [user, setUser] = useState("");
  let [password, setPassword] = useState("");
  let [repassword, setRepassword] = useState("");

  function LoginPage() {
    navigate("/login");
  }


  const Register = async () => {
    if (!first || !last || !email || !user || !password || !repassword)
      alert("enter valid details");
    else if (password.length < 8)
      alert("password must be of size more than or equal to 8");
    else if (password !== repassword) alert("password didnt matched");
    else {
      setFirst("");
      setLast("");
      setEmail("");
      setUser("");
      setPassword("");
      setRepassword("");
      navigate("/");
    }
  };

  return (
    <div class="box">
      <div className="home" onClick={LoginPage}>
        <h4>Back</h4>
      </div>
      <div class="register">Register Here</div>
      <div class="text">
        <input
          type="text"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          name="first name"
          placeholder="First Name"
        />
      </div>
      <div class="text">
        <input
          type="text"
          value={last}
          onChange={(e) => setLast(e.target.value)}
          name="last name"
          placeholder="Last Name"
        />
      </div>
      <div class="text">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="Email"
        />
      </div>
      <div class="text">
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          name="username"
          placeholder="Username"
        />
      </div>
      <div class="text">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          placeholder="Password"
        />
      </div>
      <div class="text">
        <input
          type="password"
          value={repassword}
          onChange={(e) => setRepassword(e.target.value)}
          name="Re-password"
          placeholder="Confirm Password"
        />
      </div>
      <div class="login-btns">
        <button class="btn" onClick={Register}>
          Sign up
        </button>
        <a onClick={LoginPage} class="link">
          Login
        </a>
      </div>
    </div>
  );
}

export default Signup;
