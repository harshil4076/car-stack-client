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
// List of all Makes
import {
  MAKES,
  YEAR,
  LOCATION_LIST,
  TRANSMISSION,
  DOORS,
  FUEL_TYPE,
  VEHICLE_CATEGORY,
  VEHICLE_TYPE
} from "../utils/constant.js";

//function to extract models from specific make
const MakesList = [];
MAKES.map(i => {
  return MakesList.push(i.make);
});

const oneCarItem = [
  {
    id: "5547",
    make: "Honda",
    model: "civic",
    year: 2015,
    category: "coupe",
    milage: 1252222,
    transmission: "auto",
    fueltype: "gasoline",
    doors: 5,
    engine: "4cl",
    color: "red",
    price: 1250,
    description: "It is amazing car",
    image: [
      "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    ]
  },
  {
    id: "5548",
    make: "Honda",
    model: "civic",
    year: 2015,
    category: "coupe",
    milage: 1252222,
    transmission: "auto",
    fueltype: "gasoline",
    doors: 5,
    engine: "4cl",
    color: "red",
    price: 1250,
    description: "It is amazing car",
    image: [
      "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    ]
  }
];

const img = [
  "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
];

const Routes = props => {
  const { addError, removeError, errors } = props;
  const [editItem, seteditItem] = React.useState("");
  const handleIdsearch = id => {
    handleItemsearch(id);
  };
  const handleItemsearch = searchId => {
    oneCarItem.forEach(item => {
      if ((item.id = searchId)) {
        console.log(item);
        return seteditItem(item);
      }
    });
  };
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
          errors={errors}
          removeError={removeError}
        />
      </Route>
      {/* Auth Page Link */}
      <Route exact path="/signup">
        <Auth
          onAuth={authUser}
          isSignup={true}
          {...props}
          errors={errors}
          removeError={removeError}
        />
      </Route>
      {/* New ad Link  */}
      <Route exact path="/newad">
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
      <Route exact path="/myads">
        <ViewUserAllAds
          SetGarage={oneCarItem}
          handleIdsearch={handleIdsearch}
        />
      </Route>
      <Route
        exact
        path="/editad/:id"
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
          <ViewUserSingleAd {...props} carItem={oneCarItem[0]} img={img} />
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
