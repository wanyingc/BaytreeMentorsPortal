export interface State {
    email: string,
    roles: string[],
    accessToken: string
}

export interface User {
    users: State[];
    newUser: string;
}
