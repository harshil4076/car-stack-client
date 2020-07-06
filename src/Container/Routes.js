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
  const { addError, removeError, errors } = props;
  const [editItem, seteditItem] = React.useState("");
  const handleIdsearch = id => {
    handleItemsearch(id);
  };
  const handleItemsearch = searchId => {
    ONECARITEM.forEach(item => {
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
          allMakes={MAKES}
          MakesList={MakesList}
          radioItems={VEHICLE_CATEGORY}
          yearList={YEAR}
          LocationList={LOCATION_LIST}
        />
      </Route>
      {/* Auth Page Link */}
      <Route exact path="/signin">
        <Auth
          onAuth={authUser}
          {...props}
          isSignin={true}
          errors={errors}
          removeError={removeError}
        />
      </Route>
      {/* Auth Page Link */}
      <Route exact path="/signup">
        <Auth
          onAuth={authUser}
          isSignin={false}
          {...props}
          errors={errors}
          removeError={removeError}
        />
      </Route>
      <PrivateRoute exact path="/signout" currentUser={currentUser} />
      {/* New ad Link  */}
      <Route path="/newad">
        <NewAd
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
            yearList={YEAR}
            MakesList={MakesList}
            allMakes={MAKES}
            categoryList={VEHICLE_TYPE}
            transmission={TRANSMISSION}
            doors={DOORS}
            fuelType={FUEL_TYPE}
          />
        )}
      />
      <Route
        exact
        path="/viewad/:id"
        render={props => (
          <ViewUserSingleAd {...props} carItem={ONECARITEM[0]} img={IMAGES} />
        )}
      />
    </Switch>
  );
};
const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    errors: state.errors,
    year: YEAR,
    SetGarage: state.myGarage,
    newAd: state.addNewAd
  };
};
export default withRouter(
  connect(mapStateToProps, { authUser, removeError, myGarage, addNewAd })(
    Routes
  )
);
