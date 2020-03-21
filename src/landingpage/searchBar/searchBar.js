import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchDropDown from './searchDropdown';
import RadioButt from './radio'; 
import Button from '@material-ui/core/Button';
import SearchModel from './searchModel';
import YearDropdown from './yearDropdown';
import Locationdropdown from './Locationdropdown';
import Banner from './banner/banner'

const useStyles = makeStyles(theme => ({
    mainGrid:{
        paddingRight: "20vh",
        paddingLeft: "20vh",
        [theme.breakpoints.down("sm")]: {
            paddingRight: "5vh",
            paddingLeft: "5vh",   
        }
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




export default function SearchBar (props){
    const classes = useStyles();
    const [data, setData] = React.useState({
        "make": "",
        "model": "",
        "year": "",
        "location": "",
        "checkData": null,
        "modelList": null

    })
    const getMakeSelection = (itemMake) => {
        setData({...data, make: itemMake.make });
    }

    const getModelList = (makeInput) =>{
      for (const item in props.allMakes){
          if (props.allMakes[item].make == makeInput){
              return props.allMakes[item].model;
          }
      }
    }
    React.useEffect(()=> {
       const list = getModelList(data.make);
       setData({...data, modelList: list})
    }, [data.make])
    const getModelSelection = (name) => {
        setData({...data, model: name})
    }
    const collectSearchItems = (checkBox) => {
       setData({...data, checkData: checkBox})
    }
    const getYearSelection = (year) => {
        setData({...data, year: year})
    }
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
                <YearDropdown yearList={props.yearList} getYearSelection={getYearSelection} />
                <SearchDropDown MakesList={props.MakesList} getMakeSelection={getMakeSelection} />
                <SearchModel ModelList={data.modelList? data.modelList : null} getModelSelection={getModelSelection} />
                <Locationdropdown LocationList={props.LocationList} getLocationSelection={getLocationSelection} />
                <Button className={classes.searchButton} variant="contained" color="primary" disableElevation>
                    Search
                </Button>
            </Grid>
        </Grid>
        
    )
}