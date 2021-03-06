import { ActionTypes, DELETE_STATE, SET_STATE } from './action';
import {State, User} from './types'

//redux implementation
function StateReducer(state: State ={
    email: '',
    roles: [],
    accessToken: '',
    personID: ''
}, action: ActionTypes){
    switch(action.type){
        case SET_STATE:
            return {
                ...state,
                email: action.payload.email,
                roles: action.payload.roles,
                accessToken: action.payload.accessToken,
                personID: action.payload.personID,
            };
        default:
            return state;
    }
}

export default StateReducer;