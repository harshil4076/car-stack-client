import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import redcar from '../../assets/red-car.png';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';
import Link from '@material-ui/core/Link';
import BootstrapCarousel from '../BootstrapCarousel/BootstrapCarousel'


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
export default function Banner(props){
    const { images } = props;
    const classes = useStyles()
    return (
      <Grid container>
          <Grid item xs={12} sm={6}>
          <p className={classes.bannerHeading}>DRIVE YOUR PASSION</p>
          </Grid>
          <Grid item xs={12} sm={6} >
                <img alt={redcar} src={redcar} className={classes.imgGrid} />
          </Grid>
            <Grid item xs={12} >
         </Grid>
      </Grid>
    )
}

