import React from "react";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PublicIcon from "@mui/icons-material/Public";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Landing.css";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  function LoginPage() {
    navigate("/login");
  }

  function Home() {
    navigate("/");
  }

  return (
    <div className="landing">
      <div className="heading">
        <div className="left">
          <WbTwilightIcon />
          <h4 onClick={Home}>SkyTracker</h4>
        </div>
        <div className="right">
          <div className="logicon">
            <AccountCircleIcon />
            <h4 onClick={LoginPage}>Login</h4>
          </div>
        </div>
      </div>
      <div className="main-section">
        <div className="sourse-destination">
          <input type="text" placeholder="From" />
          <input type="text" placeholder="To" />
        </div>
        <p>or</p>
        <div className="flight-specific">
          <input type="text" placeholder="Flight ID" />
        </div>
        <button className="btn">Find Flight</button>
      </div>
    </div>
  );
}

export default Landing;
