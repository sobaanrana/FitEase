import React, { useEffect, useState } from 'react'
import Blog from './Blog'
import './Blogs.css'
import { getPosts } from './helper/apicalls'
import ReactPaginate from 'react-paginate'
import BlogSideBarLayout from './BlogSideBarLayout'
import HeaderBanner from '../HeaderBanner/HeaderBanner'
import Loader from '../Loader/Loader'

function Blogs() {
  // const apiKey = d540a061aaa9496c81c5104093646cd3;
  const [posts, setPosts] = useState([])
  const [loader, setLoader] = useState(true)
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

  const loadPosts = async () => {
    getPosts()
      .then((data) => {
        // as .json() returned
        console.log(data)

        setPosts(data)
        if (posts) {
          setLoader(false)
        }
        //console.log(data);
      })
      .catch((err) => console.log(err))
    /*await axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e1ea1ac3401e4b41a20227637e40c1cc`
      )
      .then((response) => {
        console.log(response.data.articles);
        if (response.data.articles) {
          setPosts(response?.data?.articles);
        }
        console.log("these are posts", posts);
      })
      .catch((error) => {
        console.log(error);
      });
  };*/
  }
  useEffect(() => {
    loadPosts()
  }, [])
  return (
    <>
      <HeaderBanner
        title={'Blogs'}
        headline={'Read Our Blogs, and get fit. :)'}
        displayType={'block'}
      />
      {loader && <Loader />}

      <div class='container'>
        <div class='row'>
          <BlogSideBarLayout posts={posts} setPosts={setPosts} />

          <div class='col-md-12 col-lg-8'>
            <h2 className='mx-5 mt-5'>Health and Fitness Articles</h2>

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

export default Blogs
