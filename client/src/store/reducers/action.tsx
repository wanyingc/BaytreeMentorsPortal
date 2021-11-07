import {State} from "./types"

export const SET_STATE = "SET_STATE"
export const DELETE_STATE = "DELETE_STATE"

export type ActionTypes =
 | {
     type: typeof SET_STATE; 
     payload: {
        email: string;
        roles: string[];
        accessToken: string;
     };
    }
 | {type: typeof DELETE_STATE; payload: string};


export const deleteState = (email: string): ActionTypes => ({type: DELETE_STATE, payload: email});
export const setState = (email: string, roles: string[], accessToken: string): ActionTypes => ({type: SET_STATE, payload: {email, roles, accessToken}});