import React from "react";
import { Switch, withRouter, Route } from "react-router-dom";
import LandingPage from "../view/LandingPage/landingPage";
import Auth from "../view/Auth/Auth";
import { connect } from "react-redux";
import { authUser } from "../Store/Action/auth";
import { myGarage } from "../Store/Action/myGarage";
import { addError, removeError } from "../Store/Action/errors";
import { addNewAd } from "../Store/Action/newAd";
import NewAd from "../view/MyGarage/NewAdPage/newAd";
import ForgotPassword from "../view/Auth/ForgotPassword.js";
import ResetPassword from "../view/Auth/ResetPassword.js";
import ViewUserAllAds from "../view/MyGarage/ViewUsersAllAds/viewUserAllAds";
import ViewUserSingleAd from "../view/MyGarage/ViewUserSingleAd/viewUserSingleAd";
import { PrivateRoute } from "./PrivateRoute.js";
// List of all Makes
import {
  MAKES,
  YEAR,
  LOCATION_LIST,
  TRANSMISSION,
  DOORS,
  FUEL_TYPE,
  VEHICLE_CATEGORY,
  VEHICLE_TYPE,
  IMAGES,
  ONECARITEM
} from "../utils/constant.js";
//function to extract models from specific make
let MakesList = [];
MAKES.map(i => {
  return MakesList.push(i.make);
});

const Routes = props => {
  const { addError, removeError, errors, authUser, staticProps } = props;
  const [editItem, seteditItem] = React.useState("");
  const handleIdsearch = id => {
    handleItemsearch(id);
  };
  const handleItemsearch = searchId => {
    staticProps.ONECARITEM.forEach(item => {
      if ((item.id = searchId)) {
        return seteditItem(item);
      }
    });
  };
  const currentUser = props.currentUser;
  console.log(currentUser);
  return (
    <Switch>
      {/* Landing Page Link */}
      <Route exact path="/">
        <LandingPage
          {...props}
          allMakes={staticProps.MAKES}
          MakesList={staticProps.MAKESLIST}
          radioItems={staticProps.VEHICLE_CATEGORY}
          yearList={staticProps.YEAR}
          LocationList={staticProps.LOCATION_LIST}
          images={staticProps.IMAGES}
        />
      </Route>
      {/* Auth Page Link */}
      <Route exact path="/signin">
        <Auth
          {...props}
          isSignin={true}
          errors={errors}
          removeError={removeError}
        />
      </Route>
      {/* Auth Page Link */}
      <Route exact path="/signup">
        <Auth
          isSignin={false}
          {...props}
          errors={errors}
          removeError={removeError}
        />
      </Route>
      <Route exact path="/forgot-password">
        <ForgotPassword />
      </Route>
      <Route exact path="/reset-password">
        <ResetPassword />
      </Route>
      <PrivateRoute exact path="/signout" currentUser={currentUser} />
      {/* New ad Link  */}
      <Route path="/newad">
        <NewAd
        {...props}
          yearList={YEAR}
          MakesList={MakesList}
          allMakes={MAKES}
          categoryList={VEHICLE_TYPE}
          transmission={TRANSMISSION}
          doors={DOORS}
          fuelType={FUEL_TYPE}
        />
      </Route>
      {/* Route to users all Ads */}
      <PrivateRoute
        exact
        key="1"
        path="/myads"
        component={ViewUserAllAds}
        currentUser={currentUser}
      />
      <PrivateRoute
        exact
        path="/edit/:id"
        render={routeProps => (
          <NewAd
            {...routeProps}
            item={editItem}
            yearList={staticProps.YEAR}
            MakesList={staticProps.MAKESLIST}
            allMakes={staticProps.MAKES}
            categoryList={staticProps.VEHICLE_TYPE}
            transmission={staticProps.TRANSMISSION}
            doors={staticProps.DOORS}
            fuelType={staticProps.FUEL_TYPE}
          />
        )}
      />
      <Route
        exact
        path="/viewad/:id"
        render={props => (
          <ViewUserSingleAd {...props} carItem={staticProps.ONECARITEM[0]} img={staticProps.IMAGES} />
        )}
      />
    </Switch>
  );
};
const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    errors: state.errors,
    SetGarage: state.myGarage,
    newAd: state.addNewAd,
    staticProps: state.staticProps.dropItems
  };
};
export default withRouter(
  connect(mapStateToProps, { authUser,addError, removeError, myGarage, addNewAd })
  (Routes)
);
