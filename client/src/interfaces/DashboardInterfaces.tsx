export type UserObject = {
    name: string,
    lastSession: string,
    attendence: string
};

export type MenteesObject ={
    name: string;
    dateOfBirth: string;
    age: number|string;
    dateStart: Date|string;
    dateEnd: Date|string;
}

export type goalsObject = {
    id: number;
    mentee: string;
    date: string;
    notes: string;
};

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
};

export type notificationObject = {
    title: string;
    date: Date|string;
    time: string;
    message: string;
};

export type BarChartDataType = {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string[];
        borderColor: string[];
        borderWidth: number;
    }[];
    maintainAspectRatio: boolean;
};