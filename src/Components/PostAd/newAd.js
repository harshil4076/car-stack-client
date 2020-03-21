import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import YearDropdown from '../../landingpage/searchBar/yearDropdown';
import SearchDropDown from '../../landingpage/searchBar/searchDropdown';
import SearchModel from '../../landingpage/searchBar/searchModel'
import TextInput from '../../landingpage/searchBar/textInput';

const useStyles = makeStyles(theme => ({
    textDesc: {
        padding: "5vh"
    }
}))

const NewAd = (props) => {
    const {yearList, MakesList,allMakes, categoryList, transmission, doors, fuelType} = props
    const classes = useStyles();
    const [newAd, setNewAd] = useState({
        "make": "",
        "model": "",
        "year": "",
        "category": "",
        "milage": "",
        "transmission": "",
        "fueltype": "",
        "doors": "",
        "engine": "",
        "color": "",
        "price": "",
        "user": "",
        "image": [],
        "description":"",
        "modelList": ""

    })
    const getYearSelection = (data) =>{
        setNewAd({...newAd, year:data})
    }   
    const getMakeSelection = (itemMake) => {
        setNewAd({...newAd, make: itemMake });
    }
    const getModelSelection =(itemModel) => {
        setNewAd({...newAd, model:itemModel })
    }
    const getCategorySelection = (itemCaegory) => {
        setNewAd({...newAd, category: itemCaegory})
    }
    const getMilage = (itemMilage) => {
        setNewAd({...newAd, milage: itemMilage})
    }
    const getTransmission = (itemTrans) => {
        setNewAd({...newAd, transmission: itemTrans})
    }
    const getFuelType = (itemFuel) => {
        setNewAd({...newAd, fueltype: itemFuel})
    }
    const getDoors = (itemDoors) => {
        setNewAd({...newAd, doors: itemDoors})
    }
    const getEngineType = (engineType) => {
        setNewAd({...newAd, engine: engineType})
    }
    const getColorType = (colorType) => {
        setNewAd({...newAd, color: colorType})
    }
    const getPrice = (itemPrice) => {
        setNewAd({...newAd, price: itemPrice})
    }
    const getDescription = (desc) => {
        setNewAd({...newAd, description: desc})
    }
    const getModelList = (makeInput) =>{
        for (const item in allMakes){
            if (allMakes[item].make == makeInput){
                return allMakes[item].model;
            }
        }
      }
    useEffect(() => {
        const list = getModelList(newAd.make);
        setNewAd({...newAd, modelList:list });
    }, [newAd.make])
     return (
        <Grid container
                direction="row"
                justify="center"
                alignItems="center">
            <Grid item xs={12} sm={12}
            container
            direction="row"
            justify="center"
            alignItems="center">
                <YearDropdown  yearList={yearList} getYearSelection={getYearSelection} />
                <SearchDropDown labelTitle="All Makes" MakesList={MakesList} getMakeSelection={getMakeSelection}  />
                <SearchModel ModelList={newAd.modelList} getModelSelection={getModelSelection} />
                <SearchDropDown labelTitle={"Category"} MakesList={categoryList} getMakeSelection={getCategorySelection}  />
            </Grid>
            <Grid item xs={12} sm={12}
                container
                direction="row"
                justify="center"
                alignItems="center">
                <TextInput labelText="Milage" getTextValue={getMilage} />
                <SearchDropDown labelTitle={"Transmission"} MakesList={transmission} getMakeSelection={getTransmission}  />
                <SearchDropDown labelTitle={"Fuel Type"} MakesList={fuelType} getMakeSelection={getFuelType}  />
                <SearchDropDown labelTitle={"Doors"} MakesList={doors} getMakeSelection={getDoors}  />

            </Grid>
            <Grid item xs={12} sm={12}
                container
                direction="row"
                justify="center"
                alignItems="center">
                <TextInput labelText="Engine" getTextValue={getEngineType} />
                <TextInput labelText="Color" getTextValue={getColorType} />
                <TextInput labelText="Price" getTextValue={getPrice} />
            </Grid>
            <Grid item xs={12} sm={6}
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.textDesc}>
                <TextInput  labelText="Description" getTextValue={getDescription} isDescription={true} />
            </Grid>
            <Grid item xs={12} sm={12}
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <input type="file" name="file"/>
            </Grid>
        </Grid>
    )
}

export default NewAd;