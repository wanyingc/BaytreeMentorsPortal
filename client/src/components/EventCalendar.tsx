import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/EventCalendar.css';

const EventCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="w-100">
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default EventCalendar;

// // cite: https://github.com/zackify/react-calendar

// import { format, startOfMonth } from 'date-fns';
// import * as React from 'react';
// import { useState } from 'react';
// import * as ReactDOM from 'react-dom';
// import { CalendarEventsData, EventType } from '../components/CalendarEventsData';
// import {
//   MonthlyCalendar,
//   MonthlyNav,
//   MonthlyBody,
//   DefaultMonthlyEventItem,
// } from '@zach.codes/react-calendar';
// import '@zach.codes/react-calendar/dist/calendar-tailwind.css';

// export const Calendar = () => {
//   let [currentMonth, setCurrentMonth] = useState<Date>(
//     startOfMonth(new Date())
//   );
//   let eventItems = CalendarEventsData[currentMonth.toISOString()];

//   return (
//     <MonthlyCalendar
//       currentMonth={currentMonth}
//       onCurrentMonthChange={date => setCurrentMonth(date)}
//     >
//       <MonthlyNav />
//       <MonthlyBody
//         events={eventItems}
//         renderDay={data =>
//           data.map((item, index) => (
//             <DefaultMonthlyEventItem
//               key={index}
//               title={item.title}
//               date={format(item.date, 'k:mm')}
//             />
//           ))
//         }
//       />
//     </MonthlyCalendar>
//   );
// };




// import React, { useState } from 'react';
// import '@zach.codes/react-calendar/dist/calendar-tailwind.css';
// import { format, subHours, startOfMonth } from 'date-fns';
// import {
//     MonthlyBody,
//     MonthlyDay,
//     WeeklyCalendar,
//     WeeklyContainer,
//     WeeklyDays,
//     WeeklyBody,
//     MonthlyNav,
//     DefaultMonthlyEventItem,
//     DefaultWeeklyEventItem
//     } from '@zach.codes/react-calendar';
// import { CalendarEventsData } from './CalendarEventsData';

// export const Calendar = () => {
//     let [currentMonth, setCurrentMonth] = useState<Date>(
//         startOfMonth(new Date())
//     );

//     return (
//         <WeeklyCalendar week={new Date()}>
//             <WeeklyContainer>
//                 <WeeklyDays />
//                 <WeeklyBody
//                     events={CalendarEventsData}
//                     renderItem={({ item, showingFullWeek }) => (
//                         <DefaultWeeklyEventItem
//                             key={item.date.toISOString()}
//                             title={item.title}
//                             date={
//                                 showingFullWeek
//                                 ? format(item.date, 'MMM do k:mm')
//                                 : format(item.date, 'k:mm')
//                             }
//                         />
//                     )}
//                 />
//             </WeeklyContainer>
//         </WeeklyCalendar>
//     );
// };