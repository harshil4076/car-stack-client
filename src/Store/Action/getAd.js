import { apiCall } from '../../services/api';
import { addError, removeError } from './errors';
import {GET_AD} from '../actiontypes';

function SetGetAd (getAd) {
    return {
        type: GET_AD,
        getAd
    }
}

export function getAd(user_id, ad_id){
    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiCall("get", `/api/user/${user_id}/ads/${ad_id}`)
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