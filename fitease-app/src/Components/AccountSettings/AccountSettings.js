import React, { useEffect, useState } from 'react'
import HeaderBanner from '../HeaderBanner/HeaderBanner'
import { Field, Form, Formik } from 'formik'
import CustomErrorMsg from './CustomErrMsg'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import './AccountSettings.css'
import { getLoggedInUser, updateUser } from './apiCalls'

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
})

const AccountSettings = () => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem('loggedInUser'))
  )
  const onUserAccountUpdate = (newData) => {
    console.log(userData.user.id, newData)

    if (userData.user.id) {
      updateUser(userData.user.id, newData)
        .then((res) => {
          console.log('Updated user', res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  console.log('user: ', userData)
  useEffect(() => {}, [])
  return (
    <>
      <HeaderBanner
        title={'Account Settings'}
        headline={'Here you can change your account settings'}
        displayType={'block'}
      />
      <div className='account-settings'>
        <div className='account-form'>
          <div>
            <Formik
              enableReinitialize={true}
              initialValues={{
                first_name: userData?.user.first_name,
                last_name: userData?.user.last_name,
                email: userData?.user.email,
                password: userData?.user.pass,
                confirmPassword: userData?.user.pass,
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log(values)
                onUserAccountUpdate(values)
              }}
            >
              {({ values, handleChange }) => (
                <Form>
                  <Field
                    type='text'
                    id='login'
                    name='first_name'
                    placeholder='first name'
                    value={values.first_name}
                    onChange={handleChange}
                  />
                  <CustomErrorMsg name='first_name' />
                  <Field
                    type='text'
                    id='login'
                    name='last_name'
                    placeholder='last name'
                    value={values.last_name}
                    onChange={handleChange}
                  />
                  <CustomErrorMsg name='last_name' />

                  <Field
                    type='text'
                    id='login'
                    name='email'
                    placeholder='email'
                    value={values.email}
                    onChange={handleChange}
                  />
                  <CustomErrorMsg name='email' />
                  <Field
                    type='password'
                    id='password'
                    name='password'
                    placeholder='password'
                    value={values.password}
                    onChange={handleChange}
                  />
                  <CustomErrorMsg name='password' />
                  <Field
                    type='password'
                    id='confirmPassword'
                    name='confirmPassword'
                    placeholder='confirm password'
                    value={values.confirmPassword}
                    onChange={handleChange}
                  />
                  <CustomErrorMsg name='confirmPassword' />
                  <button type='submit'>Update</button>
                </Form>
              )}
            </Formik>
          </div>

          <div>
            <br />

            <a class='formFooter_a' href='#'>
              Login?
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default AccountSettings
