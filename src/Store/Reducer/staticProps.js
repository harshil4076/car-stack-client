import {STATIC_PROPS} from '../actiontypes';
import {  MAKES,
        MAKESLIST,
        YEAR,
        LOCATION_LIST,
        TRANSMISSION,
        DOORS,
        FUEL_TYPE,
        VEHICLE_CATEGORY,
        VEHICLE_TYPE,
        IMAGES,
        ONECARITEM } from '../../utils/constant';

    const DEFAULT_STATE = {
    dropItems: {  MAKES,
        MAKESLIST,
        YEAR,
        LOCATION_LIST,
        TRANSMISSION,
        DOORS,
        FUEL_TYPE,
        VEHICLE_CATEGORY,
        VEHICLE_TYPE,
        IMAGES,
        ONECARITEM }
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case STATIC_PROPS: 
        return { };
        default: 
        return state;
    }
}