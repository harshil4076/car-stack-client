import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import EmojiEmotionsSharpIcon from '@material-ui/icons/EmojiEmotionsSharp';
import CallIcon from '@material-ui/icons/Call';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: "15vh",
        minHeight: "100vh",
        paddingLeft: "10vh",
        paddingRight: "10vh",
        backgroundColor: "#eee",
        position: "relative"

    },
    gridList:{
        maxWidth: 930,
        maxHeight: "100%",

    },
    sliderDiv:{
        maxWidth: 930,
        maxHeight: "100%"
    },
      mainImage:{
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      detailspaper:{
        marginTop:"2vh"
      },
      expansionPanel:{
        marginTop:"2vh"
      },
      buttonPaper:{
        marginTop:"2vh",
        marginBottom:"4vh",
        padding:"5vh"
      }
      
}))

function ViewUserSingleAd (props) {
    const { carItem, img } = props;
    const classes = useStyles()
 
    return (
        <div className={classes.root}>
           <Grid container
                direction="row"
                justify="space-around"
                alignItems="center">
                <Grid 
                    item
                    xs={12} 
                    className={classes.gridList} >
                        <Paper elevation={3}>
                            <h1>
                            <span>{carItem.year}</span>
                            <span>   {carItem.make}</span>
                            <span>   {carItem.model}</span>

                            </h1>
                                
                        </Paper>
                        <Slider 
                            duration={1500}
                            classNames={{
                                animateIn: 'animateIn',
                                animateOut: 'animateOut'
                            } 
                            }
                            >
                            {img.map((img,i) => (
                                <div className={classes.sliderDiv}>
                                    <img className={classes.mainImage} src={img} alt="image"/>
                                </div>
                            ))}
                        </Slider>
                         <Paper className={classes.detailspaper}>
                             <Grid container
                                    direction="row">
                             <Grid md={6} sm={12}>
                                    <List>
                                        <ListItem>
                                            <ListItemText
                                                primary="Category"
                                                secondary={carItem.category}
                                            />
                                        </ListItem>
                                        <Divider/>
                                        <ListItem>
                                            <ListItemText
                                                primary="Transmission"
                                                secondary={carItem.transmission}
                                            />
                                        </ListItem>
                                        <Divider/>
                                        <ListItem>
                                            <ListItemText
                                                primary="Milage"
                                                secondary={carItem.milage}
                                            />
                                        </ListItem>
                                        <Divider/>
                                        <ListItem>
                                            <ListItemText
                                                primary="Fuel Type"
                                                secondary={carItem.fueltype}
                                            />
                                        </ListItem>
                                    </List>
                             </Grid>
                            
                             <Grid md={6} sm={12}>
                             <List>
                                        <ListItem>
                                            <ListItemText
                                                primary="Doors"
                                                secondary={carItem.doors}
                                            />
                                        </ListItem>
                                        <Divider/>
                                        <ListItem>
                                            <ListItemText
                                                primary="Engine"
                                                secondary={carItem.engine}
                                            />
                                        </ListItem>
                                        <Divider/>
                                        <ListItem>
                                            <ListItemText
                                                primary="Color"
                                                secondary={carItem.color}
                                            />
                                        </ListItem>
                                        <Divider/>
                                        <ListItem>
                                            <ListItemText
                                                primary="CAD-$"
                                                secondary={carItem.price}
                                            />
                                        </ListItem>
                                    </List>
                             </Grid>
                             </Grid>
                        </Paper>  
                        <ExpansionPanel className={classes.expansionPanel}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography className={classes.heading}>Description</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        {carItem.description}
                                    </Typography>
                                </ExpansionPanelDetails>
                        </ExpansionPanel> 
                        <Paper className={classes.buttonPaper}>
                            <Grid
                                container
                                direction="row"
                                justify="space-evenly"
                                alignItems="flex-start"
                            >
                                <Chip
                                    label="Buy this car Now !!"
                                    color="primary"
                                    icon={<EmojiEmotionsSharpIcon />}
                                />
                                <Chip
                                    label="Inquire Details"
                                    color="primary"
                                    icon={<CallIcon />}
                                />
                            </Grid>
                            
                        </Paper>   
               </Grid>
           </Grid>
        </div>
    )
}

export default ViewUserSingleAd;