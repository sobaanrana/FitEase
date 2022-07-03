import React, { useEffect, useState } from 'react'
import HeaderBanner from '../HeaderBanner/HeaderBanner'
import './Workouts.css'
import ReactPaginate from 'react-paginate'
import Blog from '../Blogs/Blog'
import Workout from './Workout'
import { getWorkouts } from './apiCalls'
import Loader from '../Loader/Loader'

const Workouts = () => {
  const [workouts, setWorkouts] = useState([])
  const [loader, setLoader] = useState(true)
  // For pagination

  const [pageNumber, setPageNumber] = useState(0)
  const workoutsPerPage = 5
  const pagesVisited = pageNumber * workoutsPerPage

  const displayWorkouts = workouts
    .slice(pagesVisited, pagesVisited + workoutsPerPage)
    .map((workout, index) => (
      <>
        <Workout key={index} workout={workout} />
      </>
    )) // array indexes has this <> </hr></> at each

  const pageCount = Math.ceil(workouts.length / workoutsPerPage)
  const changePage = ({ selected }) => {
    // for react paginate compoenent gets selected Page as prop
    setPageNumber(selected)
  }
  const loadWorkouts = () => {
    getWorkouts()
      .then((res) => {
        console.log(res)
        setWorkouts(res)
        if (workouts) {
          setLoader(false)
        }
      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    loadWorkouts()
  }, [])

  return (
    <div>
      <HeaderBanner
        title={'Workouts'}
        headline={'The workouts for your body!'}
        displayType={'block'}
      />
      {loader && <Loader />}
      {displayWorkouts}
      <div className='workout-paginationDiv'>
        <ReactPaginate
          previousLabel={'Prev'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'paginationBttns'}
          previousLinkClassName={'previousBttn'}
          nextLinkClassName={'nextBttn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
        />
      </div>
    </div>
  )
}

export default Workouts
