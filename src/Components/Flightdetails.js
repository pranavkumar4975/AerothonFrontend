import React, { useEffect, useState } from "react";
import "./Flightdetails.css";
import { useNavigate } from "react-router-dom";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PublicIcon from "@mui/icons-material/Public";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import FlightTakeoffSharpIcon from "@mui/icons-material/FlightTakeoffSharp";
import FlightLandSharpIcon from "@mui/icons-material/FlightLandSharp";
import Weatherdetails from "./Weatherdetails";
import getFormattedWeatherdata from "../Services/Weatherservices";
import LoadingPage from "./LoadingPage";

function Flightdetails() {
  const navigate = useNavigate();
  const [weather, setWeather] = useState(null);
  const [query, setQuery] = useState({ lat: 25.5941, lon: 85.1376 });

  const [isLoading, setLoading] = useState(false);
  const [status, setStatus] = useState();
  const [actual, setActual] = useState(false);
  const [alter, setAlter] = useState(false);
  const [short, setShort] = useState(false);
  const [current, setCurrent] = useState(true);
  const [topic, setTopic] = useState("Current Location");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 100);

    const errorTimer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => {
      clearTimeout(timer);
      clearTimeout(errorTimer);
    };
  }, [query, actual, alter]);

  const coords = [
    {
      id: 1,
      lat: 25.5941,
      lon: 85.1376,
      status: 1,
    },
    {
      id: 2,
      lat: 25.2372,
      lon: 86.9746,
      status: 1,
    },
    {
      id: 3,
      lat: 24.7487,
      lon: 84.3807,
      status: 1,
    },
    {
      id: 4,
      lat: 17.4,
      lon: 19.1,
      status: 1,
    },
    {
      id: 5,
      lat: 17.5,
      lon: 19.1,
      status: 1,
    },
  ];
  function Home() {
    navigate("/");
  }

  function LoginPage() {
    navigate("/login");
  }

  function getdata(lat, lon, status) {
    setQuery({ lat, lon });
    setStatus(status);
  }

  function Alternate() {
    setActual(false);
    if (alter) {
      setAlter(false);
      setCurrent(true);
    } else {
      setAlter(true);
      setCurrent(false);
    }
    setLoading(true);

    if (short) setShort(false);
    else setShort(true);
  }

  function Actual() {
    setAlter(false);
    if (actual) {
      setActual(false);
      setCurrent(true);
    } else {
      setActual(true);
      setCurrent(false);
    }
    setLoading(true);
    setShort(false);
  }

  function Shortest() {}

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
        <h3>Flight details</h3>
        <div className="flight-detail">
          <h4>Flight id: 12345</h4>
          <div className="points">
            <div className="point">
              <p>Source: </p>
              <div className="lat-lon">
                <p>lat: 25.5941</p>
                <p>lon: 85.1376</p>
              </div>
            </div>
            <FlightTakeoffSharpIcon
              fontSize="large"
              style={{ color: "green" }}
              className="arrow-icons"
              id="scroll-text"
            />
            <div className="point">
              <p>Current Location: </p>
              <div className="lat-lon">
                <p>lat: 25.3176</p>
                <p>lon: 82.9739</p>
              </div>
            </div>
            <FlightLandSharpIcon
              fontSize="large"
              style={{ color: "green" }}
              className="arrow-icons"
              id="scroll-text"
            />
            <div className="point">
              <p>Destination: </p>
              <div className="lat-lon">
                <p>lat: 28.7041</p>
                <p>lon: 77.1025</p>
              </div>
            </div>
          </div>
        </div>

        <div className="buttons">
          <button className="btns" onClick={Actual}>
            actual
          </button>
          <button className="btns" onClick={Alternate}>
            Alternate
          </button>
          {short && (
            <button className="btns" onClick={Shortest}>
              Shortest Path
            </button>
          )}
        </div>
        {current && (
          <>
            {isLoading ? (
              <LoadingPage className="loading" />
            ) : (
              <Weatherdetails
                weather={weather}
                status={status}
                topic={topic}
                className="weather-details"
              />
            )}
          </>
        )}

        {actual && (
          <>
            <div className="waypoints">
              <h4 color="black">Actual route</h4>
              <div className="boxes">
                {coords.map((coord) => {
                  return (
                    <>
                      <div
                        className="wps"
                        onClick={() => {
                          getdata(coord.lat, coord.lon, coord.status);
                        }}
                      >
                        <img src="plane2.jpg" alt="" />
                        <div className="lat-lon">
                          <p>lat: {coord.lat}</p>
                          <p>lon: {coord.lon}</p>
                        </div>
                      </div>
                      {coord.id !== 5 ? (
                        <ArrowForwardSharpIcon
                          fontSize="large"
                          style={{ color: "red" }}
                          className="arrow-icons"
                          id="scroll-text"
                        />
                      ) : (
                        ""
                      )}
                    </>
                  );
                })}
              </div>
            </div>
            {isLoading ? (
              <LoadingPage className="loading" />
            ) : (
              <Weatherdetails
                weather={weather}
                status={status}
                topic={topic}
                className="weather-details"
              />
            )}
          </>
        )}
        {alter && (
          <>
            <div className="waypoints">
              <h4 color="black">Alternate route </h4>
              <div className="boxes">
                {coords.map((coord) => {
                  return (
                    <>
                      <div
                        className="wps"
                        onClick={() => getdata(coord.lat, coord.lon)}
                      >
                        <img src="plane2.jpg" alt="" />
                        <div className="lat-lon">
                          <p>lat: {coord.lat}</p>
                          <p>lon: {coord.lon}</p>
                        </div>
                      </div>
                      {coord.id !== 5 ? (
                        <ArrowForwardSharpIcon
                          fontSize="large"
                          style={{ color: "blue" }}
                          className="arrow-icons"
                          id="scroll-text"
                        />
                      ) : (
                        ""
                      )}
                    </>
                  );
                })}
              </div>
            </div>{" "}
            {isLoading ? (
              <LoadingPage className="loading" />
            ) : (
              <Weatherdetails
                weather={weather}
                status={status}
                topic={topic}
                className="weather-details"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Flightdetails;
