import { combineReducers } from 'redux';
import errors from './errors';
import currentUser from './currentUser';
import newAd from './newAd'
import myGarage from './myGarage'
const rootReducer = combineReducers({
    currentUser,
    errors,
    newAd,
    myGarage
});

export default rootReducer;