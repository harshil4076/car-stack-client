import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link as LinkBs} from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup'



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        CARSTACK
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "black",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  links:{
      textDecoration: "none",
      color: "inherit"
  },
  errors:{
    color: "red"
  }
}));

export default function Auth(props) {
  const { authUser, isSignin, isSignup } = props;
  const classes = useStyles();
  
  const formik = useFormik({
    initialValues:{
      username: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().when("isSignup",{
        is: true,
        then: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
      } ),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string().when("isSignup", {
        is: true , 
        then: Yup.string()
        .min(8, 'Must be 8 characters or more')
        .required('Required'),
      })
    }),
    onSubmit: values => {
      const signin = {
        "email": values.email,
        "password": values.password
      }
      const signup = {
        "username": values.username,
        "email": values.email,
        "password": values.password
      }
      if (isSignup){
        alert(JSON.stringify(signup, null, 2));
        handleSubmit(signup, signin, isSignup)
      }
      else{
        alert(JSON.stringify(signin, null, 2));
        handleSubmit(signup, signin, isSignup)
      }
    }
  })
  const handleSubmit = (signup, signin, isSignup) => {
    if(isSignup){
      const authType = "signup"
      // authUser(authType, signup)
        .then(() => {
          props.history.push("/myGarage")
        }).catch(() => {
          return
        })
    }else {
      const authType = "signin"
    // authUser(authType, signin)
      .then(() => {
        props.history.push("/myGarage")
      }).catch(() => {
        return
      })
    }
    
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignup? "Sign Up" : "Sign In"}
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
          <Grid container spacing={2}>
            {isSignup ? 
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="Username"
                  name="username"
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="username"
                  autoFocus
                  {...formik.getFieldProps('username')}
                />
                {formik.touched.username && formik.errors.username? <div className={classes.errors}>{formik.errors.username}</div> : null}
              </Grid> 
              : null}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email? <div className={classes.errors}>{formik.errors.email}</div> : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                {...formik.getFieldProps('password')}
              />
              {formik.touched.password && formik.errors.password? <div className={classes.errors}>{formik.errors.password}</div> : null}
            </Grid>
            { isSignup ? 
              <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
            : null}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            className={classes.submit}
          >
            {isSignup? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justify="flex-end">
            {isSignup ? <Grid item>
              <LinkBs to="/signin" className={classes.links}>
                Already have an account? Sign in
              </LinkBs>
            </Grid> : 
              <Grid item>
              <LinkBs to="/signup" className={classes.links}>
                {"Don't have an account? Sign Up"}
              </LinkBs>
            </Grid>
            }
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}