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
import * as Yup from "yup";
import SnackbarContent from "../../Components/Snackbar/SnackbarContent.js";

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

export default function SignUp(props) {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Username Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Password Required")
    }),
    onSubmit: values => {
      const signUp = {
        username: values.username,
        email: values.email,
        password: values.password
      };
      console.log(values);
      props.handleSubmit("signup", signUp);
    }
  });

  return (
    <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {props.errorMessage && (
            <SnackbarContent
              message={props.errorMessage}
              close
              color="danger"
            />
          )}
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            name="username"
            error={
              formik.touched.username && formik.errors.username ? true : false
            }
            helperText={
              formik.touched.username && formik.errors.username
                ? formik.errors.username
                : ""
            }
            variant="outlined"
            required
            fullWidth
            id="username"
            label="username"
            autoFocus
            {...formik.getFieldProps("username")}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            error={formik.touched.email && formik.errors.email ? true : false}
            helperText={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""
            }
            fullWidth
            id="email"
            label="Email Address"
            {...formik.getFieldProps("email")}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            fullWidth
            error={
              formik.touched.password && formik.errors.password ? true : false
            }
            helperText={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""
            }
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="password"
            {...formik.getFieldProps("password")}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
