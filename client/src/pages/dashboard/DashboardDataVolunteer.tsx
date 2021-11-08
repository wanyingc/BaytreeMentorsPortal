import { MenteesObject, goalsObject, notificationObject } from "../../interfaces/DashboardInterfaces";

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

export const goalsList: goalsObject[] = [
    {
      id: 1,
      mentee: 'Mira Jane',
      date: '2021-11-06',
      notes: 'Learn writing skills.'
    },
    {
      id: 2,
      mentee: 'Oliva Lane',
      date: '2021-11-05',
      notes: 'Learn addition and subtraction.'
    },
    {
      id: 3,
      mentee: 'Tina Hudson',
      date: '2021-11-04',
      notes: 'Improve grammar.'
    },  
  ]

  export const notificationsList: notificationObject[] = [
    {
      title:  'Monthly Questionaire',
      date: '8-9-2021',
      time: '09:13 AM',
      message: 'Hi Mentors, this is a reminder that the monthly questionaire is available.'
    },
    {
        title:  'Report Attendance',
        date: '8-9-2021',
        time: '12:00 PM',
        message: 'Hello, could you report attendance from last week session please.'
    },
  ];