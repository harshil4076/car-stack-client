import React from 'react';
import AdList from '../../../Components/AdList/AdList'
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: "20vh",
    paddingLeft: "30vh",
    paddingRight: "30vh",
    minHeight: "100vh",
    maxWidth: "100vh",
    [theme.breakpoints.down("md")]:{
      paddingTop: "20vh",
      paddingLeft: "3vh",
      paddingRight: "3vh",
    }
  }
}))
export default function ViewUserAllAds (props){
  const classes = useStyles()
  const {SetGarage, handleIdsearch} = props
  const manageDelete = (id) => {
    console.log(id)
  }
  const manageEdit = (id) => {
    handleIdsearch(id)
  }
return (
    <div className={classes.root}>
        { 
          SetGarage.map((item, i) => (
            <AdList {...props} item={item} key={i} manageDelete={manageDelete} manageEdit={manageEdit} />
          ))
        }
    </div>
)
}