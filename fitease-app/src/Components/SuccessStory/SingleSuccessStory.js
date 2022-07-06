import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import HeaderBanner from '../HeaderBanner/HeaderBanner'
import { getSuccessStory } from './apiCalls'

export default function SingleSuccessStory() {
  const { id } = useParams()
  console.log("this is blog's id", id)
  const [story, setStory] = useState({})

  const [title, setTitle] = useState('This is Health Blog')
  const [desc, setDesc] = useState('lorem ')
  const [updateMode, setUpdateMode] = useState(false)

  const loadSuccessStory = () => {
    getSuccessStory(id)
      .then((data) => {
        console.log('This is single blog', data)
        setStory(data)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    loadSuccessStory()
  }, [])

  return (
    <>
      <HeaderBanner
        title={'Success Story'}
        headline={"Someone's success story can change your life story."}
        displayType={'block'}
      />
      <div class='container'>
        <div class='row'>
          <div class='col-md-12 col-lg-12'>
            <div className='singleBlog'>
              <div class='singleBlogContent'>
                <div class='title'>
                  <h4>{story.title} </h4>
                </div>
                <div class='status'>
                  <ul class='icon-default'>
                    <li>
                      <i class='fa fa-user' aria-hidden='true'></i>
                      {story.author}
                    </li>

                    <li className='date'>
                      {' '}
                      {new Date(story.created_at).toDateString()}
                    </li>
                  </ul>
                </div>
                <div class='mainText'>
                  <p>{story.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
