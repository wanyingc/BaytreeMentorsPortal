import React, { useState, useEffect } from 'react';
import { NonDeliveredPiChart, NonDeliveredTableData, PendingQuestionnairesPiChart, PendingTableData, SessionsDoneStackedData, UpcomingSessionsStackedData } from './DashboardDataAdmin';
import { columnsDashboardTable, mentorTypes} from './DashboardDatatypes';
import './Dashboard.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { DashboardStackedBar } from '../../components/DashboardComponents/DashboardStackedBar';
import DashboardDoughnut from '../../components/DashboardComponents/DashboardDoughnut';
import DashboardPieChart from '../../components/DashboardComponents/DashboardPieChart';
import DataTable from '../../components/DashboardComponents/DataTable';
import { ButtonGroup, Dropdown, DropdownButton, Spinner } from 'react-bootstrap';
import { getAccessToken } from '../../auth/Authenticator';
import axios from "axios";
import { BASE_API_URL } from '../../config/config';

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
    const [sessionMentorType, setSessionMentorType] = useState(undefined);
    const [questionnairesMentorType, setQuestionnairesMentorType] = useState(undefined);

    const [adminData, setAdminData] = useState<any>(undefined);

    useEffect(() => {
      getAdminData();
    }, []);
  
    const getAdminData= ()=>{
      let accessToken = getAccessToken();
      axios.get(
        `${BASE_API_URL}/auth/admindata`, 
        {
          headers: {
            "X-access-token": accessToken
          }
        }).then((d:any) => {
            console.log(d.data);
          setAdminData(d.data.data);
      });
    }
    
    const handleSelect=(e)=>{
        setMonthCount(e);
    }

    const handleOnElementClick = (type)  => {
        if (sessionMentorType == type) {
            //brings all data to inital state
            setSessionMentorType(undefined);
        } else {
            setSessionMentorType(type);
        }
    }

    const handleOnElementClick2 = (type)  => {
        if (questionnairesMentorType == type) {
            //brings all data to inital state
            setQuestionnairesMentorType(undefined);

        } else {
        setQuestionnairesMentorType(type);
        }
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
        <>
            {adminData == undefined &&
                <div className = "loading">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                </div>
            } 
            {adminData != undefined &&
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
                                    title="Sessions Completed" data={SessionsDoneStackedData(monthCount, adminData)}
                                />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4">
                            <div className="container h-100">
                                <DashboardDoughnut 
                                    title="Upcoming Sessions"
                                    height={isMobile? 250 :350}
                                    data={UpcomingSessionsStackedData(adminData)}
                                />
                            </div>                            
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-sm-6 mb-4">
                            <div className="container h-100">
                                <DashboardPieChart
                                    title="Pending Questionnaires"
                                    height={isMobile? 250 :350}
                                    data={PendingQuestionnairesPiChart(adminData)}
                                    onElementClick={handleOnElementClick2}
                                />
                            </div>  
                        </div>
                        <div className="col-md-6 col-sm-6 mb-4">
                            <div className="container h-100">
                                <DashboardPieChart
                                    title="Non-delivered sessions"
                                    height={isMobile? 250 :350}
                                    data={NonDeliveredPiChart}
                                    onElementClick={handleOnElementClick}
                                />
                            </div>                            
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 mb-4">
                            <div className={`px-3`}>
                                <div className=""> 
                                    <DataTable 
                                    data={PendingTableData.filter(item => questionnairesMentorType == undefined ? true : item.mentorRole == questionnairesMentorType)}
                                    columns={columnsDashboardTable} />
                                </div>
                            </div>                           
                        </div>
                        <div className="col-md-6">
                            <div className={`px-3`}>
                                <div className="">
                                    <DataTable 
                                        data={NonDeliveredTableData.filter(item => sessionMentorType == undefined ? true : item.mentorRole == sessionMentorType) } 
                                        columns={columnsDashboardTable} />           
                                </div>
                            </div>
                        </div>
                    </div>           
                </div>

            } 
            
        </>
    )
}
