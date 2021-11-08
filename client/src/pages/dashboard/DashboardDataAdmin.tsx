import { LineChartDataProps } from "../../components/DashboardComponents/DashboardLineChart";
import { DoughnutDataType, StackedChartDataType, tableDataType } from "../../interfaces/DashboardInterfaces";

export const sampleDate = new Date('October 7, 2021 13:24:00');

//---------------------------- New Data -----------------------------------//
export const SessionsDoneStackedData: StackedChartDataType = {
  labels: ['June', 'July', 'August', 'September', 'October', 'November'],
  datasets: [
      {
          label: 'Youth Mentors',
          data: [10, 12, 19, 3, 5, 2, 3],
          backgroundColor: 'rgb(255, 99, 132)',
      },
      {
          label: 'Into School Mentors',
          data: [11, 2, 3, 20, 5, 1, 4],
          backgroundColor: 'rgb(54, 162, 235)',
      },
      {
          label: 'Women Mentors',
          data: [4, 3, 10, 13, 15, 22, 30],
          backgroundColor: 'rgb(75, 192, 192)',
      },
  ],
};

export const SessionsLeftStackedData: DoughnutDataType = {
  labels: ["Youth Mentor", "Into School Mentor", "Women Mentor"],
  datasets: [
    {
      label: 'Sessions Left',
      data: [11, 15, 12],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(209, 214, 159, 0.5)',
        'rgba(54, 162, 205, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 205, 1)',
      ],
      borderWidth: 0,
    },
  ],
};

export const PendingTableData: tableDataType[] = [
  {
    mentorName: "Natasha", 
    sessionDate: "10-12-2021", 
    mentorRole: "Youth Mentor",
  },
  {
    mentorName: "Jane", 
    sessionDate: "10-12-2021", 
    mentorRole: "Women Mentor",
  },
  {
    mentorName: "Maria", 
    sessionDate: "10-12-2021", 
    mentorRole: "Youth Mentor",
  },
  {
    mentorName: "Lily", 
    sessionDate: "10-12-2021", 
    mentorRole: "Into School Mentor",
  },
  {
    mentorName: "Joanna", 
    sessionDate: "10-12-2021", 
    mentorRole: "Women Mentor",
  },
  {
    mentorName: "Janet", 
    sessionDate: "10-12-2021", 
    mentorRole: "Youth Mentor",
  },
];

export const NonDeliveredTableData: tableDataType[] = [
  {
    mentorName: "Joanna", 
    sessionDate: "10-12-2021", 
    mentorRole: "Women Mentor",
  },
  {
    mentorName: "Janet", 
    sessionDate: "10-12-2021", 
    mentorRole: "Youth Mentor",
  },
  {
    mentorName: "Natasha", 
    sessionDate: "10-12-2021", 
    mentorRole: "Youth Mentor",
  },
];

//------------------------------------------------------------------------//

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