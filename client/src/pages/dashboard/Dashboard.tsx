import React from 'react'
import DashboardGraph from '../../components/DashboardGraph';
import DashboardListBlock from '../../components/DashboardListBlock'
import { Users } from './DashboardData'

export type UserObject = {
    name: string,
    lastSession: string,
    attendence: string
};

const tableHeaders = [ "Name", "Last Session", "Attendence"]

export default function Dashboard() {

    const chartData: number[] = [5, 3, 9, 12, 2, 3];

    const renderTableDetail = Users.map((row) => {
        return(
            <tr>
                <td>{row.name}</td>
                <td>{row.attendence}</td>
                <td>{row.lastSession}</td>
            </tr>
        );
    })

    return (
        <div className="container p-2 mt-5">
            <div className="row">
                <h5>Welcome <strong>Saqib</strong></h5>

            </div>
            <div className="row justify-content-center">
                <div className="col-xl-9 col-md-9 mb-4">
                    <div className="row justify-content-center mb-4">
                        <div className="col-xl-6">
                            <DashboardListBlock
                                HeaderComp={<div className="card-header fs-5">
                                        top left
                                    </div>}
                                theaders={tableHeaders}
                            >
                                {renderTableDetail}
                            </DashboardListBlock>
                        </div>
                        <div className="col-xl-6">
                            <DashboardListBlock
                                HeaderComp={<div className="card-header fs-5">
                                        top right
                                    </div>}
                                theaders={tableHeaders}
                            >
                                {renderTableDetail}
                            </DashboardListBlock>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <DashboardListBlock
                                HeaderComp={<div className="card-header fs-5">
                                        bottom left
                                    </div>}
                                theaders={tableHeaders}
                            >
                                {renderTableDetail}
                            </DashboardListBlock>
                        </div>
                        <div className="col-xl-6">
                            <DashboardListBlock
                                HeaderComp={<div className="card-header fs-5">
                                        bottom right
                                    </div>}
                                theaders={tableHeaders}
                            >
                                {renderTableDetail}
                            </DashboardListBlock>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-3 mb-4 align-self-center">
                    <DashboardListBlock
                        HeaderComp={<div className="card-header fs-5">
                                right
                            </div>}
                        theaders={tableHeaders}
                    >
                        {renderTableDetail}
                    </DashboardListBlock>
                </div>
            </div>
            
            {/* <div className="col-xl-3 col-md-6 mb-4">
                    <DashboardGraph
                        chartData={chartData}
                        HeaderComp={<div className="card-header fs-5 btn-bg-color-primary text-white">
                                Volunteer
                                <br/>
                                <h6>lsjf</h6>
                            </div>}
                        theaders={tableHeaders}
                    >
                        {renderTableDetail}
                    </DashboardGraph>
                </div>*/}
            
        </div>
    )
}
