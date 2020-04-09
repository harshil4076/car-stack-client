import {ADD_NEW_AD} from '../actiontypes';

const DEF_STATE = {
    newAd: {}
}

export default (state = DEF_STATE, action) => {
    switch(action.type){
        case ADD_NEW_AD: 
            return {
                newAd: action.newAd
            };
        default: 
            return state;
        
    }
}