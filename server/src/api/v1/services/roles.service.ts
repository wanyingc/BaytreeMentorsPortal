const checkRoles = (role: string) => {
    role = role.toLowerCase();
    if(role.includes("women mentor")){
        return "women_mentor";
    }
    if(role.includes("youth mentor")){
        return "youth_mentor";
    }
    if(role.includes("into school mentor")){
        return "into_school_mentor";
    }
}

export default checkRoles;