export type UserObject = {
    name: string,
    lastSession: string,
    attendence: string
};

export type MenteesObject ={
    name: string;
    dateOfBirth: string;
    age: number|string;
    dateStart: Date|string;
    dateEnd: Date|string;
}

export type goalsObject = {
    id: number;
    mentee: string;
    date: string;
    notes: string;
}

export type notificationObject = {
    title: string;
    date: Date|string;
    time: string;
    message: string;
}