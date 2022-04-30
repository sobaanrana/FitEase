import React from "react";
import "./About.css";
import { RiMentalHealthFill, RiRestaurant2Line } from "react-icons/ri";
import { FaWalking } from "react-icons/fa";
import { BiLoader } from "react-icons/bi";

const About = () => {
  return (
    <div class="container">
      <div class="row about">
        <div class="col-md-12 col-lg-6">
          <div class="description_img">
            <img src="./workout-bars-at-park.jpg" width={"100%"} alt="images" />
          </div>
        </div>
        <div class="col-md-12 col-lg-6">
          <div class="list_description ">
            <div class="section_title">
              <h4 class="title ">EVERY THING IS POSSIBLE WITH US</h4>
              <p>
                Penatibus amet mus consequat nonummy volutpat pede mollis nec
                conubia ut. Enim nascetur tristique in hymenaeos neque
                adipiscing dictum.
              </p>
            </div>
            <ul>
              <li>
                <div class="hexagon ">
                  <RiMentalHealthFill className="iconAbout" />
                </div>
                <div class="list_item d-table">
                  <h5 class="">Build Perfect Body</h5>
                  <p>
                    Nisi sociosqu elit porta viverra orci, porta class pulvinar
                    pharetra auctor Sociis, enim. Gravida habitant integer
                    blandit lacus.
                  </p>
                </div>
              </li>
              <li>
                <div class="hexagon ">
                  <FaWalking className="iconAbout" />
                </div>
                <div class="list_item d-table">
                  <h5 class="">Only Work Programs</h5>
                  <p>
                    Nisi sociosqu elit porta viverra orci, porta class pulvinar
                    pharetra auctor Sociis, enim. Gravida habitant integer
                    blandit lacus.
                  </p>
                </div>
              </li>
              <li>
                <div class="hexagon ">
                  <RiRestaurant2Line className="iconAbout" />{" "}
                </div>
                <div class="list_item d-table">
                  <h5 class="">Qualified Trainers</h5>
                  <p>
                    Nisi sociosqu elit porta viverra orci, porta class pulvinar
                    pharetra auctor Sociis, enim. Gravida habitant integer
                    blandit lacus.
                  </p>
                </div>
              </li>
              <li>
                <div class="hexagon ">
                  <BiLoader className="iconAbout" />{" "}
                </div>
                <div class="list_item d-table">
                  <h5 class="">Free 7 days trail</h5>
                  <p>
                    Nisi sociosqu elit porta viverra orci, porta class pulvinar
                    pharetra auctor Sociis, enim. Gravida habitant integer
                    blandit lacus.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
