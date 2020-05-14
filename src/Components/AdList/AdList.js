import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Modal from '@material-ui/core/Modal';
import NewAd from '../../view/NewAdPage/newAd'
import Paper from '@material-ui/core/Paper';

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
const AdList = (props) => {
    const { item, manageDelete, manageEdit} = props
    const classes = useStyles();
    const theme = useTheme();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [editItem, seteditItem] = React.useState()

    const handleOpen = (item, props) => {
      setOpen(true);
      seteditItem(item)
    };

    const handleClose = () => {
      setOpen(false);
    };
    const handleDelete = (id) => {
        manageDelete(id)
    }
    const handleEdit = (data) => {

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
                    </IconButton>
                    <IconButton onClick ={() => handleOpen(item, props)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton>
                        <VisibilityIcon />
                    </IconButton>
                </div>
            </div>
        </Card>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            {...props}
            className={classes.openModal}
        >
            <Paper elevation={3} >
                <NewAd {...props} item={editItem} /> 
            </Paper>
        </Modal>
        </>
    )
}


export default AdList;