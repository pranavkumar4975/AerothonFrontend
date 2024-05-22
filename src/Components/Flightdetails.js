import React, { useEffect, useState } from "react";
import "./Flightdetails.css";
import { useNavigate } from "react-router-dom";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PublicIcon from "@mui/icons-material/Public";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Weatherdetails from "./Weatherdetails";
import getFormattedWeatherdata from "../Services/Weatherservices";

function Flightdetails() {
  const navigate = useNavigate();
  const [weather, setWeather] = useState(null);
  const [query, setQuery] = useState({ lat: 25.5941, lon: 85.1376 });
  const coords = [
    {
      lat: 25.5941,
      lon: 85.1376,
    },
    {
      lat: 25.2372,
      lon: 86.9746,
    },
    {
      lat: 24.7487,
      lon: 84.3807,
    },
    {
      lat: 17.4,
      lon: 19.1,
    },
    {
      lat: 17.5,
      lon: 19.1,
    },
  ];
  function Home() {
    navigate("/");
  }

  function LoginPage() {
    navigate("/login");
  }

  function getdata(lat, lon) {
    setQuery({ lat, lon });
  }

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherdata({ ...query }).then((data) => {
        setWeather(data);
        console.log(data);
      });
    };
    fetchWeather();
    console.log(weather);
  }, [query]);

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
          {coords.map((coord) => {
            return (
              <>
                <div
                  className="wps"
                  onClick={() => getdata(coord.lat, coord.lon)}
                >
                  <p>waypoint1</p>
                  <div className="lat-lon">
                    <p>lat: {coord.lat}</p>
                    <p>lon: {coord.lon}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <Weatherdetails weather={weather} />
      </div>
    </div>
  );
}

export default Flightdetails;
