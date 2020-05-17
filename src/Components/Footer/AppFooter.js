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
        Harshil Patel
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.text.primary,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
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
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid item className={classes.icons}>
                <span><Link href="https://github.com/harshil4076/" target="_blank" color="inherit">{'GITHUB | '} </Link> </span>
                <span><Link href="https://www.linkedin.com/in/harshil-patel-5157bb14a/" target="_blank" color="inherit">{' LINKEDIN |'} </Link> </span>
                <span><Link href="https://drive.google.com/open?id=1bdAe5rN8Jwg4nPUVzGVWAVL82nvEKOtEJRMEUlnsifE" target="_blank" color="inherit">RESUME</Link> </span>
              </Grid>
              <Grid item className={classes.copyright}>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom className={classes.item}>
              Legal
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link href="" color="inherit">Terms</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="" color="inherit">Privacy</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom className={classes.item}>
              Language
            </Typography>
            <TextField
              select
              SelectProps={{
                native: true,
              }}
              className={classes.language}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
          </Grid>
      </Container>
    </Typography>
  );
}