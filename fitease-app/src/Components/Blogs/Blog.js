import React from 'react'
import { Link } from 'react-router-dom'
import './Blog.css'

function Blog({ post }) {
  return (
    <div class='col-md-6 col-lg-6'>
      <div class='card' style={{ width: ' 24em' }}>
        <div class=''>
          <a href=''>
            <img src={post.image} className='postIMg' alt='' />
          </a>
        </div>
        <div class='cardMainContent'>
          <div class='cardDate'>{new Date(post.created_at).toDateString()}</div>

          <h5 class='cardTitle'>
            <Link to={`/blogs/${post.id}`} class='cardTitle'>
              {post.title}{' '}
            </Link>
          </h5>
          <ul class='post_status '>
            <li>
              <i class='fa fa-user' aria-hidden='true'></i>
              {post.author}
            </li>
            <li>
              <i class='fa fa-eye' aria-hidden='true'></i>
              {post.views} Views
            </li>
            {/* <li>
              <i class='fa fa-comment-o' aria-hidden='true'></i>32 Comments
            </li> */}
          </ul>
          <p className='max-lines'>{post.description}</p>
          <a href='' class='btn btn_link'>
            Read More
          </a>
        </div>
      </div>
    </div>
  )
}

export default Blog

///blogs/${post.id}
/* <div className="post">
      {post.urlToImage && (
        <img className="postImg" src={post.urlToImage} alt="" />
      )}
      <div className="postInfo">
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.publishedAt).toDateString()}
        </span>
      </div>
      <div className="postCats">
        <span className="postCat">{post.author}</span>
      </div>
      <p className="postDesc">{post.description}</p>
    </div>
*/
