import React from 'react'
import HeaderBanner from '../HeaderBanner/HeaderBanner'
import './Contact.css'
import { Field, Form, Formik } from 'formik'
import CustomErrorMsg from './CustomErrMsg'
import * as yup from 'yup'
import { postContact } from './apiCalls'

//import emailjs from "emailjs-com";
//import Footer from "../components/footer";
//import { createGlobalStyle } from "styled-components";
/*
const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    background: #403f83;
    border-bottom: solid 1px #403f83;
  }
  header#myHeader.navbar .search #quick_search{
    color: #fff;
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    color: #fff;
  }
  header#myHeader .dropdown-toggle::after{
    color: rgba(255, 255, 255, .5);
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }
`;
*/

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
    .required('Email Required'),
})
const Contact = function ({ displayBanner }) {
  /* function sendEmail(e) {
    const success = document.getElementById("success");
    const button = document.getElementById("buttonsent");
    const failed = document.getElementById("failed");
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_csfdEZiA",
        e.target,
        "user_zu7p2b3lDibMCDutH5hif"
      )
      .then(
        (result) => {
          console.log(result.text);
          success.classList.add("show");
          button.classList.add("show");
          failed.classList.remove("show");
        },
        (error) => {
          console.log(error.text);
          failed.classList.add("show");
        }
      );
  }
*/

  const onContactSubmit = (values) => {
    values = { ...values, phone: parseInt(values.phone) }
    postContact(values)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => console.log(error))
  }
  return (
    <div>
      {/*<GlobalStyles />*/}
      {displayBanner && (
        <HeaderBanner
          title={'Contact'}
          headline={'We are just a message away for your help. :)'}
          displayType={'block'}
        />
      )}

      <div className='container '>
        <div className='contactDiv'>
          <div className='formSide '>
            <h3 className='contactHeading'>Do you have any question?</h3>

            <Formik
              enableReinitialize={true}
              initialValues={{
                name: '',
                email: '',
                phone: '',
                message: '',
              }}
              // validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log(values)
                onContactSubmit(values)
              }}
            >
              {({ values }) => (
                <Form className='formcontact'>
                  <Field
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={values.name}
                    className='form-control'
                  />
                  <CustomErrorMsg name='name' />

                  <Field
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={values.email}
                    className='form-control'
                  />
                  <CustomErrorMsg name='email' />

                  <Field
                    type='text'
                    name='phone'
                    placeholder='Phone Number'
                    value={values.phone}
                    className='form-control'
                  />
                  <CustomErrorMsg name='phone' />

                  <Field
                    as='textarea'
                    type='text'
                    name='message'
                    placeholder='Type Your Message'
                    value={values.message}
                    className='form-control'
                  />
                  <CustomErrorMsg name='message' />

                  <button type='submit' className='btn btn-success btn-sm '>
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>

          <div className='addressBox '>
            <h3>Pakistan Office</h3>
            <div className='contactInfo'>
              <span>
                <i className='id-color fa fa-map-marker fa-lg'></i>
                COMSATS, Lahore, Pakistan
              </span>
              <span>
                <i className='id-color fa fa-phone fa-lg'></i>(042) 111 001 007
              </span>
              <span>
                <i className='id-color fa fa-envelope-o fa-lg'></i>
                contact@cuilahore.edu.pk
              </span>
              <span>
                <i className='id-color fa fa-file-pdf-o fa-lg'></i>
                Download Brochure
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact
