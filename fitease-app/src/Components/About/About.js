import React from 'react'
import './About.css'
import { RiMentalHealthFill, RiRestaurant2Line } from 'react-icons/ri'
import { FaWalking } from 'react-icons/fa'
import { BiLoader } from 'react-icons/bi'
import HeaderBanner from '../HeaderBanner/HeaderBanner'

const About = ({ displayBanner = false }) => {
  return (
    <>
      {displayBanner && (
        <HeaderBanner
          title={'About'}
          headline={'About the App , its working'}
          displayType={'block'}
        />
      )}

      <div className='container'>
        <div class='row about'>
          <div class='col-md-12 col-lg-6 icons4'>
            <div className='line1'>
              <div class='hexagon '>
                <RiMentalHealthFill className='iconAbout' />
              </div>
              <div class='hexagon '>
                <FaWalking className='iconAbout' />
              </div>
            </div>
            <div className='line2'>
              <div class='hexagon '>
                <RiRestaurant2Line className='iconAbout' />{' '}
              </div>
              <div class='hexagon '>
                <BiLoader className='iconAbout' />{' '}
              </div>
            </div>
          </div>
          {/*
         <div class='col-md-12 col-lg-3'>
            <img
              src='./1643377288exercise-fitness-yoga-silhouette.svg'
              width={'100%'}
              alt='images'
            />
          </div>
          <div class='col-md-12 col-lg-3'>
            <img src='./1648643887ice-skater.svg' width={'100%'} alt='images' />
          </div> */}

          <div class='col-md-12 col-lg-6'>
            <div class='list_description '>
              <div class='section_title'>
                <h4 class='title '>EVERY THING IS POSSIBLE WITH US</h4>
                <p>
                  FitEase is a fitness app that takes care of your health and
                  fitness by recommending you general exercises with a
                  controlled diet that would help you maintain your good health
                  and let you live a healthy life style. The user get
                  registered, fills a questionniare and on the basis of these
                  collected input parameters i.e. age, gender, weight, height,
                  veg/nonveg, lifestyle and goal are used to predict diet and
                  exrecise. Suitable machine learning models are trained and
                  tested on a relevant coolected datasets for prediction. Latest
                  web technologies, ReactJs for frontend and Python Django for
                  backend, and sqlite3 for database are used. The web
                  application is made mobile responsive and user friendly for
                  better user experience.
                </p>
              </div>
              {/* <ul className='mt-3' to>
                <li>
                  <div class='hexagon '>
                    <RiMentalHealthFill className='iconAbout' />
                  </div>
                  <div class='list_item d-table'>
                    <h5 class=''>Build Perfect Body</h5>
                    <p>
                      Nisi sociosqu elit porta viverra orci, porta class
                      pulvinar pharetra auctor Sociis, enim. Gravida habitant
                      integer blandit lacus.
                    </p>
                  </div>
                </li>
                <li>
                  <div class='hexagon '>
                    <FaWalking className='iconAbout' />
                  </div>
                  <div class='list_item d-table'>
                    <h5 class=''>Exercise</h5>
                    <p>
                      Nisi sociosqu elit porta viverra orci, porta class
                      pulvinar pharetra auctor Sociis, enim. Gravida habitant
                      integer blandit lacus.
                    </p>
                  </div>
                </li>
                <li>
                  <div class='hexagon '>
                    <RiRestaurant2Line className='iconAbout' />{' '}
                  </div>
                  <div class='list_item d-table'>
                    <h5 class=''>Diet</h5>
                    <p>
                      Nisi sociosqu elit porta viverra orci, porta class
                      pulvinar pharetra auctor Sociis, enim. Gravida habitant
                      integer blandit lacus.
                    </p>
                  </div>
                </li>
                <li>
                  <div class='hexagon '>
                    <BiLoader className='iconAbout' />{' '}
                  </div>
                  <div class='list_item d-table'>
                    <h5 class=''>Free 7 days trail</h5>
                    <p>
                      Nisi sociosqu elit porta viverra orci, porta class
                      pulvinar pharetra auctor Sociis, enim. Gravida habitant
                      integer blandit lacus.
                    </p>
                  </div>
                </li>
              </ul>*/}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
