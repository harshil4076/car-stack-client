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

export default function ResetPassword(props) {
  const { authUser } = props;
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: ""
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("New Password Required"),
      confirmPassword: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Confirm Password Required")
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    }),
    onSubmit: values => {
      const signIn = {
        email: values.email
      };
      //  TO-DO : Create method to reset password
      // props.handleSubmit("signin", signIn);
    }
  });
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        <form
          className={classes.form}
          onSubmit={formik.handleSubmit}
          noValidate
        >
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
                variant="outlined"
                fullWidth
                error={
                  formik.touched.newPassword && formik.errors.newPassword
                    ? true
                    : false
                }
                helperText={
                  formik.touched.newPassword && formik.errors.newPassword
                    ? formik.errors.newPassword
                    : ""
                }
                name="newPassword"
                label="Password"
                type="password"
                id="newPassword"
                {...formik.getFieldProps("newPassword")}
              />
            </Grid>{" "}
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                fullWidth
                error={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? true
                    : false
                }
                helperText={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? formik.errors.confirmPassword
                    : ""
                }
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                {...formik.getFieldProps("confirmPassword")}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                className={classes.submit}
              >
                Request Reset Link
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
