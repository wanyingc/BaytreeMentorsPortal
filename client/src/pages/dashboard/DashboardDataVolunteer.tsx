import { SessionObject, UserObject, MenteesObject } from "../../interfaces/DashboardInterfaces";

export const dataMentees: UserObject[] = [
    {
        name: "Mentee1",
        lastSession: "01-23-2021",
        attendence: "Yes"
    },
    {
        name: "Mentee2",
        lastSession: "02-04-2021",
        attendence: "no"
    },
    {
        name: "Mentee3",
        lastSession: "03-25-2021",
        attendence: "no"
    }
];

export const RecentSessions: SessionObject[] = [
    {
        title: "Session 1",
        person: "Mentee1",
        date: "01-23-2021"
    },
    {
        title: "Session 2",
        person: "Mentee1",
        date: "02-04-2021"
    },
    {
        title: "Session 1",
        person: "Mentee3",
        date: "03-25-2021"
    },
    {
        title: "Session 1",
        person: "Mentee2",
        date: "04-05-2021"
    },
    {
        title: "Session 2",
        person: "Mentee3",
        date: "05-30-2021"
    },

];

export const UpcomingSessions: SessionObject[] = [
    {
        title: "Session 3",
        person: "Mentee1",
        date: "01-23-2021"
    },
    {
        title: "Session 2",
        person: "Mentee2",
        date: "02-04-2021"
    },
    {
        title: "Session 4",
        person: "Mentee1",
        date: "03-25-2021"
    },
    {
        title: "Session 3",
        person: "Mentee2",
        date: "04-05-2021"
    },
    {
        title: "Session 3",
        person: "Mentee3",
        date: "05-30-2021"
    },
]

export const OverdueSubmissions: SessionObject[] = [
    {
        title: "Session 1: Session Report",
        person: "Mentee3",
        date: "03-25-2021"
    },
    {
        title: "Session 1: Session Report",
        person: "Mentee1",
        date: "01-23-2021"
    },
    {
        title: "Session 2: Monthly Questionaire",
        person: "Mentee3",
        date: "05-30-2021"
    },
    {
        title: "Session 3: Session Report",
        person: "MenteeX",
        date: "11-30-2020"
    },
]

export const MyMentees: MenteesObject[] = [
    {
        name: "Mira Jane",
        dateOfBirth: "26-11-2000",
        age: "13+",
        dateStart: "4-9-2021",
        dateEnd: "30-8-2022"
    },
    {
        name: "Oliva Lane",
        dateOfBirth: "3-4-2015",
        age: "under 9",
        dateStart: "4-9-2021",
        dateEnd: "30-8-2022"
    },
    {
        name: "Tina Hudson",
        dateOfBirth: "25-6-2010",
        age: "10 to 12",
        dateStart: "4-9-2021",
        dateEnd: "30-8-2022"
    }
]