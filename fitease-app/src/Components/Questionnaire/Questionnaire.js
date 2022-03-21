import React, { useState } from "react";
import "./styles.css";
import classNames from "classnames";
import { Field, Form, Formik } from "formik";
import { postQuestionnaire } from "./services";

const Questionnaire = () => {
  const [showAge, setShowAge] = useState(true);
  const [showWeight, setShowWeight] = useState(false);
  const [showHeight, setShowHeight] = useState(false);
  const [count, setCount] = useState(0);
  /*
  if (count < 0) {
    setCount(0);
  } else if (count > 3) {
    setCount(2);
    setShowHeight(false);
  }*/
  console.log("Count values is", count);

  const gotoQuestion = (num) => {
    console.log("Count values after function is called", count);

    console.log("num is ", num);
    const newCount = count + num;
    setCount(newCount);
    console.log("Count values after countr is set", count);
    if (newCount == 0) {
      setShowAge(true);
      setShowWeight(false);
      setShowHeight(false);
    } else if (newCount == 1) {
      setShowAge(false);
      setShowWeight(true);
      setShowHeight(false);
    } else if (newCount == 2) {
      setShowAge(false);
      setShowWeight(false);
      setShowHeight(true);
    } else {
      setShowAge(false);
      setShowWeight(false);
      setShowHeight(false);
    }
  };

  const onSubmitQuestionnaire = (data) => {
    console.log(data);

    postQuestionnaire(data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div class="container mt-5">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-md-8">
            <div id="regForm">
              <h1 id="register">Questionnaire</h1>
              <div class="all-steps" id="all-steps">
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
                  <i class="fa fa-map-marker"></i>
                </span>
                <span
                  className={classNames(
                    "step active",
                    count === 2 ? "finish " : ""
                  )}
                >
                  <i class="fa fa-shopping-bag"></i>
                </span>
                <span class="step">
                  <i class="fa fa-car"></i>
                </span>
                <span class="step">
                  <i class="fa fa-spotify"></i>
                </span>
                <span class="step">
                  <i class="fa fa-mobile-phone"></i>
                </span>
              </div>
              <Formik
                initialValues={{ age: "", weight: "", height: "" }}
                //validationSchema={validationSchema}
                onSubmit={(values) => {
                  console.log(values);
                  onSubmitQuestionnaire(values);
                }}
              >
                {({ values }) => (
                  <Form>
                    {showAge && !showWeight && !showHeight && (
                      <div class="tab">
                        <h6>What's your Age?</h6>
                        <p>
                          <Field type="number" name="age" placeholder="Age" />
                          {/*  <CustomErrorMsg name="age" />*/}{" "}
                        </p>
                      </div>
                    )}
                    {!showAge && showWeight && !showHeight && (
                      <div class="tab">
                        <h6>What's your Weight?</h6>
                        <p>
                          <Field
                            type="number"
                            name="weight"
                            placeholder="Weight..."
                          />
                        </p>
                      </div>
                    )}
                    {!showAge && !showWeight && showHeight && (
                      <div class="tab">
                        <h6>What's your Height?</h6>
                        <p>
                          <Field
                            type="number"
                            name="height"
                            placeholder="Height..."
                          />
                        </p>
                      </div>
                    )}
                    {!showAge && !showWeight && !showHeight && (
                      <button type="submit">Submit</button>
                    )}{" "}
                  </Form>
                )}
              </Formik>

              {false && (
                <div class="thanks-message text-center" id="text-message">
                  <img
                    src="https://i.imgur.com/O18mJ1K.png"
                    width="100"
                    class="mb-4"
                  />
                  <h3>Thankyou for your feedback!</h3>
                  <span>
                    Thanks for your valuable information. It helps us to improve
                    our services!
                  </span>
                </div>
              )}
              <div className="buttons" id="nextprevious">
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
                  disabled={count === 3}
                >
                  <i class="fa fa-angle-double-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
