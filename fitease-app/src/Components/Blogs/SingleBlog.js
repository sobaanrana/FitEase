import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import HeaderBanner from '../HeaderBanner/HeaderBanner'
import BlogSideBarLayout from './BlogSideBarLayout'
import { getPost } from './helper/apicalls'
import './SingleBlog.css'

export default function SingleBlog() {
  const { id } = useParams()
  console.log("this is blog's id", id)
  const [post, setPost] = useState({})

  const [title, setTitle] = useState('This is Health Blog')
  const [desc, setDesc] = useState('lorem ')
  const [updateMode, setUpdateMode] = useState(false)

  const loadBlog = () => {
    getPost(id)
      .then((data) => {
        console.log('This is single blog', data)
        setPost(data)
      })
      .catch((err) => console.log(err))
  }
  function createMarkup() {
    return { __html: post.description }
  }
  /*
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {}
  };
*/
  useEffect(() => {
    loadBlog()
  }, [])

  return (
    <>
      <HeaderBanner
        title={'Blog'}
        headline={'Read Our Blogs, and get fit. :)'}
        displayType={'block'}
      />
      <div class='container'>
        <div class='row'>
          {/* <BlogSideBarLayout /> */}
          <div class='col-md-12 col-lg-12'>
            <div className='singleBlog'>
              <div class='img'>
                <img src='images/post/workout-bars-at-park.jpg' alt='' />
              </div>
              <div class='singleBlogContent'>
                <div class='title'>
                  <h4>{post.title} </h4>
                </div>
                <div class='status'>
                  <ul class='icon-default'>
                    <li>
                      <i class='fa fa-user' aria-hidden='true'></i>
                      {post.author}
                    </li>
                    {/* <li>
                      <i class='fa fa-eye' aria-hidden='true'></i>
                      {post.views}
                    </li> */}
                    {/* <li>
                      <i class='fa fa-comment-o' aria-hidden='true'></i>09
                      Comments
                    </li> */}
                    <li className='date'>
                      {' '}
                      {new Date(post.created_at).toDateString()}
                    </li>
                  </ul>
                </div>
                <div class='mainText'>
                  <div dangerouslySetInnerHTML={createMarkup()} />
                  {/* <h4 class='color_default text-uppercase mb_15'>
                    Keep your body feet with our tips.
                  </h4> */}
                </div>
                {/* <div className='singleBlogLower'>
                  <div class='socialShare'>Social Share :</div>
                  <ul class='social_media media_dark'>
                    <li>
                      <a href='#'>
                        <i class='fa fa-facebook' aria-hidden='true'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i class='fa fa-twitter' aria-hidden='true'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i class='fa fa-google-plus' aria-hidden='true'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i class='fa fa-linkedin' aria-hidden='true'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i class='fa fa-rss' aria-hidden='true'></i>
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
            {/* <div class='blogsComments'>
              <h4 class='text-uppercase '>Comments ( 03 )</h4>
              <ul>
                <li>
                  <div class='avatar'>
                    <img src='images/comment/comment_author1.jpg' alt='' />
                  </div>
                  <div class='commentInfo'>
                    <h6 class='authorName'>Ted Sparrow</h6>
                    <div class='dateTime'>27 April 2017 at 10:21 am</div>
                    <p className='text'>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal.
                    </p>
                    <div class='reply'>
                      <a class='btn_link' href='#'>
                        Reply
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class='avatar'>
                    <img src='images/comment/comment_author1.jpg' alt='' />
                  </div>
                  <div class='commentInfo'>
                    <h6 class='authorName'>Ted Sparrow</h6>
                    <div class='dateTime'>27 April 2017 at 10:21 am</div>
                    <p className='text'>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal.
                    </p>
                    <div class='reply'>
                      <a class='btn_link' href='#'>
                        Reply
                      </a>
                    </div>
                  </div>
                </li>
                <li class=''>
                  <ul class='children'>
                    <li>
                      <div class='avatar'>
                        <img src='images/comment/comment_author1.jpg' alt='' />
                      </div>
                      <div class='commentInfo'>
                        <h6 class='authorName'>Ted Sparrow</h6>
                        <div class='dateTime'>27 April 2017 at 10:21 am</div>
                        <p className='text'>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal.
                        </p>
                        <div class='reply'>
                          <a class='btn_link' href='#'>
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <div class='avatar'>
                    <img src='images/comment/comment_author1.jpg' alt='' />
                  </div>
                  <div class='commentInfo'>
                    <h6 class='authorName'>Ted Sparrow</h6>
                    <div class='dateTime'>27 April 2017 at 10:21 am</div>
                    <p className='text'>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal.
                    </p>
                    <div class='reply'>
                      <a class='btn_link' href='#'>
                        Reply
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div> */}
            {/* <div class='type_comment'>
              <h4 class='comment_title color_default text-uppercase py_30'>
                Leave a Comment
              </h4>
              <div class='comment_form'>
                <form class='cart_form' method='post' action='#'>
                  <div class='row'>
                    <div class='col-md-12'>
                      <div class='form-group'>
                        <textarea
                          class='form-control'
                          id='comments'
                          name='comments'
                          cols='30'
                          rows='6'
                          placeholder='Leave Comment...'
                        ></textarea>
                      </div>
                    </div>
                    <div class='col-md-6 col-sm-6'>
                      <div class='form-group'>
                        <input
                          class='form-control'
                          type='text'
                          name='name'
                          value=''
                          placeholder='Name*'
                        />
                      </div>
                    </div>
                    <div class='col-md-6 col-sm-6'>
                      <div class='form-group'>
                        <input
                          class='form-control'
                          type='text'
                          name='email'
                          value=''
                          placeholder='Email*'
                        />
                      </div>
                    </div>
                    <div class='col-md-12'>
                      <button type='submit' class='btn btn_default'>
                        Post Comment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
