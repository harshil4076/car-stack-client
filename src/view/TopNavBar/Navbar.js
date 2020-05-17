import React from 'react';
import { connect } from 'react-redux'
// material ui components
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
//react router
import { Link } from 'react-router-dom';

//action redux 
import {logout} from '../../Store/Action/auth';

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
      justifyContent: "flex-end",
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
    color: "inherit",
  },
  img: {
    width: "40px",
    height: "40px",
    borderRadius: "50%"
  }
}));

// Main navbar component
function Navbar(props) {
  //material ui makestyles 
  const classes = useStyles();

  //anchor switch for drawer open and close
  const [anchorEl, setAnchorEl] = React.useState(null);
  // Turn anchor on and off
  const isDrawerOpen = Boolean(anchorEl)

  //Handler to open side drawer
  const openDrawer = (event) => {
    setAnchorEl(event.currentTarget);
  }
  // handler to close side drawre
  const closeDrawer = () => {
    setAnchorEl(null)
  }


  return (
    <div className={classes.root}>

      <AppBar elevation={0} position="fixed" color="default" className={classes.appBar}>
        <Toolbar className={classes.contTool}>
          {/* react router dom link */}
            <Link to="/" className={classes.mainLink}>
              <Typography variant="h6" className={classes.title}>
                CARSTACK
              </Typography>
            </Link>
          <div className={classes.userLinks}>
           <Link to="/myGarage" className={classes.mainLink} >
              <Button color="inherit">My Garage</Button>
           </Link>
           <Link to="/signin" className={classes.mainLink} >
            <Button color="inherit">Sign In</Button>
            </Link>
            <Button color="inherit">Sign Out</Button>
          </div>
          {/* Hamburger menu Link Icon */}
          <IconButton onClick={openDrawer} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon  />
          </IconButton>
          {/* Side drawer component */}
          <SwipeableDrawer
            anchor="right"
            open={isDrawerOpen}
            onClose={closeDrawer}
          >
            <div className={classes.drawer}>
           
            <Link to="/myGarage" className={classes.mainLink} >
              <Button color="inherit">My Garage</Button>
           </Link>
           <Link to="/signin" className={classes.mainLink} >
            <Button color="inherit">Sign In</Button>
            </Link>
            <Button color="inherit">Sign Out</Button>
            
            </div>
      </SwipeableDrawer>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// Mapping current Redux State to props
function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { logout } )(Navbar)