export interface State {
    email: string,
    roles: string[],
    accessToken: string,
    personID: string
}

export interface User {
    users: State[];
    newUser: string;
}
