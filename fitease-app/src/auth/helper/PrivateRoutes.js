import React from "react";
import { isAuthenticated } from "./index";
import { Route, Redirect } from "react-router-dom";

const PrivateRoutes = ({ component: Component, ...rest }) => {
  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated() ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: props.location },
              }}
            />
          )
        }
      />
    </div>
  );
};

export default PrivateRoutes;
