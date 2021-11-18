import React, { useState, useEffect } from 'react';
import { NonDeliveredTableData, PendingTableData, SessionsDoneStackedData, UpcomingSessionsStackedData } from './DashboardDataAdmin';
import { columnsDashboardTable, mentorTypes} from './DashboardDatatypes';
import './Dashboard.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { DashboardStackedBar } from '../../components/DashboardComponents/DashboardStackedBar';
import DashboardDoughnut from '../../components/DashboardComponents/DashboardDoughnut';
import DataTable from '../../components/DashboardComponents/DataTable';
import { ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';

function getScreenSize () {
    if(window.innerWidth < 768) {
        return true;
    } else {
        return false;
    }
}

export default function DashboardAdmin() {
    const [isMobile, setIsMobile] = useState(getScreenSize);
    const [monthCount, setMonthCount] = useState(6);
    const handleSelect=(e)=>{
        setMonthCount(e);
    }

    const manageResize = () => {
        setIsMobile(getScreenSize);
    }

    useEffect(() => {
        window.addEventListener("resize", manageResize);
        return () => {
            window.removeEventListener("resize", manageResize)
        }
    }, [isMobile]);

    return (
        <div className="container p-2 mt-5">
            <div className="row">
                <div className="col-md-6 col-sm-12 mb-4">
                    <h5 className="fs-3">Welcome, <strong>Admin</strong>!</h5>
                </div>
                <div  id={"date-dropdown"} className="col-md-6 col-sm-12 mb-4">
                    <DropdownButton
                        as={ButtonGroup}
                        variant={"warning"}
                        title={"Last " + monthCount + " Months"}
                        onSelect={handleSelect}
                    >
                        <Dropdown.Item eventKey="3" active={monthCount==3}>3 months</Dropdown.Item>
                        <Dropdown.Item eventKey="6" active={monthCount==6}>6 months</Dropdown.Item>
                        <Dropdown.Item eventKey="9" active={monthCount==9}>9 months</Dropdown.Item>
                        <Dropdown.Item eventKey="12"active={monthCount==12}>12 months</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-8 col-sm-12 mb-4">
                    <div className="container h-100 bt-h-300">
                        <DashboardStackedBar
                            title="Sessions Completed" data={SessionsDoneStackedData(monthCount)}
                        />
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 mb-4">
                    <div className="container h-100">
                        <DashboardDoughnut 
                            title="Upcoming Sessions: 38"
                            height={isMobile? 250 :350}
                            data={UpcomingSessionsStackedData}
                        />
                    </div>                            
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6 mb-4">
                    <div className={`px-3`}>
                        <div className="row text-light table-header-bg-blue rounded-pill px-3 fs-4">
                            Pending Questionnaires: 6
                        </div>
                        <div className=""> 
                            <DataTable data={PendingTableData} columns={columnsDashboardTable} />
                        </div>
                    </div>                           
                </div>
                <div className="col-md-6">
                    <div className={`px-3`}>
                        <div className="row text-light table-header-bg-blue rounded-pill px-3 fs-4">
                            Non-delivered Sessions: 3
                        </div>
                        <div className="">
                            <DataTable data={NonDeliveredTableData} columns={columnsDashboardTable} />           
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    )
}
