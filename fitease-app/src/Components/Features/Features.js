import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import "./Features.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDribbble,
  faFacebookF,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

const Features = () => (
  <div className="imgDiv">
    <div className="container">
      <h2 className="heading">Features</h2>
      <div className="row ">
        <div className="col-lg-4 col-md-6 mb-3 ">
          <div className="feature-box f-boxed style-3">
            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={0}
              duration={600}
              triggerOnce
            >
              {/*    <FontAwesomeIcon
            icon={faFacebookF}
            className="bg-color-2 i-boxed icon_wallet"
          />

<i></i>*/}
            </Reveal>
            <div className="text">
              <Reveal
                className="onStep"
                keyframes={fadeInUp}
                delay={100}
                duration={600}
                triggerOnce
              >
                <h4>User Account</h4>
              </Reveal>
              <Reveal
                className="onStep"
                keyframes={fadeInUp}
                delay={200}
                duration={600}
                triggerOnce
              >
                <p>
                  User can regtister an acoount and will encounter a
                  questionnaire form to provide his/her relevant input
                  parameters.
                </p>
              </Reveal>
            </div>
            {/*<i className="wm icon_wallet"></i> */}
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-3">
          <div className="feature-box f-boxed style-3">
            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={0}
              duration={600}
              triggerOnce
            ></Reveal>
            <div className="text">
              <Reveal
                className="onStep"
                keyframes={fadeInUp}
                delay={100}
                duration={600}
                triggerOnce
              >
                <h4>Diet and Exercise</h4>
              </Reveal>
              <Reveal
                className="onStep"
                keyframes={fadeInUp}
                delay={200}
                duration={600}
                triggerOnce
              >
                <p>
                  The user's input parameters are sued to recommend customized
                  diet and exercise plan, which can be implemented easily.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-3">
          <div className="feature-box f-boxed style-3">
            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={0}
              duration={600}
              triggerOnce
            ></Reveal>
            <div className="text">
              <Reveal
                className="onStep"
                keyframes={fadeInUp}
                delay={100}
                duration={600}
                triggerOnce
              >
                <h4>Machine Learning</h4>
              </Reveal>
              <Reveal
                className="onStep"
                keyframes={fadeInUp}
                delay={200}
                duration={600}
                triggerOnce
              >
                <p>
                  Authentic and relevant supervised and unsupervside machine
                  Learning algorithms are used for recommending and predictions.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-3">
          <div className="feature-box f-boxed style-3">
            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={0}
              duration={600}
              triggerOnce
            ></Reveal>
            <div className="text">
              <Reveal
                className="onStep"
                keyframes={fadeInUp}
                delay={100}
                duration={600}
                triggerOnce
              >
                <h4>Machine Learning</h4>
              </Reveal>
              <Reveal
                className="onStep"
                keyframes={fadeInUp}
                delay={200}
                duration={600}
                triggerOnce
              >
                <p>
                  Authentic and relevant supervised and unsupervside machine
                  Learning algorithms are used for recommending and predictions.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-3">
          <div className="feature-box f-boxed style-3">
            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={0}
              duration={600}
              triggerOnce
            ></Reveal>
            <div className="text">
              <Reveal
                className="onStep"
                keyframes={fadeInUp}
                delay={100}
                duration={600}
                triggerOnce
              >
                <h4>Machine Learning</h4>
              </Reveal>
              <Reveal
                className="onStep"
                keyframes={fadeInUp}
                delay={200}
                duration={600}
                triggerOnce
              >
                <p>
                  Authentic and relevant supervised and unsupervside machine
                  Learning algorithms are used for recommending and predictions.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-3">
          <div className="feature-box f-boxed style-3">
            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={0}
              duration={600}
              triggerOnce
            ></Reveal>
            <div className="text">
              <Reveal
                className="onStep"
                keyframes={fadeInUp}
                delay={100}
                duration={600}
                triggerOnce
              >
                <h4>Machine Learning</h4>
              </Reveal>
              <Reveal
                className="onStep"
                keyframes={fadeInUp}
                delay={200}
                duration={600}
                triggerOnce
              >
                <p>
                  Authentic and relevant supervised and unsupervside machine
                  Learning algorithms are used for recommending and predictions.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Features;

/*
          <i className=" bg-color-2 i-boxed icon_cloud-upload_alt"></i>
                  <i className="wm icon_cloud-upload_alt"></i>
                            <i className=" bg-color-2 i-boxed icon_tags_alt"></i>
                                    <i className="wm icon_tags_alt"></i>




*/
