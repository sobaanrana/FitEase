import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import downArrow from './downArrow.png'
import { authenticate, isAuthenticated, signout } from '../../auth/helper'
import { FaUserAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from '../../features/User/userSlice'
import { setLoggedInUser } from '../../features/User/userSlice'
import fiteaseLogo from '../../assets/images/final-logo.png'

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false) // for mobile view

  const [isLoggedInUser, setIsLoggedInUser] = useState(
    localStorage.getItem('loggedInUser') ? true : false
  )
  //    localStorage.getItem("token") ? true : false
  const [user, setUser] = useState({})

  const onLogout = () => {
    signout()
      .then((res) => {
        setUser(false)
        // setIsLoggedIn(false);
        window.location.reload()
      })
      .catch((err) => console.log(err))
  }
  const loggedInUser = () => {
    const data = isAuthenticated()
    //console.log("Data", data);
    setUser(data?.user)
    console.log('This is user from local storage', user)
    // console.log('User is logged in or not', isLoggedIn)

    // setIsLoggedIn(true);
  }
  /*
  const scroll = () => {
    const section = document.querySelector("#features");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };*/

  // <------------------- Getting user from redux toolkit ------------------->

  //const hello = authenticate()
  //console.log('Set this hello data to Redux', hello)
  /*const dispatch = useDispatch()
  if (user) {
    dispatch(setLoggedInUser(user)) // user that is state wiht data from local storage
  }
  const newUser = useSelector(selectUser)
  console.log('This is User', newUser)*/
  useEffect(() => {
    console.log('header useEffect')

    // TODO : isLoggedInUser is handled from app component , try to handle from here using above isLoggedIN by setting true on login and false on logout
    // TODO : user role admin then chnage the navbar accordingly as admin dashboard etc.
    loggedInUser()
  }, [])

  return (
    <>
      <nav>
        {/*Logo*/}
        <div className='logo'>
          <NavLink className='nav-link' to='/'>
            <img src={fiteaseLogo} width='100%' />
          </NavLink>
        </div>
        {/* 2nd menu part  */}
        <div className='menu-link'>
          <ul>
            {!isLoggedInUser && (
              <>
                <li>
                  <NavLink className='nav-link' to='/home'></NavLink>
                </li>
                <li>
                  <NavLink className='nav-link underlineHover' to='/features'>
                    FEATURES
                  </NavLink>
                </li>
                <li>
                  <NavLink className='nav-link underlineHover' to='/blogs'>
                    BLOGS
                  </NavLink>
                </li>
                <li>
                  <NavLink className='nav-link underlineHover' to='/workouts'>
                    WORKOUTS
                  </NavLink>
                </li>
                <li>
                  <NavLink className='nav-link underlineHover' to='/about'>
                    ABOUT
                  </NavLink>
                </li>
                <li>
                  <NavLink className='nav-link underlineHover' to='/contact'>
                    CONTACT{' '}
                  </NavLink>
                </li>
                <li>
                  <NavLink className='nav-link underlineHover' to='/faqs'>
                    FAQs
                  </NavLink>
                </li>
                <div className='loginSignup'>
                  <li>
                    <NavLink className='nav-link ' to='/user/login'>
                      <FaUserAlt />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className='nav-link' to='/user/login'>
                      LOGIN
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className='nav-link' to='/user/signup'>
                      SIGNUP
                    </NavLink>
                  </li>
                </div>
              </>
            )}
            {isLoggedInUser && (
              <>
                {/*
               <li>
                  <NavLink className='nav-link' to='/home'>
                    HOME
                  </NavLink>
                </li>
                */}
                <li>
                  <NavLink className='nav-link ml-5' to='/user/dashboard'>
                    DASHBOARD
                  </NavLink>
                </li>
                <li>
                  <NavLink className='nav-link' to='/blogs'>
                    BLOGS
                  </NavLink>
                </li>

                <li>
                  <NavLink className='nav-link' to='/workouts'>
                    WORKOUTS
                  </NavLink>
                </li>
                <li>
                  <NavLink className='nav-link' to='/success-stories'>
                    SUCCESS STORIES
                  </NavLink>
                </li>

                <li>
                  <NavLink className='nav-link' to='/contact'>
                    CONTACT
                  </NavLink>
                </li>

                <div className='loginSignup'>
                  <li>
                    <NavLink className='nav-link ' to='/user/account-settings'>
                      <FaUserAlt />
                    </NavLink>
                  </li>
                  <li className=' link-username'>{user?.first_name}</li>

                  <li className='nav-link'>
                    <NavLink
                      className='nav-link'
                      to='/'
                      onClick={() => {
                        onLogout()
                      }}
                    >
                      Logout
                    </NavLink>
                  </li>
                </div>
              </>
            )}
          </ul>
        </div>

        {/* hamburger menu start  */}
        <div className='hamburger-menu'>
          <div className='hamburger-logoDiv'>
            <img src={fiteaseLogo} width='100px' />
          </div>
          <div className='hamburger-rightDiv'>
            <i class='fa fa-user'></i>

            <NavLink
              to='/'
              onClick={() => {
                setShowMobileNav(!showMobileNav)
              }}
            >
              {!showMobileNav && (
                <i class='fa fa-bars' style={{ color: 'black' }}></i>
              )}
            </NavLink>
          </div>
        </div>

        {/*For mobile view */}
        {showMobileNav && !isLoggedInUser && (
          <div className='menu-link mobile-menu-link'>
            <ul>
              <div className='mobileTop'>
                <i
                  class='fa fa-close'
                  onClick={() => {
                    setShowMobileNav(!showMobileNav)
                  }}
                ></i>
              </div>

              {/* <img src={fiteaseLogo} className='mb-4 mt-0' width='100px'></img> */}

              <li>
                <NavLink
                  className='nav-link'
                  to='/features'
                  onClick={() => {
                    setShowMobileNav(!showMobileNav)
                  }}
                >
                  FEATURES
                </NavLink>
              </li>
              <hr />

              <li>
                <NavLink
                  className='nav-link'
                  to='/blogs'
                  onClick={() => {
                    setShowMobileNav(!showMobileNav)
                  }}
                >
                  BLOGS
                </NavLink>
              </li>
              <hr />

              <li>
                <NavLink
                  className='nav-link'
                  to='/about'
                  onClick={() => {
                    setShowMobileNav(!showMobileNav)
                  }}
                >
                  ABOUT
                </NavLink>
              </li>
              <hr />

              <li>
                <NavLink
                  className='nav-link'
                  to='/contact'
                  onClick={() => {
                    setShowMobileNav(!showMobileNav)
                  }}
                >
                  CONTACT
                </NavLink>
              </li>
              <hr />

              <li>
                <NavLink
                  className='nav-link'
                  to='/faqs'
                  onClick={() => {
                    setShowMobileNav(!showMobileNav)
                  }}
                >
                  FAQs
                </NavLink>
              </li>
              <hr />

              <NavLink
                className='nav-link mobileAccount'
                to='/user/account-settings'
                onClick={() => {
                  setShowMobileNav(!showMobileNav)
                }}
              >
                <i class='fa fa-user'></i>
                Account
              </NavLink>
            </ul>
          </div>
        )}

        {showMobileNav && isLoggedInUser && (
          <div className='menu-link mobile-menu-link'>
            <ul>
              <div className='mobileTop'>
                <i
                  class='fa fa-close'
                  onClick={() => {
                    setShowMobileNav(!showMobileNav)
                  }}
                ></i>
              </div>
              {/* <img src={fiteaseLogo} className='mb-4 mt-0' width='100px'></img> */}

              <li>
                <NavLink
                  className='nav-link'
                  to='/user/dashboard'
                  onClick={() => {
                    setShowMobileNav(!showMobileNav)
                  }}
                >
                  Dashboard
                </NavLink>
              </li>
              <hr />

              <li>
                <NavLink
                  className='nav-link'
                  to='/blogs'
                  onClick={() => {
                    setShowMobileNav(!showMobileNav)
                  }}
                >
                  BLOGS
                </NavLink>
              </li>
              <hr />

              <li>
                <NavLink
                  className='nav-link'
                  to='/success-stories'
                  onClick={() => {
                    setShowMobileNav(!showMobileNav)
                  }}
                >
                  SUCCESS STORIES
                </NavLink>
              </li>
              <hr />

              <li>
                <NavLink
                  className='nav-link'
                  to='/contact'
                  onClick={() => {
                    setShowMobileNav(!showMobileNav)
                  }}
                >
                  CONTACT
                </NavLink>
              </li>
              <hr />

              <NavLink
                className='nav-link mobileAccount'
                to='/'
                onClick={() => {
                  onLogout()
                  setShowMobileNav(!showMobileNav)
                }}
              >
                <i class='fa fa-user'></i>
                Logout
              </NavLink>
            </ul>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar

/*

<li>
                <NavLink className="nav-link" to="/">
                  ITALAIN FOOD
                </NavLink>
              </li>
              <hr />

              <li>
                <NavLink className="nav-link" to="/">
                  ELECTORNICS
                </NavLink>
              </li>
              <hr />

              <li>
                <NavLink className="nav-link" to="/">
                  PERSONAL CARE
                </NavLink>
              </li>
              <hr />
*/
