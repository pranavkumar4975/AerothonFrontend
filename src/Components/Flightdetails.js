import React from "react";
import "./Flightdetails.css";
import { useNavigate } from "react-router-dom";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PublicIcon from "@mui/icons-material/Public";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Flightdetails() {
  const navigate = useNavigate();
  function Home() {
    navigate("/");
  }

  function LoginPage() {
    navigate("/login");
  }

  return (
    <div className="flightdetails">
      <div className="header">
        <div className="left-head">
          <WbTwilightIcon className="icons" />
          <h4 onClick={Home}>SkyTracker</h4>
        </div>
        <div className="right-head">
          <PublicIcon className="icons" />
          <FavoriteIcon className="icons" />
          <div className="login-icon">
            <AccountCircleIcon className="icons" />
            <h4 onClick={LoginPage}>Login</h4>
          </div>
        </div>
      </div>
      <div className="main-body">
        <h2>Flight id: 12345</h2>
        <div className="boxes">
          <div className="wps">
            <p>waypoint1</p>
          </div>
          <div className="wps">
            <p>waypoint2</p>
          </div>
          <div className="wps">
            <p>waypoint3</p>
          </div>
          <div className="wps">
            <p>waypoint4</p>
          </div>
          <div className="wps">
            <p>waypoint5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flightdetails;
