import { ActionTypes, DELETE_STATE, SET_STATE } from './action';
import {State, User} from './types'
import { createStore} from 'redux'


//redux implementation
function StateReducer(state: State ={
    email: '',
    roles: [],
    accessToken: ''
}, action: ActionTypes){
    switch(action.type){
        case SET_STATE:
            return {
                ...state,
                email: action.payload.email,
                roles: action.payload.roles,
                accessToken: action.payload.accessToken,
            };
        default:
            return state;
    }
}

const store = createStore(StateReducer);

export default store;