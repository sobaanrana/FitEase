import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SuccessStory.css'

const SuccessStory = ({ story }) => {
  // console.log(story)
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem('loggedInUser') === null) {
      navigate('/user/login')
    }
  }, [])

  return (
    <div class='col-md-12 col-lg-4'>
      <div class='card'>
        <div class=''>
          {/* <a href=''>
            <img src={story.image} className='postIMg' alt='' />
          </a> */}
        </div>
        <div class='cardMainContent'>
          <div class='cardStoryDate'>
            {/* {new Date(story.created_at).toDateString()} */}
          </div>

          <div className='cardUpper'>
            <h5 class='cardTitle'>
              <Link to={`/user/success-story/${story.id}`} class='cardTitle'>
                {story.title}{' '}
              </Link>
            </h5>
            <ul class='post_status '>
              <li>
                <i class='fa fa-user' aria-hidden='true'></i>
                {story.author}
              </li>
              {/* <li>
              <i class='fa fa-eye' aria-hidden='true'></i>
              {story.views} Views
            </li> */}
              {/* <li>
              <i class='fa fa-comment-o' aria-hidden='true'></i>32 Comments
            </li> */}
            </ul>
          </div>
          <div className='cardMid'>
            <p className='max-lines'>{story.description}</p>
          </div>
          <div className='cardLower'>
            {' '}
            <a href='' class='btn btn_link'>
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessStory
