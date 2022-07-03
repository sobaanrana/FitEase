import React from 'react'
import { connect } from 'react-redux'
import './NotFound.css'
//import Helmet from 'react-helmet'
// <img src={robot} width="150px" height="auto" />

export const NotFound = () => {
  return (
    <>
      <div className='notfound-main-div'>
        {/* <Helmet>
          <title>Page Not Found | COMVERSE</title>
          <meta name='description' content='' />
          <meta name='keyword' content='' />
        </Helmet> */}
        <img src='./robot.jpg' width='150px' height='auto' />
        <h2 className='pagenotfoound-count'>
          404 | <span className='pagenotfoound-count1'> Page Not Found</span>
        </h2>
      </div>
    </>
  )
}

export default NotFound
