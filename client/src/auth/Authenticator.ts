
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

export const getAccessToken = () =>{
    let accessToken = localStorage.getItem('accessToken');
    return accessToken == null ? "" : accessToken.toString();
}

export const getPersonID = () =>{
    let personID = localStorage.getItem('personID');
    return personID == null ? "" : parseInt(personID.toString());
}