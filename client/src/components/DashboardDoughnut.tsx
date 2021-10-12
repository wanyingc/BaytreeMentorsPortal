// cite: based on examples from 'react-chartjs-2'
import React, { FC } from 'react';
import { Doughnut } from 'react-chartjs-2';

type DoughnutProp = {
    title: string;
}

const data = {
  labels: ["Planned Sessions", "Attended Sessions"],
  datasets: [
    {
      label: '# of Votes',
      data: [75, 71],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const DashboardDoughnut: FC<DoughnutProp> = ({
    title
}) => (
  <>
    <h5>{title}</h5>
    <Doughnut 
        data={data}
        width={20}
	    height={10}
    />
  </>
);

export default DashboardDoughnut;