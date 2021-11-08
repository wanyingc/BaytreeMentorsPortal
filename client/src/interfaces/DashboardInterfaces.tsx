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

export type StackedChartDataType = {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string;
    }[];
};