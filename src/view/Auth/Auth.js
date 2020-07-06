import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link as LinkBs } from "react-router-dom";
import { useFormik } from "formik";
import SignIn from "./SignIn.js";
import SignUp from "./SignUp.js";

import * as Yup from "yup";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        CARSTACK
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "black"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  links: {
    textDecoration: "none",
    color: "inherit"
  },
  errors: {
    color: "red"
  }
}));

export default function Auth(props) {
  const { authUser, isSignin } = props;
  const classes = useStyles();

  const handleSubmit = (authType, userData) => {
    try {
      authUser(authType, userData)
        .then(response => {
          console.log("inside response");
          console.log(response);
          props.history.push("/myGarage");
        })
        .catch(() => {
          return;
        });
    } catch (error) {
      console.log(error);
    }
  };
  console.log("AUTH");
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignin ? "Sign In" : "Sign Up"}
        </Typography>

        {isSignin ? (
          <SignIn
            handleSubmit={handleSubmit}
            errorMessage={
              props.errors.message ? props.errors.message.message : ""
            }
          />
        ) : (
          <SignUp
            handleSubmit={handleSubmit}
            errorMessage={
              props.errors.message ? props.errors.message.message : ""
            }
          />
        )}

        <Grid container justify="flex-end">
          {isSignin ? (
            <Grid item>
              {"Don't have an account? "}
              <LinkBs to="/signup" className={classes.links}>
                {"Sign Up"}
              </LinkBs>
            </Grid>
          ) : (
            <Grid item>
              {"Already have an account? "}
              <LinkBs to="/signin" className={classes.links}>
                Sign in
              </LinkBs>
            </Grid>
          )}
        </Grid>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
