import React from "react";
import { useNavigate } from "react-router-dom";
import imgL from "./workout-bars-at-park.jpg";
import "./Landing.css";

function Landing() {
  const navigate = useNavigate();
  return (
    <div className="LandingBG">
      {/* <img src={picture} style={{ maxWidth: "100%", height: "auto" }} />*/}

      <button className="LandingButton" onClick={() => navigate("/user/login")}>
        GET STARTED
      </button>
    </div>
  );
}

export default Landing;
