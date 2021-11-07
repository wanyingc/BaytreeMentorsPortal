export type UserObject = {
    name: string,
    lastSession: string,
    attendence: string
};

export type SessionObject = {
    title: string;
    person: string;
    date: string;
};

export type MenteesObject ={
    name: string;
    dateOfBirth: Date|string;
    age: number|string;
    dateStart: Date|string;
    dateEnd: Date|string;
}