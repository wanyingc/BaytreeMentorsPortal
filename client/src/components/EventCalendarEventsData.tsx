import {
    startOfMonth,
    addMonths,
    addHours,
    subHours,
    addDays,
    subDays,
  } from 'date-fns';

export type EventType = {
    title: string;
    date: Date;
};

export const CalendarEventsData: { [key: string]: EventType[] } = {
    firstMonth: [
        {
            title: 'Session 1', 
            date: new Date('October 10, 2021 13:24:00')
        },
        {
            title: 'Session 2', 
            date: new Date('October 12, 2021 13:24:00')
        },
        {
            title: 'Session 3', 
            date: new Date('October 13, 2021 13:24:00')
        },
        {
            title: 'Session 4', 
            date: new Date('October 14, 2021 13:24:00')
        },
    ],
    secondMonth: [
        {
            title: 'Session 4', 
            date: new Date('October 14, 2021 13:24:00')
        },
    ]
};