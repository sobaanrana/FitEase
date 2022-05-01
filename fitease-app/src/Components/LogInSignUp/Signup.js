import React from "react";
import { Formik, Form, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import CustomErrorMsg from "./CustomErrMsg";
import { signup } from "../../auth/helper/index";
import { toast } from "react-toastify";
import "./index.css";
const re =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validationSchema = yup.object().shape({
  first_name: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name Required"),
  email: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Email Required")
    .matches(re, "Invalid Email"),

  password: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Password Required"),
  confirmPassword: yup
    .string()
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords Does not Match"),
    })
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Password Required"),
});

function Signup() {
  const navigate = useNavigate();

  const onSignup = (user) => {
    //event.preventDefault();
    //const user = ;
    console.log("user", user);

    if (user) {
      const { first_name, email, password } = user;
      console.log(user);
      signup(user)
        .then((data) => {
          //  console.log("Data", data); //inside evey property comes an error with guideline/error from backend
          if (data?.email === email) {
            toast.success("SignUp Success!", {
              position: toast.POSITION.TOP_CENTER,
            });
            navigate("/user/login");
          } else {
            toast.error("Error !", {
              position: toast.POSITION.TOP_LEFT,
            });
          }
        })

        .catch((e) => {
          console.log(e);
          toast.error("Error !", {
            position: toast.POSITION.TOP_LEFT,
          });
        });
    }
  };
  return (
    <div>
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <div class="fadeIn first">
            <img
              src="https://img.icons8.com/ios/344/user-male-circle.png"
              id="icon"
              alt="User Icon"
            />
          </div>
          <Formik
            initialValues={{
              first_name: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              //console.log(values);
              onSignup(values);
            }}
          >
            {({ values }) => (
              <Form className="loginSignupForm">
                <Field
                  type="text"
                  id="login"
                  class="fadeIn second"
                  name="first_name"
                  placeholder="name"
                />
                <CustomErrorMsg name="first_name" />

                <Field
                  type="text"
                  id="login"
                  class="fadeIn second"
                  name="email"
                  placeholder="email"
                />
                <CustomErrorMsg name="email" />

                <Field
                  type="text"
                  id="password"
                  class="fadeIn third"
                  name="password"
                  placeholder="password"
                />
                <CustomErrorMsg name="password" />

                <Field
                  type="text"
                  id="confirmPassword"
                  class="fadeIn third"
                  name="confirmPassword"
                  placeholder="confirm password"
                />
                <CustomErrorMsg name="confirmPassword" />

                <button class="fadeIn fourth  linkTagBtn" type="submit">
                  Sign Up
                </button>
              </Form>
            )}
          </Formik>
          <div id="formFooter">
            <br />
            <p>If already registered ?</p>
            <Link class="formFooterLink" to="/user/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
