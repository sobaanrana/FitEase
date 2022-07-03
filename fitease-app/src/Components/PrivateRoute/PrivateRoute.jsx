import React from 'react'
import { Navigate, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = localStorage.getItem('loggedInUser') ? true : false

  return (
    <Route
      {...rest}
      render={(props) => {
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Navigate
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }}
    />
  )
}

export default PrivateRoute
