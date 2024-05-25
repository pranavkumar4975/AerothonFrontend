import React, { useEffect, useState } from "react";
import "./Flightdetails.css";
import { useLocation, useNavigate } from "react-router-dom";
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
import { getFlightPath, getNewFlightPath } from "../Services/FlightServices";
import e from "cors";

function Flightdetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const fid = location.state?.id;
  const name = location.state?.name;
  const currentlocation = location.state?.current;
  console.log(fid);
  const [weather, setWeather] = useState(null);
  const [query, setQuery] = useState({ q: currentlocation });

  const [isLoading, setLoading] = useState(false);
  const [status, setStatus] = useState();
  const [actual, setActual] = useState(false);
  const [alter, setAlter] = useState(false);
  const [short, setShort] = useState(false);
  const [spop, setSpop] = useState(false);
  const [current, setCurrent] = useState(true);
  const [topic, setTopic] = useState("Current Location");
  const [path, setPath] = useState([]);
  const [newPath, setNewPath] = useState([]);

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

  const Alternate = async () => {
    try {
      // const newflightPath = await getNewFlightPath(fid);
      // console.log(newflightPath);
      // setNewPath(newflightPath);
    } catch (error) {
      console.error("Error Fetching new Path", error);
    }

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

    setSpop(false);
  };

  const Actual = async () => {
    try {
      // const flightPath = await getFlightPath(fid);
      // console.log(flightPath);
      // setPath(flightPath);
    } catch (error) {
      console.error("Error Fetching actual path", error);
    }

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
    setSpop(false);
  };

  function Shortest() {
    setAlter(false);
    setSpop(true);
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
            <h4 onClick={LoginPage}>{name ? name : "Login"}</h4>
          </div>
        </div>
      </div>
      <div className="main-body">
        <h3>Flight details</h3>
        <div className="flight-detail">
          <h4>Flight id: {location.state?.id}</h4>
          <div className="points">
            <div className="point">
              <p>Source: {location.state?.source} </p>
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
              <p>Current Location: {location.state?.current} </p>
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
              <p>Destination: {location.state?.destination}</p>
              <div className="lat-lon">
                <p>lat: 28.7041</p>
                <p>lon: 77.1025</p>
              </div>
            </div>
          </div>
        </div>

        <div className="buttons">
          <button className="btns" onClick={Actual}>
            Actual
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

        {spop && (
          <>
            <div className="waypoints">
              <h4 color="black">Shortest Alternate Route</h4>
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
