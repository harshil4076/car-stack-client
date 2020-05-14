import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import YearDropdown from '../../../Components/YearDropdown/yearDropdown';
import SearchDropDown from '../../../Components/SearchDropdown/searchDropdown';
import SearchModel from '../../../Components/SearchModelDropdown/searchModel'
import TextInput from '../../../Components/TextInput/textInput';
import Button from '@material-ui/core/Button'
import _ from 'lodash';
import ImagesUpload from 'react-images-upload';


const useStyles = makeStyles(theme => ({
}))

const NewAd = (props) => {
    const {yearList, MakesList,allMakes, categoryList,
             transmission, doors, fuelType, currentUser, addNewAd, handleNav, item} = props
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
        "user": currentUser.user.id,
        "description":"",
        "modelList": "",
        "image": []

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
  
    const handlePost = () =>{
        
    }
                
      
    const handleImageUpload = async () => {
    }

    const [picList, setPicList] = React.useState(item? item.images: [])
    const onDrop = (picture) =>{
        setPicList(picture)
    }
   
    useEffect(() => {
        const list = getModelList(newAd.make);
        setNewAd({...newAd, modelList:list });
    }, [newAd.make])
     return (
      
        <Grid   container
                direction="row"
                justify="center"
                alignItems="center">
            <Grid item xs={12} sm={12}
            container
            direction="row"
            justify="space-evenly"
            alignItems="center">
                <YearDropdown item={item?item.year: null} widthInput={true}  yearList={yearList} getYearSelection={getYearSelection} />
                <SearchDropDown item={item?item.make: null} widthInput={true} labelTitle="All Makes" MakesList={MakesList} getMakeSelection={getMakeSelection}  />
            </Grid>
            <Grid item xs={12} sm={12}
            container
            direction="row"
            justify="space-evenly"
            alignItems="center">
                <SearchModel item={item?item.model: null} widthInput={true} ModelList={newAd.modelList} getModelSelection={getModelSelection} />
                <SearchDropDown item={item?item.category: null} widthInput={true} labelTitle={"Category"} MakesList={categoryList} getMakeSelection={getCategorySelection}  />
            </Grid>
            <Grid item xs={12} sm={12}
                container
                direction="row"
                justify="space-evenly"
                alignItems="center">
                <SearchDropDown item={item?item.fueltype: null} widthInput={true} labelTitle={"Fuel Type"} MakesList={fuelType} getMakeSelection={getFuelType}  />
                <SearchDropDown item={item?item.transmission: null} widthInput={true} labelTitle={"Transmission"} MakesList={transmission} getMakeSelection={getTransmission}  />
            </Grid>
            <Grid item xs={12} sm={12}
                container
                direction="row"
                justify="space-evenly"
                alignItems="center">
                    <SearchDropDown item={item?item.doors: null} widthInput={true} labelTitle={"Doors"} MakesList={doors} getMakeSelection={getDoors}  />
                    <TextInput item={item? item.milage : null} isFullWidth={true} labelText="Milage" getTextValue={getMilage} />
                </Grid>
            <Grid item xs={12} sm={12}
                container
                direction="row"
                justify="space-evenly"
                alignItems="center">
                <TextInput item={item? item.engine: null} isFullWidth={true} labelText="Engine" getTextValue={getEngineType} />
                <TextInput item={item? item.color: null} isFullWidth={true} labelText="Color" getTextValue={getColorType} />
            </Grid>
            <Grid item xs={12} sm={12}
                container
                direction="row"
                justify="space-evenly"
                alignItems="center">
                <TextInput item={item? item.price: null} isFullWidth={true} labelText="$" getTextValue={getPrice} />
                </Grid>
            <Grid item xs={12} sm={6}
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.textDesc}>
                <TextInput item={item? item.description: null} labelText="Description" getTextValue={getDescription} isDescription={true} />
            </Grid>
            <Grid item xs={12} sm={12}
                container
                direction="row"
                justify="space-evenly"
                alignItems="center">
                    <Grid item sm={6}>
                    <ImagesUpload 
                        withIcon={true}
                        buttonText='Choose images'
                        fileContainerStyle={{maxWidth:"800px", maxHeight: "800px"}}
                        singleImage={false}
                        onChange={onDrop}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                        withPreview={true}
                        />
                    </Grid>
                    <Grid item sm={6}
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center">
                        <Button onClick={()=> handleImageUpload()} variant="contained" color="primary" disableElevation>
                            Upload Images
                        </Button>  
                    </Grid> 
                </Grid>
                <Grid item xs={12} sm={12}
                container
                direction="row"
                justify="space-evenly"
                alignItems="center">
                    <Button onClick={ ()=> handlePost()} variant="contained" color="primary" disableElevation>
                        {item? "Update Ad" : "Post Ad"}
                    </Button>
                </Grid>
        </Grid>
    
    )
}

export default NewAd;