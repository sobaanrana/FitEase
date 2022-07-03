import React from 'react'
import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDribbble,
  faFacebookF,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { Field, Form, Formik } from 'formik'
import { postContact } from './apiCalls'

function Footer() {
  const onSubmitContact = (values) => {
    postContact(values)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  return (
    <footer class='site-footer'>
      <div class='footerDiv'>
        <div class=' footerPara '>
          <h6>About</h6>
          <p class='text-justify'>
            FitEase.com <i> an FYP Project </i> is an initiative to introduce
            people around the globe with healthy lifestyfa. This web based
            application recommends customized diet and exercise plan to its user
            on the basis of their input parameters.
          </p>
        </div>
        <div class='footerLinks  '>
          <h6 className='d-flex justify-content-center'>Quick Links</h6>
          <ul class='footer-links '>
            <li className='d-flex justify-content-center'>
              <a href=''>Home</a>
            </li>
            <li className='d-flex justify-content-center'>
              <a href=''>About</a>
            </li>
            <li className='d-flex justify-content-center'>
              <a href=''>Features </a>
            </li>

            <li className='d-flex justify-content-center'>
              <a href=''>Contact</a>
            </li>
          </ul>
        </div>
        <div className='FooterForm'>
          <Formik
            initialValues={{
              email: '',
              message: '',
            }}
            onSubmit={(values) => {
              onSubmitContact(values)
            }}
          >
            {({ values }) => (
              <Form className=' form-group mx-2  '>
                <Field
                  className='form-control my-2 px-5'
                  type='email'
                  name='email'
                  placeholder='name@email.com'
                  value={values.email}
                />
                <Field
                  as='textarea'
                  className='form-control px-5 '
                  type='text'
                  name='message'
                  placeholder='Message'
                  value={values.message}
                />
                <button
                  className='btn btn-success my-3 footerFormBtn '
                  type='submit'
                  onClick={() => console.log('button from footer clicked ')}
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <hr />
      <div>
        <div class='row lowerFooter'>
          <div class='CopyrightText'>
            <p class='copyright-text'>
              Copyright &copy; 2022 All Rights Reserved by <spn> </spn>
              <a href='/'> FitEase</a>.
            </p>
          </div>

          <div class='socials'>
            <ul class='social-icons'>
              <li>
                <a class='facebook' href='#'>
                  <FontAwesomeIcon icon={faFacebookF} className='fa' />
                </a>
              </li>
              <li>
                <a class='twitter' href='#'>
                  <FontAwesomeIcon icon={faTwitter} className='fa' />
                </a>
              </li>
              <li>
                <a class='dribbble' href='#'>
                  <FontAwesomeIcon icon={faDribbble} className='fa' />
                </a>
              </li>
              <li>
                <a class='linkedin' href='#'>
                  <FontAwesomeIcon icon={faLinkedin} className='fa' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
