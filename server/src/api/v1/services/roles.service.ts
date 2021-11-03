// processes roles derived from Views into our format
const getRoles = (roles: string) => {
    let rolesArray: string[] = roles.split("|");
    let processedRoles: string[] = [];
    rolesArray.forEach(role => {
        role = role.toLocaleLowerCase();
        role = role.replace(/ /g, "_"); // replaces " " with "_" to allow working with roles enum
        processedRoles.push(role);
    });
    return processedRoles;
}

export default getRoles;