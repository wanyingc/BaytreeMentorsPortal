import { BubbleDataPoint, ScatterDataPoint } from 'chart.js';
import React, { FC } from 'react';
import Chart from "chart.js";


type DataProps = {
    chartData: number[];
    HeaderComp?: React.ReactNode,
    theaders?: string[],
}

const DashboardGraph: FC<DataProps> = ({
    chartData,
    HeaderComp,
    theaders,
    children
}) => {
    return (
        <div>
            <div className='header'>
                <h5 className='title'>Line Chart</h5>
            </div>
        </div>
    )
}

export default DashboardGraph;