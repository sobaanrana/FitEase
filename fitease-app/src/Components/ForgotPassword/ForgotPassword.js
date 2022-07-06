import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import CustomErrorMsg from './CustomErrMsg'
import { checkUserExists } from './apiCalls'
import { Navigate, useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
  const [userExist, setUserExist] = useState(false)
  const navigate = useNavigate()
  const onSubmitForgotPassword = (values) => {
    checkUserExists(values)
      .then((res) => {
        console.log(res)
        setUserExist(res.user)
        if (res.user) {
          navigate('/user/reset-password')
        }
      })
      .catch((err) => console.log(err))
  }
  //console.log('userExist', userExist)
  return (
    <Formik
      initialValues={{ email: '' }}
      //validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values)
        onSubmitForgotPassword(values)
      }}
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

              <button
                class='fadeIn fourth'
                type='submit'
                className='loginSignupBtn'
              >
                Submit
              </button>
            </Form>

            <div id='formFooter'>
              <br />
            </div>
          </div>
        </div>
      </div>
    </Formik>
  )
}

export default ForgotPassword
