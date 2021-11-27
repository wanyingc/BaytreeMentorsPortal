// cite: based on examples from 'react-chartjs-2'
import React, { MouseEvent, FC, useRef } from 'react';
import { Pie, getDatasetAtEvent, 
  getElementAtEvent,
  getElementsAtEvent,
  Chart} from 'react-chartjs-2';
import type { InteractionItem } from 'chart.js';
import {
  ArcElement,LineController, BarElement, LineElement, PointElement, LinearScale, Title,
  CategoryScale,
  Chart as ChartJS, 
  Legend,
  Tooltip,
} from 'chart.js';
import { DoughnutDataType } from '../../interfaces/DashboardInterfaces';

ChartJS.register(ArcElement, 
  Legend,
  Tooltip, CategoryScale, BarElement, LineController, LineElement, PointElement, LinearScale, Title);

type DoughnutProp = {
    title: string;
    height?: number;
    data: DoughnutDataType;
    onElementClick?: any;
}

const DashboardDoughnut: FC<DoughnutProp> = ({
    title,
    height,
    data,
    onElementClick
}) => {
  
  const chartRef = useRef<ChartJS>(null);

  const onClick = (event: MouseEvent<HTMLCanvasElement>) => {
    const { current: chart } = chartRef;
  
    if (!chart) {
      return;
    }
  
    const dataSet = getElementAtEvent(chart, event);
    if (dataSet == undefined || dataSet.length == 0){
      // chartjs doesn't return valid element
      return;
    }

    const { datasetIndex, index } = dataSet[0];
    
    if(onElementClick){
      onElementClick(data.labels[index])
    }
  };

  return (
    <div className="">
      <div className="row text-light table-header-bg-blue rounded-pill px-3 fs-4">
        {title}
      </div>
      <div className="row">
        <div className="container justify-content-center"  style = {{padding:"48px"}}>
          <Chart
            type='pie' 
            ref={chartRef}
            data={data}
            height={height}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  )};

export default DashboardDoughnut;