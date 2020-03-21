import {ADD_NEW_AD} from '../actiontypes';

const newAd = {
    "year": "",
    "make": "",
    "model": "",
    "category": "",
    "user": ""
}

export default (state=newAd, action) => {
    switch(action.type){
        case ADD_NEW_AD: 
            return {
                year: action.year,
                make: action.make,
                model: action.model,
                category: action.category,
                user: action.user
            };
        default: 
            return state;
        
    }
}