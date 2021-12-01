import { MenteesObject, goalsObject, notificationObject, DoughnutDataType, BarChartDataType } from "../../interfaces/DashboardInterfaces";

export const MyMentees: MenteesObject[] = [
    {
        name: "Mira Jane",
        dateOfBirth: "26-11-2000",
        age: "13+",
        dateStart: "4-9-2021",
        dateEnd: "30-8-2022",
        mentorRole: 'Women'
    },
    {
        name: "Oliva Lane",
        dateOfBirth: "3-4-2015",
        age: "under 9",
        dateStart: "4-9-2021",
        dateEnd: "30-8-2022",
        mentorRole: 'Youth'
    },
    {
        name: "Tina Hudson",
        dateOfBirth: "25-6-2010",
        age: "10 to 12",
        dateStart: "4-9-2021",
        dateEnd: "30-8-2022",
        mentorRole: 'Into School'
    }
]

export const goalsList: goalsObject[] = [
    {
      id: 1,
      mentee: 'Mira Jane',
      date: '2021-11-06',
      reviewDate: '2021-12-06',
      notes: 'Learn writing skills.',
      status: 'In Progress'
    },
    {
      id: 2,
      mentee: 'Oliva Lane',
      date: '2021-11-05',
      reviewDate: '2021-11-12',
      notes: 'Learn addition and subtraction.',
      status: 'In Progress'
    },
    {
      id: 3,
      mentee: 'Tina Hudson',
      date: '2021-11-04',
      reviewDate: '2021-12-01',
      notes: 'Improve grammar.',
      status: 'In Progress'
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

  export const doughnutChartData: DoughnutDataType = {
   labels: ['Completed', 'Incomplete'],
   datasets: [
       {
            label: 'Questionnaires',
            data: [10,2],
            backgroundColor: [
                'rgba(54, 162, 205, 0.5)',
                'rgba(255, 99, 132, 0.5)', 
            ],
            borderColor: [
                'rgba(54, 162, 205, 1)',
                'rgba(255, 99, 132, 1)', 
            ],
            borderWidth:0,
       },
   ],
}

export const barChartData: BarChartDataType = {
  labels: ['Sessions Completed', 'Sessions Missed', 'Upcoming Sessions'],
  datasets: [
      {
          label: 'Number of Sessions',
          data: [10, 2, 8],
          backgroundColor: ['rgba(255, 99, 132, 0.5)'],
          borderColor: ['rgba(255, 99, 132, 1)'],
          borderWidth: 0,
      },
  ],
  maintainAspectRatio:false
};