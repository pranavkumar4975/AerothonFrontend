import React, { useState } from "react";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PublicIcon from "@mui/icons-material/Public";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Landing.css";
import { useNavigate } from "react-router-dom";
import Searched from "./Searched";

function Landing() {
  const navigate = useNavigate();
  let [flight, setFlight] = useState("");
  let [fpop, setFpop] = useState(false);
  let [source, setSource] = useState("Patna");
  let [destination, setDestination] = useState("Delhi");
  let [departure, setDeparture] = useState("13:25");
  let [finaltime, setFinaltime] = useState("");

  function LoginPage() {
    navigate("/login");
  }

  function Home() {
    navigate("/");
  }

  const Searchflight = async () => {
    setFlight("12345");
    setSource("Patna");
    setDestination("Delhi");
    setDeparture("13:25");
    setFinaltime("19:45");
    setFpop(true);
  };

  return (
    <div className="landing">
      <div className="heading">
        <div className="left">
          <WbTwilightIcon className="icons" />
          <h4 onClick={Home}>SkyTracker</h4>
        </div>
        <div className="right">
          <PublicIcon className="icons" />
          <FavoriteIcon className="icons" />
          <div className="logicon">
            <AccountCircleIcon className="icons"/>
            <h4 onClick={LoginPage}>Login</h4>
          </div>
        </div>
      </div>
      <div className="main-section">
        <h3>Search flights</h3>
        <div className="sourse-destination">
          <input type="text" placeholder="From" />
          <input type="text" placeholder="To" />
        </div>
        <p>or</p>
        <div className="flight-specific">
          <input
            type="text"
            value={flight}
            onChange={(e) => setFlight(e.target.value)}
            placeholder="Flight ID"
          />
        </div>
        <button className="btn" onClick={Searchflight}>
          Find Flight
        </button>
      </div>
      {fpop ? (
        <Searched
          fid={flight}
          departure={departure}
          source={source}
          destination={destination}
          finaltime={finaltime}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Landing;
