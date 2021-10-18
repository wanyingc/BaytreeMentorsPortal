import { LineChartDataProps } from "../../components/DashboardLineChart";
import { UserObject } from "../../interfaces/DashboardInterfaces";

export const sampleDate = new Date('October 7, 2021 13:24:00');

export const dataUsers: UserObject[] = [
    {
        name: "Saqib",
        lastSession: "02-10-2021",
        attendence: "Yes"
    },
    {
        name: "q",
        lastSession: "02-10-2021",
        attendence: "Yes"
    },
    {
        name: "b",
        lastSession: "01-10-2021",
        attendence: "Yes"
    },
    {
        name: "r",
        lastSession: "06-10-2021",
        attendence: "Yes"
    },
    {
        name: "t",
        lastSession: "07-10-2021",
        attendence: "No"
    },
];

export const dataRecentSessions = [
    {
        title: "YS Session 1",
        mentor: "Saqib",
        date: sampleDate.getDate() + "-" + sampleDate.getMonth() + "-" + sampleDate.getFullYear()
    },
    {
        title: "Into School Session 3",
        mentor: "Hasib",
        date: 'October 9, 2021 13:24:00'
    },
    {
        title: "YS Session 2",
        mentor: "Anon",
        date: 'October 10, 2021 13:24:00'
    }
];
export const dataUpcomingSessions = [
    {
        title: "YS Session 1",
        mentor: "Saqib",
        date: sampleDate.getDate() + "-" + sampleDate.getMonth() + "-" + sampleDate.getFullYear()
    },
    {
        title: "Into School Session 3",
        mentor: "Hasib",
        date: 'October 9, 2021 13:24:00'
    },
    {
        title: "YS Session 2",
        mentor: "Anon",
        date: 'October 10, 2021 13:24:00'
    }
];

export const LineChartData: LineChartDataProps = {
    labels: ["January", "February", "March", "April"],
    datasets: [
      {
        label: 'Unique Attendence',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
      {
        label: 'Aggregate',
        data: [12, 31, 34, 39, 41, 44],
        backgroundColor: [
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 159, 2, 70)',
        ],
        borderWidth: 1,
      },
    ],
  };