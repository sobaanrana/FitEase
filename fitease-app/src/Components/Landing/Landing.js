import React from "react";
import { useNavigate } from "react-router-dom";
import imgL from "./workout-bars-at-park.jpg";
import "./Landing.css";
import Carousel from "../Carousel/Carousel";
import Features from "../Features/Features";
import About from "../About/About";

function Landing() {
  const navigate = useNavigate();
  return (
    <div className="">
      {/* <img src={picture} style={{ maxWidth: "100%", height: "auto" }} />*/}
      <Carousel />
      <div className="textDiv">
        <p id="ins">Be an Inspiration</p>
        <h2 id="mainheading"> Exercise Your Mind and Body</h2>
        <p id="landpara">
          If you’ve ever experienced “barre shake” while plié-ing or trembled
          during a plank, you might have wondered what makes your muscles
          occasionally feel shaky when you’re working out.
        </p>
      </div>
      <div className="getStartedDiv">
        <button
          className="LandingButton"
          onClick={() => navigate("/user/signup")}
        >
          GET STARTED <span>&#8594;</span>
        </button>
      </div>
      <About />
      <Features />
    </div>
  );
}

export default Landing;
