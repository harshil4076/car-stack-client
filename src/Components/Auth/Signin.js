import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import {Link as LinkBs} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        CarStack
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root:{
    marginBottom: "150px"
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: "100%",
    minHeight: "100vh",
    marginBottom: "150px"

  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "black",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    marginBottom: "150px"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  links: {
      textDecoration: "none",
      color: "inherit"
  }
}));

export default function SignIn(props) {
  const {authUser, errors} =props;
  const classes = useStyles();
  const [signin, setsignin] = React.useState({
    "email": "",
    "password": ""
  });
  const handleChange = (event) => {
    setsignin({...signin, [event.target.name]: event.target.value})
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const authType = "signin"
    authUser(authType, signin)
      .then(() => {
        props.history.push("/myGarage")
      }).catch(() => {
        return
      })

  }

  return (
    <Container component="main" maxWidth="md" className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onChange={handleChange} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            className={classes.submit}
          >
            Sign In
          </Button>
  {errors.message && <div>{errors.message}</div>}
          <Grid container>
           
            <Grid item>
              <LinkBs to="/signup" className={classes.links}>
                {"Don't have an account? Sign Up"}
              </LinkBs>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}