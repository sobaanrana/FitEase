import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import CustomErrorMsg from './CustomErrMsg'
//import axios from "axios";
import { toast } from 'react-toastify'
import './LogInSignUp.css'
import { authenticate, login } from '../../auth/helper'
import { AiFillEye } from 'react-icons/ai'

//axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token"); //now x-auth-token is sent with every network request and server will consider logged in

const re =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .min(2, 'Too Short')
    .max(50, 'Too Long!')
    .required('Email Required')
    .matches(re, 'Invalid Email'),

  password: yup
    .string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Password Required'),
  //matches(re, "Invalid Password"),
})

function Login() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const onLogin = (user) => {
    const { email, password } = user
    console.log(user)
    if (user) {
      login(user)
        .then((data) => {
          console.log('Data', data)
          if (data?.user?.email === email) {
            toast.success('LogIn Success!', {
              position: toast.POSITION.TOP_CENTER,
            })
            authenticate(data)
            navigate('/user/dashboard')
            window.location.reload()
          } else {
            toast.error('Error !', {
              position: toast.POSITION.TOP_LEFT,
            })
          }
        })
        .catch((err) => {
          console.log(err)
          toast.error('Error !', {
            position: toast.POSITION.TOP_LEFT,
          })
        })
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
  }
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) =>
        //console.log(values);
        onLogin(values)
      }
    >
      <div>
        <div class='wrapper fadeInDown '>
          <div id='formContent'>
            <div class='fadeIn first'>
              <img
                src='https://img.icons8.com/ios/344/user-male-circle.png'
                id='icon'
                alt='User Icon'
              />
            </div>

            <Form className='loginSignupForm'>
              <Field
                type='text'
                id='login'
                class='fadeIn second'
                name='email'
                placeholder='email'
              />
              <CustomErrorMsg name='email' />
              <Field
                type={showPassword ? 'text' : 'password'}
                id='password'
                class='fadeIn third'
                name='password'
                placeholder='password'
              />
              <AiFillEye
                className='login-eye-icon fadeIn third'
                onClick={() => setShowPassword(!showPassword)}
              />
              <CustomErrorMsg name='password' />
              <button
                class='fadeIn fourth'
                type='submit'
                className='loginSignupBtn'
              >
                Log In
              </button>
            </Form>

            <div id='formFooter'>
              <br />

              <a class='formFooter_a' href='#'>
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </Formik>
  )
}

export default Login
