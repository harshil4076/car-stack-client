import React, { useState, useEffect } from 'react';
//material Ui components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
// custom components
import YearDropdown from '../../../Components/YearDropdown/yearDropdown';
import SearchDropDown from '../../../Components/SearchDropdown/searchDropdown';
import SearchModel from '../../../Components/SearchModelDropdown/searchModel';
import TextInput from '../../../Components/TextInput/textInput';
import _ from 'lodash';
import ImagesUpload from 'react-images-upload';
import ImageWidget from '../../../Components/ImageWidget/imageWidget'


const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: "15vh",
        paddingRight: "5vh",
        paddingLeft : "5vh"
    },
    carDetailsSection: {
        paddingBottom: "5vh"
    },
    priceSection:{
        paddingBottom:"5vh"
    },
    textDescription:{
        paddingBottom: "5vh",
       [theme.breakpoints.up('sm')]:{
           width: "100%"
       }
    },
    mainImageGrid: {
        paddingBottom: "5vh"
    },
    uploadImagesButtom:{
        paddingTop: "2vh"
    },
    postAdButtonGrid:{
        margin: "4vh",
        boxShadow: "2px 2px 3px 0 rgba(0, 0, 0, 0.05)",
        borderRadius: "10px"
    },
    postAdButton:{
        margin: "4vh",
    }
}))

const NewAd = (props) => {
    const {
            yearList, 
            MakesList,
            allMakes, 
            categoryList,
            transmission, 
            doors, 
            fuelType, 
            currentUser, 
            item
            } = props
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
        "user": currentUser? currentUser.user.id: null,
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
                alignItems="center"
                className={classes.root}>
            <Grid className={classes.carDetailsSection}>
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
            </Grid>
            <Grid item xs={12} sm={12}
                container
                direction="row"
                justify="space-evenly"
                alignItems="flex-start"
                className={classes.priceSection}
                >
                <TextInput item={item? item.price: null} isFullWidth={true} labelText="Price in CAD $" getTextValue={getPrice} />
            </Grid>

            <Grid item xs={12} sm={6}
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.textDescription}>
                <TextInput item={item? item.description: null} labelText="Write a short Description" getTextValue={getDescription} isDescription={true} />
            </Grid>
            {item?
            <Grid item xs={12} sm={12}
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.textDescription}>
                <ImageWidget tileData={item.img} />
            </Grid>
            :
            null
            }
            <Grid item xs={12} sm={12}
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                className={classes.mainImageGrid}
                >
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
                    <Grid item sm={6}
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        className={classes.uploadImagesButtom}
                        >
                        <Button 
                            size="small" 
                            onClick={()=> handleImageUpload()} 
                            variant="outlined" 
                            color="primary" >
                            Upload Images
                        </Button>  
                    </Grid> 
                </Grid>
                <Grid item xs={12} sm={12}
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                className={classes.postAdButtonGrid}>
                    <Button 
                        className={classes.postAdButton} 
                        size="large" 
                        onClick={ ()=> handlePost()} 
                        variant="outlined" 
                        color="secondary">
                        {item? "Update Ad" : "Post Ad"}
                    </Button>
                </Grid>
        </Grid>
    
    )
}

export default NewAd;