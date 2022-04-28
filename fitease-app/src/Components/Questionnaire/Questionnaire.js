import React, { useEffect, useState } from "react";
import "./styles.css";
import classNames from "classnames";
import { Field, Form, Formik } from "formik";
import { getLoggedInUser, postQuestionnaire } from "./services";
import { useNavigate, useRoutes } from "react-router-dom";
import { FaTransgenderAlt, FaWeight, FaStarOfLife } from "react-icons/fa";
import { GiBodyHeight, GiStairsGoal } from "react-icons/gi";

const Questionnaire = () => {
  const [showAge, setShowAge] = useState(true);
  const [showGender, setGender] = useState(false);
  const [showWeight, setShowWeight] = useState(false);
  const [showHeight, setShowHeight] = useState(false);
  const [showLifeStyle, setShowLifeStyle] = useState(false);
  const [showGoal, setShowGoal] = useState(false);
  const [showDone, setShowDone] = useState(false);
  const [showSubmit, setShowSubmit] = useState(true);
  const [showNextPrevButtons, setShowNextPrevButtons] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  /*
  const [show, setShow ]= useState({
    showAge: false,
    showGender: false,
    showWeight: false,
    showHeight: false,
    showLifeStyle: false,
    showGoal: true,
  });// We can move forward and when we move back at any time then the current will not be set false because at e.g. we were at count = 0 amd set Age true, we go forward set age false and gender true but but when we go back to count 0, we have set age true there but gender is nto set false there so the currrent will keep showing
  */
  const [count, setCount] = useState(0);
  /*
  if (count < 0) {
    setCount(0);
  } else if (count > 3) {
    setCount(2);
    setShowHeight(false);
  }*/
  //console.log("Count values is", count);

  const gotoQuestion = (num) => {
    //console.log("Count values after function is called", count);

    //console.log("num is ", num);

    const newCount = count + num;
    setCount(newCount);
    //console.log("Count values after countr is set", count);
    if (newCount == 0) {
      setShowAge(true);
      setGender(false);
      setShowWeight(false);
      setShowHeight(false);
      setShowLifeStyle(false);
      setShowGoal(false);
    } else if (newCount == 1) {
      setShowAge(false);
      setGender(true);
      setShowWeight(false);
      setShowHeight(false);
      setShowLifeStyle(false);
      setShowGoal(false);
    } else if (newCount == 2) {
      setShowAge(false);
      setGender(false);
      setShowWeight(true);
      setShowHeight(false);
      setShowLifeStyle(false);
      setShowGoal(false);
    } else if (newCount == 3) {
      setShowAge(false);
      setGender(false);
      setShowWeight(false);
      setShowHeight(true);
      setShowLifeStyle(false);
      setShowGoal(false);
    } else if (newCount == 4) {
      setShowAge(false);
      setGender(false);
      setShowWeight(false);
      setShowHeight(false);
      setShowLifeStyle(true);
      setShowGoal(false);
    } else if (newCount == 5) {
      setShowAge(false);
      setGender(false);
      setShowWeight(false);
      setShowHeight(false);
      setShowLifeStyle(false);
      setShowGoal(true);
    } else {
      setShowAge(false);
      setGender(false);
      setShowWeight(false);
      setShowHeight(false);
      setShowLifeStyle(false);
      setShowGoal(false);
    }
  };

  const onSubmitQuestionnaire = (data) => {
    console.log(data);

    const BMI = (data.Weight / data.Height ** 2) * 10000;
    var BMR, Calorie_Count;
    // For BMR :- weight in kilos, height in cms, age in years
    if (data.Gender === "Male") {
      //Harris Benedict Formula for Men
      BMR = 66 + 13.7 * data.Weight + 5 * data.Height - 6.8 * data.Age;

      if (data.Lifestyle === "Sedentary (No or very little activity)") {
        Calorie_Count = BMR * 1.2;
      } else if (data.Lifestyle === "Lightly Active") {
        Calorie_Count = BMR * 1.375;
      } else if (data.Lifestyle === "Moderately Active") {
        Calorie_Count = BMR * 1.55;
      } else if (data.Lifestyle === "Very Active") {
        Calorie_Count = BMR * 1.725;
      } else if (data.Lifestyle === "Extra Active") {
        Calorie_Count = BMR * 1.9;
      }
    } else if (data.Gender === "Female") {
      //Harris Benedict Formula for Women –
      BMR = 655 + 9.6 * data.Weight + 1.8 * data.Height - 4.7 * data.Age;
      if (data.Lifestyle === "Sedentary (No or very little activity)") {
        Calorie_Count = BMR * 1.2;
      } else if (data.Lifestyle === "Lightly Active") {
        Calorie_Count = BMR * 1.375;
      } else if (data.Lifestyle === "Moderately Active") {
        Calorie_Count = BMR * 1.55;
      } else if (data.Lifestyle === "Very Active") {
        Calorie_Count = BMR * 1.725;
      } else if (data.Lifestyle === "Extra Active") {
        Calorie_Count = BMR * 1.9;
      }
    }
    console.log(user);
    console.log(`http://localhost:8000/api/user/${user}/`);
    data = {
      ...data,
      Name: `http://localhost:8000/api/user/${user}/`,
      BMI,
      BMR,
      Calorie_Count,
    };
    console.log(data);
    postQuestionnaire(data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const loggedInUser = () => {
    const data = JSON.parse(localStorage.getItem("loggedInUser"));
    //console.log(data?.user?.id);
    getLoggedInUser(data?.user?.id)
      .then((res) => {
        setUser(data?.user?.id); // setting user id instead of a user details that can be set and used later
        console.log("Res is ", res);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    // avoided useEffect on initial render - todo : use with useRef if Possible
    if (showDone) {
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }
    loggedInUser();
  }, [showDone]);
  return (
    <div className="imgDiv">
      <div class="container ">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-md-8">
            <div id="regForm">
              <h1 id="register">Questionnaire</h1>
              {!showDone && (
                <div class="all-steps" id="all-steps">
                  {showAge ||
                  showGender ||
                  showWeight ||
                  showHeight ||
                  showLifeStyle ||
                  showGoal ? (
                    <>
                      {" "}
                      <span
                        className={classNames(
                          "step active",
                          count === 0 ? "finish " : ""
                        )}
                      >
                        <i class="fa fa-user"></i>
                      </span>
                      <span
                        className={classNames(
                          "step active",
                          count === 1 ? "finish " : ""
                        )}
                      >
                        <FaTransgenderAlt />
                      </span>
                      <span
                        className={classNames(
                          "step active",
                          count === 2 ? "finish " : ""
                        )}
                      >
                        <FaWeight />{" "}
                      </span>
                      <span
                        className={classNames(
                          "step active",
                          count === 3 ? "finish " : ""
                        )}
                      >
                        <GiBodyHeight />{" "}
                      </span>
                      <span
                        className={classNames(
                          "step active",
                          count === 4 ? "finish " : ""
                        )}
                      >
                        <FaStarOfLife />{" "}
                      </span>
                      <span
                        className={classNames(
                          "step active",
                          count === 5 ? "finish " : ""
                        )}
                      >
                        <GiStairsGoal />{" "}
                      </span>
                    </>
                  ) : (
                    <>
                      {" "}
                      <span className="step finish">
                        <i class="fa fa-user"></i>
                      </span>
                      <span className="step finish">
                        <FaTransgenderAlt />
                      </span>
                      <span className="step finish">
                        <FaWeight />{" "}
                      </span>
                      <span className="step finish">
                        <GiBodyHeight />{" "}
                      </span>
                      <span className="step finish">
                        <FaStarOfLife />{" "}
                      </span>
                      <span className="step finish">
                        <GiStairsGoal />{" "}
                      </span>
                    </>
                  )}
                </div>
              )}

              <Formik
                initialValues={{
                  Age: "",
                  Gender: "",
                  Weight: "",
                  Height: "",
                  Lifestyle: "",
                  Goal: "",
                }}
                //validationSchema={validationSchema}
                onSubmit={(values) => {
                  setShowDone(true);
                  setShowSubmit(false);
                  setShowNextPrevButtons(false);
                  console.log("Values       :", values);
                  onSubmitQuestionnaire(values);
                }}
              >
                {({ values }) => (
                  <Form>
                    {showAge &&
                      !showGender &&
                      !showWeight &&
                      !showHeight &&
                      !showLifeStyle &&
                      !showGoal && (
                        <div class="tab">
                          <h5>What's your Age?</h5>
                          <Field
                            type="number"
                            name="Age"
                            placeholder="0"
                            className="textInp"
                          />
                          {/*  <CustomErrorMsg name="age" />*/}{" "}
                        </div>
                      )}
                    {!showAge &&
                      showGender &&
                      !showWeight &&
                      !showHeight &&
                      !showLifeStyle &&
                      !showGoal && (
                        <div class="tab">
                          <h5>What's your Gender?</h5>
                          <Field
                            name="Gender"
                            value="Male"
                            type="radio"
                            class="option-input radio"
                          />

                          <label className="lb">Male </label>
                          <br />
                          <Field
                            name="Gender"
                            value="Female"
                            type="radio"
                            class="option-input radio"
                          />

                          <label className="lb">Female </label>
                        </div>
                      )}
                    {!showAge &&
                      !showGender &&
                      showWeight &&
                      !showHeight &&
                      !showLifeStyle &&
                      !showGoal && (
                        <div class="tab">
                          <h5>What's your Weight?</h5>
                          <Field
                            type="number"
                            name="Weight"
                            placeholder="0.0"
                          />
                        </div>
                      )}
                    {!showAge &&
                      !showGender &&
                      !showWeight &&
                      showHeight &&
                      !showLifeStyle &&
                      !showGoal && (
                        <div class="tab">
                          <h5>What's your Height?</h5>
                          <Field
                            type="number"
                            name="Height"
                            placeholder="0.0"
                          />
                        </div>
                      )}
                    {!showAge &&
                      !showGender &&
                      !showWeight &&
                      !showHeight &&
                      showLifeStyle &&
                      !showGoal && (
                        <div class="tab">
                          <h5>What's your Lifestyle?</h5>
                          <Field
                            name="Lifestyle"
                            value="Sedentary (No or very little activity)"
                            type="radio"
                            class="option-input radio"
                          />
                          <label className="lb">
                            Sedentary (No or very little activity)
                          </label>

                          <br />
                          <Field
                            name="Lifestyle"
                            value="Lightly Active"
                            type="radio"
                            class="option-input radio"
                          />
                          <label className="lb">Lightly Active</label>

                          <br />
                          <Field
                            name="Lifestyle"
                            value="Moderately Active"
                            type="radio"
                            class="option-input radio"
                          />
                          <label className="lb">Moderately Active</label>

                          <br />

                          <Field
                            name="Lifestyle"
                            value="Very Active "
                            type="radio"
                            class="option-input radio"
                          />
                          <label className="lb">Very Active</label>

                          <br />
                          <Field
                            name="Lifestyle"
                            value="Extra Active"
                            type="radio"
                            class="option-input radio"
                          />
                          <label className="lb">Extra Active</label>
                        </div>
                      )}
                    {!showAge &&
                      !showGender &&
                      !showWeight &&
                      !showHeight &&
                      !showLifeStyle &&
                      showGoal && (
                        <div class="tab">
                          <h5>What's your Goal?</h5>
                          <Field
                            name="Goal"
                            value="Weight Gain"
                            type="radio"
                            class="option-input radio"
                          />

                          <label className="lb">Weight Gain</label>
                          <br />
                          <Field
                            name="Goal"
                            value="Weight Loss"
                            type="radio"
                            class="option-input radio"
                          />

                          <label className="lb">Weight Loss</label>
                        </div>
                      )}
                    {showSubmit &&
                      !showAge &&
                      !showGender &&
                      !showWeight &&
                      !showHeight &&
                      !showLifeStyle &&
                      !showGoal && (
                        <div class="btnWrapper">
                          <button type="submit">Submit</button>
                          <div class="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 268.832 268.832"
                            >
                              <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                            </svg>
                          </div>
                        </div>
                      )}
                    {showDone && !showSubmit && (
                      <div
                        class="my-5 thanks-message text-center"
                        id="text-message"
                      >
                        <img
                          src="https://i.imgur.com/O18mJ1K.png"
                          width="100"
                          class="mb-4"
                        />
                        <h3>Analyzing Data!</h3>
                      </div>
                    )}
                  </Form>
                )}
              </Formik>
              {!showDone && (
                <div
                  className={classNames(
                    "buttons",
                    count > 5 ? "endButtons " : ""
                  )}
                  id="nextprevious"
                >
                  <button
                    type="button"
                    id="prevBtn"
                    onClick={() => gotoQuestion(-1)}
                    disabled={count === 0}
                  >
                    <i class="fa fa-angle-double-left"></i>
                  </button>
                  <button
                    type="button"
                    id="nextBtn"
                    onClick={() => gotoQuestion(1)}
                    disabled={count === 6}
                  >
                    <i class="fa fa-angle-double-right"></i>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
