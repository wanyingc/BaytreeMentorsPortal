import { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import { StackedChartDataType } from '../../interfaces/DashboardInterfaces';

const options = {
    scales: {
        y: {
            stacked: true,
        },
        x: {
            stacked: true
        }
    },
    maintainAspectRatio:false
};

type StackedBarProps = {
    title: string;
    data: StackedChartDataType;
}

export const DashboardStackedBar:FC<StackedBarProps> = ({
    title,
    data
}) => {
    return (
        <>
            <div className="row text-light table-header-bg-blue rounded-pill px-3 fs-4">
                {title}
            </div>
            <div className="row bt-h-300">
                <Bar data={data} options={options} />
            </div>
        </>
    )
}
