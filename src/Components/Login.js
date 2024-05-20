import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";

function Login() {
  const navigate = useNavigate();
  let [user, setUser] = useState("");
  let [password, setPassword] = useState("");

  function SignupPage() {
    navigate("/signup");
  }

  function Home() {
    navigate("/");
  }

  const Signin = async () => {
    if (!user || !password) alert("enter valid username and password");
    else {
    }
  };

  return (
    <>
      <center>
        <div className="container">
          <div className="box">
            <div className="home" onClick={Home}>
              <h4>Back</h4>
            </div>
            <h2>Login</h2>
            <div className="text">
              <input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                name="user"
                placeholder="Username"
              />
            </div>
            <div className="text">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="login-btns">
              <button id="login" onClick={Signin} className="btn">
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
