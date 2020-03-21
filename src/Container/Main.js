import React from 'react';
import { Switch, withRouter, Route} from 'react-router-dom';
import SearchBar from '../landingpage/searchBar/searchBar';
import SignIn from '../signin/Signin';
import SignUp from '../signin/SignUp';
import { connect } from 'react-redux'
import { authUser } from '../Store/Action/auth';
import { myGarage } from '../Store/Action/myGarage'
import { addError, removeError } from "../Store/Action/errors";
import MyGarage from '../Components/MyGarage'
const allMakes = [
    {
        make: "Honda",
        model: ["civic", "crv", "pilot"]
    },
    {
        make: "Toyota",
        model: ["corolla", "rav4", "prius"]
    }
  ];
  const year = ["2015", "2016", "2017", "2018", "2019", "2020"];
  const LocationList = ["Toronto", "Mississauga", "Hamilton", "Oakville", "Burlington"]
  const MakesList =[];
  allMakes.map(i => {
   return MakesList.push(i.make);
  });
  const radioItems = [
    "New",
    "Used",
    "Certified Pre-Owned"
  ]
  const categoryList = ["sedan", "suv", "coupe", "truck", "hatchback", "convertible", "minivan", "wagon", "electric"]
  const transmission = ["auto", "manual"]
  const fuelType = ["gasoline", "diesel", "propane", "electric"]
  const doors = ["2", "3", "4", "5", "6", "7"]
const Main = (props) => {
  const {addError, removeError,errors} = props
    return (
       
      <Switch>
        <Route exact path="/">
            <SearchBar {...props} allMakes={allMakes} MakesList={MakesList} radioItems={radioItems} yearList={year} LocationList={LocationList} />
        </Route>
        <Route exact path="/signin">
           <SignIn onAuth={authUser} {...props}  errors={errors} removeError={removeError}   />
           </Route>
        <Route exact path="/signup">
            <SignUp onAuth={authUser} {...props} errors={errors} removeError={removeError}  />
        </Route>
        <Route exact path="/mygarage">
            <MyGarage {...props} doors={doors} fuelType={fuelType} transmission={transmission}  categoryList={categoryList} errors={errors} removeError={removeError} updateGarage={myGarage}
            allMakes={allMakes} MakesList={MakesList} yearList={year} LocationList={LocationList}
            />
        </Route>
      </Switch>

    )
}
const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        errors: state.errors,
        year: year,
        myGarage: state.myGarage
    }
}
export default withRouter(
    connect(mapStateToProps, {authUser, removeError, myGarage})
    (Main)
    );