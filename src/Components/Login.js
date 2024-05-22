import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";

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
        <div className="log-container">
          <div className="log-box">
            <ArrowBackSharpIcon className="home" onClick={Home} />
            <h2>Login</h2>
            <div className="text">
              <input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                name="user"
                placeholder="Username"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="log-login-btns">
              <button id="login" onClick={Signin} className="btn">
                Login
              </button>
              <p className="link" onClick={SignupPage}>
                Register Here
              </p>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default Login;
