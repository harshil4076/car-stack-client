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
      margin: "2vh",
      justifyContent: "space-between",
    maxWidth: "100vh",

    },
    cover: {
        width: 151,
      },
      details: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-evenly"

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
const AdList = (props) => {
    const { item, manageDelete, manageEdit} = props
    const classes = useStyles();
    const theme = useTheme();


    const handleDelete = (id) => {
        manageDelete(id)
    }
    const handleEdit = (id) => {
      manageEdit(id);
    }
    return (
        <>
        <Card className={classes.root}>
            <CardMedia image={item.image[0]} className={classes.cover} />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                    <span>{item.year} </span><span>{item.make} </span><span>{item.model}</span>  
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      $ {item.price}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                      <IconButton onClick={() => handleDelete(item._id)}>
                          <DeleteIcon />
                      </IconButton >
                    <Link to = {{
                      pathname: `/editad/${item.id}`
                    }}>
                        <IconButton onClick={() => {handleEdit(item.id)}}>
                            <EditIcon />
                        </IconButton>
                    </Link>
                    <Link to = {{
                      pathname: `/viewad/${item.id}`
                    }}>
                        <IconButton>
                            <VisibilityIcon />
                        </IconButton>
                    </Link>
                </div>
            </div>
        </Card>
        </>
    )
}


export default AdList;