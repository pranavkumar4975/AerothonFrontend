import React from "react";
import ConnectingAirportsOutlinedIcon from "@mui/icons-material/ConnectingAirportsOutlined";
import { useNavigate } from "react-router-dom";
import "./Searched.css";

function Searched({ fid, departure, source, finaltime, destination }) {
  const navigate = useNavigate();

  function Flightdetails() {
    navigate("/flightdetails");
  }

  return (
    <div className="searched" onClick={Flightdetails}>
      <h3>Flight id: {fid}</h3>
      <div className="details">
        <div className="sc">
          <p>{departure}</p>
          <p>From: {source}</p>
        </div>
        <ConnectingAirportsOutlinedIcon />
        <div className="dest">
          <p>{finaltime}</p>
          <p>To: {destination}</p>
        </div>
      </div>
    </div>
  );
}

export default Searched;
