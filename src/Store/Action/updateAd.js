// make api call to update single ad 
import { apiCall } from '../../services/api';
import { addError, removeError } from './errors';
import { UPDATE_AD } from '../actiontypes'; 
// update input is in request body


// after update dispatch the action to change state of that ad 