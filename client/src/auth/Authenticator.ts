import store from "../store/reducers/store";

// export const isAdmin = () => {
//     const rolesList = store.getState().roles;

//     for(var roleIndex in rolesList){
//         if(rolesList[roleIndex] === "admin")
//             return true;
//     }
//     return false;
// }

export const isAdmin = () => {
    // var rolesListString = '';
    // if (localStorage.getItem('roles')){

    //     rolesListString = localStorage.getItem('roles');
    // }
    // else{
        
    // }

    // var rolesList = JSON.parse(localStorage.getItem("roles"));

    // for(var roleIndex in rolesList){
    //     if(rolesList[roleIndex] === "admin")
    //         return true;
    // }
    // return false;
    if (localStorage.getItem('admin') === "admin"){
        return true;
    }
    return false;
}


export const isUser = () => {
    // const rolesList = store.getState().roles;

    // for(var roleIndex in rolesList){
    //     if(rolesList[roleIndex] === "user")
    //         return true;
    // }
    // return false;
    if (localStorage.getItem('user') === "user"){
        return true;
    }
    return false;
}
//isMentor
export const getAccessToken = () =>{
    // let accessToken = JSON.parse(localStorage.getItem('accessToken') || '{}');
    let accessToken = localStorage.getItem('accessToken');
    return accessToken == null ? "" : accessToken.toString();
}
//getRoles