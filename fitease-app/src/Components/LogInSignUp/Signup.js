import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import CustomErrorMsg from './CustomErrMsg'
import { authenticate, signup } from '../../auth/helper/index'
import { toast } from 'react-toastify'
import './LogInSignUp.css'
import { AiFillEye } from 'react-icons/ai'

const re =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const validationSchema = yup.object().shape({
  first_name: yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name Required'),
  email: yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Email Required')
    .matches(re, 'Invalid Email'),

  password: yup
    .string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Password Required'),
  confirmPassword: yup
    .string()
    .when('password', {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords Does not Match'),
    })
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(''),
})

function Signup() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const onSignup = (user) => {
    //event.preventDefault();
    //const user = ;
    console.log('user', user)

    if (user) {
      const { first_name, last_name, email, password } = user // not sending confirm password to db as its for checking here just
      console.log(user)

      signup({ first_name, last_name, email, password })
        .then((data) => {
          //  console.log("Data", data); //inside evey property comes an error with guideline/error from backend
          if (data?.email === email) {
            toast.success('SignUp Success!', {
              position: toast.POSITION.TOP_CENTER,
            })
            authenticate(data)
            navigate('/user/questionnaire')
          } else {
            toast.error('Error !', {
              position: toast.POSITION.TOP_LEFT,
            })
          }
        })

        .catch((e) => {
          console.log(e)
          toast.error('Error !', {
            position: toast.POSITION.TOP_LEFT,
          })
        })
    }
  }
  return (
    <div>
      <div class='wrapper fadeInDown'>
        <div id='formContent'>
          <div class='fadeIn first'>
            <img
              src='https://img.icons8.com/ios/344/user-male-circle.png'
              id='icon'
              alt='User Icon'
            />
          </div>
          <Formik
            initialValues={{
              first_name: '',
              last_name: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              //console.log(values);
              onSignup(values)
            }}
          >
            {({ values }) => (
              <Form className='loginSignupForm'>
                <Field
                  type='text'
                  id='login'
                  class='fadeIn second'
                  name='first_name'
                  placeholder='first name'
                />
                <CustomErrorMsg name='first_name' />
                <Field
                  type='text'
                  id='login'
                  class='fadeIn second'
                  name='last_name'
                  placeholder='last name'
                />
                <CustomErrorMsg name='last_name' />

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
                  className='signup-eye-icon1 fadeIn third'
                  onClick={() => setShowPassword(!showPassword)}
                />
                <CustomErrorMsg name='password' />

                <Field
                  type={showConfirmPassword ? 'text' : 'password'}
                  id='confirmPassword'
                  class='fadeIn third'
                  name='confirmPassword'
                  placeholder='confirm password'
                />
                <AiFillEye
                  className='signup-eye-icon2 fadeIn third'
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                />
                <CustomErrorMsg name='confirmPassword' />

                <button
                  class='fadeIn fourth  linkTagBtn'
                  type='submit'
                  className='loginSignupBtn'
                >
                  Sign Up
                </button>
              </Form>
            )}
          </Formik>
          <div id='formFooter'>
            <br />
            <p className='formFooter_p'>
              If already registered ?{' '}
              <Link class='formFooter_a' to='/user/login'>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
