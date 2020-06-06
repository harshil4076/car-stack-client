import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from './Typography';
import TextField from './TextField';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="">
        www.carstack.ca
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: "center",
    backgroundColor: theme.palette.text.primary,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
    color: "white"
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.common.white,
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.common.white,
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    color: "white",
    textDecoration: "none"

  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
  item: {
      color: "white"
  },
  copyright:{
    color: "white"
  }
}));

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'fr-FR',
    name: 'Français',
  },
];

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
              <Grid item className={classes.copyright}>
                <Copyright />
              </Grid>
      </Container>
    </Typography>
  );
}