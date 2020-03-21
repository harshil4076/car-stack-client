import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import {logout} from '../Store/Action/auth'
const useStyles = makeStyles(theme => ({
  contTool:{
    display: "flex",
    [theme.breakpoints.down('sm')]: {
      justifyContent: "space-between"
    }
  },
  menuButton: {
    display: "flex",
    [theme.breakpoints.up('md')]: {
        display: "none"
    },
  },
  appBar:{
    backgroundColor: "black",
    color: "white", 
  },
  title: {
    fontweight: "bold",
    color:"white",
    letterSpacing: "0.3rem",
    fontSize: "22pt",
    fontFamily: "'Oswald', sans-serif",
    paddingLeft: "50px"
  },
  userLinks:{
      flexGrow: 1,
      display: "flex",
      justifyContent: "space-evenly",
      [theme.breakpoints.down('sm')]: {
        display: "none"
    },
  },
  drawer:{
    width: "50vh",
    display: "flex",
    flexDirection: "column"
  },
  mainLink: {
    textDecoration: "none",
    color: "inherit"
  }
}));

function Navbar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isDrawerOpen = Boolean(anchorEl)
  const { currentUser } = props;
  const openDrawer = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const closeDrawer = () => {
    setAnchorEl(null)
  }
  const onDrawerOpen = () => {

  }
  const logOut = () => {
   props.logout()
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar className={classes.contTool}>
            <Link to="/" className={classes.mainLink}>
              <Typography variant="h6" className={classes.title}>
                CARSTACK
              </Typography>
            </Link>
          <div className={classes.userLinks}>
            <Button color="inherit">Sell My Car</Button>
            <Button color="inherit">Shop Cars</Button>
            <Link to ="/signin" className={classes.mainLink}>
              {
                currentUser.isAuthenticated?
                (<Button color="inherit" onClick={logOut}>Log Out</Button>)
              :
              <Button color="inherit">Sign In</Button>
              }
            </Link>
          </div>
          <IconButton onClick={openDrawer} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon  />
          </IconButton>
          <SwipeableDrawer
            anchor="right"
            open={isDrawerOpen}
            onClose={closeDrawer}
            onOpen={onDrawerOpen}
          >
            <div className={classes.drawer}>
            <Button color="inherit">Sell My Car</Button>
            <Button color="inherit">Shop Cars</Button>
            <Button color="inherit">Log Out</Button>
            <Button color="inherit">Sign In</Button> 
            
            </div>
      </SwipeableDrawer>
        </Toolbar>
      </AppBar>
    </div>
  );
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { logout } )(Navbar)