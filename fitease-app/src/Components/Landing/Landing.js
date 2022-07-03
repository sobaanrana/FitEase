import React from 'react'
import { useNavigate } from 'react-router-dom'
import imgL from './workout-bars-at-park.jpg'
import './Landing.css'
import Carousel from '../Carousel/Carousel'
import Features from '../Features/Features'
import About from '../About/About'
import FAQs from '../FAQs/FAQs'
import Contact from './../ContactUs/Contact'
import HeaderBanner from '../HeaderBanner/HeaderBanner'

function Landing() {
  const navigate = useNavigate()
  return (
    <div>
      {/* <img src={picture} style={{ maxWidth: "100%", height: "auto" }} />*/}
      <Carousel />

      <div className='textDiv'>
        {/* <div>
          <p id="ins">Be an Inspiration</p>
          <h2 id="mainheading"> Exercise Your Mind and Body</h2>
          <p id="landpara">
            If you’ve ever experienced “barre shake” while plié-ing or trembled
            during a plank, you might have wondered what makes your muscles
            occasionally feel shaky when you’re working out.
          </p>
        </div>*/}
        <div className='getStartedDiv'>
          <button
            className='LandingButton'
            onClick={() => navigate('/user/signup')}
          >
            GET STARTED <span>&#8594;</span>
          </button>
        </div>
      </div>

      <About displayBanner={false} />
      <Features displayBanner={false} />
      <FAQs displayBanner={false} />
      <Contact displayBanner={false} />
    </div>
  )
}

export default Landing
