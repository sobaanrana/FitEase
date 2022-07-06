import React, { useEffect } from 'react'
import HeaderBanner from '../HeaderBanner/HeaderBanner'
import { Field, Form, Formik } from 'formik'
import CustomErrorMsg from './CustomErrMsg'
import * as yup from 'yup'
import './WriteSuccessStory.css'
import { postSuccessStory } from './apiCalls'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const validationSchema = yup.object().shape({
  title: yup.string().min(2, 'Too Short!').max(200, 'Too Long!'),

  description: yup.string().min(10, 'Too Short!').max(3000, 'Too Long!'),
})
const WriteSuccessStory = ({ displayBanner }) => {
  const navigate = useNavigate()

  const onStorySubmit = (values) => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'))
    const data = values
    data.author = user.user.first_name + ' ' + user.user.last_name
    data.email = user.user.email
    console.log('values', data)

    postSuccessStory(data)
      .then((res) => {
        console.log(res)
        toast.success('Success Story Published!', {
          position: toast.POSITION.TOP_CENTER,
        })
        navigate('/success-stories')
      })
      .catch((err) => {
        console.log(err)
        toast.error('Error!', {
          position: toast.POSITION.TOP_CENTER,
        })
      })
  }

  useEffect(() => {
    if (localStorage.getItem('loggedInUser') === null) {
      navigate('/user/login')
    }
  }, [])

  return (
    <div>
      {displayBanner && (
        <HeaderBanner
          title={'Success Story'}
          headline={'Write your success story here :)'}
          displayType={'block'}
        />
      )}
      <div className='successStory-wrapper'>
        <Formik
          initialValues={{
            title: '',
            description: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values)
            onStorySubmit(values)
          }}
        >
          {({ values }) => (
            <Form className='story-form'>
              <Field
                type='text'
                name='title'
                placeholder="Your Story's Title"
                value={values.title}
                className='form-control'
              />
              <CustomErrorMsg name='title' />
              <Field
                type='text'
                as='textarea'
                name='description'
                placeholder='Write Your Strong Here.....'
                value={values.description}
                className='form-control'
              />
              <CustomErrorMsg name='description' />
              <button type='submit' className='btn btn-success btn-sm '>
                Publish
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default WriteSuccessStory
