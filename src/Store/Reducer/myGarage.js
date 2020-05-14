import {SET_MYGARAGE} from '../actiontypes';


export default (state = [] , action) => {
    switch(action.type){
        case SET_MYGARAGE: 
            return [...action.list];
        default:
            return state;
    }
}