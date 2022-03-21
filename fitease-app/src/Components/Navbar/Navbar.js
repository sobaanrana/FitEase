//import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated, signout } from "../../auth/helper";
//axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token"); //now x-auth-token is sent with every network request and server will consider logged in
import "./Navbar.css";
function Navbar({ isLoggedInUser }) {
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

  /*
  const loggedInUser = () => {
    try {
      let token = localStorage.getItem("token");
      if (token) {
        console.log("getUser token", token);
        axios
          .get("https://usman-recipes.herokuapp.com/api/users/me", {
            headers: {
              "x-auth-token": token,
              "content-type": "application/json",
            },
          })
          .then((response) => {
            console.log("line 27", response);
            setUser(response.data);
            setIsLoggedIn(true);
          })
          .catch((error) => console.log(error));
      }
    } catch (error) {
      console.log(error);
    }
  };
*/
  const loggedInUser = () => {
    const data = isAuthenticated();
    console.log("Data", data);
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
    <nav className="navbar navbar-expand-lg py-3 navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand font-weight-bold px-5" to="/">
          FitEase
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse navbarFlex"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0  navbarFlexItem navLinksContainer">
            {!isLoggedInUser && (
              <>
                {" "}
                <li className="nav-item ">
                  <Link
                    className="nav-link active underlineHover"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    className="nav-link active underlineHover"
                    to="/products"
                  >
                    Features
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active underlineHover" to="/blogs">
                    Blogs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active underlineHover" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active underlineHover"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </>
            )}
            {isLoggedInUser && (
              <>
                {" "}
                <li className="nav-item ">
                  <Link
                    className="nav-link active underlineHover"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    className="nav-link active underlineHover"
                    to="/products"
                  >
                    Features
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active underlineHover" to="/blogs">
                    Blogs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active underlineHover" to="/about">
                    Success Stories
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active underlineHover" to="/about">
                    Community
                  </Link>
                </li>
                <li className=" nav-item">
                  <Link className="nav-link active underlineHover" to="/">
                    Account
                  </Link>
                </li>
              </>
            )}
          </ul>
          {/*  <form className="d-flex navbarFlexItem mx-2">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-success mx-5 px-5" type="submit">
              Search
            </button>
          </form>*/}

          <div className="loginSignupContainer">
            <ul className="navbar-nav navbarFlexItem">
              {isLoggedInUser ? (
                <>
                  <li className="nav-item">
                    <p className="nav-link active">{user?.first_name}</p>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link btn btn-outline-primary text-white px-4"
                      to="/"
                      onClick={() => {
                        onLogout();
                      }}
                    >
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item ">
                    <Link
                      className=" nav-link btn btn-outline-primary text-white px-4"
                      to="/user/login"
                    >
                      LogIn
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link btn btn-outline-primary text-white px-4"
                      to="/user/signup"
                    >
                      SignUp
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
