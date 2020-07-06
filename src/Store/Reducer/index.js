import { combineReducers } from 'redux';
import errors from './errors';
import currentUser from './currentUser';
import newAd from './newAd'
import myGarage from './myGarage';
import staticProps from './staticProps';

//combining all reducers
const rootReducer = combineReducers({
    currentUser,
    errors,
    newAd,
    myGarage,
    staticProps
});

export default rootReducer;