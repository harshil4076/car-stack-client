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
import carsales from "../../assets/carsales.png";
import './landingPage.css'
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
               
            <RadioButt radio={props.radioItems} key={props.radioItems} collectSearchItems={(check)=>collectSearchItems(check)} />

        </Grid>
            <Grid item sm={12} className={classes.searchGrid} container     
            direction="row"
            justify="flex-end"
            alignItems="center">
                <YearDropdown widthInput={false} yearList={props.yearList} getYearSelection={(year)=>getYearSelection(year)} />
                <SearchDropDown widthInput={false} labelTitle="All Makes" MakesList={props.MakesList} getMakeSelection={(makeSel)=>getMakeSelection(makeSel)} />
                <SearchModel widthInput={false} ModelList={data.modelList? data.modelList : null} getModelSelection={(modelSel)=>getModelSelection(modelSel)} />
                <Locationdropdown LocationList={props.LocationList} getLocationSelection={(loc)=>getLocationSelection(loc)} />
                <Button className={classes.searchButton} variant="contained" color="primary" disableElevation>
                    Search
                </Button>
            </Grid>
            <Grid className="container mt-5">
                  <div className="row">
                        <div className="col-lg-6 ">
                              <p className="text-lg-right text-wrap font-weight-normal whySection">WHY BUY YOUR NEXT VEHICLE</p>
                              <p className="text-lg-right text-wrap font-weight-normal atCarstack">at CARSTACK</p>
                              <p className="text-lg-right text-wrap font-weight-normal textCarstack">
                                    It’s all about pride. The pride we take in selling and servicing brand vehicles, some of the most reliable, safe and innovative on the road today. The pride we take in ensuring your experience here at CARSTACK exceeds your expectations, from first appointment through final delivery...and beyond. The pride we take in giving back, particularly our direct involvement in CARSTACK events that support our entire community.
                              </p>
                              <button className="book-appointment border m-3 p-3 float-left float-lg-right">MEET OUT TEAM</button>
                              <button className="book-appointment border m-3 p-3 float-left float-lg-right">CONTACT US</button>

                        </div>
                        <div className="col-lg-6">
                             <img className="img-fluid" src={carsales} />
                        </div>
                  </div>
            </Grid>
        </Grid>
        
    )
}