import React, { useState } from "react";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PublicIcon from "@mui/icons-material/Public";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Landing.css";
import { useLocation, useNavigate } from "react-router-dom";
import Searched from "./Searched";
import { getFlight } from "../Services/FlightServices";

function Landing() {
  const navigate = useNavigate();
  const location = useLocation();
  const name = location.state?.name;
  let [flight, setFlight] = useState("12345");
  let [fpop, setFpop] = useState(false);
  let [source, setSource] = useState("Patna");
  let [destination, setDestination] = useState("Delhi");
  let [current, setCurrent] = useState("Varanasi");
  let [departure, setDeparture] = useState("13:25");
  let [finaltime, setFinaltime] = useState("19:46");
  const [login, setLogin] = useState("Login");

  console.log(name);

  const LoginPage = () => {
    navigate("/login");
  };

  const Home = () => {
    navigate("/");
  };

  const Searchflight = async () => {
    const Payload = {
      id: flight,
    };

    try {
      // const flightData = await getFlight(Payload);
      // console.log(flightData);
      // setSource(flightData?.source);
      // setDestination(flightData?.destination);
      // setCurrent(flightData?.lastlocation);
    } catch (error) {
      console.error("Error Fetching Flight", error);
      alert("Error Fetching Flight", error);
    }

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
            <AccountCircleIcon className="icons" />
            <h4 onClick={LoginPage}>{name ? name : "Login"}</h4>
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
          name={name}
          fid={flight}
          departure={departure}
          source={source}
          lastlocation={current}
          finaltime={finaltime}
          destination={destination}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Landing;
