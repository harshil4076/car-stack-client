// make api call to update single ad 
import { apiCall } from '../../services/api';
import { addError, removeError } from './errors';
import { UPDATE_AD } from '../actiontypes'; 

// after update dispatch the action to change state of that ad 
function SetGetAd (getAd) {
    return {
        type: GET_AD,
        getAd
    }
}
// update input is in request body
export function updateAd(newAdData){
    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiCall("put", `/api/user/${newAdData.user}/ads/createnewad`, newAdData)
            .then(( addata ) => {
                dispatch(SetGetAd(addata))
                dispatch(removeError());
                resolve();
            })
            .catch((err) => {
                dispatch(addError(err.message));
                    reject();
            })
        })
    }
}