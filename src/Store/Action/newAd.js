import { apiCall } from '../../services/api';
import { addError, removeError } from './errors';
import {ADD_NEW_AD} from '../actiontypes';

function addNewAd (newAd) {
    return {
        type: ADD_NEW_AD,
        newAd
    }
}

export function addNewAd(newAdData, token){
    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiCall("post", `/api/user/${newAdData.user}/ads/createnewad`, token)
            .then(({ addata }) => {
                dispatch(addNewAd(addata))
                dispatch(removeError());
                resolve();
            })
            .catch(() => {
                dispatch(addError(err.message));
                    reject();
            })
        })
    }
}


