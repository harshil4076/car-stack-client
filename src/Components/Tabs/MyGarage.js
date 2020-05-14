import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ManageAds from './manageAds';
import NewAd from "./PostAd/newAd"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: "100%",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  newAd:{
    width: "100%",
    height: "100%",
    paddingTop: "5vh"
  }
}));

function MyGarage(props) {
    const { allMakes, MakesList, yearList, LocationList, myGarage, currentUser } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
const handleClick = (event) => {
  // event.preventDefault();
  //   myGarage(currentUser.user.id, localStorage.jwtToken)
  //     .then(() => {
  //     return
  //   }).catch(() => {
  //     return
  //   })

}
  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Account Profile" {...a11yProps(0)} />
        <Tab label="Post Ads" {...a11yProps(1)} />
        <Tab label="Manage Ads" onClick={handleClick} {...a11yProps(2)} />
        
      </Tabs>
      <TabPanel value={value} index={0}>
        Account Profile
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.newAd}>
      <NewAd {...props} handleNav={handleChange} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ManageAds {...props} />
      </TabPanel>
    </div>
  );
}

export default MyGarage