import React from 'react'
import Reveal from 'react-awesome-reveal'
import { keyframes } from '@emotion/react'
import './Features.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDribbble,
  faFacebookF,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import HeaderBanner from '../HeaderBanner/HeaderBanner'
import featureImg1 from '../../assets/images/268-avatar-man-outline.gif'
import featureImg2 from '../../assets/images/1330-rest-api-outline.gif'
import featureImg3 from '../../assets/images/334-loader-5.gif'
import featureImg4 from '../../assets/images/648-victory-success-outline.gif'
import featureImg5 from '../../assets/images/56-document-outline.gif'
import featureImg6 from '../../assets/images/icons8-phonelink-ring.gif'

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`

const Features = ({ displayBanner }) => (
  <div className='' id='features'>
    {displayBanner && (
      <HeaderBanner
        title={'Features'}
        headline={'Features, all you need! :)'}
        displayType={'block'}
      />
    )}
    <div className='container'>
      <h2 className='heading'>Features</h2>
      <div className='row '>
        <div className='col-lg-4 col-md-6  '>
          <div className='feature-box f-boxed style-3'>
            <Reveal
              className='onStep'
              keyframes={fadeInUp}
              delay={0}
              duration={600}
              triggerOnce
            >
              {/*    <FontAwesomeIcon
            icon={faFacebookF}
            className="bg-color-2 i-boxed icon_wallet"
          />

<i></i>*/}
            </Reveal>
            <div className='text'>
              <img src={featureImg1} className='imgFeatureBox' width={'40%'} />
              <Reveal
                className='onStep'
                keyframes={fadeInUp}
                delay={100}
                duration={600}
                triggerOnce
              >
                <h4>User Account</h4>
              </Reveal>

              <Reveal
                className='onStep'
                keyframes={fadeInUp}
                delay={200}
                duration={600}
                triggerOnce
              >
                <p>
                  User can register an account and will encounter a
                  questionnaire form to provide his/her relevant input
                  parameters, and then get diet and exercise predictions. The
                  user can log in using credentials to the application.
                </p>
              </Reveal>
            </div>
            {/*<i className="wm icon_wallet"></i> */}
          </div>
        </div>

        <div className='col-lg-4 col-md-6 '>
          <div className='feature-box f-boxed style-3'>
            <Reveal
              className='onStep'
              keyframes={fadeInUp}
              delay={0}
              duration={600}
              triggerOnce
            ></Reveal>
            <div className='text'>
              <img src={featureImg2} width={'40%'} className='imgFeatureBox' />
              <Reveal
                className='onStep'
                keyframes={fadeInUp}
                delay={100}
                duration={600}
                triggerOnce
              >
                <h4>Diet and Exercise</h4>
              </Reveal>
              <Reveal
                className='onStep'
                keyframes={fadeInUp}
                delay={200}
                duration={600}
                triggerOnce
              >
                <p>
                  The user's input parameters i.e. age, gender, weight, height,
                  veg/nonveg, lifestyle and goal are used to recommend suitable
                  diet and exercise, which can be implemented easily by the
                  user.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <div className='col-lg-4 col-md-6 '>
          <div className='feature-box f-boxed style-3'>
            <Reveal
              className='onStep'
              keyframes={fadeInUp}
              delay={0}
              duration={600}
              triggerOnce
            ></Reveal>
            <div className='text'>
              <img src={featureImg3} width={'40%'} className='imgFeatureBox' />

              <Reveal
                className='onStep'
                keyframes={fadeInUp}
                delay={100}
                duration={600}
                triggerOnce
              >
                <h4>Machine Learning</h4>
              </Reveal>
              <Reveal
                className='onStep'
                keyframes={fadeInUp}
                delay={200}
                duration={600}
                triggerOnce
              >
                <p>
                  Authentic and suitable supervised and unsupervside machine
                  learning models are trained and tested on relevant dataset for
                  recommending diet and exercise to the users considering the
                  input parameters.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <div className='col-lg-4 col-md-6 '>
          <div className='feature-box f-boxed style-3'>
            <Reveal
              className='onStep'
              keyframes={fadeInUp}
              delay={0}
              duration={600}
              triggerOnce
            ></Reveal>
            <div className='text'>
              <img src={featureImg4} width={'40%'} className='imgFeatureBox' />

              <Reveal
                className='onStep'
                keyframes={fadeInUp}
                delay={100}
                duration={600}
                triggerOnce
              >
                <h4>Daily Reports and Response</h4>
              </Reveal>
              <Reveal
                className='onStep'
                keyframes={fadeInUp}
                delay={200}
                duration={600}
                triggerOnce
              >
                <p>
                  The registered user having recommended diet and exercise will
                  fill checkboxes in daily report. They will be motivated,
                  appreciated or warned considering their progress.{' '}
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <div className='col-lg-4 col-md-6 '>
          <div className='feature-box f-boxed style-3'>
            <Reveal
              className='onStep'
              keyframes={fadeInUp}
              delay={0}
              duration={600}
              triggerOnce
            ></Reveal>
            <div className='text'>
              <img src={featureImg5} width={'40%'} className='imgFeatureBox' />

              <Reveal
                className='onStep'
                keyframes={fadeInUp}
                delay={100}
                duration={600}
                triggerOnce
              >
                <h4>Blogs and Workouts</h4>
              </Reveal>
              <Reveal
                className='onStep'
                keyframes={fadeInUp}
                delay={200}
                duration={600}
                triggerOnce
              >
                <p>
                  Health/Fitness blogs are viewed by the users of webapp. These
                  are related to any topic covering diet and exercises. Also,
                  there is a workout page providing exercises and their best
                  practices for users.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <div className='col-lg-4 col-md-6 '>
          <div className='feature-box f-boxed style-3'>
            <Reveal
              className='onStep'
              keyframes={fadeInUp}
              delay={0}
              duration={600}
              triggerOnce
            ></Reveal>
            <div className='text'>
              <img src={featureImg6} width={'40%'} className='imgFeatureBox' />

              <Reveal
                className='onStep'
                keyframes={fadeInUp}
                delay={100}
                duration={600}
                triggerOnce
              >
                <h4>Mobile Reponsive and User Friendly</h4>
              </Reveal>
              <Reveal
                className='onStep'
                keyframes={fadeInUp}
                delay={200}
                duration={600}
                triggerOnce
              >
                <p>
                  The application is cross-platform. All the pages of this
                  application are made mobile reponsive for the better user
                  experience. The app design is simple and easily
                  understandable.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default Features

/*
          <i className=" bg-color-2 i-boxed icon_cloud-upload_alt"></i>
                  <i className="wm icon_cloud-upload_alt"></i>
                            <i className=" bg-color-2 i-boxed icon_tags_alt"></i>
                                    <i className="wm icon_tags_alt"></i>




*/
