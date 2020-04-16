import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import YearDropdown from '../../landingpage/searchBar/yearDropdown';
import SearchDropDown from '../../landingpage/searchBar/searchDropdown';
import SearchModel from '../../landingpage/searchBar/searchModel'
import TextInput from '../../landingpage/searchBar/textInput';
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider';
import _ from 'lodash';
import ImagesUpload from 'react-images-upload';
import { uploadImages } from '../../Handlers/firebase';


const useStyles = makeStyles(theme => ({
    textDesc: {
        padding: "5vh"
    },
    uploadDiv: {
        width: "100%",
        border: "1px solid rgba(0, 0, 0, 0.12)"
    },
    imgDisplayDiv: {
        position: "relative",
        display: "flex",
        padding: "4vh",
        "&:hover":{
            zIndex: 1,
            '& $deleteIcon':{
                display: "block"
            }
        }
    },
    imgList:{
        width: "20vh",
        height: "20vh",
        margin: "2.5vh",
        
    },
    deleteIcon:{
        display: "none",
        position: "absolute",
        right: 20,
        bottom: 20
    },
    input:{
        display: "none"
    }
}))

const NewAd = (props) => {
    const {yearList, MakesList,allMakes, categoryList,
             transmission, doors, fuelType, currentUser, addNewAd} = props
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

      const handleImageUpload = () => {
          let urlList =[];
          let uploadAction = picList.map(pic => {
            return uploadImages(pic, newAd.user)
                .then(data => {
                urlList.push(data);
                 setNewAd({...newAd, image:urlList})
            })
          });
          return Promise.all([uploadAction]).then((result) => {
            handlePost(); 
          });  
      }

    const handlePost = () => {
        addNewAd(newAd)
          .then(() => {
            return props.history.push("/myGarage")
          }).catch(() => {
            return
          })
    }
    const [picList, setPicList] = React.useState([])
    const onDrop = (picture) =>{
        setPicList(picture)
    }
   
    useEffect(() => {
        const list = getModelList(newAd.make);
        setNewAd({...newAd, modelList:list });
    }, [newAd.make])
     return (
         <form>
        <Grid   container
                direction="row"
                justify="center"
                alignItems="center">
            <Grid item xs={12} sm={12}
            container
            direction="row"
            justify="space-evenly"
            alignItems="center">
                <YearDropdown widthInput={true}  yearList={yearList} getYearSelection={getYearSelection} />
                <SearchDropDown widthInput={true} labelTitle="All Makes" MakesList={MakesList} getMakeSelection={getMakeSelection}  />
            </Grid>
            <Grid item xs={12} sm={12}
            container
            direction="row"
            justify="space-evenly"
            alignItems="center">
                <SearchModel widthInput={true} ModelList={newAd.modelList} getModelSelection={getModelSelection} />
                <SearchDropDown widthInput={true} labelTitle={"Category"} MakesList={categoryList} getMakeSelection={getCategorySelection}  />
            </Grid>
            <Grid item xs={12} sm={12}
                container
                direction="row"
                justify="space-evenly"
                alignItems="center">
                <SearchDropDown widthInput={true} labelTitle={"Fuel Type"} MakesList={fuelType} getMakeSelection={getFuelType}  />
                <SearchDropDown widthInput={true} labelTitle={"Transmission"} MakesList={transmission} getMakeSelection={getTransmission}  />
            </Grid>
            <Grid item xs={12} sm={12}
                container
                direction="row"
                justify="space-evenly"
                alignItems="center">
                    <SearchDropDown widthInput={true} labelTitle={"Doors"} MakesList={doors} getMakeSelection={getDoors}  />
                    <TextInput isFullWidth={true} labelText="Milage" getTextValue={getMilage} />
                </Grid>
            <Grid item xs={12} sm={12}
                container
                direction="row"
                justify="space-evenly"
                alignItems="center">
                <TextInput isFullWidth={true} labelText="Engine" getTextValue={getEngineType} />
                <TextInput isFullWidth={true} labelText="Color" getTextValue={getColorType} />
            </Grid>
            <Grid item xs={12} sm={12}
                container
                direction="row"
                justify="space-evenly"
                alignItems="center">
                <TextInput isFullWidth={true} labelText="$" getTextValue={getPrice} />
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
                justify="space-evenly"
                alignItems="center">
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
                            <Button onClick={()=> handleImageUpload()} variant="contained" color="primary" disableElevation>
                                Upload Images
                            </Button>  
                </Grid>
                <Grid item xs={12} sm={12}
                container
                direction="row"
                justify="space-evenly"
                alignItems="center">
                    <Button onClick={ ()=> handlePost()} variant="contained" color="primary" disableElevation>
                        Post Ad
                    </Button>
                </Grid>
        </Grid>
        </form>
    )
}

export default NewAd;