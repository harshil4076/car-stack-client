import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import YearDropdown from '../../landingpage/searchBar/yearDropdown';
import SearchDropDown from '../../landingpage/searchBar/searchDropdown';
import SearchModel from '../../landingpage/searchBar/searchModel'
import TextInput from '../../landingpage/searchBar/textInput';
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import DeleteIcon from '@material-ui/icons/Delete'
import _ from 'lodash'

const useStyles = makeStyles(theme => ({
    textDesc: {
        padding: "5vh"
    },
    uploadDiv: {
        width: "100%",
        border: "1px solid rgba(0, 0, 0, 0.12)"
    },
    imgDisplayDiv: {
        display: "flex",
        padding: "4vh"
    },
    imgList:{
        width: "20vh",
        height: "20vh",
        margin: "2.5vh"
    },
    input:{
        display: "none"
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
    const uploadImages = () => {
        window.cloudinary.openUploadWidget({ cloud_name: 'harshil4076', upload_preset: 'carstack' },
        function(error, result)
         { console.log(error, result) });
    }

    const [displayImages, setDisplayImages] = React.useState([])
    const renderImages = (
            
        displayImages.map((file, idx) => (
          <div className={classes.imgDisplayDiv}  key={idx}>
              <img src={file.data} className={classes.imgList} />
              <IconButton aria-label="delete" onClick={() => handleImageDelete(file)}>
                  <DeleteIcon />
              </IconButton>
          </div>
        ))     
 )   
    const handleImageAdd = (e) => {
        const file = e.target.files;
        for (let i = 0; i<=file.length; i++){
            writeFileList(file[i])
        }  
         
    }
    const writeFileList = (file) =>{
        let fileReader = new FileReader();
        if(file){
            fileReader.readAsDataURL(file)
        }

        fileReader.onload = () => {
            const file = {
                data: fileReader.result
            }
            addLoadedFile(file)

        }
    }
    const addLoadedFile = (file) => {
        setDisplayImages([...displayImages, file])
    }
    const handleImageDelete = (file) => {
        let loadedFiles = displayImages;
        let newLoadedFiles = _.filter(loadedFiles, (ldFiles) => {
            return ldFiles != file;
        });
        console.log("delete")
            setDisplayImages([...newLoadedFiles]);
           const inputTag =  document.getElementById("img-upload");
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
                <div className={classes.uploadDiv}>
                    <h1>Upload</h1>
                    <Divider />
                    <input id="img-upload" type="file" multiple accept="image/*" onInput={(event) => handleImageAdd(event)} className={classes.input} id="icon-button-file" type="file" />
                    <label htmlFor="icon-button-file">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                        </IconButton>
                    </label> 
                    <Divider />
                        {renderImages}
                </div>
               
            </Grid>
            <Grid item xs={12} sm={12}
                container
                direction="row"
                justify="center"
                alignItems="center">
                  <Button onClick={uploadImages} variant="contained" color="primary" disableElevation>
                    Upload
                </Button>  
                </Grid>
        </Grid>
    )
}

export default NewAd;