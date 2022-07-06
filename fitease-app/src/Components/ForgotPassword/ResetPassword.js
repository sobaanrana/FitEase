import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import CustomErrorMsg from './CustomErrMsg'
import { updateUser } from './apiCalls'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
//import './LogInSignUp.css'
import { AiFillEye } from 'react-icons/ai'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
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

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem('loggedInUser'))
  )
  const onSubmitResetPassword = (newData) => {
    console.log('newData', newData)
    if (userData.user.id) {
      newData.email = userData?.user.email
      updateUser(userData.user.id, newData)
        .then((res) => {
          console.log('Updated user', res)
          toast.success('Password Reset!', {
            position: toast.POSITION.TOP_CENTER,
          })
        })
        .catch((err) => {
          console.log(err)
          toast.error('Error !', {
            position: toast.POSITION.TOP_LEFT,
          })
        })
    }
  }
  return (
    <Formik
      initialValues={{
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values)
        onSubmitResetPassword(values)
      }}
    >
      {({ values }) => (
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
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  name='password'
                  placeholder='password'
                  value={values.password}
                  className='password-input'
                  //onChange={handleChange}
                />
                <AiFillEye
                  className='settings-eye-icon'
                  onClick={() => setShowPassword(!showPassword)}
                />
                <CustomErrorMsg name='password' />
                <Field
                  type='password'
                  id='confirmPassword'
                  name='confirmPassword'
                  placeholder='confirm password'
                  value={values.confirmPassword}
                  //onChange={handleChange}
                />
                <CustomErrorMsg name='confirmPassword' />
                <button
                  class='fadeIn fourth'
                  type='submit'
                  className='loginSignupBtn'
                >
                  Reset
                </button>
              </Form>

              <div id='formFooter'>
                <br />
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  )
}

export default ResetPassword
