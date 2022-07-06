import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import HeaderBanner from '../HeaderBanner/HeaderBanner'
import Loader from '../Loader/Loader'
import { getSuccessStories } from './apiCalls'
import './SuccessStories.css'
import SuccessStory from './SuccessStory'

import { BsPencilSquare } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const SuccessStories = () => {
  const [stories, setStories] = useState([])
  const [loader, setLoader] = useState(true)
  // For pagination

  const [pageNumber, setPageNumber] = useState(0) //for current page number
  const postsPerPage = 6
  const pagesVisited = pageNumber * postsPerPage // ie. 1*5 = page1*5posts

  const displayPosts = stories
    .slice(pagesVisited, pagesVisited + postsPerPage) //(postsDispalyed, postsDispalyed + postsPerPage)
    .map((story, index) => (
      <>
        <SuccessStory key={index} story={story} />
        <hr />
      </>
    )) // array indexes has this <> </hr></> at each

  const pageCount = Math.ceil(stories.length / postsPerPage) // if there are 11 posts then 11/5 and then ceiling operation means three pages
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const loadSuccessStories = async () => {
    getSuccessStories()
      .then((data) => {
        console.log(data)

        setStories(data)
        if (stories) {
          setLoader(false)
        }
      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    loadSuccessStories()
  }, [])
  return (
    <>
      <HeaderBanner
        title={'Success Stories'}
        headline={'Get inspired by others success stories.'}
        displayType={'block'}
      />
      {loader && <Loader />}

      <div class='container'>
        <div class='row'>
          {/* <BlogSideBarLayout posts={posts} setPosts={setPosts} /> */}

          <div class='col-md-12 col-lg-12'>
            <div className='ss-heading'>
              <h2>Sucess Stories</h2>
              <Link to='/user/success-story/'>
                <h6 className='story-heading'>
                  <BsPencilSquare /> Write your story
                </h6>
              </Link>
            </div>

            <div class='row'>{displayPosts}</div>
          </div>
        </div>
      </div>
      <div className='paginationDiv'>
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
    </>
  )
}

export default SuccessStories
