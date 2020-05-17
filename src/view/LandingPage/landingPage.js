import React from 'react';
//material ui components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

//imported custom components
import SearchDropDown from '../../Components/SearchDropdown/searchDropdown';
import RadioButt from '../../Components/Radio/radio'; 
import SearchModel from '../../Components/SearchModelDropdown/searchModel';
import YearDropdown from '../../Components/YearDropdown/yearDropdown';
import Locationdropdown from '../../Components/LocationDropdown/Locationdropdown';
import Banner from '../../Components/Banner/banner'

const useStyles = makeStyles(theme => ({
    mainGrid:{
        paddingTop: "10vh",
        paddingRight: "20vh",
        paddingLeft: "20vh",
        [theme.breakpoints.down("sm")]: {
            paddingRight: "5vh",
            paddingLeft: "5vh",   
        },
        marginBottom: "20vh"
    },
    searchGrid:{
        backgroundColor: "#3e3e3e",
        borderRadius: "2px",
        padding: "20px",
        [theme.breakpoints.down("sm")]: {
            justifyContent: "center"
        }
    },
    searchButton:{
        minWidth: "200px",
        height: "47.4px",
        margin: "8px"
    }
}));




export default function LandingPage (props){
    const classes = useStyles();
    //State to save input data
    const [data, setData] = React.useState({
        "make": "",
        "model": "",
        "year": "",
        "location": "",
        "checkData": null,
        "modelList": null

    })
    // Get Make input
    const getMakeSelection = (itemMake) => {
        setData({...data, make: itemMake });
    }
    //function to Get Model List from the makes input
    const getModelList = (makeInput) =>{
      for (const item in props.allMakes){
          if (props.allMakes[item].make == makeInput){
              return props.allMakes[item].model;
          }
      }
    }

    React.useEffect(()=> {
        // Calling te function only when there is a change in make
       const list = getModelList(data.make);
       setData({...data, modelList: list})
    }, [data.make])
    // setting the model state
    const getModelSelection = (name) => {
        setData({...data, model: name})
    }
    // setting the raddio input
    const collectSearchItems = (checkBox) => {
       setData({...data, checkData: checkBox})
    }
    // setting the year state
    const getYearSelection = (year) => {
        setData({...data, year: year})
    }
    //setting the location state
    const getLocationSelection = (location) => {
        setData({...data, location: location})
    }
    return(
      
        <Grid container className={classes.mainGrid}> 
        <Banner />
        <Grid   
            container     
            direction="row"
            justify="flex-end"
            alignItems="center"
             item sm={12} 
             className={classes.searchGrid}  >
               
            <RadioButt radio={props.radioItems} key={props.radioItems} collectSearchItems={collectSearchItems} />

        </Grid>
            <Grid item sm={12} className={classes.searchGrid} container     
            direction="row"
            justify="flex-end"
            alignItems="center">
                <YearDropdown widthInput={false} yearList={props.yearList} getYearSelection={getYearSelection} />
                <SearchDropDown widthInput={false} labelTitle="All Makes" MakesList={props.MakesList} getMakeSelection={getMakeSelection} />
                <SearchModel widthInput={false} ModelList={data.modelList? data.modelList : null} getModelSelection={getModelSelection} />
                <Locationdropdown LocationList={props.LocationList} getLocationSelection={getLocationSelection} />
                <Button className={classes.searchButton} variant="contained" color="primary" disableElevation>
                    Search
                </Button>
            </Grid>
        </Grid>
        
    )
}