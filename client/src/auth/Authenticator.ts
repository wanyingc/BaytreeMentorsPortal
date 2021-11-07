import store from "../store/reducers/store";

export const isAdmin = () => {
    const rolesList = store.getState().roles;

    for(var roleIndex in rolesList){
        if(rolesList[roleIndex] === "admin")
            return true;
    }
    return false;
}
export const isUser = () => {
    const rolesList = store.getState().roles;

    for(var roleIndex in rolesList){
        if(rolesList[roleIndex] === "user")
            return true;
    }
    return false;
}
//isMentor
export const getAccessToken = () =>{
    const accessToken = store.getState().accessToken;
    return accessToken;
}
//getRoles