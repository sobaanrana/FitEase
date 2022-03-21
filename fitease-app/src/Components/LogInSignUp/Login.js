import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as yup from "yup";
import CustomErrorMsg from "./CustomErrMsg";
//import axios from "axios";
import { toast } from "react-toastify";
import "./index.css";
import { authenticate, login } from "../../auth/helper";

//axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token"); //now x-auth-token is sent with every network request and server will consider logged in

const re =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .min(2, "Too Short")
    .max(50, "Too Long!")
    .required("Email Required")
    .matches(re, "Invalid Email"),

  password: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Password Required"),
  //matches(re, "Invalid Password"),
});

function Login() {
  const navigate = useNavigate();

  const onLogin = (user) => {
    const { email, password } = user;
    console.log(user);
    if (user) {
      login(user)
        .then((data) => {
          console.log("Data", data);
          if (data?.user?.email === email) {
            toast.success("LogIn Success!", {
              position: toast.POSITION.TOP_CENTER,
            });
            authenticate(data);
            navigate("/");
            window.location.reload();
          } else {
            toast.error("Error !", {
              position: toast.POSITION.TOP_LEFT,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Error !", {
            position: toast.POSITION.TOP_LEFT,
          });
        });
    }
    /*
    axios
      .post("https://usman-recipes.herokuapp.com/api/auth", { email, password })
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data);
        toast.success("Logged In !", {
          position: toast.POSITION.TOP_CENTER,
        });
        navigate("/");
        // window.location.href = "/";
        window.location.reload();
      })
      .catch((error) => {
        toast.error("Error !", {
          position: toast.POSITION.TOP_CENTER,
        });
        console.log(error);
      });*/
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) =>
        //console.log(values);
        onLogin(values)
      }
    >
      <div className="imgDiv">
        <div class="wrapper fadeInDown ">
          <div id="formContent">
            <div class="fadeIn first">
              <img
                src="https://img.icons8.com/ios/344/user-male-circle.png"
                id="icon"
                alt="User Icon"
              />
            </div>

            <Form>
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

              <button class="fadeIn fourth  linkTagBtn" type="submit">
                Log In
              </button>
            </Form>

            <div id="formFooter">
              <a class="link" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </Formik>
  );
}

export default Login;
