import {SET_MYGARAGE} from '../actiontypes';

const myadsList = {
    list: []
} 

export default (state = myadsList , action) => {
    switch(action.type){
        case SET_MYGARAGE: 
            return { list: action.data};
        default:
            return state;
    }
}