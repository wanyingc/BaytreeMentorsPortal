import { LineChartDataProps } from "../../components/DashboardComponents/DashboardLineChart";
import { DoughnutDataType, PiChartDataType, StackedChartDataType, tableDataType } from "../../interfaces/DashboardInterfaces";

export const sampleDate = new Date('October 7, 2021 13:24:00');

//---------------------------- New Data -----------------------------------//
export function SessionsDoneStackedData(dataCount:number): StackedChartDataType {
  let months=['January', 'February', 'March', 'April', 'May','June', 'July', 'August', 'September', 'October', 'November', 'December']
  return {
    labels: months.slice(-dataCount, undefined),
    datasets: [
        {
            label: 'Youth Mentors',
            data: [10, 12, 19, 3, 5, 2, 3, 22, 11, 4, 8, 9].slice(-dataCount, undefined),
            backgroundColor: 'rgb(255, 99, 132)',
        },
        {
            label: 'Into School Mentors',
            data: [11, 2, 3, 20, 5, 1, 4, 0, 7, 7, 8, 10].slice(-dataCount, undefined),
            backgroundColor: 'rgb(54, 162, 235)',
        },
        {
            label: 'Women Mentors',
            data: [6, 2, 4, 6, 4, 2, 2, 4, 7, 5, 7, 7].slice(-dataCount, undefined),
            backgroundColor: 'rgb(75, 192, 192)',
        },
    ],
  }
};

export const UpcomingSessionsStackedData: DoughnutDataType = {
  labels: ["Youth Mentor", "Into School Mentor", "Women Mentor"],
  datasets: [
    {
      label: 'Upcoming Sessions',
      data: [11, 15, 12],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(255, 241, 201, 0.8)',
        'rgba(54, 162, 205, 0.8)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(255, 241, 201, 0.8)',
        'rgba(54, 162, 205, 0.8)',
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

export const PendingQuestionnairesPiChart: PiChartDataType = {
  labels: ["Youth Mentor", "Into School Mentor", "Women Mentor"],
  datasets: [
    {
      label: 'NonDeliveredTableData',
      data: [3, 5, 7],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(255, 241, 201, 0.8)',
        'rgba(54, 162, 205, 0.8)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(255, 241, 201, 0.8)',
        'rgba(54, 162, 205, 0.8)',
      ],
      borderWidth: 1,
    },
  ],
};

export const NonDeliveredPiChart: PiChartDataType = {
  labels: ["Youth Mentor", "Into School Mentor", "Women Mentor"],
  datasets: [
    {
      label: 'NonDeliveredTableData',
      data: [4, 5, 6],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 0,
    },
  ],
};

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