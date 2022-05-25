import React, { useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik'
import './DailyReport.css'
import { getMsgDict, postDailyReportMsg } from './apiCalls'
import { toast } from 'react-toastify'

const DailyReport = ({ exercises }) => {
  //console.log('exercises', exercises)
  const [count, setCount] = useState(0)
  // const [exerciseCount, setExerciseCount] = useState(0)
  // const [dietCount, setDietCount] = useState(0)
  //const [msg, setMsg] = useState(null) // issues since asyn value updates/sets after the previous data is sent to the server
  const user = JSON.parse(localStorage.getItem('loggedInUser'))
  //console.log('user')
  const [sendData, setSendData] = useState(false)
  const onDailyReport = (values) => {
    //console.log('values', values)
    if (Object.keys(values).length > 0) {
      computeResults(values)
    }
  }
  const computeResults = (results) => {
    //let found = values?.find((value) => value == exercises[0])
    //      console.log('FOUND', found)
    /*
    results?.forEach((value) => {
      if (value == exercises[0]) {
        console.log(value)
      }
    })
*/

    // <---------------Exercise ---------------->
    console.log('results from send results', results)
    let exerciseCount = 0 // for Appreciation, Motivation and Warning
    //debugger
    let dietCountVar = 0 // for Appreciation, Motivation and Warning
    let exerciseIterate = 3
    exercises?.map((e) => {
      if (
        Object.keys(results)[exerciseIterate] &&
        Object.values(results)[exerciseIterate] == true
      ) {
        exerciseIterate = exerciseIterate + 1
      }
    })
    //debugger
    if (exerciseIterate - 3 === exercises.length) {
      console.log('Congratulations! You have completed your Exercise')
    }
    // <---------------Diet ---------------->
    // object.entries(objName) returns [[key,value],[],[]]
    Object.entries(results).map((diet) => {
      if (
        diet[1] === true &&
        (diet[0] === 'breakfast' || diet[0] === 'lunch' || diet[0] === 'dinner')
      ) {
        console.log('diet', diet)
        dietCountVar = dietCountVar + 1
        console.log('dietCountVar  from map', dietCountVar)
      }
    })
    if (results.breakfast && results.lunch && results.dinner) {
      console.log('Congratulations! You have completed your Diet')
    }
    //debugger
    let exerciseCountVar = exerciseIterate - 3
    console.log('exerciseCountVar', exerciseCountVar)
    console.log('dietCountVar', dietCountVar)

    // Since async behaviour as the value set and so same msg show on next click and changes after + no need to use extra states
    //setExerciseCount(exerciseCountVar)
    //setDietCount(dietCountVar)

    let totalCount = exerciseCountVar + dietCountVar
    console.log('total count', totalCount)
    setCount(totalCount)
    if (sendData) {
      prepareMsg(exerciseCountVar, dietCountVar)
    }
  }

  const prepareMsg = (exerciseCount, dietCount) => {
    console.log('Total Count for appreciation, motivation and warning', count)

    let msg = ''
    console.log('exerciseCount, dietCount', exerciseCount, dietCount)
    if (exerciseCount === exercises.length && dietCount === 3) {
      msg = 'Appreciate'
      console.log('Fitease Appreciates')
      showMsg(msg)
    } else if (
      exerciseCount >= Math.round(exercises.length / 2) &&
      dietCount >= Math.round(3 / 2)
    ) {
      msg = 'Motivate'
      console.log('Fitease Motivates')
      showMsg(msg)

      // } else if (e < exercises.length / 2 && d < 3 / 2) {
      //   setMsg('Warn')
      //   console.log('Fitease Warns')
    } else if (exerciseCount === exercises.length || dietCount === 3) {
      console.log('Fitease Motivates')

      msg = 'Motivate'
      showMsg(msg)
    } else if (exerciseCount === 0 && dietCount === 0) {
      console.log('Fitease Warns')
      msg = 'Warn'
      showMsg(msg)
    } else if (exerciseCount !== exercises.length || dietCount !== 3) {
      console.log('Fitease Motivates')

      msg = 'Motivate'
      showMsg(msg)

      // } else if (e !== exercises.length && d !== 3) {
      //   console.log('Fitease Motivates')

      //   setMsg('Motivate')
    }
  }

  // This shows Msg that is greator in number at backend considerinf overall commitment
  const showMsg = (msg) => {
    let msgDict = []
    getMsgDict()
      .then((res) => {
        console.log(res)
        msgDict.push(res.Message)

        console.log(
          'msgDict - greator',
          Object.keys(msgDict[0])?.reduce((a, b) =>
            msgDict[0][a] > msgDict[0][b] ? a : b
          )
        )
        let greatorMsg = Object.keys(msgDict[0])?.reduce((a, b) =>
          msgDict[0][a] > msgDict[0][b] ? a : b
        )
        //        console.log('greatorMsg', greatorMsg)

        if (greatorMsg === 'Appreciate') {
          toast.success(greatorMsg, {
            position: toast.POSITION.LEFT,
          })
          sendMsg(msg)
        } else if (greatorMsg === 'Motivate') {
          toast.info(greatorMsg, {
            position: toast.POSITION.LEFT,
          })
          sendMsg(msg)
        } else if (greatorMsg === 'Warn') {
          toast.error(greatorMsg, {
            position: toast.POSITION.LEFT,
          })
          sendMsg(msg)
        }
      })
      .catch((err) => console.log(err))

    console.log('MsgDict', msgDict)
  }
  const sendMsg = (msg) => {
    postDailyReportMsg(msg, user.user.email)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }
  console.log('Count', count)
  useEffect(() => {
    setSendData(true)
  }, [])

  return (
    <div className='daily-report'>
      {/*DailyReport - Here come a form with validation - exercise + diet
      checkboxes - 2 approaches either we set two field straight away or all the
      exercises with checkboxes and diet check boxes as breakfast, lunch and
      dinner*/}
      <h3 className='headline'>Fill Report for today</h3>
      <div className='dailyReport-form'>
        <Formik
          initialValues={{ breakfast: '', lunch: '', dinner: '' }} // as these three are at the beginning and rest are appended after
          onSubmit={(values) => {
            onDailyReport(values)
          }}
        >
          {({ values }) => (
            <Form>
              <br />
              {exercises?.map((exercise, index) => {
                return (
                  <>
                    <h3 className='exercise'>Exercise</h3>

                    <label>
                      {/*<Field type='checkbox' name='exercise' value='true' /> checkboxes does not works this way in formik*/}
                      <Field
                        name={exercise}
                        type='checkbox'
                        class='option-input'
                        render={({ field, form }) => {
                          {
                            /*console.log('field', field)*/
                          }
                          return (
                            <input
                              type='checkbox'
                              checked={field.value}
                              {...field}
                            />
                          )
                        }}
                      />
                      {exercise}
                    </label>
                    <br />
                  </>
                )
              })}
              <br />
              <br />

              <h3 className='diet'>Diet</h3>
              <label>
                <Field
                  name='breakfast'
                  type='checkbox'
                  render={({ field, form }) => {
                    return (
                      <input type='checkbox' checked={field.value} {...field} />
                    )
                  }}
                />
                Breakfast
              </label>
              <br />

              <label>
                <Field
                  name='lunch'
                  type='checkbox'
                  render={({ field, form }) => {
                    return (
                      <input type='checkbox' checked={field.value} {...field} />
                    )
                  }}
                />
                Lunch
              </label>
              <br />

              <label>
                <Field
                  name='dinner'
                  type='checkbox'
                  render={({ field, form }) => {
                    return (
                      <input type='checkbox' checked={field.value} {...field} />
                    )
                  }}
                />
                Dinner
              </label>

              <br />

              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default DailyReport

// Previus Daily Report

/*
 <label>
              //<Field type='checkbox' name='exercise' value='true' /> checkboxes does not works this way in formik
              <Field
                name='exercise'
                type='checkbox'
                class='option-input'
                render={({ field, form }) => {
                  
                    //console.log('field', field)
                  
                  return (
                    <input type='checkbox' checked={field.value} {...field} />
                  )
                }}
              />
              Exercise
            </label>

*/
/*
<label>
              <Field
                name='diet'
                type='checkbox'
                render={({ field, form }) => {
                  return (
                    <input type='checkbox' checked={field.value} {...field} />
                  )
                }}
              />
              Diet
            </label>
            */
