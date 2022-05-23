import React, { useEffect, useState } from 'react'
import './UserDashboard.css'
import { FaTransgenderAlt, FaWeight, FaStarOfLife } from 'react-icons/fa'
import { GiBodyHeight, GiStairsGoal } from 'react-icons/gi'
import { MdOutlineManageAccounts, MdOutlineFoodBank } from 'react-icons/md'
import { getDiet, getExercises, postLoggedInUser } from './apiCalls'
import DailyReport from '../DailyReport/DailyReport'

const UserDashboard = () => {
  const [show, setShow] = useState({
    diet: true,
    exercise: false,
    dailyReport: false,
  })

  const [exercises, setExercises] = useState([])
  const [diet, setDiet] = useState([])
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
      })
      .catch((err) => console.log(err))
  }
  // console.log('Exercise Predictions are', [...new Set(exercisesPrediction)]) gettting unique values

  useEffect(() => {
    if (diet === null) {
      return <div>Loading</div>
    }
    const user = JSON.parse(localStorage.getItem('loggedInUser'))

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
              src='https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg'
              width={'200px'}
            />
            <div className='userContent'>
              <p id='userName'>Rana Sobaan </p>
              <br />
              <br />
              <div className='userLowerContent'>
                <p>
                  <span id='male'>
                    {' '}
                    <FaTransgenderAlt />
                    Male
                  </span>{' '}
                  ,
                  <span id='age'>
                    {' '}
                    <MdOutlineManageAccounts />
                    24 yrs
                  </span>
                </p>
                <br />
                <p>
                  <span id='height'>
                    {' '}
                    <GiBodyHeight /> 5.11 feets
                  </span>
                  <span id='weight'>
                    {' '}
                    <FaWeight /> 80 kgs
                  </span>
                </p>
                <br />
                <p id='veg'>
                  <MdOutlineFoodBank />
                  Veg/Non veg - not specified
                </p>
                <p id='status'>
                  {' '}
                  <FaStarOfLife /> Moderately Active
                </p>
                <p id='goal'>
                  <GiStairsGoal />
                  Lose Weight
                </p>
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
                  <div className='dietPrediction'>
                    THIS IS DIET PREDICTION
                    <p className='dietName'>Breakfast</p>
                    <p>{diet?.breakfast}</p>
                    <p className='dietName'>Lunch</p>
                    <p>{diet?.lunch}</p>
                    <p className='dietName'>Dinner</p>
                    <p>{diet?.dinner}</p>
                  </div>
                </div>
              )}

              {show.exercise && (
                <div className='col-lg-12 col-md-12'>
                  <div className='exercisePrediction'>
                    THIS IS EXERCISE PREDICTION
                    {exercises && (
                      <div>
                        {exercises?.map((e, index) => (
                          <p key={index}>{e}</p>
                        ))}
                      </div>
                    )}
                  </div>
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
