import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import downArrow from "./downArrow.png";
import { isAuthenticated, signout } from "../../auth/helper";
const Navbar = ({ isLoggedInUser }) => {
  const [show, setShow] = useState(false); // for mobile view
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //    localStorage.getItem("token") ? true : false
  const [user, setUser] = useState({});

  const onLogout = () => {
    signout()
      .then((res) => {
        setUser(false);
        // setIsLoggedIn(false);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  const loggedInUser = () => {
    const data = isAuthenticated();
    //console.log("Data", data);
    setUser(data?.user);
    console.log("This is user from local storage", user);
    console.log("User is logged in or not", isLoggedIn);

    // setIsLoggedIn(true);
  };

  useEffect(() => {
    console.log("header useEffect");

    // TODO : isLoggedInUser is handled from app component , try to handle from here using above isLoggedIN by setting true on login and false on logout
    // TODO : user role admin then chnage the navbar accordingly as admin dashboard etc.
    loggedInUser();
  }, []);

  return (
    <>
      {" "}
      <nav>
        {/*Category*/}
        <div className="logo">
          <NavLink className="nav-link" to="/">
            <img src="./logo.jpg" width="40px" />
          </NavLink>
        </div>
        {/* 2nd menu part  */}
        <div className="menu-link">
          <ul>
            {!isLoggedInUser && (
              <>
                <li>
                  <NavLink className="nav-link" to="/home">
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/features">
                    FEATURES
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/blogs">
                    BLOGS
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/about">
                    ABOUT
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/contact">
                    CONTACT{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/faqs">
                    FAQs
                  </NavLink>
                </li>
                <div className="loginSignup">
                  <li>
                    <NavLink className="nav-link" to="/user/login">
                      LOGIN
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/user/signup">
                      SIGNUP
                    </NavLink>
                  </li>
                </div>
              </>
            )}
            {isLoggedInUser && (
              <>
                {" "}
                <li>
                  <NavLink className="nav-link" to="/home">
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/features">
                    FEATURES
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/blogs">
                    BLOGS
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/about">
                    SUCCESS STORIES
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/contact">
                    COMMUNITY
                  </NavLink>
                </li>
                <div className="loginSignup">
                  <li className="nav-link">
                    <p className="nav-name">{user?.first_name}</p>
                  </li>

                  <li className="nav-link">
                    <NavLink
                      className="nav-link"
                      to="/"
                      onClick={() => {
                        onLogout();
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

        {/* hamburget menu start  */}
        <div className="hamburger-menu">
          <div className="hamburger-logoDiv">
            <img src={logo} className="mb-4 mt-0" width={"60%"}></img>
          </div>
          <div className="hamburger-rightDiv">
            <i class="fa fa-search"></i>
            <i class="fa fa-shopping-cart"></i>

            <NavLink
              to="/"
              onClick={() => {
                setShow(!show);
                console.log(show);
              }}
            >
              {!show && <i class="fa fa-bars" style={{ color: "black" }}></i>}
            </NavLink>
          </div>
        </div>

        {show && (
          <div className="menu-link mobile-menu-link">
            <ul>
              <div className="mobileTop">
                <i
                  class="fa fa-close"
                  onClick={() => {
                    setShow(!show);
                  }}
                ></i>
              </div>
              <img src={logo} className="mb-4 mt-0" width={"60%"}></img>

              <NavLink className="nav-link mobile-logo" to="/">
                <i class="fa fa-list-alt"></i> SHOP BY CATEGORY
              </NavLink>
              <li>
                <NavLink className="nav-link" to="/">
                  BRANDS
                </NavLink>
              </li>
              <hr />

              <li>
                <NavLink className="nav-link" to="/">
                  PROMOTIONS
                </NavLink>
              </li>
              <hr />

              <li>
                <NavLink className="nav-link" to="/">
                  GROCERY
                </NavLink>
              </li>
              <hr />

              <li>
                <NavLink className="nav-link" to="/">
                  PERFUMES
                </NavLink>
              </li>
              <hr />

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

              <li>
                <NavLink className="nav-link" to="/">
                  BABY CARE
                </NavLink>
              </li>
              <hr />

              <NavLink className="nav-link mobileloginSignup" to="/">
                <i class="fa fa-map-marker " aria-hidden="true"></i>
                Track your order
              </NavLink>
              <NavLink className="nav-link mobileAccount" to="/">
                <i class="fa fa-user"></i>
                Account
              </NavLink>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
