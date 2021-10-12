// cite: based on examples from 'react-chartjs-2'
import React, { FC } from 'react';
import { Doughnut } from 'react-chartjs-2';

type DoughnutProp = {
    title: string;
    height?: number;
}

const data = {
  labels: ["Attended Sessions", "Planned Sessions"],
  datasets: [
    {
      label: 'Planned and Attended Sessions',
      data: [71, 75],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 0,
    },
  ],
};

const DashboardDoughnut: FC<DoughnutProp> = ({
    title,
    height
}) => (
  <div className="">
    <div className="row text-light table-header-bg-blue rounded-pill px-3 fs-4">
      {title}
    </div>
    <div className="row">
      <div className="container justify-content-center">
        <Doughnut 
          data={data}
          height={height}
        />
      </div>
    </div>
  </div>
);

export default DashboardDoughnut;