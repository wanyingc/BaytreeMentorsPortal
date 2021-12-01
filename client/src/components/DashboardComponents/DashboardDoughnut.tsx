// cite: based on examples from 'react-chartjs-2'
import React, { FC } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { DoughnutDataType } from '../../interfaces/DashboardInterfaces';

const options = {
  maintainAspectRatio:false
};

type DoughnutProp = {
    title?: string;
    height?: number;
    width?: number;
    data: DoughnutDataType;
}

const DashboardDoughnut: FC<DoughnutProp> = ({
    title,
    height,
    width,
    data
}) => (
  <div className="">
    <div className="row text-light table-header-bg-blue rounded-pill px-3 fs-4">
      {title}
    </div>
    <div className="row">
      <div className="container justify-content-center">
        <Doughnut 
          data={data}
          options={options}
          height={height}
          width={width}
        />
      </div>
    </div>
  </div>
);

export default DashboardDoughnut;