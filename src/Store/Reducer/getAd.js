import {GET_AD} from '../actiontypes';

const DEF_STATE = {
    getAd: {}
}

export default (state = DEF_STATE, action) => {
    switch(action.type){
        case GET_AD: 
            return {
                getAd: action.getAd
            };
        default: 
            return state;
        
    }
}