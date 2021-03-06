import axios from "axios";
import { getAccessToken, getPersonID } from "../../auth/Authenticator";
import { BASE_API_URL } from "../../config/config";
import { MenteesObject, notificationObject, DoughnutDataType, BarChartDataType } from "../../interfaces/DashboardInterfaces";

export const getSessionStats = async () => {
  let accessToken = getAccessToken();
  let personID = getPersonID();
  const resp =  await axios.post(`${BASE_API_URL}/auth/mentor/mentorhome`,
    {
      personID: personID
    },
    {
        headers: {
            "X-access-token": accessToken
        }
    }
  ).then(resp => {
    return resp;
  }).catch(error => {
    return error.response;
  });
  
  return resp;
}

export const getQuestionnairesStats = async () => {
  let accessToken = getAccessToken();
  let personID = getPersonID();
  const resp =  await axios.post(`${BASE_API_URL}/auth/mentor/mentorhome`,
    {
      personID: personID
    },
    {
        headers: {
            "X-access-token": accessToken
        }
    }
  ).then(resp => {
    return resp;
  }).catch(error => {
    return error.response;
  });
  
  return resp;
}

export const getActiveGoalsList = async () => {
  let accessToken = getAccessToken();  
  let personID = getPersonID();
  const resp = await axios.post(`${BASE_API_URL}/auth/mentor/goalListActive`,
      {
        "mentorID": personID
      },
      {
          headers: {
          "x-access-token": accessToken
      }
  })
  .then((resp:any) => {
      return resp;
  })
  .catch((err) => {
    return err.response;
  });   
  return resp;
}

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

  export const doughnutChartData = (questionnaireIncompleted, questionnaireCompleted) : DoughnutDataType => {
    return{
      labels: ['Completed', 'Incomplete'],
      datasets: [
          {
               label: 'Questionnaires',
               data: [questionnaireCompleted,questionnaireIncompleted],
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
    };
}

export const barChartData = (attendedSession, missedSession, upcomingSession): BarChartDataType => {
  return {
    labels: ['Sessions Completed', 'Sessions Cancelled', 'Upcoming Sessions'],
    datasets: [
        {
            label: 'Number of Sessions',
            data: [attendedSession, missedSession, upcomingSession],
            backgroundColor: ['rgba(255, 99, 132, 0.5)'],
            borderColor: ['rgba(255, 99, 132, 1)'],
            borderWidth: 0,
        },
    ],
    maintainAspectRatio:false
  };
}
