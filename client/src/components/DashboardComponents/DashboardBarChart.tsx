// cite: based on examples from 'react-chartjs-2'
import { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import { BarChartDataType } from '../../interfaces/DashboardInterfaces';

const options = {
    maintainAspectRatio:false
  };

type BarChartProps = {
    title?: string;
    data: BarChartDataType;
}

export const DashboardBarChart:FC<BarChartProps> = ({
    title,
    data
}) => {
    return (
        <>
            <div className="row text-light table-header-bg-blue rounded-pill px-3 fs-4">
                {title}
            </div>
            <div className="row bt-h-300">
                <Bar 
                    data={data} 
                    options={options}
                />
            </div>
        </>
    )
}