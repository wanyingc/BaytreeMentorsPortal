export type UserObject = {
    name: string,
    lastSession: string,
    attendence: string
};

export type SessionObject = {
    title: string;
    person: string;
    date: string;
};

//------------- New Data-types -------------//

export type tableDataType = {
    mentorName: string,
    sessionDate: string,
    mentorRole: string
};

export type StackedChartDataType = {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string;
    }[];
};

export type DoughnutDataType = {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
      borderColor: string[];
      borderWidth: number;
    }[];
  }