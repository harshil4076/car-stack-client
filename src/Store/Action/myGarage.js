import { apiCall } from '../../services/api';
import { addError, removeError } from './errors';
import {SET_MYGARAGE} from '../actiontypes';

export function setMyGarage (list){
    return {
        type: SET_MYGARAGE,
        list
    }
}

export function myGarage(userdata, token){
    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiCall("get", `/api/user/${userdata}/ads/`, token)
            .then((addata) => {
                dispatch(setMyGarage(addata))
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