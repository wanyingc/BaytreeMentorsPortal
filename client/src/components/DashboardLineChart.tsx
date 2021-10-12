// cite: based on examples from 'react-chartjs-2'
import React, { FC, useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { LineChartData } from '../pages/dashboard/DashboardData';
import '../styles/DashboardLineChart.css';

type LineChartProps = {
    title: string;
    height?: number;
}

type LineDatasetsProp = {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
}

export type LineChartDataProps = {
    labels: string[];
    datasets: LineDatasetsProp[];
}



const DashboardLineChart: FC<LineChartProps> = ({
    title,
    height
}) => {
    const retrievedData = LineChartData;
    const [data, setData] = useState<LineChartDataProps>({
        labels: [""],
        datasets: []
    });

    useEffect(() => {
        // setData(retrievedData);
        return () => {
        }
    }, [data])

    return(
      <>
        <div className="row text-light table-header-bg-blue rounded-pill px-3 fs-4">
            {title}
        </div>
        <div className="row bt-h-300">
            <Line 
                data={retrievedData}
                height={height}
                options={{ maintainAspectRatio: false }}
            />
        </div>
      </>
    );
};

export default DashboardLineChart;