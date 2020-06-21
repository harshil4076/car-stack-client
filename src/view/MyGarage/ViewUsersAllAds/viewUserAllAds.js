import React from "react";
import AdList from "../../../Components/AdList/AdList";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: "20vh",
    paddingLeft: "30vh",
    paddingRight: "30vh",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
      paddingTop: "20vh",
      paddingLeft: "3vh",
      paddingRight: "3vh"
    }
  }
}));
export default function ViewUserAllAds(props) {
  const classes = useStyles();
  const { SetGarage, handleIdsearch } = props;
  const manageDelete = id => {
    console.log(id);
  };
  const manageEdit = id => {
    handleIdsearch(id);
  };
  return (
    <div></div>
    // <Grid item xs={12}>
    //   // <div className={classes.root}>
    //   //     // {
    //   //     //   SetGarage.map((item, i) => (
    //   //     //     <AdList {...props} item={item} key={i} manageDelete={manageDelete} manageEdit={manageEdit} />
    //   //     //   ))
    //   //     // }
    //   //
    //   // </div>
    //   </Grid>
  );
}
