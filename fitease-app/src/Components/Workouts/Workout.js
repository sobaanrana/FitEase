import React from 'react'
/*import './Workout.css'*/

const Workout = ({ workout }) => {
  return (
    <div className='workouts'>
      <div className='workout'>
        <div className='name'>{workout.name}</div>
        <div className='desc'>{workout.description}</div>
        <div className='pic'>
          <img src={workout.image} />
        </div>
      </div>
    </div>
  )
}

export default Workout
