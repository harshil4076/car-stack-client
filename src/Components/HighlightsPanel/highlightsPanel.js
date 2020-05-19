import React from 'react';
//connect to redux store
import { connect } from 'react-redux'
//material ui components
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';


//react router
import { matchPath } from "react-router";
import { Link } from 'react-router-dom'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      maxWidth: 930,
      marginTop: "2vh",
      maxHeight: "100%",
    },
    cover: {
        width: 151,
      },
      details: {
        display: 'flex',
        flexDirection: 'column',
      },
      content: {
        flex: '1 0 auto',
      },
      controls: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
      },
      openModal:{
          backgroundColor: "white"
      }
}))
const HighlightsPanel = (props) => {
    const { } = props
    const classes = useStyles();

    return (
        <>
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                </Typography>
                </CardContent>
                <div className={classes.controls}>

                </div>
            </div>
        </Card>
        </>
    )
}


export default HighlightsPanel;