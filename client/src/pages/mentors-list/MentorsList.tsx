// cite: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html?selectedKind=Table%20Search&selectedStory=Search%20Hooks&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import React, { useEffect, useState } from 'react';
import getMentorList from './MentorsListData';
import { useHistory } from "react-router-dom";
import './mentorsList.css'

const columns = [
    {
        dataField: 'personID',
        text: 'Person ID',
        sort: true
    }, {
        dataField: 'firstName',
        text: 'First Name',
        sort: true
    }, {
        dataField: 'lastName',
        text: 'Last Name',
        sort: true
    }, {
        dataField: 'email',
        text: 'Email',
        sort: true
    }, {
        dataField: 'phone',
        text: 'Phone No.',
        sort: true
    }, {
        dataField: 'startDate',
        text: 'Start Date',
        sort: true
    }
];

const {SearchBar} = Search;

const paginationOptions = {
    onSizePerPageChange: (sizePerPage: any, page: any) => {
        console.log('Size per page change.');
        console.log('Newest size per page: ' + sizePerPage);
        console.log('Newest page: ' + page);
    }, 
    onPageChange: (page: any, sizePerPage: any) => {
        console.log('Page change!');
        console.log('Newest size per page ' + sizePerPage);
        console.log('Newest page: ' + page);
    }
};

type mentorDataType = {
    result: mentorListObjectType[];
}

type mentorListObjectType = {
    personID:number;
    firstName:string;
    lastName:string;
    email:string;
    phone:number|string;
    startDate:Date|string;
}

let sampleMentors: mentorListObjectType[] = [
    {
        personID: 0,
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        startDate: ""
    }
];

const MentorsList = () => {
    const [mentorData, setMentorData] = useState<mentorDataType>({ result: sampleMentors});
    const [mentors, setMentors] = useState<Object[]>([]);
    const [loading, setLoading] = useState(true);
    const history = useHistory();


    useEffect(() => {
        if(loading) {
            getMentorList().then(res => {
                setMentorData(res.data);        
                setMentors(mentorData.result);
            });
        }

        return () => { setLoading(false)};
    });

    var options ={
        onClick: function(e: any, row: any, rowIndex: any){
            history.push("/records/"+row.personID);
        }
    }

    return (
        <>
            <div className="container-fluid header-image-mentorsList">
            <div className="container p-2">
                <div className="row justify-content-center mt-5" style={{backgroundColor:'#FF1E89', width:'fit-content'}}>
                    <h5 className="page-title">Mentors List</h5>
                </div>    
            </div>
        </div>
            <div className="container">
                <h2>Mentors List</h2>
                <ToolkitProvider
                    keyField={columns[0].dataField}
                    data={mentors}
                    columns={columns}
                    search 
                >
                {
                    props => (
                        <React.Fragment>
                        <div>
                            <SearchBar { ...props.searchProps } />
                            <hr />
                            <BootstrapTable
                                bootstrap4
                                hover
                                pagination={paginationFactory(paginationOptions)}
                                rowEvents = {options}
                                { ...props.baseProps }
                            />
                        </div>
                        </React.Fragment>
                    )
                }
                </ToolkitProvider>
        </div>
      </>
    );
}

export default MentorsList;