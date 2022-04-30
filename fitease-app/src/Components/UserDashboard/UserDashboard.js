import React, { useState } from "react";
import "./UserDashboard.css";
import { FaTransgenderAlt, FaWeight, FaStarOfLife } from "react-icons/fa";
import { GiBodyHeight, GiStairsGoal } from "react-icons/gi";
import { MdOutlineManageAccounts, MdOutlineFoodBank } from "react-icons/md";
const UserDashboard = () => {
  const [show, setShow] = useState({
    diet: true,
    exercise: false,
    account: false,
  });
  const onDiet = () => {
    setShow({ diet: true, exercise: false, account: false });
  };
  const onExercise = () => {
    setShow({ diet: false, exercise: true, account: false });
  };
  const onAccount = () => {
    setShow({ diet: false, exercise: false, account: true });
  };
  return (
    <div className="container">
      <div className="row userDashboard">
        <div className="col-lg-4 col-md-12">
          <div className="userInfo">
            <img
              alt="Image placeholder"
              src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
              width={"200px"}
            />
            <div className="userContent">
              <p id="userName">Rana Sobaan </p>
              <br />
              <br />
              <div className="userLowerContent">
                <p>
                  <span id="male">
                    {" "}
                    <FaTransgenderAlt />
                    Male
                  </span>{" "}
                  ,
                  <span id="age">
                    {" "}
                    <MdOutlineManageAccounts />
                    24 yrs
                  </span>
                </p>
                <br />
                <p>
                  <span id="height">
                    {" "}
                    <GiBodyHeight /> 5.11 feets
                  </span>
                  <span id="weight">
                    {" "}
                    <FaWeight /> 80 kgs
                  </span>
                </p>
                <br />
                <p id="veg">
                  <MdOutlineFoodBank />
                  Veg/Non veg - not specified
                </p>
                <p id="status">
                  {" "}
                  <FaStarOfLife /> Moderately Active
                </p>
                <p>
                  <GiStairsGoal />
                  Lose Weight
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="userControls">
            <div className="userControlButtons">
              <div onClick={() => onDiet()}>Diet</div>
              <div onClick={() => onExercise()}>Excercise</div>
              <div onClick={() => onAccount()}>Account Settings</div>
            </div>
            <div className="row">
              {show.diet && (
                <div className="col-lg12 col-md-12">
                  <div className="dietPrediction">THIS IS DIET PREDICTION</div>
                </div>
              )}

              {show.exercise && (
                <div className="col-lg-12 col-md-12">
                  <div className="exercisePrediction">
                    THIS IS EXERCISE PREDICTION
                  </div>
                </div>
              )}
              {show.account && (
                <div className="col-lg- 12 col-md-12">
                  <div className="accountSetting">
                    HERE IS ACCOUNT SETTIGN FORM THAT WILL PERFORM PUT METHOD TO
                    DB
                  </div>
                </div>
              )}
            </div>
            <div className="userMsg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
