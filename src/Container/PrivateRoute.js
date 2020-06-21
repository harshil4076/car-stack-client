import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { authUser } from "../Store/Action/auth";

export const PrivateRoute = ({
  component: Component,
  currentUser,
  ...rest
}) => {
  console.log("Inside prive route");
  console.log(currentUser);
  return (
    <Route
      {...rest}
      render={props => {
        console.log(props.location);

        return currentUser.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};
