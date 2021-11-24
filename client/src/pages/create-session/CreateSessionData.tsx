import { SessionObject } from "../../interfaces/CreateSessionInterfaces";

export const mentees = [
    {
        id: 1,
        name: 'Mentee 1',
    },
    {
        id: 2,
        name: 'Mentee 2',
    },
    {
        id: 3,
        name: 'Mentee 3',
    },
  ];

export const radiosAttended = [
    { name: 'Attended', value: '1' },
    { name: 'Did not Attend', value: '2' },
];

export const sessionHistory: SessionObject[] = [
    {
      id: 1,
      mentee: 'Mentee 1',
      date: '2021-11-06',
      start: '3:00PM',
      end: '4:00PM',
      notes: 'Worked hard on math'
    },
    {
      id: 2,
      mentee: 'Mentee 2',
      date: '2021-11-05',
      start: '2:00PM',
      end: '3:00PM',
      notes: 'Worked hard on english'
    },
    {
      id: 3,
      mentee: 'Mentee 3',
      date: '2021-11-04',
      start: '1:00PM',
      end: '2:00PM',
      notes: 'Worked hard on cooking'
    },  
  ];