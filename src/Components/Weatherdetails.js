import React, { useEffect, useState } from "react";
import "./Weatherdetails.css";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
} from "@iconscout/react-unicons";
import CompressOutlinedIcon from "@mui/icons-material/CompressOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { iconUrlFromCode } from "../Services/Weatherservices";

function Weatherdetails({ weather }) {
  return (
    <div className="weatherdetails">
      <h2>Weather Details</h2>
      <div className="coords">
        <p>lat: {weather?.lat}</p>
        <p>lon: {weather?.lon}</p>
        <p>
          {weather?.name}, {weather?.country}
        </p>
      </div>

      <div className="weatherdata">
        <div className="deatil">
          <img src={iconUrlFromCode(weather?.icon)} alt="" />
          <p>{weather?.details}</p>
        </div>
        <div className="temps">
          <div className="icon-data">
            <UilTemperature />
            <p>temp: {weather?.temp?.toFixed() - 273}°C</p>
          </div>
          <div className="icon-data">
            <UilTemperature />
            <p>feels like: {weather?.feels_like?.toFixed() - 273}°C</p>
          </div>
        </div>
        <div className="other-details">
          <div className="icon-data">
            <UilTear />
            <p>humidity: {weather?.humidity}%</p>
          </div>
          <div className="icon-data">
            <UilWind />
            <p>Wind: {weather?.speed} km/h</p>
          </div>
          <div className="icon-data">
            <CompressOutlinedIcon />
            <p>Pressure: {weather?.pressure} P</p>
          </div>
          <div className="icon-data">
            <VisibilityOutlinedIcon />
            <p>Visibility: {weather?.visibility}</p>
          </div>
        </div>
      </div>
      <div className="other-details"></div>
      <div className="status">
        <p>status: ideal</p>
      </div>
    </div>
  );
}

export default Weatherdetails;
