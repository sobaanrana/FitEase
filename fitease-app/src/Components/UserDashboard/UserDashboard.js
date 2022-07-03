import React, { useEffect, useState } from 'react'
import './UserDashboard.css'
import {
  FaTransgenderAlt,
  FaWeight,
  FaStarOfLife,
  FaWaveSquare,
} from 'react-icons/fa'
import { GiBodyHeight, GiStairsGoal } from 'react-icons/gi'
import { MdOutlineManageAccounts, MdOutlineFoodBank } from 'react-icons/md'
import {
  getDiet,
  getExercises,
  getQuesByUser,
  postLoggedInUser,
} from './apiCalls'
import DailyReport from '../DailyReport/DailyReport'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'

const UserDashboard = () => {
  const [show, setShow] = useState({
    diet: true,
    exercise: false,
    dailyReport: false,
  })

  const [exercises, setExercises] = useState([])
  const [exerciseAmount, setExerciseAmount] = useState(0)
  const [diet, setDiet] = useState([])
  const [user, setUser] = useState(null)
  const [questionnaireData, setQuestionnaireData] = useState(null)
  const [loader, setLoader] = useState(true)

  //const [exercisesPrediction, setExercisesPrediction] = useState([])
  const onDiet = () => {
    setShow({ diet: true, exercise: false, dailyReport: false })
  }
  const onExercise = () => {
    setShow({ diet: false, exercise: true, dailyReport: false })
    //exercisePrediction()
  }
  const onDailyReport = () => {
    setShow({ diet: false, exercise: false, dailyReport: true })
  }

  const exercisePrediction = () => {
    getExercises()
      .then((data) => {
        console.log('Exercise Prediction', data)

        setExercises(data.prediction)
        if (exercises) {
          setLoader(false)
        }
        // Sagregating data on ecercise Prediction with 1 on the frontend
        /*
        if (data) {
          setExercises(data.prediction[0].fields)
          let exercisesList = []

          Object.keys(exercises).map((key, index) => {
            //console.log('Key , Value', key, exercises[key])

            if (exercises[key] === 1) {
              //setExercisesPrediction(key)
              exercisesList.push(key)
              //setExercisesPrediction(newList)
            }
          })*
          console.log(exercisesList)
          setExercisesPrediction(exercisesList)
          
        }*/
      })

      .catch((err) => console.log(err))
  }
  const dietPrediction = () => {
    getDiet()
      .then((data) => {
        console.log('Diet Prediction', data)
        setDiet(data.prediction)
        if (diet) {
          setLoader(false)
        }
      })
      .catch((err) => console.log(err))
  }
  // console.log('Exercise Predictions are', [...new Set(exercisesPrediction)]) gettting unique values

  // getting questionnaire of logged in user
  const quesByUser = () => {
    getQuesByUser()
      .then((res) => {
        console.log('Questionnaire of Logged In User', res)
        setQuestionnaireData(res.questionnaire.fields)
      })
      .catch((err) => console.log(err))
  }
  console.log('Questionnaire of Logged In User', questionnaireData)
  useEffect(() => {
    if (diet === null) {
      return <div>Loading</div>
    }
    const user = JSON.parse(localStorage.getItem('loggedInUser'))
    setUser(user.user)
    quesByUser()
    postLoggedInUser(user.user.email)
    exercisePrediction() // the moment button is clicked then it calls function
    dietPrediction()
  }, []) // this creates spam in the backend

  return (
    <div className='container'>
      <div className='row userDashboard'>
        <div className='col-lg-4 col-md-12'>
          <div className='userInfo'>
            <img
              alt='Image placeholder'
              // src='./default-image.png'
              src='https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg'
              width={'200px'}
            />
            <div className='userContent'>
              <p id='userName'>
                {user?.first_name} {user?.last_name}
              </p>
              <br />
              <br />
              <div className='userLowerContent'>
                <p>
                  <span id='male'>
                    {' '}
                    <FaTransgenderAlt />
                    {questionnaireData?.Gender}
                  </span>{' '}
                  ,
                  <span id='age'>
                    {' '}
                    <MdOutlineManageAccounts />
                    {questionnaireData?.Age} yrs
                  </span>
                </p>
                <br />
                <p>
                  <span id='height'>
                    {' '}
                    <GiBodyHeight /> {questionnaireData?.Height} cms
                  </span>
                  <span id='weight'>
                    {' '}
                    <FaWeight /> {questionnaireData?.Weight} Kgs
                  </span>
                </p>
                <br />
                {/*<p id='veg'>
                  <MdOutlineFoodBank />
                  Veg/Non veg - not specified
                </p> */}
                <p id='status'>
                  {' '}
                  <FaStarOfLife />
                  {questionnaireData?.Lifestyle}
                </p>
                <p id='goal'>
                  <GiStairsGoal />
                  {questionnaireData?.Goal}
                </p>
                <p id='calorieCount'>
                  <FaWaveSquare />
                  Calories Required {questionnaireData?.Calorie_Count}
                </p>
              </div>
              <div className='user-edit-btn'>
                <Link to={'/user/questionnaire/update'}>
                  <button class='btn btn-primary '>Edit</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-8 col-md-12'>
          <div className='userControls'>
            <div className='userControlButtons'>
              <div onClick={() => onDiet()}>Diet</div>
              <div onClick={() => onExercise()}>Excercise</div>
              <div onClick={() => onDailyReport()}>Daily Report</div>
            </div>
            <div className='row'>
              {show.diet && (
                <div className='col-lg12 col-md-12'>
                  {loader ? (
                    <Loader />
                  ) : (
                    <div className='dietPrediction'>
                      <p className='dietName'>Breakfast</p>
                      <p>{diet?.breakfast}</p>
                      <p className='dietName'>Lunch</p>
                      <p>{diet?.lunch}</p>
                      <p className='dietName'>Dinner</p>
                      <p>{diet?.dinner}</p>
                    </div>
                  )}
                </div>
              )}

              {show.exercise && (
                <div className='col-lg-12 col-md-12'>
                  {loader ? (
                    <Loader />
                  ) : (
                    <div className='exercisePrediction'>
                      {exercises && (
                        <div>
                          {exercises?.map((e, index) =>
                            e === 'crunches' ? (
                              <p key={index}>
                                {e} <span>|</span>3 sets 8 reps
                              </p>
                            ) : e === 'jogging' ? (
                              <p key={index}>
                                {e} <span>|</span>1 mile
                              </p>
                            ) : e === 'pullups' ? (
                              <p key={index}>
                                {e} <span>|</span>3 sets 6 reps
                              </p>
                            ) : e === 'pushups' ? (
                              <p key={index}>
                                {e}
                                <span>|</span> 3 sets 10 reps
                              </p>
                            ) : e === 'situps' ? (
                              <p key={index}>
                                {e} <span>|</span>3 sets 12 reps
                              </p>
                            ) : e === 'walking' ? (
                              <p key={index}>
                                {e}
                                <span>|</span> 2 miles
                              </p>
                            ) : null
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
              {show.dailyReport && (
                <div className='col-lg- 12 col-md-12'>
                  <div className='dailyReport'>
                    <DailyReport exercises={exercises} />
                  </div>
                </div>
              )}
            </div>
            {/*<div className='userMsg'></div>*/}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard
