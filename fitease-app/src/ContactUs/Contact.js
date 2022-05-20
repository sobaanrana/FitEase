import React from 'react'
import HeaderBanner from '../Components/HeaderBanner/HeaderBanner'
import './Contact.css'
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

            <form className='formcontact'>
              {/*onSubmit={sendEmail} */}
              <input
                type='text'
                className='form-control'
                name='user_name'
                placeholder='Your Name'
                required
              />
              <input
                type='email'
                className='form-control'
                name='user_email'
                placeholder='Your Email'
                required
              />
              <input
                type='text'
                className='form-control'
                name='user_phone'
                placeholder='Your Phone'
                required
              />
              <textarea
                name='message'
                className='form-control'
                placeholder='Your Message'
                required
              />

              <button type='button ' class='btn btn-success btn-sm '>
                Submit
              </button>
            </form>
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
