// cite: based on examples from 'react-chartjs-2'
import React, { FC, useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

type LineChartProps = {
    title: string;
}

type LineDatasetsProp = {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
}

type LineChartDataProps = {
    labels: string[];
    datasets: LineDatasetsProp[];
}



const DashboardLineChart: FC<LineChartProps> = ({
    title
}) => {
    const retrievedData = {
      labels: ["January", "February", "March", "April"],
      datasets: [
        {
          label: 'Unique Attendence',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
          ],
          borderWidth: 1,
        },
        {
          label: 'Aggregate',
          data: [12, 31, 34, 39, 41, 44],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 159, 2, 70)',
          ],
          borderWidth: 1,
        },
      ],
    };
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
        <div className="">
            <h5>{title}</h5>
            <Line 
                data={retrievedData}
                height={150}
            />
        </div>
    );
};

export default DashboardLineChart;

// import React, { FC, useRef, useEffect, useState } from 'react';
// import { Chart, ChartType, registerables } from "chart.js";
// Chart.register(...registerables);

// let lineChartType: ChartType = "line";

// type DataProps = {
//     chartData1: number[];
//     chartData2?: number[];
//     title?: string;
//     HeaderComp?: React.ReactNode,
// };

// const MONTH_COUNT = 12;
// const NUMBER_CONFIG = { count: MONTH_COUNT, min: 0, max: 100 };

// const DashboardLineChart: FC<DataProps> = ({
//     chartData1,
//     chartData2,
//     title,
//     HeaderComp,
//     children
// }) => {
//     const labels = ["Jan", "Feb", "Mar", "Apr"];
//     const data = {
//         labels: labels,
//         datasets: [
//             {
//                 label: 'Dataset 1',
//                 data: chartData1,
//                 borderColor: "#bbbbbb",
//                 backgroundColor: "#bbfc12",
//                 stack: 'combined'
//               },
//               {
//                 label: 'Dataset 2',
//                 data: chartData2,
//                 borderColor: "#222222",
//                 backgroundColor: "#111111",
//                 stack: 'combined'
//               }
//         ]
//     };

//     const chartRef = useRef<Chart | null>(null);

//     const canvasCallback = (canvas: HTMLCanvasElement | null) => {
//         if (!canvas) return;
//         const ctx = canvas.getContext("2d");
//         if (ctx) {
//           const lineChart = new Chart(ctx, {
//             type: "line" as ChartType,
//             data: data,
//             options: {
//                 plugins: {
//                     title: {
//                         display: true,
//                         text: 'Chart.js Stacked Line/Bar Chart'
//                     }
//                     },
//                     scales: {
//                     y: {
//                         stacked: true
//                     }
//                 }
//             },
//           });
//         }
//       };
//     return (
//         <div>
//             <div className='header'>
//                 <h5 className='title my-0 py-2 px-3'>{title}</h5>
//             </div>
//             <canvas ref={canvasCallback}></canvas>
//         </div>
//     )
// }

// export default DashboardLineChart;