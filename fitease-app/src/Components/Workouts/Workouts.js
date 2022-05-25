import React, { useState } from 'react'
import HeaderBanner from '../HeaderBanner/HeaderBanner'
import './Workouts.css'
import ReactPaginate from 'react-paginate'
import Blog from '../Blogs/Blog'

const Workouts = () => {
  const [posts, setPosts] = useState([])

  // For pagination

  const [pageNumber, setPageNumber] = useState(0) //for current page number
  const postsPerPage = 6
  const pagesVisited = pageNumber * postsPerPage // ie. 1*5 = page1*5posts

  const displayPosts = posts
    .slice(pagesVisited, pagesVisited + postsPerPage) //(postsDispalyed, postsDispalyed + postsPerPage)
    .map((post, index) => (
      <>
        <Blog key={index} post={post} />
        <hr />
      </>
    )) // array indexes has this <> </hr></> at each

  const pageCount = Math.ceil(posts.length / postsPerPage) // if there are 11 posts then 11/5 and then ceiling operation means three pages
  const changePage = ({ selected }) => {
    // for react paginate compoenent gets selected Page as prop
    setPageNumber(selected)
  }

  return (
    <div>
      <HeaderBanner
        title={'Workouts'}
        headline={'The workouts for your body!'}
        displayType={'block'}
      />
      <div className='workouts'>
        <div className='workout'>
          <div className='name'>Bicep Curl</div>
          <div className='desc'>
            Don't use momentum. Make sure the movement is coming from the bottom
            half of your arm not your shoulder moving the weight.
          </div>
          <div className='pic'>
            <img src='https://dl.airtable.com/Pld28NJDTyeYLcaJV7hQ_3e8b7121-738e-4457-b6d8-fd3a3e04de5a.gif' />
          </div>
        </div>
        <div className='workout'>
          <div className='name'>Bicycle Crunch</div>
          <div className='desc'>
            The lower the "straight" leg is to the ground the more challenging
            this exercise is. Move Slower, Legs higher in the air Harder: Keep
            shoulder blades off the ground entire time.
          </div>
          <div className='pic'>
            <img src='https://dl.airtable.com/Y0JUbM2YTfe8uRz0jb5w_200.gif' />
          </div>
        </div>
        <div className='workout'>
          <div className='name'>Bounds</div>
          <div className='desc'>
            Do laps across the room of these. Don't jump as high/far Harder:
            Touch the ground with your opposite hand after each jump.
          </div>
          <div className='pic'>
            <img src='https://dl.airtable.com/EkEnZqmyR9aAqElh54PL_1ea07303-2e87-4876-8e68-8944edd42173.gif' />
          </div>
        </div>
        <div className='workout'>
          <div className='name'>Burpee</div>
          <div className='desc'>
            Option with half Bosu, Pushup Optional. Make sure you don't round
            your back. Don't Jump after, and break down motion squat, step legs
            back and no pushup Harder: Speed.
          </div>
          <div className='pic'>
            <img src='https://dl.airtable.com/xDZ3bhDQqG3erLNNwgyF_Burpee.gif' />
          </div>
        </div>
      </div>
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
