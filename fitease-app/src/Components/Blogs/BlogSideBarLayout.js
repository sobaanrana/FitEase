import React, { useEffect, useState } from 'react'
import './BlogSideBarLayout.css'
import Blogs from './Blogs'
import HeaderBanner from '../HeaderBanner/HeaderBanner'
import { Link } from 'react-router-dom'
const BlogSideBarLayout = ({ posts, setPosts }) => {
  console.log('blogs from sidebar', posts)
  const [popularPosts, setPopularPosts] = useState([])
  const [recentPosts, setRecentPosts] = useState([])
  const [cats, setCats] = useState({
    fitness: [],
    health: [],
    diet: [],
    workout: [],
    sports: [],
    events: [],
  })
  const getPopularBlogs = () => {
    const pbs = posts?.sort((a, b) => b.views - a.views).slice(0, 4)
    setPopularPosts(pbs)
  }
  const getRecentBlogs = () => {
    const rbs = posts?.sort((a, b) => b.id - a.id).slice(0, 4)
    console.log('rbs', rbs)
    setRecentPosts(rbs)
  }
  const getPostsbyCategories = () => {
    const t = {
      fitness: [],
      health: [],
      diet: [],
      workout: [],
      sports: [],
      events: [],
    }

    for (const key in cats) {
      let tempArr = []
      posts?.map((post) => {
        console.log('key', key)
        if (post.category == key) {
          tempArr.push(post)
          cats[key] = tempArr
        }
      })
    }

    console.log('cats are', cats)
  }
  useEffect(() => {
    getPopularBlogs()
    getRecentBlogs()
    getPostsbyCategories()
  }, [posts])

  return (
    <div class='col-md-12 col-lg-4'>
      <div class='blog_right_sidebar '>
        <div class=''>
          <form method='post' className='blogForm' action='#'>
            <input type='text' class='form-control' placeholder='Search' />
            <button type='submit'>
              <i class='fa fa-search color-gray'></i>
            </button>
          </form>
        </div>
        <div class='widget categories '>
          <h4 class='widget-title color_default  text-uppercase'>Categories</h4>
          <ul>
            {Object.keys(cats).map((catKey) => (
              <>
                <li onClick={() => setPosts(cats[catKey])}>
                  <Link class='color_primary' to=''>
                    {catKey}
                    <span class='pull-right'>( {cats[catKey].length})</span>
                  </Link>
                </li>
              </>
            ))}

            {/* 
            <li>
              <a class='color_primary' href='#'>
                Sports <span class='pull-right'>( 12 )</span>
              </a>
            </li> */}
          </ul>
        </div>
        <div class='widget recent_post icon-default'>
          <h4 class='widget-title color_default mb_15 text-uppercase'>
            Recent Posts
          </h4>
          <ul>
            {recentPosts?.map((post) => (
              <li class='color_secondery'>
                <a href='#'>{post.title}</a>
                <br />
                <span>By {post.author}</span>
                <span>|</span>
                <span>{post.created_at}</span>
              </li>
            ))}

            {/* <li class='color_secondery'>
              <a href='#'>Pretium Lobortis tempor vitae sociis litoramus.</a>
              <br />
              <span>By Admin</span>
              <span>|</span>
              <span>April 07, 2017</span>
            </li> */}
          </ul>
        </div>
        <div class='widget icon-default popular_post mb_30'>
          <h4 class='widget-title color_default mb_15 text-uppercase'>
            Popular Posts
          </h4>
          <ul>
            {popularPosts?.map((post) => (
              <li class='color_secondery'>
                <a href='#'>{post.title} </a>
                <br />
                <span>
                  <i class='fa fa-eye' aria-hidden='true'></i>
                  {post.views} Views
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div class='widget icon-default archive_post mb_30'>
          <h4 class='widget-title color_default mb_15 text-uppercase'>
            Archive Posts
          </h4>
          <ul>
            <li>
              <a href='#'>February 2022</a>
            </li>
            <li>
              <a href='#'>January 2022</a>
            </li>
            <li>
              <a href='#'>November 2021</a>
            </li>
            <li>
              <a href='#'>October 2021</a>
            </li>
          </ul>
        </div>
        <div class='widget widget_tag d-inline-block'>
          <h4 class='widget-title color_default mb_15 text-uppercase'>Tags</h4>
          <ul>
            <li>
              <a href='#'>Fitness</a>
            </li>
            <li>
              <a href='#'>Tips</a>
            </li>
            <li>
              <a href='#'>GYM</a>
            </li>
            <li>
              <a href='#'>Muscles</a>
            </li>
            <li>
              <a href='#'>BodyBuilding</a>
            </li>
            <li>
              <a href='#'>Video</a>
            </li>
            <li>
              <a href='#'>Cardio</a>
            </li>
            <li>
              <a href='#'>Women</a>
            </li>
            <li>
              <a href='#'>Diet</a>
            </li>
            <li>
              <a href='#'>Yoga</a>
            </li>
            <li>
              <a href='#'>Sports</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BlogSideBarLayout
