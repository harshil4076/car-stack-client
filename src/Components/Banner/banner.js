import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import redcar from '../../assets/red-car.png';

const useStyles = makeStyles(theme => ({
    bannerHeading: {
        fontFamily: "'Titillium Web', sans-serif",
        fontSize: "48px",
        textAlign: "center",
        fontWeight: 600,
        letterSpacing: "0.3rem"
    },
    imgGrid:{
        width: "100%",
        height: "100%"
    }
}));
export default function Banner(){
    const classes = useStyles()
    return (
      <Grid container>
          <Grid item xs={12} sm={6}>
          <p className={classes.bannerHeading}>DRIVE YOUR PASSION</p>
          </Grid>
          <Grid item xs={12} sm={6} >
                <img alt={redcar} src={redcar} className={classes.imgGrid} />
          </Grid>
      </Grid>
    )
}

